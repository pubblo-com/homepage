import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import { getRecaptchaToken } from '../utils/recaptcha';

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

const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${spacing.medium};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SuccessContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: ${spacing.xLarge};
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  text-align: center;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h2 {
    color: #2a30ea;
    margin: 0 0 ${spacing.medium};
    font-size: 28px;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin: 0 0 ${spacing.large};
  }
`;

const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #2a30ea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.large};
  
  &::after {
    content: '✓';
    color: white;
    font-size: 48px;
    font-weight: bold;
  }
`;

const EssenPitchPage = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const recaptchaToken = await getRecaptchaToken('spielpitch_submit');
      const response = await fetch('/api/spielpitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          company: role === 'publisher' ? company : undefined, 
          role,
          recaptchaToken
        })
      });
      
      if (!response.ok) throw new Error('Failed to register');
      
      setSubmittedEmail(email);
      setShowSuccess(true);
      setRole('');
      setName('');
      setEmail('');
      setCompany('');
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };

  return (
    <>
      {showSuccess && (
        <SuccessModal onClick={closeSuccessModal}>
          <SuccessContent onClick={(e) => e.stopPropagation()}>
            <CheckIcon />
            <h2>Registration Successful! 🎉</h2>
            <p>
              Thanks for registering! We've sent a confirmation email to <strong>{submittedEmail}</strong> with next steps and information about your free Pubblo access for 2025.
            </p>
            <Button text="Close" onClick={closeSuccessModal} />
          </SuccessContent>
        </SuccessModal>
      )}
      
      <Wrap>
        <Heading>Join our Pitch Competition</Heading>
      <p>Starting on the 23rd of October, the first day of SPIEL in Essen, we're running a pitch competition. The competition is open until the 30th of November but register already now - early birds will get an advantage*</p>
      <ChoiceRow>
        <Card>
          <h3>Got a game?</h3>
          <p>You can win a pitch meeting with a matching publisher!</p>
          <p>Register and submit your pitch no later than the 30th of November</p>
          <CTA>
            <Button text="I've got a game" variant='contrast' onClick={() => setRole('creator')} />
          </CTA>
        </Card>
        <Card>
          <h3>Looking for games?</h3>
          <p>You can be the first to see the winning pitches!</p>
          <p>Register no later than the 30th of November</p>
          <CTA>
            <Button text="I'm looking for games" onClick={() => setRole('publisher')} />
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
          Register and submit your pitch(es) no later than the 30th of November 2025. A jury will evaluate all submitted pitches and select winners based on market potential.
        </p>
        <Small>
          *Time of submission will be an advantage when choosing between pitches perceived to be equal in terms of potential.
        </Small>
        <p>
          Publishers and distributors that register will be randomly selected as winners. The winners will see pitches first but all participants will eventually get access to matching pitches.
        </p>
        <p>
          <strong>Everyone who registers receives free access to Pubblo for the remainder of 2025.</strong>
        </p>

        <Small>
          Terms and notes: One account per participant/company. By registering
          you agree to be contacted about the competition and your submission.
          Submissions must be original and not infringe third‑party rights. The
          jury's decision is final and cannot be appealed. No purchase is
          necessary. Pubblo may reference anonymized statistics from the
          competition for product improvement and PR. Personal data is handled
          according to our privacy policy. Benefits are non‑transferable and may
          be withdrawn in cases of abuse. Pubblo does not assume ownership of
          submitted material; creators retain all rights to their ideas.
        </Small>
      </Info>
      </Wrap>
    </>
  );
};

export default EssenPitchPage;


