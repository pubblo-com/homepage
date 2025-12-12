import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
//import { Link } from 'react-router-dom';
import { spacing, breakpoints, colors } from '../styles/tokens';
import backgroundImage from '../assets/bildpubblo.jpg';
import backgroundImageMobile from '../assets/bildpubblo-mobil.jpg';

import WaveImage from '../assets/wave.svg';
import Button from './Button';

const HeroSection = styled.section`
  width: 100%;
  min-height: 760px;
  background: url(${backgroundImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  /* Reserve space for the absolute-positioned wave at the bottom to prevent
    the next section from overlapping on small screens when text wraps */
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.mobile}) {
    background: url(${backgroundImageMobile}) center/cover no-repeat;
    justify-content: start;
    min-height: 600px;
  }
`;

const HeroWrapper = styled.div`
  padding: 120px 0 0;
  display: flex;
  justify-content: start;
  max-width: 1200px;
  align-self: center;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px ${spacing.small} 0;
  }
`;

const HeroContent = styled.div`
  width: 70%;
  max-width: 1200px;
  padding: ${spacing.xXLarge} ${spacing.xXLarge};
  padding-left: 0;
  padding-top: calc(${spacing.xXLarge} + 140px);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xLarge} ${spacing.large};
    padding-top: calc(${spacing.xLarge} + 160px);
    padding-bottom: 0;
    width: 70%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.large} ${spacing.small};
    padding-top: ${spacing.large};
    padding-bottom: 0;
    width: 100%;
  }
`;

const PinkBanner = styled.a`
  background-color: ${colors.pink};
  color: white;
  padding: 12px ${spacing.xLarge};
  padding-left: max(0px, calc((100% - 1200px) / 2));
  padding-right: 60px;
  position: absolute;
  top: 100px;
  left: 0;
  width: fit-content;
  clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 50%, 100% 100%, 0 100%);
  z-index: 20;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 160ms ease;
  
  &:hover {
    color: ${colors.contrast};
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: 90px;
    max-width: 90%;
    font-size: 16px;
    padding-left: calc(max(0px, (100% - 1200px) / 2) + ${spacing.xXLarge});
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    top: 0;
    width: 100%;
    max-width: 100%;
    clip-path: none;
    padding: ${spacing.medium};
    pointer-events: none;
    cursor: default;
  }
`;

const MobileCTA = styled.div`
  display: none;
  margin-top: ${spacing.small};

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

const WaveSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
  z-index: 1;
  pointer-events: none;
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
  margin-bottom: ${spacing.medium};
  position: relative;
  z-index: 10;
  > p {
    max-width: 760px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: auto;
    width: 100%;
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
        ? colors.primary
        : colors.contrast
      : 'transparent'};
  color: ${(p) => (p.$active ? '#fff' : colors.text)};
  &:hover {
    background: ${(p) =>
      p.$active
        ? p.$variant === 'publishers'
          ? colors.primary
          : colors.contrast
        : 'transparent'};
    color: ${(p) =>
      p.$active
        ? '#fff'
        : p.$variant === 'publishers'
        ? colors.primary
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
      <PinkBanner href="#early-bird-deals">
        <div style={{ fontSize: '36px', lineHeight: '1.2', marginBottom: '8px', fontWeight: 'bold' }}>
          Pubblo is set to launch in January 2026,
        </div>
        <div style={{ fontSize: '28px', lineHeight: '1.3', marginBottom: '8px' }}>
          which means this is the perfect time to join our journey <br />— check out our early-bird offers now!
        </div>
        <span style={{ fontSize: '14px', opacity: 0.9 }}>(and just between us: the site is still in beta and hasn't been fully optimized for mobile yet)</span>
        {/* Mobile-only CTA placed inside the pink banner after the copy */}
        <MobileCTA>
          <a href="#early-bird-deals" style={{ textDecoration: 'none', pointerEvents: 'auto' }}>
            <Button text="See early-bird deals" variant="primary" />
          </a>
        </MobileCTA>
      </PinkBanner>
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
