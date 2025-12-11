import React from 'react';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../styles/tokens';

const Section = styled.section`
  padding: ${spacing.xLarge} 0;
  text-align: center;
`;

const Headline = styled.h2`
  font-size: 32px;
  margin-bottom: ${spacing.xLarge};
  color: ${colors.text};
  font-weight: 400;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.large};
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${spacing.medium};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: ${props => props.$backgroundColor || '#F9F8F6'};
  border-radius: 40px;
  padding: ${spacing.xLarge};
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const BigNumber = styled.div`
  font-size: 200px;
  line-height: 1;
  font-weight: 800;
  color: ${props => props.color};
  margin-bottom: ${spacing.small};
  margin-top: -20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const MonthsText = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.color};
  text-transform: uppercase;
  line-height: 0.9;
  margin-bottom: ${spacing.large};
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text};
  margin: 0;
`;

const EarlyBirdDeals = () => {
  return (
    <Section>
      <Headline>Our early bird deals!</Headline>
      <CardsContainer>
        <Card>
                  <BigNumber color={colors.lightblue}>3</BigNumber>
          <MonthsText color={colors.lightblue}>
            MONTHS FOR<br />FREE
          </MonthsText>
          <Description>
            Sign a non-binding Letter of Intent (LOI) and enjoy <strong>3 months of free access!</strong>
            <br />
            Just fill in your details below, and we'll get in touch with you as soon as possible.
          </Description>
        </Card>
        <Card>
                  <BigNumber color={colors.pink}>6</BigNumber>
                  <MonthsText color={colors.pink}>
            MONTHS FOR<br />FREE
          </MonthsText>
          <Description>
            Join our test group for <strong>6 months of free access</strong> and get the unique chance to influence how our product evolves. This offer is non-binding so you got absolutely nothing to lose.
            <br />
            Use the form to reach out to us- we'd love to hear your thoughts!
          </Description>
        </Card>
      </CardsContainer>
    </Section>
  );
};

export default EarlyBirdDeals;
