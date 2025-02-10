import React from 'react';
import styled from 'styled-components';
import { spacing } from '../styles/tokens';

const CheckboxSection = styled.section`
  display: flex;
  align-items: start;
  margin-bottom: ${spacing.xSmall};
`;

const StyledCheckbox = styled.input`
  transform: scale(1.5);
  margin: ${spacing.xSmall} ${spacing.small} 0 0;
`;

const Checkbox = ({
  checkboxId,
  checkboxName,
  checkboxValue,
  checkboxLabel,
  checked,
  onChange,
}) => {
  return (
    <CheckboxSection>
      <StyledCheckbox
        type='checkbox'
        id={checkboxId}
        name={checkboxName}
        value={checkboxValue}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={checkboxId}>{checkboxLabel}</label>
    </CheckboxSection>
  );
};

export default Checkbox;
