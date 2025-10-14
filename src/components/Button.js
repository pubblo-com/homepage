import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../styles/tokens';

const StyledButton = styled.button`
  width: auto;
  border: ${(p) => (p.$variant === 'secondary' || p.$variant === 'secondary-contrast' ? '2px solid currentColor' : 0)};
  border-radius: 32px;
  padding: 12px 20px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(p) => {
    if (p.$variant === 'secondary') return colors.buttonBackground;
    if (p.$variant === 'secondary-contrast') return colors.contrast;
    return colors.buttonText;
  }};
  background: ${(p) => {
    if (p.$variant === 'contrast') return colors.contrast;
    if (p.$variant === 'primary') return colors.buttonBackground;
    return 'transparent';
  }};
  transition: background 200ms ease, color 200ms ease, border-color 200ms ease;

  &:hover {
    background: ${(p) => {
      if (p.$variant === 'contrast') return '#E24452';
      if (p.$variant === 'primary') return colors.buttonBackgroundHover;
      if (p.$variant === 'secondary') return 'rgba(42,48,234,0.08)';
      if (p.$variant === 'secondary-contrast') return 'rgba(249,81,96,0.08)';
      return 'transparent';
    }};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Button = ({ text, onClick, type = 'button', variant = 'primary', style }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      style={style}
      $variant={
        variant === 'contrast'
          ? 'contrast'
          : variant === 'secondary'
          ? 'secondary'
          : variant === 'secondary-contrast'
          ? 'secondary-contrast'
          : 'primary'
      }
    >
      {text}
    </StyledButton>
  );
};

export default Button;
