import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import heroImg from '../assets/pablo_users.png';

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
  gap: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
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
  color: ${(p) => (p.$variant === 'pink' || p.$variant === 'yellow' ? colors.text : colors.white)};
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
  return (
    <>
      <HeroImage src={heroImg} alt='Who can use our product' />
      <Wrap>
      <Title>Who can use our product?</Title>

      <TwoCol>
        <Panel>
          <SubTitle>Buyers</SubTitle>
          <TagRow>
            <Tag>Distributors</Tag>
            <Tag $variant='yellow'>Publishers</Tag>
          </TagRow>
          <Bullets>
            <li>Receive high‑quality pitches in a standardized format – easy to evaluate.</li>
            <li>Automatic scoring against your preferences helps you focus.</li>
            <li>Manage information and communication in one place.</li>
          </Bullets>
        </Panel>

        <Panel>
          <SubTitle>Sellers</SubTitle>
          <TagRow>
            <Tag $variant='yellow'>Publishers</Tag>
            <Tag $variant='pink'>Designers</Tag>
          </TagRow>
          <Bullets>
            <li>Increase your chance of success with compelling, informative pitch pages.</li>
            <li>Reach partners and new markets through Pubblo's network.</li>
            <li>Get instant feedback from recipient engagement analytics.</li>
          </Bullets>
        </Panel>
      </TwoCol>
    </Wrap>
    </>
  );
};

export default UsersPage;


