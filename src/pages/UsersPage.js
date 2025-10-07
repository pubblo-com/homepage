import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, breakpoints } from '../styles/tokens';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const Intro = styled.section`
  max-width: 700px;
  line-height: 1.7;
  margin-bottom: ${spacing.xLarge};
  p { margin: 0 0 ${spacing.medium}; }
  strong { font-weight: 700; }
`;

const SubTitle = styled.h2`
  margin: ${spacing.large} 0 ${spacing.medium};
`;

const PillRow = styled.div`
  position: relative;
  margin: ${spacing.large} 0 ${spacing.xLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
    gap: ${spacing.large};
  }
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 700;
  color: ${colors.white};
  background: ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  height: 48px;
  line-height: 1;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 12px;
    font-size: 13px;
    height: 32px;
  }
`;

const CenterPill = styled(Link)`
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  background: linear-gradient(90deg, ${colors.buttonBackground} 0%, ${colors.contrast} 100%);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  height: 48px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 12px;
    font-size: 13px;
    height: 32px;
  }
`;

const Connector = styled.div`
  position: absolute;
  top: 14px;
  height: 2px;
  width: calc(50% - 120px);
  background: linear-gradient(
    to right,
    rgba(42,48,234,0.18),
    rgba(249,81,96,0.18)
  );
  z-index: 1;
  ${(p) => (p.$side === 'left' ? 'left: 0;' : 'right: 0;')}
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
  color: ${colors.white};
  background: ${(p) => {
    if (p.$variant === 'pink') return colors.contrast;
    if (p.$variant === 'gradient') return `linear-gradient(90deg, ${colors.buttonBackground} 0%, ${colors.contrast} 100%)`;
    return colors.buttonBackground;
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
    <Wrap>
      <Title>Who uses Pubblo</Title>
      <Intro>
        <p>
          Pubblo connects buyers and sellers in the board game industry and makes
          trade simple with clear, comparable pitches and streamlined workflows.
        </p>
        <p>
          <strong>Buyers (distributors, publishers)</strong> use Pubblo to receive
          standardized pitches, quickly score them against preferences, and keep
          all communication in one place.
        </p>
        <p>
          <strong>Publishers</strong> sit in the middle – they scout new titles like
          buyers and also present their own catalog like sellers – so Pubblo helps
          them on both sides of the marketplace.
        </p>
        <p>
          <strong>Designers</strong>: Whether you’re a first‑time designer or an
          industry veteran, we help you with the right templates, tagging, and
          connections to close deals and bring more games to market.
        </p>
      </Intro>

      <PillRow>
        <Pill>Distributors</Pill>
        <CenterPill to='/pricing' title='Publishers use Pubblo as buyers and sellers'>Publishers</CenterPill>
        <Pill $variant='pink'>Designers</Pill>
        <Connector $side='left' />
        <Connector $side='right' />
      </PillRow>

      <TwoCol>
        <Panel>
          <SubTitle>Buyers</SubTitle>
          <TagRow>
            <Tag>Distributors</Tag>
            <Tag $variant='gradient'>Publishers</Tag>
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
            <Tag $variant='gradient'>Publishers</Tag>
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
  );
};

export default UsersPage;


