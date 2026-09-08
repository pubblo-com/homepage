import React, { useMemo } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';
import pabloFAQ from '../assets/pablo_FAQ.png';
import SEOHead from '../components/SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.medium};
`;

const Intro = styled.p`
  max-width: 720px;
  line-height: 1.7;
  margin: 0 0 ${spacing.xLarge};
  color: #444;
`;

const SectionTitle = styled.h2`
  margin: ${spacing.large} 0 ${spacing.medium};
`;

const QA = styled.details`
  background: #fff;
  border-radius: 12px;
  padding: ${spacing.medium} ${spacing.large};
  margin-bottom: ${spacing.medium};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  summary {
    cursor: pointer;
    font-weight: 700;
    outline: none;
    display: flex;
    align-items: center;
    gap: ${spacing.small};
  }
  summary::before {
    content: '';
    width: 14px;
    height: 14px;
    border: 2px solid ${colors.text};
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
    transition:
      transform 160ms ease,
      border-color 160ms ease;
    margin-right: 4px;
  }
  &[open] summary::before {
    transform: rotate(225deg);
    border-color: ${colors.contrast};
  }
  &[open] {
    border: 1px solid rgba(249, 81, 96, 0.15);
  }
  p {
    margin: ${spacing.small} 0 0;
    line-height: 1.7;
  }
`;

const FAQPage = () => {
  const { t } = useI18n();
  const items = t('faq.items');

  const faqStructuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.paragraphs.join(' '),
        },
      })),
    }),
    [items],
  );

  return (
    <>
      <SEOHead
        title={t('seo.pages.faq.title')}
        description={t('seo.pages.faq.description')}
        path='/faq'
        structuredData={faqStructuredData}
      />
      <Wrap>
        <Title>{t('faq.title')}</Title>
        <Intro>{t('faq.intro')}</Intro>

        {items.map((item, index) => {
          const showSection =
            index === 0 || items[index - 1].section !== item.section;

          return (
            <React.Fragment key={index}>
              {showSection && (
                <SectionTitle>{t(`faq.sections.${item.section}`)}</SectionTitle>
              )}
              <QA>
                <summary>{item.question}</summary>
                {item.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
                {item.inlineLink && (
                  <p>
                    {item.inlineLink.before}
                    <LocalizedLink to={item.inlineLink.to} style={{ color: colors.contrast }}>
                      {item.inlineLink.label}
                    </LocalizedLink>
                    {item.inlineLink.after}
                  </p>
                )}
              </QA>
            </React.Fragment>
          );
        })}

        <SectionTitle>
          {t('faq.footerBefore')}{' '}
          <LocalizedLink to='/contact'>{t('faq.footerLink')}</LocalizedLink>
        </SectionTitle>
      </Wrap>
      <img
        src={pabloFAQ}
        alt={t('faq.imageAlt')}
        style={{ width: '100%', display: 'block' }}
      />
    </>
  );
};

export default FAQPage;
