import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import heroImg from '../assets/pablo_users.png';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';

const HeroImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Wrap = styled.main`
  padding: 64px 0 ${spacing.xXLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h2`
  margin-bottom: ${spacing.large};
  text-align: center;
`;

const SubTitle = styled.h2`
  margin: ${spacing.large} 0 ${spacing.medium};
  text-align: center;
`;

const TwoCol = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  padding: ${spacing.xLarge};
`;

const TagRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing.small};
  margin-bottom: ${spacing.medium};
  align-items: center;
  vertical-align: top;
  width: 100%;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
  }
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 600;
  color: ${(p) =>
    p.$variant === 'pink' || p.$variant === 'yellow'
      ? colors.text
      : colors.white};
  background: ${(p) => {
    if (p.$variant === 'pink') return colors.pink;
    if (p.$variant === 'yellow') return colors.yellow;
    return colors.contrast;
  }};
  flex-shrink: 0;
  white-space: nowrap;
  height: 36px;
  line-height: 1;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 6px 10px;
    font-size: 13px;
    height: 28px;
    min-height: 28px;
    max-height: 28px;
  }
`;

const Bullets = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  line-height: 1.7;
`;

const UsersPage = () => {
  const { t } = useI18n();
  const u = t('users');
  const buyerTagVariants = [null, 'yellow'];
  const sellerTagVariants = ['yellow', 'pink'];

  return (
    <>
      <SEOHead
        title={t('seo.pages.users.title')}
        description={t('seo.pages.users.description')}
        path='/users'
      />
      <HeroImage src={heroImg} alt={u.heroAlt} />
      <Wrap>
        <Title>{u.title}</Title>

        <TwoCol>
          <Panel>
            <SubTitle>{u.buyers.title}</SubTitle>
            <TagRow>
              {u.buyers.tags.map((label, i) => (
                <Tag key={label} $variant={buyerTagVariants[i]}>
                  {label}
                </Tag>
              ))}
            </TagRow>
            <Bullets>
              {u.buyers.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Bullets>
          </Panel>

          <Panel>
            <SubTitle>{u.sellers.title}</SubTitle>
            <TagRow>
              {u.sellers.tags.map((label, i) => (
                <Tag key={label} $variant={sellerTagVariants[i]}>
                  {label}
                </Tag>
              ))}
            </TagRow>
            <Bullets>
              {u.sellers.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Bullets>
          </Panel>
        </TwoCol>
      </Wrap>
    </>
  );
};

export default UsersPage;
