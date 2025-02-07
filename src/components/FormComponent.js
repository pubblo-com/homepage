import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';

const FormSection = styled.section`
  width: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
  padding: ${spacing.xLarge};
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
  }
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 47%; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.textColor || 'text'};
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; 
  }
`;

const RightSide = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; 
  }
  `;

const FormComponent = ({ headline, text, smallText, backgroundColor, textColor }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    crm: "",
    scouting: "",
    connecting: "",
    reselling: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <FormSection backgroundColor={backgroundColor}>
      <FormContent>
        <LeftSide textColor={textColor}>
            <h2>{headline}</h2>
            <p className="body-text-medium">{text}</p>
            <p className="body-text-small">{smallText}</p>
        </LeftSide>

        <RightSide>
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact-form" />

              <label>
                <input type="checkbox" name="crm" /> The CRM tool for receiving pitches from game designers
              </label>
              <label>
                <input type="checkbox" name="scouting" /> Scouting for new games (unpublished and published)
              </label>
              <label>
                <input type="checkbox" name="connecting" /> Connecting with game designers and requesting new games
              </label>
              <label>
                <input type="checkbox" name="reselling" /> Making my games available for localization and distribution in new geographies
              </label>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="company">Company Name:</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
              />

              <label htmlFor="address">Company Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
            </form>
            <p className="body-text">Any questions, please contact us at info@pubblo.com</p>
        </RightSide>


      </FormContent>
    </FormSection>
  );
};

export default FormComponent;
