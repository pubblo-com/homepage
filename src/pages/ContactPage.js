import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import { getRecaptchaToken } from '../utils/recaptcha';
import magnusImg from '../assets/contacts/magnus.jpg';
import marcusImg from '../assets/contacts/marcus.jpg';
import stefanImg from '../assets/contacts/stefan.jpg';
import mariaImg from '../assets/contacts/maria.jpg';

import olleImg from '../assets/contacts/olle.jpg';
import niklasImg from '../assets/contacts/niklas.jpg';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const TeamSection = styled.section`
  margin-bottom: ${spacing.xLarge};
`;

const TeamIntro = styled.p`
  max-width: 720px;
  margin-top: 0;
  margin-bottom: ${spacing.large};
  color: #4b4b4b;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  text-align: center;
`;

const PortraitWrap = styled.div`
  width: 200px;
  margin: 0 auto ${spacing.medium};
`;

const Portrait = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  background: #f2f2f2;
`;

const PersonName = styled.h3`
  margin: 0 0 4px;
`;

const PersonRole = styled.div`
  font-weight: 600;
  color: #3b3b3b;
`;

const PersonEmail = styled.a`
  display: inline-block;
  margin-top: 6px;
  color: #6b6b6b;
  text-decoration: none;

  &:hover {
    color: #2f2f2f;
  }
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

  const teamMembers = [
    {
      name: 'Magnus Hölcke',
      role: 'CEO',
      email: 'magnus@pubblo.com',
      image: magnusImg,
      accent: null,
      shape: null
    },
    {
      name: 'Marcus Carleson',
      role: 'Public & publisher relations',
      email: 'marcus@pubblo.com',
      image: marcusImg,
      accent: null,
      shape: null
    },
    {
      name: 'Stefan Olstorpe',
      role: 'Product owner',
      email: 'stefan@pubblo.com',
      image: stefanImg,
      accent: null,
      shape: null
    },
    {
      name: 'Maria Laakso',
      role: 'Sales and marketing',
      email: 'maria@pubblo.com',
      image: mariaImg,
      accent: null,
      shape: null
    },
    {
      name: 'Niklas Grundström',
      role: 'CTO',
      email: 'niklas@pubblo.com',
      image: niklasImg,
      accent: null,
      shape: null
    },
    {
      name: 'Olle Engqvist',
      role: 'Infrastructure',
      email: 'olle@pubblo.com',
      image: olleImg,
      accent: null,
      shape: null
    }
  ];
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isDemo) {
      setMessage("I'm interested in a demo. Please contact me to schedule a meeting.");
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
          const start = window.pageYOffset;
          const distance = y - start;
          const duration = 1200;
          let startTime = null;
          const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + distance * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      }, 100);
    }
  }, [isDemo]);

  const submit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const recaptchaToken = await getRecaptchaToken('contact_submit');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message, recaptchaToken })
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      await response.json().catch(() => null);
      
      setSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
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

      <TeamSection>
        <h2>Meet the team</h2>
        <TeamIntro>
          We are a small, dedicated crew that loves board games and great collaborations. Reach out directly to the
          right person, or use the form below and we will get back to you quickly.
        </TeamIntro>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.email}>
              <PortraitWrap>
                <Portrait src={member.image} alt={member.name} loading='lazy' />
              </PortraitWrap>
              <PersonName>{member.name}</PersonName>
              <PersonRole>{member.role}</PersonRole>
              <PersonEmail href={`mailto:${member.email}`}>{member.email}</PersonEmail>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection>

      <Card id='contact-form'>
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
            <Button type='submit' text={isSubmitting ? 'Sending...' : 'Send'} disabled={isSubmitting} />
          </div>
        </form>
      </Card>
    </Wrap>
  );
};

export default ContactPage;


