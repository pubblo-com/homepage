export const contact = {
  title: 'Contact us',
  team: {
    title: 'Meet the team',
    intro:
      'We are a small, dedicated crew that loves board games and great collaborations. Reach out directly to the right person, or use the form below and we will get back to you quickly.',
    members: [
      { name: 'Magnus Hölcke', role: 'CEO', email: 'magnus@pubblo.com' },
      {
        name: 'Marcus Carleson',
        role: 'Public & publisher relations',
        email: 'marcus@pubblo.com',
      },
      { name: 'Stefan Olstorpe', role: 'Product owner', email: 'stefan@pubblo.com' },
      {
        name: 'Maria Laakso',
        role: 'Sales and marketing',
        email: 'maria@pubblo.com',
      },
      { name: 'Niklas Grundström', role: 'CTO', email: 'niklas@pubblo.com' },
      { name: 'Olle Engqvist', role: 'Infrastructure', email: 'olle@pubblo.com' },
    ],
  },
  form: {
    title: "Drop us a note, we'd love to hear from you",
    name: 'Name',
    email: 'Email',
    company: 'Company',
    companyRequired: 'Company *',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    demoPrefill:
      "I'm interested in a demo. Please contact me to schedule a meeting.",
    errorAlert: 'Something went wrong. Please try again.',
  },
  success: {
    title: '✓ Message sent successfully!',
    body: "Thank you for reaching out. We'll get back to you as soon as possible.",
    sendAnother: 'Send another message',
  },
};
