import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography, breakpoints } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';

const PORTAL_BASE_URL = 'https://portal.pubblo.com';
const DEFAULT_PORTAL_HASH = '/login';

function buildPortalRedirectUrl() {
  if (typeof window === 'undefined') return null;

  try {
    const current = new URL(window.location.href);
    const portalTarget = new URL(PORTAL_BASE_URL);
    let hashFromQuery = '';

    current.searchParams.forEach((value, key) => {
      if (key.toLowerCase() === 'hash') {
        hashFromQuery = hashFromQuery || String(value);
        return;
      }
      portalTarget.searchParams.append(key, value);
    });

    const explicitHash = (current.hash || '').replace(/^#/, '');
    const finalHash = explicitHash || hashFromQuery;
    let sanitizedHash = finalHash ? finalHash.replace(/^#+/, '') : '';
    if (sanitizedHash && !sanitizedHash.startsWith('/')) {
      sanitizedHash = `/${sanitizedHash}`;
    }

    if (sanitizedHash.replace(/^\//, '').toLowerCase() === 'spielpitch') {
      return PORTAL_BASE_URL;
    }

    if (sanitizedHash) {
      portalTarget.hash = sanitizedHash;
    } else {
      portalTarget.hash = DEFAULT_PORTAL_HASH;
    }

    return portalTarget.toString();
  } catch (error) {
    return PORTAL_BASE_URL;
  }
}

const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xXLarge};
  background: ${colors.beige};
`;

const Card = styled.div`
  max-width: 560px;
  width: 100%;
  background: ${colors.white};
  border-radius: 24px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.08);
  padding: ${spacing.xXLarge};
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
  }
`;

const Title = styled.h1`
  font-size: ${typography.fontSizeH2};
  line-height: 1.2;
  color: ${colors.secondary};
  margin-bottom: ${spacing.medium};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography.fontSizeH2Mobile};
  }
`;

const Subtitle = styled.p`
  font-size: ${typography.fontSizeBody};
  color: ${colors.text};
  margin: 0;

  a {
    color: ${colors.link};
  }
`;

const LaunchPage = () => {
  const { t } = useI18n();
  const l = t('launch');
  const [redirectUrl] = useState(() => buildPortalRedirectUrl());

  useEffect(() => {
    if (redirectUrl) {
      window.location.replace(redirectUrl);
    }
  }, [redirectUrl]);

  return (
    <>
      <SEOHead
        title={l.seo.title}
        description={l.seo.description}
        path='/launch'
        noindex
      />
      {redirectUrl && (
        <Wrapper>
          <Card>
            <Title>{l.redirect.title}</Title>
            <Subtitle>
              {l.redirect.fallbackBefore}{' '}
              <a href={redirectUrl}>{l.redirect.fallbackLink}</a>
              {l.redirect.fallbackAfter}
            </Subtitle>
          </Card>
        </Wrapper>
      )}
    </>
  );
};

export default LaunchPage;
