import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, typography, breakpoints } from '../styles/tokens';
import { getConsent, setConsent, CONSENT_EVENT } from '../utils/consent';

const Bar = styled.div`
  position: fixed;
  left: ${spacing.medium};
  right: ${spacing.medium};
  bottom: ${spacing.medium};
  z-index: 1000;
  background: ${colors.secondary};
  color: ${colors.white};
  border-radius: 12px;
  padding: ${spacing.medium} ${spacing.large};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: ${spacing.large};
  font-size: ${typography.fontSizeBody};
  line-height: ${typography.lineHeightBase};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${spacing.medium};
    padding: ${spacing.medium};
  }
`;

const Text = styled.div`
  flex: 1;
  a {
    color: ${colors.lightblue};
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: ${spacing.small};
  flex-shrink: 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

const BaseBtn = styled.button`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizeBody};
  font-weight: ${typography.fontWeightSemiBold};
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid ${colors.white};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
`;

const Accept = styled(BaseBtn)`
  background: ${colors.white};
  color: ${colors.secondary};
  border-color: ${colors.white};

  &:hover {
    background: ${colors.lightblue};
  }
`;

const Decline = styled(BaseBtn)`
  background: transparent;
  color: ${colors.white};

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const onChange = () => setVisible(getConsent() === null);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  return (
    <Bar role='dialog' aria-live='polite' aria-label='Cookie consent'>
      <Text>
        We use essential cookies to run the site and, with your permission, Google Analytics
        to understand how the site is used. See our{' '}
        <Link to='/privacy'>Privacy Policy</Link> for details.
      </Text>
      <Actions>
        <Decline onClick={() => setConsent({ analytics: false })}>Decline</Decline>
        <Accept onClick={() => setConsent({ analytics: true })}>Accept analytics</Accept>
      </Actions>
    </Bar>
  );
};

export default CookieConsent;
