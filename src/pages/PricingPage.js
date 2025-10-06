import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';
import Button from '../components/Button';

const Wrap = styled.main`
  padding: 120px ${spacing.xXLarge} 80px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.large};
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.section`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  padding: ${spacing.large};
  display: flex;
  flex-direction: column;
  min-height: 520px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin: ${spacing.small} 0 ${spacing.medium};
  white-space: nowrap;
`;

const HeaderBlock = styled.div`
  min-height: 80px;
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacing.small};
`;

const PriceBlock = styled.div`
  min-height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.small};
`;

const Badge = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  background: ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
  margin-left: 0;
`;

const List = styled.ul`
  margin: ${spacing.small} 0 ${spacing.large};
  padding: 0;
  list-style: none;
  line-height: 1.7;
  flex: 1 1 auto;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  align-items: start;
  column-gap: 10px;
  min-height: 32px;
  &:before {
    content: '✔';
    color: ${(p) => (p.$variant === 'pink' ? colors.contrast : colors.buttonBackground)};
    font-weight: 900;
    line-height: 1.4;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  margin-top: ${spacing.small};
  min-height: 32px;
`;

const PricingPage = () => {
  return (
    <Wrap>
      <Title>Choose the modules you need</Title>
      <p style={{ marginBottom: spacing.large }}>
        Pitch List and Portfolio are free during the beta. Pricing for the remaining modules will be
        announced at launch (Q1 2026). Buyers and Sellers have separate tracks – pick the modules that fit
        your role.
      </p>

      <Grid>
        <Card>
          <HeaderBlock>
            <h3>Pitch List</h3>
          </HeaderBlock>
          <BadgeRow>
            <Badge>Buyers</Badge>
          </BadgeRow>
          <PriceBlock>
            <Price>Free (beta)</Price>
          </PriceBlock>
          <List>
            <Item>Describe what you’re looking for; get matching pitches</Item>
            <Item>Review standardized pitch pages</Item>
          </List>
          <Button text='Get started' variant='secondary' />
        </Card>

        <Card>
          <HeaderBlock>
            <h3>Purchasing CRM</h3>
          </HeaderBlock>
          <BadgeRow>
            <Badge>Buyers</Badge>
          </BadgeRow>
          <PriceBlock>
            <Price>Coming Q1 ’26</Price>
          </PriceBlock>
          <List>
            <Item>Receive submissions in a standardized format</Item>
            <Item>Auto‑score against your preferences</Item>
            <Item>Assign, comment and track status</Item>
          </List>
          <Button text='Notify me' variant='secondary' />
        </Card>

        <Card>
          <HeaderBlock>
            <h3>Portfolio</h3>
          </HeaderBlock>
          <BadgeRow>
            <Badge $variant='pink'>Sellers</Badge>
          </BadgeRow>
          <PriceBlock>
            <Price>Free (beta)</Price>
          </PriceBlock>
          <List>
            <Item $variant='pink'>Create compelling pages for your titles</Item>
            <Item $variant='pink'>Share with buyers; track interest</Item>
            <Item $variant='pink'>Generate Pubblo‑ready pitches</Item>
          </List>
          <Button text='Start for free' variant='secondary-contrast' />
        </Card>

        <Card>
          <HeaderBlock>
            <h3>Agency</h3>
          </HeaderBlock>
          <BadgeRow>
            <Badge $variant='pink'>Sellers</Badge>
          </BadgeRow>
          <PriceBlock>
            <Price>Coming Q1 ’26</Price>
          </PriceBlock>
          <List>
            <Item $variant='pink'>Pubblo outreach to relevant partners</Item>
            <Item $variant='pink'>Sales support and deal coordination</Item>
          </List>
          <Button text='Talk to us' variant='secondary-contrast' />
        </Card>
      </Grid>
    </Wrap>
  );
};

export default PricingPage;


