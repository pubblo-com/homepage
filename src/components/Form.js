import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';
import Checkbox from "./Checkbox";
import InputField from "./InputField";


const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  width: 100%;
  max-width: 500px

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.medium};
  }
`;

const Label = styled.label`
  margin-bottom: ${spacing.xSmall};
  font-weight: ${typography.fontWeightSemiBold}
`;

const CheckboxSection = styled.div`
margin-bottom: ${spacing.medium};

`;

const InputSection = styled.div`

`;

const StyledButton = styled.button`
  width: auto;
  align-self: flex-end; 

`;


const Form = ({ headline, text, smallText, backgroundColor, textcolor, inputFields, checkboxes, checkboxId, checkboxLabel, checkboxName, checkboxValue }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    areas: [],
  });

  console.log('formdata', formData)

  const [status, setStatus] = useState(null); 

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => formDataObj.append(key, val));
      } else {
        formDataObj.append(key, value);
      }
    });

    fetch("/", {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <StyledForm
      name="contact-form"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
     >
      <input type="hidden" name="form-name" value="contact-form" />
              
      <Label>Checkbox options:</Label>

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

      <StyledButton type="submit">Submit</StyledButton>
      {status === 'submitting' && <p className="body-text">Submitting...</p>}
      {status === 'success' && <p className="body-text">Thank you for your message!</p>}
      {status === 'error' && <p className="body-text">There was an error submitting the form. Please try again.</p>}
    </StyledForm>
  );
};

export default Form;
