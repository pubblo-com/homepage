import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, breakpoints } from '../styles/tokens';

const Wrap = styled.footer`
  margin-top: ${spacing.xXLarge};
  background: #f5f5f7;
  color: ${colors.text};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};

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
  border-top: 1px solid rgba(0,0,0,0.1);
  margin-top: ${spacing.xLarge};
  padding-top: ${spacing.large};
  font-size: 12px;
  opacity: 0.9;
  color: ${colors.contrast};
`;

const Footer = () => {
  return (
    <Wrap>
      <Inner>
        <Grid>
          <div>
            <ColTitle>Pubblo</ColTitle>
            <p>Powering licensing deals in the board game industry.</p>
          </div>
          <div>
            <ColTitle>Explore</ColTitle>
            <A to='/products'>Products</A>
            <A to='/pricing'>Pricing</A>
            <A to='/compare'>Compare</A>
            <A to='/users'>Users</A>
            <A to='/spielpitch'>Essen Pitch Competition</A>
          </div>
          <div>
            <ColTitle>Company</ColTitle>
            <A to='/company'>About</A>
            <A to='/faq'>FAQ</A>
            <A to='/contact'>Contact</A>
          </div>
          <div>
            <ColTitle>Legal</ColTitle>
            <A to='/privacy'>Privacy</A>
            <A to='/terms'>Terms</A>
          </div>
        </Grid>
        <Small>© {new Date().getFullYear()} Pubblo. All rights reserved.</Small>
      </Inner>
    </Wrap>
  );
};

export default Footer;


