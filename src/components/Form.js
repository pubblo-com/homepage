import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';
import Checkbox from "./Checkbox";
import InputField from "./InputField";


const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  /* gap: ${spacing.xSmall}; */
  width: 100%;
  max-width: 500px

  
  /* // Style labels
  label {
    margin-bottom: ${spacing.xSmall}; // Add some space between label and input field
    font-weight: bold; // Make the label text bold for visibility
  }

  // Style input fields
  input {
    padding: ${spacing.small};
    margin-bottom: ${spacing.small}; // Add space between input fields
    border: 1px solid #ccc; // Add border to inputs
    border-radius: 4px; // Rounded corners for inputs
    font-size: 1rem;
  } */

  // Make form responsive on mobile
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.medium};
  }
`;

const Form = ({ headline, text, smallText, backgroundColor, textColor, inputFields }) => {

  
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

  const [status, setStatus] = useState(null); 

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
    setStatus('submitting')

    const form = e.target;
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      })
      .then(response => {
        setStatus('success');
        console.log("Form submitted successfully", response);
      })
      .catch(error => {
        setStatus('error');
        console.error("Error submitting form", error);
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
              
      <label>Checkbox options:</label>

      <Checkbox />

              {/* <div>
                <input type="checkbox" id="crm" name="areas" value="crm" />
                <label htmlFor="option1">The CRM tool for receiving pitches from game designers</label>
              </div> */}

     
              {/* <label>
                <input type="checkbox" name="scouting" /> Scouting for new games (unpublished and published)
              </label>
              <label>
                <input type="checkbox" name="connecting" /> Connecting with game designers and requesting new games
              </label>
              <label>
                <input type="checkbox" name="reselling" /> Making my games available for localization and distribution in new geographies
              </label> */}

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

        {/* <InputField 
          formData={formData}
          handleChange={handleChange}
          label="Name"
          type="text"
          name="name"
          id="name"
        /> */}

              {/* <label htmlFor="name">Name:</label>
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
              /> */}

      <button type="submit">Submit</button>
      status === 'submitting' && <p className="body-text">Submitting...</p>}
      {status === 'success' && <p className="body-text">Thank you for your message!</p>}
      {status === 'error' && <p className="body-text">There was an error submitting the form. Please try again.</p>}
    </StyledForm>
  );
};

export default Form;
