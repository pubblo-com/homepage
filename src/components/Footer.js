import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, breakpoints } from '../styles/tokens';
import { isSpielPitchActive } from '../utils/spielPitch';

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

const A = styled(Link)`
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
  const spielPitchActive = isSpielPitchActive();
  return (
    <Wrap>
      <Inner>
        <Grid>
          <div>
            <ColTitle>Pubblo</ColTitle>
            <BrandText>
              Our network is built to simplify collaboration, inspire innovation and create games that players truly love.
            </BrandText>
            <BrandText>
              From vision to bestseller, we help bring the right people together to make it happen.
            </BrandText>
          </div>
          <div>
            <ColTitle>Explore</ColTitle>
            <A to='/products'>Our products</A>
            <A to='/pricing'>Pricing</A>
            <A to='/compare'>Compare us!</A>
            <A to='/users'>Users</A>
            {spielPitchActive && <A to='/spielpitch'>Essen Pitch Competition</A>}
          </div>
          <div>
            <ColTitle>Company</ColTitle>
            <A to='/company'>About</A>
            <A to='/news'>News</A>
            <A to='/faq'>FAQ</A>
          </div>
          <div>
            <ColTitle>Contact</ColTitle>
            <A to='/contact'>Contact us</A>
          </div>
        </Grid>
        <LegalRow>
          <ColTitle>Legal</ColTitle>
          <A to='/privacy'>Privacy</A>
          <A to='/terms'>Terms</A>
        </LegalRow>
        <FullWidthDivider />
        <Small>© {new Date().getFullYear()} Pubblo. All rights reserved.</Small>
      </Inner>
    </Wrap>
  );
};

export default Footer;


