import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';

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

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks! ${name} | ${email} | ${message.substring(0, 50)}...`);
  };

  return (
    <Wrap>
      <Title>Contact us</Title>

      <Card>
        <h3>Team</h3>
        <p>
          Magnus Hölcke (CEO) — operations & general inquiries:
          <br />
          <a href='mailto:magnus@pubblo.com'>magnus@pubblo.com</a>
          <br />
          <br />
          Marcus Carleson (Founder) — media & partnerships:
          <br />
          <a href='mailto:marcus@pubblo.com'>marcus@pubblo.com</a>
        </p>
      </Card>

      <Card>
        <h3>Report a bug or ask a question</h3>
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


