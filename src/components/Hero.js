import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { spacing, breakpoints, colors } from '../styles/tokens';
import backgroundImage from '../assets/bildpubblo.jpg';
import backgroundImageMobile from '../assets/bildpubblo-mobil.jpg';
import spielwarenmesseLogo from '../assets/spielwarenmesse.png';

import WaveImage from '../assets/wave.svg';
import newsData from '../data/news.json';
import Button from './Button';
import RollingBanner from './RollingBanner';

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
  padding-top: calc(${spacing.xXLarge} + 250px);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xLarge} ${spacing.large};
    padding-top: calc(${spacing.xLarge} + 270px);
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

const PartnerBanner = styled.div`
  background-color: ${colors.pink};
  box-sizing: border-box;
  color: white;
  padding: 12px ${spacing.xLarge};
  padding-left: ${spacing.xLarge};
  padding-right: 60px;
  position: absolute;
  top: 32px;
  left: 280px;
  width: calc(100% - 280px);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 36px 50%);
  z-index: 21;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    top: 24px;
    left: 20px;
    width: calc(100% - 20px);
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    clip-path: none;
    padding: ${spacing.medium};
  }
`;

const PartnerBannerLink = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  gap: ${spacing.medium};
  text-decoration: none;
  transition: opacity 160ms ease;
  margin-left: 31px;

  &:hover {
    opacity: 0.92;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
    gap: ${spacing.small};
    align-items: flex-start;
  }
`;

const PartnerBannerLogo = styled.img`
  width: 180px;
  height: auto;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    width: 120px;
  }
`;

const PartnerBannerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  max-width: 100%;
`;

const PartnerBannerTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const PartnerBannerMeta = styled.div`
  font-size: 15px;
  margin-top: 4px;
  opacity: 0.92;
`;

const LatestNewsBanner = styled.div`
  background-color: #3f8db8;
  box-sizing: border-box;
  color: white;
  padding: 12px ${spacing.xLarge};
  padding-left: max(0px, calc((100% - 1200px) / 2));
  padding-right: 60px;
  position: absolute;
  top: 222px;
  left: 0;
  width: fit-content;
  clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 50%, 100% 100%, 0 100%);
  z-index: 20;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    top: 214px;
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
  }
`;

const LatestNewsBannerLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  display: block;
  text-decoration: none;
  transition: opacity 160ms ease;

  &:hover {
    opacity: 0.92;
  }
`;

const MobileCTA = styled.div`
  display: none;
  margin-top: ${spacing.small};

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

const LatestNewsKicker = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
  opacity: 0.92;
  text-transform: uppercase;
`;

const LatestNewsTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;
  overflow-wrap: anywhere;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const LatestNewsMeta = styled.div`
  font-size: 20px;
  line-height: 1.35;
  max-width: 620px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const LatestNewsDate = styled.div`
  font-size: 13px;
  line-height: 1.3;
  margin-top: 6px;
  opacity: 0.9;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
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
`;

