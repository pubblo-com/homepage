const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Input sanitization helper
function sanitizeString(str) {
  if (typeof str !== 'string') return str;
  // Remove any potential MongoDB operators and dangerous characters
  return str
    .replace(/[${}]/g, '') // Remove MongoDB operators
    .trim()
    .slice(0, 5000); // Limit length
}

// Validate and sanitize input data
function validateAndSanitizeContactData(data) {
  const errors = [];
  
  // Validate required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  // Sanitize all string fields
  const sanitized = {
    type: data.type,
    name: sanitizeString(data.name),
    email: sanitizeString(data.email).toLowerCase(),
    submittedAt: new Date()
  };
  
  // Optional fields
  if (data.company) sanitized.company = sanitizeString(data.company);
  if (data.message) sanitized.message = sanitizeString(data.message);
  if (data.phone) sanitized.phone = sanitizeString(data.phone);
  if (data.address) sanitized.address = sanitizeString(data.address);
  if (data.role) sanitized.role = sanitizeString(data.role);
  if (data.areas && Array.isArray(data.areas)) {
    sanitized.areas = data.areas.map(area => sanitizeString(area)).slice(0, 20);
  }
  
  return { valid: true, data: sanitized };
}

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
let Contact = null;
let isMongoConnected = false;

console.log('🔧 Initializing MongoDB connection...');
console.log(`📍 MONGODB_URI ${MONGODB_URI ? 'is set' : 'is NOT set'}`);

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
    .then(() => {
      console.log('✅ MongoDB connection established successfully');
      console.log(`📦 Database: ${mongoose.connection.name}`);
      isMongoConnected = true;
      
      // MongoDB Schema
      const contactSchema = new mongoose.Schema({
        type: { type: String, required: true }, // 'contact', 'spielpitch', 'homepage'
        name: { type: String, required: true },
        email: { type: String, required: true },
        company: String,
        message: String,
        phone: String,
        address: String,
        areas: [String],
        role: String, // for spielpitch: 'creator' or 'publisher'
        submittedAt: { type: Date, default: Date.now }
      });
      
      Contact = mongoose.model('Contact', contactSchema);
      console.log('✅ Contact model registered');
    })
    .catch(err => {
      console.error('❌ MongoDB connection failed');
      console.error('Error details:', err.message);
      console.error('Error name:', err.name);
      isMongoConnected = false;
    });
} else {
  console.warn('⚠️  MONGODB_URI not set - database features disabled');
}

// Email Configuration
console.log('📧 Initializing SMTP configuration...');
console.log(`📍 SMTP_HOST: ${process.env.SMTP_HOST || 'NOT SET'}`);
console.log(`📍 SMTP_USERNAME: ${process.env.SMTP_USERNAME ? '***@' + process.env.SMTP_USERNAME.split('@')[1] : 'NOT SET'}`);
console.log(`📍 SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? '***' : 'NOT SET'}`);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

// Verify SMTP connection on startup
if (process.env.SMTP_HOST && process.env.SMTP_USERNAME && process.env.SMTP_PASSWORD) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP connection verification failed:', error.message);
    } else {
      console.log('✅ SMTP server is ready to send emails');
    }
  });
} else {
  console.warn('⚠️  SMTP credentials incomplete - email features may not work');
}

