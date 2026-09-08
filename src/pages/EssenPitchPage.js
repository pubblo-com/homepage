import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';
import { getRecaptchaToken } from '../utils/recaptcha';
import { isSpielPitchActive } from '../utils/spielPitch';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
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

  a {
    color: inherit;
  }
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
  color: #4453a4;
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
  background: #4453a4;
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
  const { t } = useI18n();
  const e = t('essen');
  const formCopy = t('components.form');
  const spielPitchActive = isSpielPitchActive();

  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!spielPitchActive || !role || !formRef.current || typeof window === 'undefined') return;

    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    requestAnimationFrame(() => {
      const headerOffset = 90;
      const { top } = formRef.current.getBoundingClientRect();
      const targetPosition = top + window.scrollY - headerOffset;
      window.scrollTo({ behavior: 'smooth', top: Math.max(targetPosition, 0) });
    });
  }, [role, spielPitchActive]);

  const submit = async (submitEvent) => {
    submitEvent.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

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
          recaptchaToken,
        }),
      });

      if (!response.ok) throw new Error('Failed to register');
      await response.json().catch(() => null);

      setSubmittedEmail(email);
      setShowSuccess(true);
      setRole('');
      setName('');
      setEmail('');
      setCompany('');
    } catch (err) {
      alert(formCopy.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };

  if (!spielPitchActive) {
    return (
      <Wrap>
        <SEOHead
          title={e.seo.title}
          description={e.seo.description}
          path='/spielpitch'
          noindex
        />
        <Heading>{e.ended.title}</Heading>
        <Info>
          {e.ended.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </Info>
      </Wrap>
    );
  }

  const roleCopy = role === 'creator' ? e.active.creator : e.active.publisher;

  return (
    <>
      <SEOHead
        title={e.seo.title}
        description={e.seo.description}
        path='/spielpitch'
        noindex
      />
      {showSuccess && (
        <SuccessModal onClick={closeSuccessModal}>
          <SuccessContent onClick={(clickEvent) => clickEvent.stopPropagation()}>
            <CheckIcon />
            <h2>{e.active.success.title}</h2>
            <p>
              {e.active.success.bodyBefore}
              <strong>{submittedEmail}</strong>
              {e.active.success.bodyAfter}
            </p>
            <Button text={e.active.success.close} onClick={closeSuccessModal} />
          </SuccessContent>
        </SuccessModal>
      )}

      <Wrap>
        <Heading>{e.active.title}</Heading>
        <p>{e.active.intro}</p>
        <ChoiceRow>
          <Card>
            <h3>{e.active.creator.cardTitle}</h3>
            <p>{e.active.creator.cardBody1}</p>
            <p style={{ marginBottom: spacing.small }}>{e.active.creator.cardBody2}</p>
            <CTA>
              <Button
                text={e.active.creator.cta}
                variant='contrast'
                onClick={() => setRole('creator')}
              />
            </CTA>
          </Card>
          <Card>
            <h3>{e.active.publisher.cardTitle}</h3>
            <p>{e.active.publisher.cardBody1}</p>
            <p style={{ marginBottom: spacing.small }}>{e.active.publisher.cardBody2}</p>
            <CTA>
              <Button
                text={e.active.publisher.cta}
                onClick={() => setRole('publisher')}
              />
            </CTA>
          </Card>
        </ChoiceRow>

        {role && (
          <Card ref={formRef}>
            <h3>{roleCopy.formTitle}</h3>
            <Form onSubmit={submit}>
              <div>
                <Label htmlFor='name'>{e.active.form.name}</Label>
                <Input
                  id='name'
                  value={name}
                  onChange={(changeEvent) => setName(changeEvent.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor='email'>{e.active.form.email}</Label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(changeEvent) => setEmail(changeEvent.target.value)}
                  required
                />
              </div>
              {role === 'publisher' && (
                <div>
                  <Label htmlFor='company'>{e.active.form.company}</Label>
                  <Input
                    id='company'
                    value={company}
                    onChange={(changeEvent) => setCompany(changeEvent.target.value)}
                    required
                  />
                </div>
              )}
              <div>
                <Button
                  type='submit'
                  text={isSubmitting ? formCopy.submitting : formCopy.submit}
                  variant={role === 'creator' ? 'contrast' : 'primary'}
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          </Card>
        )}

        <Info>
          <h3>{e.active.about.title}</h3>
          {e.active.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          <p>
            <strong>{e.active.about.highlight}</strong>
          </p>

          <Small>
            {e.active.about.termsBefore}
            <LocalizedLink to='/privacy'>{e.active.about.privacyLink}</LocalizedLink>
            {e.active.about.termsMiddle}
            <LocalizedLink to='/terms'>{e.active.about.termsLink}</LocalizedLink>
            {e.active.about.termsAfter}
          </Small>
          <Small>{e.active.about.footnote}</Small>
        </Info>
      </Wrap>
    </>
  );
};

export default EssenPitchPage;
