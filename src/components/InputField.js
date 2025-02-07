import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: ${spacing.xSmall};
  font-weight: ${typography.fontWeightSemiBold}
`;

const StyledInput = styled.input`
  padding: ${spacing.small};
  margin-bottom: ${spacing.small};
  border: 1px solid #ccc; 
  border-radius: 8px; 
  font-size: 1rem;
`;


const InputField = ({ formData, handleChange, label, type, name, id }) => {

  return (
    <InputSection>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={formData[name]}
        onChange={handleChange}
      />
    </InputSection> 
  );
};

export default InputField;