// Email Templates
function getNotificationEmail(data) {
  let subject = '';
  let html = '';

  if (data.type === 'contact') {
    subject = `New Contact Form Submission from ${data.name}`;
    html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <hr>
      <p><small>Submitted at: ${new Date(data.submittedAt).toLocaleString('sv-SE')}</small></p>
    `;
  } else if (data.type === 'spielpitch') {
    subject = `New Spiel Pitch Registration - ${data.role}`;
    html = `
      <h2>New Spiel Pitch Competition Registration</h2>
      <p><strong>Role:</strong> ${data.role === 'creator' ? 'Game Designer' : 'Publisher/Distributor'}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <hr>
      <p><small>Submitted at: ${new Date(data.submittedAt).toLocaleString('sv-SE')}</small></p>
    `;
  } else if (data.type === 'homepage') {
    subject = `New Homepage Form Submission from ${data.name}`;
    html = `
      <h2>New Homepage Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Address:</strong> ${data.address || 'N/A'}</p>
      <p><strong>Interested in:</strong> ${data.areas ? data.areas.join(', ') : 'N/A'}</p>
      <hr>
      <p><small>Submitted at: ${new Date(data.submittedAt).toLocaleString('sv-SE')}</small></p>
    `;
  }

  return { subject, html };
}

function getSpielPitchConfirmationEmail(name, role) {
  return {
    subject: 'Thank you for registering for the Spiel Pitch Competition! 🎲',
    html: `
      <h2>Welcome to the Spiel Pitch Competition!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering as a <strong>${role === 'creator' ? 'game designer' : 'publisher/distributor'}</strong> for our Spiel Pitch Competition!</p>
      
      ${role === 'creator' ? `
        <h3>Next Steps for Game Designers:</h3>
        <ol>
          <li><strong>Create your account</strong> at <a href="https://portal.pubblo.com">portal.pubblo.com</a></li>
          <li><strong>Submit your pitch</strong> using Pubblo's pitch creation tool</li>
          <li><strong>Deadline:</strong> November 30, 2025</li>
        </ol>
        <p>Early submissions get an advantage when choosing between pitches perceived to be equal in terms of potential.</p>
        <p><strong>Prize:</strong> Win a pitch meeting with a matching publisher!</p>
      ` : `
        <h3>Next Steps for Publishers/Distributors:</h3>
        <ol>
          <li><strong>Create your account</strong> at <a href="https://portal.pubblo.com">portal.pubblo.com</a></li>
          <li><strong>Set your preferences</strong> to see matching pitches</li>
          <li><strong>Winners will be randomly selected</strong> to see pitches first</li>
        </ol>
        <p>All participants will eventually get access to matching pitches.</p>
      `}
      
      <h3>Your Free Access:</h3>
      <p>Everyone who registers receives <strong>free access to Pubblo for the remainder of 2025</strong>!</p>
      
      <p style="margin-top: 30px;">
        <a href="https://portal.pubblo.com" style="background: #2a30ea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 32px; display: inline-block;">
          Get Started on Pubblo →
        </a>
      </p>
      
      <p style="margin-top: 30px; color: #666; font-size: 14px;">
        Questions? Reply to this email or visit <a href="https://pubblo.com">pubblo.com</a> for more information.
      </p>
      
      <p style="margin-top: 20px;">
        Best regards,<br>
        <strong>The Pubblo Team</strong>
      </p>
      
      <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;">
      <p style="color: #999; font-size: 12px;">
        Terms: One account per participant/company. By registering you agree to be contacted about the competition and your submission.
      </p>
    `
  };
}

// API Endpoints

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const startTime = Date.now();
  console.log('\n📨 [CONTACT] New contact form submission');
  
  try {
    const { name, email, company, message } = req.body;
    console.log(`👤 From: ${name} <${email}> ${company ? `(${company})` : ''}`);

    // Validate required fields for contact form
    if (!message) {
      console.warn('⚠️  [CONTACT] Missing message field');
      return res.status(400).json({ error: 'Message is required' });
    }

    // Validate and sanitize input
    const validation = validateAndSanitizeContactData({
      type: 'contact',
      name,
      email,
      company,
      message
    });

    if (!validation.valid) {
      console.warn('⚠️  [CONTACT] Validation failed:', validation.errors);
      return res.status(400).json({ error: validation.errors.join(', ') });
    }

    const contactData = validation.data;

    // Save to database if connected
    console.log('💾 [CONTACT] Attempting to save to MongoDB...');
    console.log('📋 [CONTACT] Data to save:', JSON.stringify(contactData, null, 2));
    if (isMongoConnected && Contact) {
      try {
        const contact = new Contact(contactData);
        const savedContact = await contact.save();
        console.log(`✅ [CONTACT] Saved to MongoDB successfully`);
        console.log(`📦 [CONTACT] Document ID: ${savedContact._id}`);
        console.log(`📦 [CONTACT] Saved document:`, JSON.stringify(savedContact.toObject(), null, 2));
      } catch (dbError) {
        console.error('❌ [CONTACT] MongoDB save failed:', dbError.message);
        console.error('❌ [CONTACT] Error stack:', dbError.stack);
        // Continue anyway - email is more important
      }
    } else {
      console.warn('⚠️  [CONTACT] MongoDB not connected - skipping database save');
    }

    // Send notification email to info
    console.log('📧 [CONTACT] Sending notification email to info@pubblo.com...');
    try {
      const notification = getNotificationEmail(contactData);
      const mailOptions = {
        from: 'info@pubblo.com',
        to: 'info@pubblo.com',
        subject: notification.subject,
        html: notification.html
      };
      console.log('📨 [CONTACT] Mail options:', JSON.stringify({ from: mailOptions.from, to: mailOptions.to, subject: mailOptions.subject }, null, 2));
      const emailResult = await transporter.sendMail(mailOptions);
      console.log('✅ [CONTACT] Notification email sent successfully');
      console.log('📬 [CONTACT] Email response:', JSON.stringify(emailResult, null, 2));
    } catch (emailError) {
      console.error('❌ [CONTACT] Email send failed:', emailError.message);
      console.error('❌ [CONTACT] Error stack:', emailError.stack);
      throw emailError;
    }

    const duration = Date.now() - startTime;
    console.log(`✅ [CONTACT] Request completed in ${duration}ms\n`);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ [CONTACT] Request failed:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Spiel Pitch form endpoint
app.post('/api/spielpitch', async (req, res) => {
  const startTime = Date.now();
  console.log('\n🎲 [SPIELPITCH] New Spiel Pitch registration');
  
  try {
    const { name, email, company, role } = req.body;
    console.log(`👤 From: ${name} <${email}> as ${role ? role.toUpperCase() : 'UNKNOWN'} ${company ? `(${company})` : ''}`);

    // Validate role
    if (!role || !['creator', 'publisher'].includes(role)) {
      console.warn('⚠️  [SPIELPITCH] Invalid role');
      return res.status(400).json({ error: 'Role must be either "creator" or "publisher"' });
    }

    // Validate and sanitize input
    const validation = validateAndSanitizeContactData({
      type: 'spielpitch',
      name,
      email,
      company,
      role
    });

    if (!validation.valid) {
      console.warn('⚠️  [SPIELPITCH] Validation failed:', validation.errors);
      return res.status(400).json({ error: validation.errors.join(', ') });
    }

    const contactData = validation.data;

    // Save to database if connected
    console.log('💾 [SPIELPITCH] Attempting to save to MongoDB...');
    console.log('📋 [SPIELPITCH] Data to save:', JSON.stringify(contactData, null, 2));
    if (isMongoConnected && Contact) {
      try {
        const contact = new Contact(contactData);
        const savedContact = await contact.save();
        console.log(`✅ [SPIELPITCH] Saved to MongoDB successfully`);
        console.log(`📦 [SPIELPITCH] Document ID: ${savedContact._id}`);
        console.log(`📦 [SPIELPITCH] Saved document:`, JSON.stringify(savedContact.toObject(), null, 2));
      } catch (dbError) {
        console.error('❌ [SPIELPITCH] MongoDB save failed:', dbError.message);
        console.error('❌ [SPIELPITCH] Error stack:', dbError.stack);
        // Continue anyway - email is more important
      }
    } else {
      console.warn('⚠️  [SPIELPITCH] MongoDB not connected - skipping database save');
    }

    // Send notification email to info
    console.log('📧 [SPIELPITCH] Sending notification email to info@pubblo.com...');
    try {
      const notification = getNotificationEmail(contactData);
      const mailOptions = {
        from: 'info@pubblo.com',
        to: 'info@pubblo.com',
        subject: notification.subject,
        html: notification.html
      };
      console.log('📨 [SPIELPITCH] Mail options:', JSON.stringify({ from: mailOptions.from, to: mailOptions.to, subject: mailOptions.subject }, null, 2));
      const emailResult = await transporter.sendMail(mailOptions);
      console.log('✅ [SPIELPITCH] Notification email sent successfully');
      console.log('📬 [SPIELPITCH] Email response:', JSON.stringify(emailResult, null, 2));
    } catch (emailError) {
      console.error('❌ [SPIELPITCH] Notification email failed:', emailError.message);
      console.error('❌ [SPIELPITCH] Error stack:', emailError.stack);
      throw emailError;
    }

    // Send confirmation email to user
    console.log(`📧 [SPIELPITCH] Sending confirmation email to ${email}...`);
    try {
      const confirmation = getSpielPitchConfirmationEmail(name, role);
      const mailOptions = {
        from: 'info@pubblo.com',
        to: email,
        subject: confirmation.subject,
        html: confirmation.html
      };
      console.log('📨 [SPIELPITCH] Confirmation mail options:', JSON.stringify({ from: mailOptions.from, to: mailOptions.to, subject: mailOptions.subject }, null, 2));
      const emailResult = await transporter.sendMail(mailOptions);
      console.log('✅ [SPIELPITCH] Confirmation email sent successfully');
      console.log('📬 [SPIELPITCH] Email response:', JSON.stringify(emailResult, null, 2));
    } catch (emailError) {
      console.error('❌ [SPIELPITCH] Confirmation email failed:', emailError.message);
      console.error('❌ [SPIELPITCH] Error stack:', emailError.stack);
      throw emailError;
    }

    const duration = Date.now() - startTime;
    console.log(`✅ [SPIELPITCH] Request completed in ${duration}ms\n`);
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('❌ [SPIELPITCH] Request failed:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: 'Failed to register' });
  }
});

// Homepage form endpoint
app.post('/api/homepage', async (req, res) => {
  const startTime = Date.now();
  console.log('\n🏠 [HOMEPAGE] New homepage form submission');
  
  try {
    const { name, email, phone, company, address, areas } = req.body;
    console.log(`👤 From: ${name} <${email}> ${company ? `(${company})` : ''}`);
    console.log(`📋 Interested in: ${areas ? areas.join(', ') : 'none'}`);

    // Validate and sanitize input
    const validation = validateAndSanitizeContactData({
      type: 'homepage',
      name,
      email,
      phone,
      company,
      address,
      areas
    });

    if (!validation.valid) {
      console.warn('⚠️  [HOMEPAGE] Validation failed:', validation.errors);
      return res.status(400).json({ error: validation.errors.join(', ') });
    }

    const contactData = validation.data;

    // Save to database if connected
    console.log('💾 [HOMEPAGE] Attempting to save to MongoDB...');
    console.log('📋 [HOMEPAGE] Data to save:', JSON.stringify(contactData, null, 2));
    if (isMongoConnected && Contact) {
      try {
        const contact = new Contact(contactData);
        const savedContact = await contact.save();
        console.log(`✅ [HOMEPAGE] Saved to MongoDB successfully`);
        console.log(`📦 [HOMEPAGE] Document ID: ${savedContact._id}`);
        console.log(`📦 [HOMEPAGE] Saved document:`, JSON.stringify(savedContact.toObject(), null, 2));
      } catch (dbError) {
        console.error('❌ [HOMEPAGE] MongoDB save failed:', dbError.message);
        console.error('❌ [HOMEPAGE] Error stack:', dbError.stack);
        // Continue anyway - email is more important
      }
    } else {
      console.warn('⚠️  [HOMEPAGE] MongoDB not connected - skipping database save');
    }

    // Send notification email to info
    console.log('📧 [HOMEPAGE] Sending notification email to info@pubblo.com...');
    try {
      const notification = getNotificationEmail(contactData);
      const mailOptions = {
        from: 'info@pubblo.com',
        to: 'info@pubblo.com',
        subject: notification.subject,
        html: notification.html
      };
      console.log('📨 [HOMEPAGE] Mail options:', JSON.stringify({ from: mailOptions.from, to: mailOptions.to, subject: mailOptions.subject }, null, 2));
      const emailResult = await transporter.sendMail(mailOptions);
      console.log('✅ [HOMEPAGE] Notification email sent successfully');
      console.log('📬 [HOMEPAGE] Email response:', JSON.stringify(emailResult, null, 2));
    } catch (emailError) {
      console.error('❌ [HOMEPAGE] Email send failed:', emailError.message);
      console.error('❌ [HOMEPAGE] Error stack:', emailError.stack);
      throw emailError;
    }

    const duration = Date.now() - startTime;
    console.log(`✅ [HOMEPAGE] Request completed in ${duration}ms\n`);
    res.json({ success: true, message: 'Submission successful' });
  } catch (error) {
    console.error('❌ [HOMEPAGE] Request failed:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: 'Failed to submit' });
  }
});

// Serve React app (static files)
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log('\n🚀 ====================================');
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log('🚀 ====================================\n');
});

