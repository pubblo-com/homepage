import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import logo from '../assets/pubblo-logo.png';
import backgroundImage from '../assets/hero-bg_1.jpg';
import backgroundImageMobile from '../assets/hero-bg_mobile_1.jpg';

import WaveImage from '../assets/wave.svg';
import Button from './Button';

const HeroSection = styled.section`
  width: 100%;
  height: 600px;
  background: url(${backgroundImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    background: url(${backgroundImageMobile}) center/cover no-repeat;
    justify-content: start;
  }
`;

const HeroContent = styled.div`
  width: 60%;
  max-width: 950px;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xLarge} ${spacing.large};
    width: 70%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xLarge} ${spacing.large};
    width: 100%;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
`;

const WaveSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
`;

const WaveImageContainer = styled.img`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  bottom: -1px;
`;

const Hero = ({ headline, tagline, buttonText, onScrollToSection }) => {
  return (
    <HeroSection>
      <Logo src={logo} alt='Logo' />
      <HeroContent>
        <h1>{headline}</h1>
        <p className='body-text-medium'>{tagline}</p>
        <Button text={buttonText} onClick={onScrollToSection} />
      </HeroContent>
      <WaveSection>
        <WaveImageContainer src={WaveImage} alt='Wave design' />
      </WaveSection>
    </HeroSection>
  );
};

export default Hero;
