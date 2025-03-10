import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/tokens';

const StyledButton = styled.button`
  width: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
