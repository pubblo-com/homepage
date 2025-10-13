import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';
import backgroundImage from '../assets/hero-bg_1.jpg';
import backgroundImageMobile from '../assets/hero-bg_mobile_1.jpg';

import WaveImage from '../assets/wave.svg';
import Button from './Button';

const HeroSection = styled.section`
  width: 100%;
  height: 760px;
  background: url(${backgroundImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    background: url(${backgroundImageMobile}) center/cover no-repeat;
    justify-content: start;
    min-height: 600px;
    padding-bottom: 120px;
  }
`;

const HeroWrapper = styled.div`
  padding: 120px 0 ${spacing.xXLarge};
  display: flex;
  justify-content: start;
  max-width: 1200px;
  align-self: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const HeroContent = styled.div`
  width: 70%;
  max-width: 1200px;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xLarge} ${spacing.large};
    width: 70%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xLarge} ${spacing.large};
    width: 100%;
  }
`;

const WaveSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
  z-index: 1;
`;

const WaveImageContainer = styled.div`
  width: 100%;
  height: 120px;
  display: block;
  position: relative;
  bottom: -1px;
  background: #ffffff;
  background: linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
`;

const slideFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(16px); }
  to { opacity: 1; transform: translateX(0); }
`;

// removed unused gradientShift animation

const CopyWrap = styled.div`
  min-height: 280px;
  animation: ${(p) => (p.$audience === 'publishers' ? slideFromLeft : slideFromRight)} 320ms ease;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.xLarge};
  position: relative;
  z-index: 10;
  > p {
    max-width: 760px;
  }
`;

const SuperTitle = styled.h1`
  margin: 0 0 ${spacing.small};
  letter-spacing: 0.5px;
  line-height: 1.15;
  font-weight: 800;
  color: ${colors.text};
`;

const PillToggle = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  background: transparent;
  border: none;
  border-radius: 999px;
  padding: 0;
  margin-bottom: ${spacing.small};
`;

const PillButton = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 700;
  transition: background 160ms ease, color 160ms ease;
  background: ${(p) =>
    p.$active
      ? p.$variant === 'publishers'
        ? colors.buttonBackground
        : colors.contrast
      : 'transparent'};
  color: ${(p) => (p.$active ? '#fff' : colors.text)};
  &:hover {
    background: ${(p) =>
      p.$active
        ? p.$variant === 'publishers'
          ? colors.buttonBackground
          : colors.contrast
        : 'transparent'};
    color: ${(p) =>
      p.$active
        ? '#fff'
        : p.$variant === 'publishers'
        ? colors.buttonBackground
        : colors.contrast};
  }
`;

/**
 * audiences: {
 *   publishers: { headline, subhead, support, ctaText },
 *   designers: { headline, subhead, support, ctaText },
 * }
 */
const Hero = ({
  headline,
  tagline,
  buttonText,
  onScrollToSection,
  audiences,
  lockedAudience,
}) => {
  const prefersReducedMotion = useMemo(
    () =>
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  const [audience, setAudience] = useState(() => {
    if (lockedAudience === 'publishers' || lockedAudience === 'designers') {
      return lockedAudience;
    }
    const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('pubblo_audience')
        : null;
    return saved === 'designers' || saved === 'publishers'
      ? saved
      : 'publishers';
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    if (lockedAudience) return;
    window.localStorage.setItem('pubblo_audience', audience);
  }, [audience, lockedAudience]);

  useEffect(() => {
    if (!audiences || prefersReducedMotion || lockedAudience) return undefined;
    intervalRef.current = window.setInterval(() => {
      setAudience((a) => (a === 'publishers' ? 'designers' : 'publishers'));
    }, 7000);
    return () =>
      intervalRef.current && window.clearInterval(intervalRef.current);
  }, [audiences, prefersReducedMotion, lockedAudience]);

  const activeCopy = audiences
    ? audiences[audience]
    : { headline, subhead: tagline, support: '', ctaText: buttonText };

  const onSelect = (value) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setAudience(value);
  };

  return (
    <HeroSection>
      <HeroWrapper>
        <HeroContent>
          <SuperTitle>Powering licensing deals in the board game industry</SuperTitle>
          {audiences && !lockedAudience && (
            <PillToggle role='tablist' aria-label='Choose audience'>
              <PillButton
                role='tab'
                aria-selected={audience === 'publishers'}
                onClick={() => onSelect('publishers')}
                $variant='publishers'
                $active={audience === 'publishers'}
              >
                For publishers
              </PillButton>
              <PillButton
                role='tab'
                aria-selected={audience === 'designers'}
                onClick={() => onSelect('designers')}
                $variant='designers'
                $active={audience === 'designers'}
              >
                For designers
              </PillButton>
            </PillToggle>
          )}
          <CopyWrap key={audience} $audience={audience}>
            <h3>{activeCopy.headline}</h3>
            {activeCopy.subhead && (
              <p className='body-text-medium'>{activeCopy.subhead}</p>
            )}
            {activeCopy.support && (
              <p className='body-text-medium'>{activeCopy.support}</p>
            )}
            <Button
              text={activeCopy.ctaText || buttonText}
              onClick={onScrollToSection}
              variant={audience === 'designers' ? 'contrast' : 'primary'}
            />
          </CopyWrap>
        </HeroContent>
      </HeroWrapper>
      <WaveSection>
        <WaveImageContainer src={WaveImage} alt='Wave design' />
      </WaveSection>
    </HeroSection>
  );
};

export default Hero;
