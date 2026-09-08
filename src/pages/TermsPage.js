import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import LegalDocument from '../components/LegalDocument';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }

  ul,
  ol {
    padding-left: ${spacing.large};
    margin-left: ${spacing.medium};
    margin-top: ${spacing.medium};
    margin-bottom: ${spacing.medium};
  }

  li {
    margin-left: ${spacing.small};
  }

  h2 {
    margin-top: ${spacing.large};
  }
`;

const TermsPage = () => {
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title={t('seo.pages.terms.title')}
        description={t('seo.pages.terms.description')}
        path='/terms'
      />
      <Wrap>
        <LegalDocument docKey='terms' />
      </Wrap>
    </>
  );
};

export default TermsPage;
