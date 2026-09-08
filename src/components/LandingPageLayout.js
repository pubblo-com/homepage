import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from './Button';
import SEOHead from './SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin: 0 0 ${spacing.medium};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0 0 ${spacing.xLarge};
  color: #444;
`;

const CtaRow = styled.div`
  margin: ${spacing.xLarge} 0;
`;

const Section = styled.section`
  margin-bottom: ${spacing.xXLarge};
`;

const SectionTitle = styled.h2`
  margin: 0 0 ${spacing.medium};
  font-size: 1.5rem;
`;

const Body = styled.p`
  line-height: 1.7;
  margin: 0 0 ${spacing.medium};
`;

const Steps = styled.ol`
  margin: 0;
  padding-left: ${spacing.large};
  display: grid;
  gap: ${spacing.large};
`;

const Step = styled.li`
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: ${spacing.small};
    font-size: 1.05rem;
  }
`;

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  background: ${(p) => (p.$highlight ? colors.lightblue : '#f5f5f7')};
  border-radius: 16px;
  padding: ${spacing.large};

  h3 {
    margin: 0 0 ${spacing.medium};
    font-size: 1.1rem;
  }

  ul {
    margin: 0;
    padding-left: ${spacing.medium};
  }

  li {
    margin-bottom: ${spacing.small};
    line-height: 1.5;
  }
`;

const FAQSection = styled.section`
  margin-bottom: ${spacing.xXLarge};
`;

const QA = styled.details`
  border-bottom: 1px solid #eee;
  padding: ${spacing.medium} 0;

  summary {
    cursor: pointer;
    font-weight: 600;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }
  }

  p {
    margin: ${spacing.medium} 0 0;
    line-height: 1.6;
    color: #444;
  }
`;

const InternalLinks = styled.nav`
  margin-top: ${spacing.xXLarge};
  padding-top: ${spacing.large};
  border-top: 1px solid #eee;

  h2 {
    font-size: 1rem;
    margin: 0 0 ${spacing.medium};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${colors.text};
  }

  a {
    display: block;
    margin-bottom: ${spacing.small};
    color: ${colors.contrast};
  }
`;

const LandingPageLayout = ({ page }) => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const layout = t('components.landingLayout');

  const handleCta = () => {
    navigate(page.cta.href);
  };

  const renderSection = (section) => {
    if (section.type === 'steps') {
      return (
        <Steps>
          {section.steps.map((step) => (
            <Step key={step.title}>
              <strong>{step.title}</strong>
              {step.body}
            </Step>
          ))}
        </Steps>
      );
    }

    if (section.type === 'columns') {
      return (
        <ColumnGrid>
          {section.columns.map((column, index) => (
            <Column key={column.title} $highlight={index === 1}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Column>
          ))}
        </ColumnGrid>
      );
    }

    return section.paragraphs.map((paragraph) => (
      <Body key={paragraph.slice(0, 48)}>{paragraph}</Body>
    ));
  };

  return (
    <>
      <SEOHead
        title={page.seo.title}
        description={page.seo.description}
        path={page.path}
        exactTitle={page.seo.exactTitle}
      />
      <Wrap>
        <Title>{page.h1}</Title>
        <Subtitle>{page.subtitle}</Subtitle>
        <CtaRow>
          <Button text={page.cta.text} onClick={handleCta} variant='primary' />
        </CtaRow>

        {page.sections.map((section, index) => (
          <Section key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            {renderSection(section)}
            {index === 1 && (
              <CtaRow>
                <Button
                  text={page.cta.text}
                  onClick={handleCta}
                  variant='contrast'
                />
              </CtaRow>
            )}
          </Section>
        ))}

        <FAQSection>
          <SectionTitle>{layout.faqTitle}</SectionTitle>
          {page.faq.map((item) => (
            <QA key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </QA>
          ))}
        </FAQSection>

        <CtaRow>
          <Button text={page.cta.text} onClick={handleCta} variant='primary' />
        </CtaRow>

        <InternalLinks aria-label={layout.relatedPagesAria}>
          <h2>{layout.learnMore}</h2>
          {page.internalLinks.map((link) => (
            <LocalizedLink key={link.to} to={link.to}>
              {link.label}
            </LocalizedLink>
          ))}
        </InternalLinks>
      </Wrap>
    </>
  );
};

export default LandingPageLayout;
