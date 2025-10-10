import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import { getRecaptchaToken } from '../utils/recaptcha';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const Card = styled.section`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  padding: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  width: 100%;
  min-height: 140px;
`;

const SuccessBox = styled.div`
  background: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 14px;
  padding: ${spacing.xLarge};
  text-align: center;
  margin: ${spacing.xXLarge} auto;
  max-width: 500px;
  
  h3 {
    color: #2e7d32;
    margin-top: 0;
    margin-bottom: ${spacing.medium};
  }
  
  p {
    color: #1b5e20;
    line-height: 1.6;
  }
`;

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isDemo) {
      setMessage("I'm interested in a demo. Please contact me to schedule a meeting.");
    }
  }, [isDemo]);

  const submit = async (e) => {
    e.preventDefault();
    
    try {
      const recaptchaToken = await getRecaptchaToken('contact_submit');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message, recaptchaToken })
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <Wrap>
        <SuccessBox>
          <h3>✓ Message sent successfully!</h3>
          <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
          <div style={{ marginTop: spacing.large }}>
            <Button text='Send another message' onClick={() => setSubmitted(false)} />
          </div>
        </SuccessBox>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Title>Contact us</Title>

      <Card>
        <h3>Drop us a note, we'd love to hear from you</h3>
        <form onSubmit={submit}>
          <Row>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </Row>
          <div style={{ marginTop: spacing.medium }}>
            <Label htmlFor='company'>Company{isDemo && ' *'}</Label>
            <Input id='company' value={company} onChange={(e) => setCompany(e.target.value)} required={isDemo} />
          </div>
          <div style={{ marginTop: spacing.medium }}>
            <Label htmlFor='message'>Message</Label>
            <TextArea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <div style={{ marginTop: spacing.medium }}>
            <Button type='submit' text='Send' />
          </div>
        </form>
      </Card>
    </Wrap>
  );
};

export default ContactPage;


