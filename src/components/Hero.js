import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import logo from '../assets/pubblo-logo.png';
import backgroundImage from '../assets/hero-bg_v2.jpg';

const HeroSection = styled.section`
  width: 100%;
  background: url(${backgroundImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 950px;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xLarge} ${spacing.large};
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
`;

const Hero = ({ headline, tagline }) => {
  return (
    <HeroSection>
      <Logo src={logo} alt='Logo' />
      <HeroContent>
        <h1>{headline}</h1>
        <p className='body-text-medium'>{tagline}</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
