import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: auto;
  align-self: flex-end;
`;

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
