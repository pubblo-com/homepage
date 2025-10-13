import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography, breakpoints } from '../styles/tokens';
import heroBg from '../assets/hero-bg_1.jpg';
import H2WithUnderline from '../components/H2WithUnderline';

// Assumption: Launch is at 10:00 Stockholm local time (CEST) on 2025-10-23.
// CEST is UTC+2 on this date, so absolute moment is 2025-10-23T08:00:00Z.
const TARGET_UTC_ISO = '2025-10-23T08:00:00Z';

const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xXLarge};
  position: relative;
  background: url(${heroBg}) center/cover no-repeat fixed;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17,19,94,0.75) 0%, rgba(17,19,94,0.85) 100%);
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  min-width: 333px;
  background: ${colors.white};
  border-radius: 24px;
  box-shadow: 0 16px 60px rgba(0,0,0,0.15);
  padding: ${spacing.xXLarge};
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
  }
`;

const Title = styled.h1`
  font-size: ${typography.fontSizeH1};
  line-height: 1.1;
  color: ${colors.secondary};
  margin-bottom: ${spacing.large};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography.fontSizeH1Mobile};
  }
`;

// Smaller title variant for secondary headings on the page
const SmallTitle = styled.h2`
  font-size: ${typography.fontSizeH2};
  line-height: 1.2;
  color: ${colors.secondary};
  margin-bottom: ${spacing.medium};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography.fontSizeH2Mobile};
  }
`;

const Subtitle = styled.p`
  font-size: ${typography.fontSizeBodyMedium};
  color: ${colors.text};
  margin-bottom: ${spacing.xLarge};
`;

const Countdown = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.medium};
  margin-bottom: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Unit = styled.div`
  background: ${colors.beige};
  border-radius: 16px;
  padding: ${spacing.large};
`;

const Value = styled.div`
  font-size: 48px;
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  line-height: 1;
`;

const Label = styled.div`
  margin-top: ${spacing.xSmall};
  color: ${colors.secondary};
  font-weight: ${typography.fontWeightSemiBold};
`;

// No CTA on launch page; content mirrors homepage hero copy

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return useMemo(() => {
    const diff = Math.max(0, target - now);
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { diff, days, hours, minutes, seconds };
  }, [now, target]);
}

const LaunchPage = () => {
  const targetMs = useMemo(() => new Date(TARGET_UTC_ISO).getTime(), []);
  const { diff, days, hours, minutes, seconds } = useCountdown(targetMs);

  // If we're past the launch moment: trigger a hard reload of /launch
  // Server will decide and redirect to portal, preserving query and optional hash
  useEffect(() => {
    if (diff <= 0) {
      const url = new URL(window.location.href);
      // send current hash to server via ?hash= param to preserve it
      const currentHash = (window.location.hash || '').replace(/^#/, '');
      if (currentHash && !url.searchParams.has('hash')) {
        url.searchParams.set('hash', currentHash);
      }
      url.pathname = '/launch';
      window.location.replace(url.toString());
    }
  }, [diff]);
  // Format launch time in Stockholm timezone with short tz name (e.g., CEST)
  const stockholmDate = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Stockholm',
        day: 'numeric', month: 'long',
        hour: '2-digit', minute: '2-digit',
        timeZoneName: 'short'
      }).format(new Date(TARGET_UTC_ISO));
    } catch (e) {
      // Fallback if Intl/timeZone unsupported
      return '23 October 10:00 CEST';
    }
  }, []);

  // Dynamic marketing title based on the incoming route/hash intent
  const computedTitle = useMemo(() => {
    if (typeof window === 'undefined') return 'Welcome back to join start your trial!';
    const href = window.location.href?.toLowerCase() || '';
    let hashParam = '';
    try {
      const url = new URL(window.location.href);
      hashParam = (url.searchParams.get('hash') || '').toLowerCase();
    } catch (error) {
      // Ignore URL parsing errors
    }
    const haystack = `${href} ${hashParam}`;
    if (haystack.includes('spielpitch')) {
      return 'Welcome back to join the SPIEL Pitch Competition and start your free trial';
    }
    if (haystack.includes('/create-account/')) {
      return 'Welcome back to start your free trial';
    }
    return 'Welcome back to start your trial!';
  }, []);
  return (
    <Wrapper>
      <Card>
        {/* Pre-countdown message */}
        <Title>The countdown has started.</Title>
        <Subtitle>
          Pubblo goes live at <strong>{stockholmDate}</strong>. Stay tuned.
        </Subtitle>

        {/* Countdown tiles */}
        <Countdown>
          <Unit>
            <Value>{String(days).padStart(2, '0')}</Value>
            <Label>Days</Label>
          </Unit>
          <Unit>
            <Value>{String(hours).padStart(2, '0')}</Value>
            <Label>Hours</Label>
          </Unit>
          <Unit>
            <Value>{String(minutes).padStart(2, '0')}</Value>
            <Label>Minutes</Label>
          </Unit>
          <Unit>
            <Value>{String(seconds).padStart(2, '0')}</Value>
            <Label>Seconds</Label>
          </Unit>
        </Countdown>

        {/* Marketing copy under the clock */}
      <SmallTitle>{computedTitle}</SmallTitle>
              <Subtitle>
                  Looking forward to seeing you then!
              </Subtitle>
      
      <div style={{ marginTop: spacing.medium }}>
        <H2WithUnderline underlinecolor={colors.contrast}>
          Work smarter. With Pubblo, it's simple.
        </H2WithUnderline>
      </div>
      </Card>
    </Wrapper>
  );
};

export default LaunchPage;
