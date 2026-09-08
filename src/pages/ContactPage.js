import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { getRecaptchaToken } from '../utils/recaptcha';
import { useI18n } from '../i18n/I18nProvider';
import magnusImg from '../assets/contacts/magnus.jpg';
import marcusImg from '../assets/contacts/marcus.jpg';
import stefanImg from '../assets/contacts/stefan.jpg';
import mariaImg from '../assets/contacts/maria.jpg';
import olleImg from '../assets/contacts/olle.jpg';
import niklasImg from '../assets/contacts/niklas.jpg';

const TEAM_IMAGES = {
  'magnus@pubblo.com': magnusImg,
  'marcus@pubblo.com': marcusImg,
  'stefan@pubblo.com': stefanImg,
  'maria@pubblo.com': mariaImg,
  'niklas@pubblo.com': niklasImg,
  'olle@pubblo.com': olleImg,
};

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
  gap: ${spacing.xXLarge};

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
  padding: ${spacing.xXLarge};
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
  const { t } = useI18n();
  const copy = t('contact');
  const teamMembers = copy.team.members.map((member) => ({
    ...member,
    image: TEAM_IMAGES[member.email],
  }));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isDemo) {
      setMessage(copy.form.demoPrefill);
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isDemo, copy.form.demoPrefill]);

  const submit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken('contact_submit');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message, recaptchaToken }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      await response.json().catch(() => null);

      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (error) {
      console.error('Contact form error:', error);
      alert(copy.form.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Wrap>
        <SuccessBox>
          <h3>{copy.success.title}</h3>
          <p>{copy.success.body}</p>
          <div style={{ marginTop: spacing.large }}>
            <Button text={copy.success.sendAnother} onClick={() => setSubmitted(false)} />
          </div>
        </SuccessBox>
      </Wrap>
    );
  }

  return (
    <>
      <SEOHead
        title={t('seo.pages.contact.title')}
        description={t('seo.pages.contact.description')}
        path='/contact'
      />
      <Wrap>
        <Title>{copy.title}</Title>

        <TeamSection>
          <h2>{copy.team.title}</h2>
          <TeamIntro>{copy.team.intro}</TeamIntro>
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
          <h3>{copy.form.title}</h3>
          <form onSubmit={submit}>
            <Row>
              <div>
                <Label htmlFor='name'>{copy.form.name}</Label>
                <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor='email'>{copy.form.email}</Label>
                <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </Row>
            <div style={{ marginTop: spacing.medium }}>
              <Label htmlFor='company'>{isDemo ? copy.form.companyRequired : copy.form.company}</Label>
              <Input id='company' value={company} onChange={(e) => setCompany(e.target.value)} required={isDemo} />
            </div>
            <div style={{ marginTop: spacing.medium }}>
              <Label htmlFor='message'>{copy.form.message}</Label>
              <TextArea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <div style={{ marginTop: spacing.medium }}>
              <Button
                type='submit'
                text={isSubmitting ? copy.form.sending : copy.form.send}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </Card>
      </Wrap>
    </>
  );
};

export default ContactPage;
