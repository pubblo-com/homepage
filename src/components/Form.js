import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, typography, breakpoints } from '../styles/tokens';
import Checkbox from './Checkbox';
import InputField from './InputField';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.medium};
  }
`;

const Label = styled.label`
  margin-bottom: ${spacing.xSmall};
  font-weight: ${typography.fontWeightSemiBold};
`;

const CheckboxSection = styled.div`
  margin-bottom: ${spacing.medium};
`;

const InputSection = styled.div``;

const StyledButton = styled.button`
  width: auto;
  align-self: flex-end;
`;

const Form = ({ inputFields, checkboxes }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    areas: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      areas: checked
        ? [...prev.areas, value]
        : prev.areas.filter((area) => area !== value),
    }));
  };

  return (
    <StyledForm name='contact-form' method='POST' data-netlify='true'>
      <input type='hidden' name='form-name' value='contact-form' />

      <Label>I'm interested in:</Label>

      <CheckboxSection>
        {checkboxes.map((checkbox, index) => (
          <Checkbox
            key={index}
            checkboxId={checkbox.checkboxId}
            checkboxLabel={checkbox.checkboxLabel}
            checkboxName={checkbox.checkboxName}
            checkboxValue={checkbox.checkboxValue}
            checked={formData.areas.includes(checkbox.checkboxValue)}
            onChange={handleCheckboxChange}
          />
        ))}
      </CheckboxSection>

      <InputSection>
        {inputFields.map((input, index) => (
          <InputField
            key={index}
            formData={formData}
            handleChange={handleChange}
            label={input.label}
            type={input.type}
            name={input.name}
            id={input.id}
          />
        ))}
      </InputSection>

      <StyledButton type='submit'>Submit</StyledButton>
    </StyledForm>
  );
};

export default Form;
