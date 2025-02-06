import React from "react";
import styled from "styled-components";
import { spacing } from '../styles/tokens';
import Button from "../components/Button"; 
import logo from "../assets/pubblo-logo.png";
import backgroundImage from "../assets/hero-bg_v2.jpg"; 

const HeroSection = styled.section`
  width: 100%;
  background: url(${backgroundImage}) center/cover no-repeat;s
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 950px; 
  padding: ${spacing.xLarge} ${spacing.xLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Logo src={logo} alt="Logo" />
      <HeroContent>
        <h1>A digital marketplace connecting the board game industry</h1> 
        <p className="body-text-medium">Like visiting a fair, without the travel!</p>
        <Button text="Sign up" />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
