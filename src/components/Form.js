import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, typography, breakpoints } from '../styles/tokens';
import Checkbox from './Checkbox';
import InputField from './InputField';
import Button from './Button';
import { getRecaptchaToken } from '../utils/recaptcha';
import { useI18n } from '../i18n/I18nProvider';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: none;
  background-color: #F9F8F6;
  padding: ${spacing.large};
  border-radius: 12px;

  @media (max-width: ${breakpoints.tablet}) {
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

const Collapsible = styled.div`
  max-height: ${(p) => (p.$open ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 250ms ease;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = ({ inputFields, checkboxes }) => {
  const { t } = useI18n();
  const labels = t('components.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    areas: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const recaptchaToken = await getRecaptchaToken('homepage_submit');
      const response = await fetch('/api/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      // Attempt to parse, but do not rely on the shape of the payload
      await response.json().catch(() => null);
      
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        areas: [],
      });
    } catch (error) {
      console.error('Homepage form error:', error);
      alert(labels.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Always show the input fields
  const isOpen = true;

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: spacing.xLarge }}>
        <h3 style={{ color: '#2e7d32' }}>{labels.thankYouTitle}</h3>
        <p>{labels.thankYouBody}</p>
        <Button text={labels.submitAnother} onClick={() => { setIsSubmitting(false); setSubmitted(false); }} />
      </div>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>

      <Label>{labels.interestedIn}</Label>

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

      <Collapsible $open={isOpen}>
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
        <ButtonSection>
          <Button type='submit' text={isSubmitting ? labels.submitting : labels.submit} disabled={isSubmitting} />
        </ButtonSection>
      </Collapsible>
    </StyledForm>
  );
};

export default Form;
