import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';
import spielwarenmesseLogo from '../assets/spielwarenmesse.png';

const Wrap = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 0 ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const PartnerBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.large};
  background: #fff4f8;
  border-radius: 16px;
  padding: ${spacing.large};
  margin-bottom: ${spacing.xLarge};
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  flex-shrink: 0;
`;

const Title = styled.h1`
  margin: 0 0 ${spacing.medium};
`;

const Lead = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0 0 ${spacing.large};
`;

const Body = styled.p`
  line-height: 1.7;
  margin: 0 0 ${spacing.medium};
`;

const SectionTitle = styled.h2`
  margin: ${spacing.xLarge} 0 ${spacing.medium};
  font-size: 1.35rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.medium};
  margin-top: ${spacing.xLarge};
`;

const Gic2027Page = () => {
  const { t } = useI18n();
  const g = t('gic');

  return (
    <>
      <SEOHead
        title={t('seo.pages.gic2027.title')}
        description={t('seo.pages.gic2027.description')}
        path='/gic-2027'
      />
      <Wrap>
        <PartnerBadge>
          <Logo src={spielwarenmesseLogo} alt={g.spielwarenmesseAlt} />
          <div>
            <strong>{g.partnerBadge.label}</strong>
            <div>{g.partnerBadge.meta}</div>
          </div>
        </PartnerBadge>

        <Title>{g.title}</Title>
        <Lead>{g.lead}</Lead>
        <Body>{g.body}</Body>

        <SectionTitle>{g.sectionTitle}</SectionTitle>
        <Body>{g.sectionBody}</Body>

        <Actions>
          <LocalizedLink to='/contact' style={{ textDecoration: 'none' }}>
            <Button text={g.contactCta} variant='primary' />
          </LocalizedLink>
          <LocalizedLink to='/products' style={{ textDecoration: 'none' }}>
            <Button text={g.platformCta} variant='contrast' />
          </LocalizedLink>
        </Actions>
      </Wrap>
    </>
  );
};

export default Gic2027Page;
