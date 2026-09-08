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

  h3 {
    font-weight: 400;
  }

  h2 {
    margin-top: ${spacing.large};
  }
`;

const PrivacyPage = () => {
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title={t('seo.pages.privacy.title')}
        description={t('seo.pages.privacy.description')}
        path='/privacy'
      />
      <Wrap>
        <LegalDocument docKey='privacy' />
      </Wrap>
    </>
  );
};

export default PrivacyPage;
