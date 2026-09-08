import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import { LEGACY_PRODUCT_HASHES, PRODUCT_LIST } from '../data/products';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';
import { localizePath } from '../i18n/paths';

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

const Subtitle = styled.p`
  margin-bottom: ${spacing.xLarge};
  line-height: 1.6;
  max-width: 720px;
`;

const CompareLink = styled.p`
  margin-top: ${spacing.xXLarge};
  font-size: 14px;
  color: ${colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PANEL_BG = {
  yellow: colors.yellow,
  lightblue: colors.lightblue,
  pink: colors.pink,
  contrast: colors.contrast,
};

const productAccent = (product) =>
  product.panelColor === 'primary' ? colors.primary : product.panelColor;

const Card = styled(LocalizedLink)`
  display: block;
  text-decoration: none;
  color: inherit;
  background: ${(p) => p.$bg};
  border-radius: 16px;
  padding: ${spacing.large};
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin: 0 0 ${spacing.small};
    font-size: 1.35rem;
    color: ${(p) => (p.$lightText ? colors.white : 'inherit')};
  }

  .tagline {
    margin: 0 0 ${spacing.medium};
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
    color: ${(p) => (p.$lightText ? 'rgba(255,255,255,0.95)' : '#333')};
  }

  .label {
    display: block;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
    color: ${(p) => (p.$lightText ? 'rgba(255,255,255,0.85)' : colors.text)};
  }

  .description {
    margin: 0 0 ${spacing.medium};
    line-height: 1.6;
    font-size: 15px;
    color: ${(p) => (p.$lightText ? 'rgba(255,255,255,0.9)' : '#444')};
  }

  span {
    font-weight: 700;
    color: ${(p) => (p.$lightText ? colors.white : p.$accent)};
  }
`;

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, locale } = useI18n();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const target = LEGACY_PRODUCT_HASHES[hash];
    if (target) {
      navigate(localizePath(target, locale), { replace: true });
    }
  }, [location.hash, locale, navigate]);

  return (
    <>
      <SEOHead
        title={t('seo.pages.products.title')}
        description={t('seo.pages.products.description')}
        path='/products'
      />
      <Wrap>
        <Title>{t('products.title')}</Title>
        <Subtitle>{t('products.subtitle')}</Subtitle>

        <Grid>
          {PRODUCT_LIST.map((product) => {
            const localized = t(`products.items.${product.id}`);
            return (
              <Card
                key={product.id}
                to={product.path}
                $bg={PANEL_BG[product.panelBg]}
                $accent={productAccent(product)}
                $lightText={product.panelBg === 'contrast'}
              >
                <h2>{localized.name}</h2>
                <p className='tagline'>{localized.tagline}</p>
                <span className='label'>{t('products.whatItDoes')}</span>
                <p className='description'>{localized.description}</p>
                <span>
                  {product.comingSoon ? t('products.comingSoon') : t('products.learnMore')}
                </span>
              </Card>
            );
          })}
        </Grid>

        <CompareLink>
          {t('products.compareBefore')}{' '}
          <LocalizedLink to='/compare' style={{ color: colors.contrast }}>
            {t('products.compareLink')}
          </LocalizedLink>
          {t('products.compareAfter')}
        </CompareLink>
      </Wrap>
    </>
  );
};

export default ProductsPage;
