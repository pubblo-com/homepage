import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.footer`
  margin-top: ${spacing.xXLarge};
  background: #f5f5f7;
  color: ${colors.text};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};
  padding-left: 0;
  padding-right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BrandText = styled.p`
  margin: 0 0 ${spacing.medium};
  line-height: 1.5;
  max-width: 420px;
  opacity: 0.85;
`;

const LegalRow = styled.div`
  margin-top: ${spacing.large};
  max-width: 220px;
`;

const FullWidthDivider = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-top: ${spacing.small};
`;

const ColTitle = styled.h4`
  margin: 0 0 ${spacing.small};
`;

const A = styled(LocalizedLink)`
  display: block;
  color: ${colors.text};
  text-decoration: none;
  opacity: 0.9;
  margin: 8px 0;
  transition: color 150ms ease;
  &:hover {
    color: ${colors.contrast};
  }
`;

const Small = styled.div`
  font-size: 12px;
  opacity: 0.9;
  color: ${colors.contrast};
`;

const Footer = () => {
  const { t } = useI18n();

  return (
    <Wrap>
      <Inner>
        <Grid>
          <div>
            <ColTitle>Pubblo</ColTitle>
            <BrandText>{t('footer.brand1')}</BrandText>
            <BrandText>{t('footer.brand2')}</BrandText>
          </div>
          <div>
            <ColTitle>{t('footer.explore')}</ColTitle>
            <A to='/products'>{t('footer.ourProducts')}</A>
            <A to='/pricing'>{t('nav.pricing')}</A>
            <A to='/compare'>{t('footer.compareUs')}</A>
            <A to='/users'>{t('nav.users')}</A>
          </div>
          <div>
            <ColTitle>{t('footer.company')}</ColTitle>
            <A to='/company'>{t('footer.about')}</A>
            <A to='/news'>{t('footer.news')}</A>
            <A to='/guides'>{t('footer.guides')}</A>
            <A to='/faq'>{t('footer.faq')}</A>
          </div>
          <div>
            <ColTitle>{t('footer.contact')}</ColTitle>
            <A to='/contact'>{t('footer.contactUs')}</A>
          </div>
        </Grid>
        <LegalRow>
          <ColTitle>{t('footer.legal')}</ColTitle>
          <A to='/privacy'>{t('footer.privacy')}</A>
          <A to='/terms'>{t('footer.terms')}</A>
        </LegalRow>
        <FullWidthDivider />
        <Small>© {new Date().getFullYear()} Pubblo. {t('footer.copyright')}</Small>
      </Inner>
    </Wrap>
  );
};

export default Footer;