const CopyPanelContainer = styled.div`
  display: grid;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.medium};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const CopyWrap = styled.div`
  grid-row: 1;
  grid-column: 1;
  visibility: ${(p) => (p.$visible ? 'visible' : 'hidden')};
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 1800ms ease;
  position: relative;
  z-index: ${(p) => (p.$visible ? 10 : 0)};
  > p {
    max-width: 760px;
    font-size: 1.25rem;
  }

  > p.support {
    font-weight: 700;
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
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 700;
  transition:
    background 160ms ease,
    color 160ms ease;
  background: ${(p) =>
    p.$active
      ? p.$variant === 'publishers'
        ? colors.primary
        : colors.contrast
      : 'transparent'};
  border: none;
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

  const partnerNewsSlug = 'pubblo-partnership-spielwarenmesse-2027';

  const partnerNews = useMemo(() => {
    if (!Array.isArray(newsData) || newsData.length === 0) {
      return null;
    }
    return newsData.find((item) => item.slug === partnerNewsSlug) || null;
  }, [partnerNewsSlug]);

  const latestNews = useMemo(() => {
    if (!Array.isArray(newsData) || newsData.length === 0) {
      return null;
    }

    const sortedNews = [...newsData].sort((a, b) => b.date.localeCompare(a.date));
    const latestNonPartner = sortedNews.find(
      (item) => item.slug !== partnerNewsSlug,
    );

    return latestNonPartner || sortedNews[0];
  }, [partnerNewsSlug]);

  const latestNewsExcerpt = useMemo(() => {
    if (!latestNews?.body) {
      return 'Read the latest update from our news page...';
    }

    const firstLine = latestNews.body
      .split('\n')
      .map((line) => line.trim())
      .find(Boolean);

    const excerpt = firstLine || 'Read the latest update from our news page';
    return excerpt.replace(/[.!?]+$/, '') + '...';
  }, [latestNews]);

  const latestNewsPath = latestNews ? `/news/${latestNews.slug}` : '/news';
  const partnerNewsPath = partnerNews ? `/news/${partnerNews.slug}` : '/news';
  const partnerBannerText =
    partnerNews?.push?.trim() ||
    partnerNews?.title ||
    'Official partner of the Game Inventors Convention 2027';

  const onSelect = (value) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setAudience(value);
  };

  return (
    <HeroSection>
      <PartnerBanner>
        <PartnerBannerLink to={partnerNewsPath}>
          <PartnerBannerLogo src={spielwarenmesseLogo} alt='Spielwarenmesse' />
          <PartnerBannerText>
            <PartnerBannerTitle>{partnerBannerText}</PartnerBannerTitle>
            <PartnerBannerMeta>Read more</PartnerBannerMeta>
          </PartnerBannerText>
        </PartnerBannerLink>
      </PartnerBanner>
      <LatestNewsBanner>
        <LatestNewsBannerLink to={latestNewsPath}>
          <LatestNewsKicker>Latest news</LatestNewsKicker>
          <LatestNewsTitle>
            {latestNews
              ? latestNews.title
              : 'See the latest updates from Pubblo'}
          </LatestNewsTitle>
          <LatestNewsMeta>
            {latestNews
              ? latestNewsExcerpt
              : 'Read the latest update from our news page.'}
          </LatestNewsMeta>
          {latestNews && (
            <LatestNewsDate>{latestNews.date} · Click to read</LatestNewsDate>
          )}
        </LatestNewsBannerLink>
        <MobileCTA>
          <Link to={latestNewsPath} style={{ textDecoration: 'none' }}>
            <Button text='Read latest news' variant='primary' />
          </Link>
        </MobileCTA>
      </LatestNewsBanner>
      <HeroWrapper>
        <HeroContent>
          <SuperTitle>A better workflow for board game publishing</SuperTitle>
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
          <CopyPanelContainer>
            {audiences ? (
              Object.entries(audiences).map(([key, copy]) => (
                <CopyWrap key={key} $visible={audience === key}>
                  <h3>{copy.headline}</h3>
                  {copy.subhead && (
                    <p className='body-text-medium'>{copy.subhead}</p>
                  )}
                  {copy.support && (
                    <p className='body-text-medium support'>{copy.support}</p>
                  )}
                  <Button
                    text={copy.ctaText || buttonText}
                    onClick={onScrollToSection}
                    variant={key === 'designers' ? 'contrast' : 'primary'}
                  />
                </CopyWrap>
              ))
            ) : (
              <CopyWrap $visible={true}>
                <h3>{activeCopy.headline}</h3>
                {activeCopy.subhead && (
                  <p className='body-text-medium'>{activeCopy.subhead}</p>
                )}
                {activeCopy.support && (
                  <p className='body-text-medium support'>{activeCopy.support}</p>
                )}
                <Button
                  text={activeCopy.ctaText || buttonText}
                  onClick={onScrollToSection}
                  variant='primary'
                />
              </CopyWrap>
            )}
          </CopyPanelContainer>
        </HeroContent>
      </HeroWrapper>
      <RollingBanner desktopOnly headingAlignment='hero' />
      <WaveSection>
        <WaveImageContainer src={WaveImage} alt='Wave design' />
      </WaveSection>
    </HeroSection>
  );
};

export default Hero;
