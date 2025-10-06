import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const ChoiceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.large};
  margin: ${spacing.xLarge} 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 16px;
  padding: ${spacing.large};
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
`;

const CTA = styled.div`
  margin-top: auto;
`;

const Bullets = styled.ul`
  margin: 8px 0 ${spacing.medium};
  padding-left: 20px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: grid;
  gap: ${spacing.medium};
  margin-top: ${spacing.large};
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Info = styled.section`
  margin-top: ${spacing.xLarge};
  display: grid;
  gap: ${spacing.medium};
  font-size: 16px;
`;

const Small = styled.small`
  display: block;
  color: #666;
  line-height: 1.6;
`;

const EssenPitchPage = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const formName = 'spielpitch';
    const payload = new URLSearchParams();
    payload.append('form-name', formName);
    payload.append('name', name);
    payload.append('email', email);
    if (role === 'publisher') payload.append('company', company);
    payload.append('role', role);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      alert('Thanks! We\'ve received your registration.');
      setRole('');
      setName('');
      setEmail('');
      setCompany('');
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Wrap>
      <Heading>Sign up for Spiel Pitch</Heading>
      <p>Choose an option to continue:</p>
      <ChoiceRow>
        <Card>
          <h3>Got a game?</h3>
          <p>Join the competition – you don’t need to pitch at the fair.</p>
          <Bullets>
            <li>Registration deadline: <strong>November 30, 2025</strong></li>
            <li>Submit your full pitch in Pubblo by <strong>December 15, 2025</strong></li>
          </Bullets>
          <CTA>
            <Button text='I’ve got a game' variant='contrast' onClick={() => setRole('creator')} />
          </CTA>
        </Card>
        <Card>
          <h3>Looking for games?</h3>
          <p>Listen to selected pitches and discover new titles.</p>
          <Bullets>
            <li>Tell us your interests to get the right invites</li>
          </Bullets>
          <CTA>
            <Button text='I’m looking for games' onClick={() => setRole('publisher')} />
          </CTA>
        </Card>
      </ChoiceRow>

      {role && (
        <Card>
          <h3>{role === 'creator' ? 'Got a game? – your details' : 'Looking for games? – your details'}</h3>
          <Form onSubmit={submit}>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {role === 'publisher' && (
              <div>
                <Label htmlFor='company'>Company</Label>
                <Input id='company' value={company} onChange={(e) => setCompany(e.target.value)} required />
              </div>
            )}
            <div>
              <Button type='submit' text='Submit' variant={role === 'creator' ? 'contrast' : 'primary'} />
            </div>
          </Form>
        </Card>
      )}

      <Info>
        <h3>About the competition</h3>
        <p>
          Registration deadline: <strong>November 30, 2025</strong>. After you register, you will receive Pubblo's
          structured pitch template by email. Pitch submission deadline: <strong>December 15, 2025</strong>. After
          submissions close, our jury will select the winning game based on potential (market fit, clarity of pitch
          and feasibility).
        </p>
        <p>
          Creators may submit more than one game idea.
        </p>
        <p>
          Everyone who registers receives two months of free access to Pubblo’s
          portfolio tool for published games (with analytics and portfolio
          management).
        </p>
        <p>
          Publishers who register will be able to tag their interests (genres,
          mechanics, player count, audience, etc.) to get the right pitches at
          the right time.
        </p>

        <Small>
          Terms and notes: One account per participant/company. By registering
          you agree to be contacted about the competition and your submission.
          Submissions must be original and not infringe third‑party rights. The
          jury’s decision is final and cannot be appealed. No purchase is
          necessary. Pubblo may reference anonymized statistics from the
          competition for product improvement and PR. Personal data is handled
          according to our privacy policy. Benefits are non‑transferable and may
          be withdrawn in cases of abuse. Pubblo does not assume ownership of
          submitted material; creators retain all rights to their ideas.
        </Small>
      </Info>
    </Wrap>
  );
};

export default EssenPitchPage;


