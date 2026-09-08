import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from './Button';
import SEOHead from './SEOHead';
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

const BackLink = styled(LocalizedLink)`
  display: inline-block;
  margin-bottom: ${spacing.large};
  color: ${colors.contrast};
  text-decoration: underline;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: ${(p) => p.$bg || colors.lightblue};
  border-radius: 14px;
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: fit-content;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Details = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`;

const Title = styled.h1`
  margin: 0 0 ${spacing.medium};
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 0 ${spacing.large};
  color: #444;
`;

const MetaRow = styled.div`
  margin-bottom: ${spacing.medium};
  font-size: 15px;
  line-height: 1.6;
`;

const MetaLabel = styled.span`
  font-weight: 700;
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.text};
  margin-bottom: 2px;
`;

const Body = styled.p`
  line-height: 1.7;
  margin: 0 0 ${spacing.medium};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.medium};
  margin-top: ${spacing.xLarge};
`;

const OtherProducts = styled.nav`
  margin-top: ${spacing.xXLarge};
  padding-top: ${spacing.large};
  border-top: 1px solid #eee;

  h2 {
    font-size: 1.1rem;
    margin: 0 0 ${spacing.medium};
  }

  a {
    display: inline-block;
    margin-right: ${spacing.medium};
    margin-bottom: ${spacing.small};
    color: ${colors.contrast};
  }
`;

const panelBackground = {
  yellow: colors.yellow,
  lightblue: colors.lightblue,
  pink: colors.pink,
  contrast: colors.contrast,
};

const ProductPageLayout = ({ product, otherProducts }) => {
  const { t } = useI18n();
  const labels = t('components.productLayout');
  const panelBg = panelBackground[product.panelBg] || colors.lightblue;
  const accentColor =
    product.panelColor === 'primary' ? colors.primary : product.panelColor;
  const seoPath = product.path;

  return (
    <>
      <SEOHead
        title={product.seo.title}
        description={product.seo.description}
        path={seoPath}
        noindex={product.comingSoon}
      />
      <Wrap>
        <BackLink to='/products'>{labels.backLink}</BackLink>
        <Layout>
          <Panel $bg={panelBg}>
            <ul>
              {product.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {product.pricingHash ? (
              <LocalizedLink
                to={`/pricing#${product.pricingHash}`}
                style={{
                  display: 'block',
                  marginTop: spacing.medium,
                  padding: '10px 16px',
                  background: 'white',
                  color: accentColor,
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                {labels.seePlansAndApply}
              </LocalizedLink>
            ) : (
              <span
                style={{
                  display: 'block',
                  marginTop: spacing.medium,
                  padding: '10px 16px',
                  background: 'white',
                  color: accentColor,
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textAlign: 'center',
                  opacity: 0.45,
                }}
              >
                {labels.comingSoon}
              </span>
            )}
          </Panel>
          <Details>
            <Title>{product.name}</Title>
            <Tagline>{product.tagline}</Tagline>
            <MetaRow>
              <MetaLabel>{labels.whoItsFor}</MetaLabel>
              {product.whoFor}
            </MetaRow>
            <MetaRow>
              <MetaLabel>{labels.whatItDoes}</MetaLabel>
              {product.description}
            </MetaRow>
            <MetaRow>
              <MetaLabel>{labels.status}</MetaLabel>
              {product.status}
            </MetaRow>
            {product.body.map((paragraph) => (
              <Body key={paragraph.slice(0, 40)}>{paragraph}</Body>
            ))}
            <Actions>
              {product.pricingHash ? (
                <LocalizedLink
                  to={`/pricing#${product.pricingHash}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button text={labels.seePricing} variant='primary' />
                </LocalizedLink>
              ) : null}
              <LocalizedLink to='/contact' style={{ textDecoration: 'none' }}>
                <Button
                  text={product.comingSoon ? labels.contactUs : labels.bookDemo}
                  variant='contrast'
                />
              </LocalizedLink>
            </Actions>
          </Details>
        </Layout>

        {otherProducts?.length > 0 && (
          <OtherProducts aria-label={labels.otherProductsAria}>
            <h2>{labels.exploreOtherProducts}</h2>
            {otherProducts.map((item) => (
              <LocalizedLink key={item.id} to={item.path}>
                {item.name}
              </LocalizedLink>
            ))}
          </OtherProducts>
        )}
      </Wrap>
    </>
  );
};

export default ProductPageLayout;
