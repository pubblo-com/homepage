import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';
// import Checkbox from "./Checkbox";
import Form from "./Form";

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

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column; 
//   /* gap: ${spacing.xSmall}; */
//   width: 100%;
//   max-width: 500px

  
//   // Style labels
//   label {
//     margin-bottom: ${spacing.xSmall}; // Add some space between label and input field
//     font-weight: bold; // Make the label text bold for visibility
//   }

//   // Style input fields
//   input {
//     padding: ${spacing.small};
//     margin-bottom: ${spacing.small}; // Add space between input fields
//     border: 1px solid #ccc; // Add border to inputs
//     border-radius: 4px; // Rounded corners for inputs
//     font-size: 1rem;
//   }

//   // Make form responsive on mobile
//   @media (max-width: ${breakpoints.tablet}) {
//     padding: ${spacing.medium};
//   }
// `;

const FormComponent = ({ headline, text, smallText, backgroundColor, textColor, inputFields, }) => {
  
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   company: "",
  //   address: "",
  //   crm: "",
  //   scouting: "",
  //   connecting: "",
  //   reselling: "",
  // });

  // const [status, setStatus] = useState(null); 

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form submitted');
  //   setStatus('submitting')

  //   const form = e.target;
  //     fetch(form.action, {
  //       method: 'POST',
  //       body: new FormData(form),
  //     })
  //     .then(response => {
  //       setStatus('success');
  //       console.log("Form submitted successfully", response);
  //     })
  //     .catch(error => {
  //       setStatus('error');
  //       console.error("Error submitting form", error);
  //     });
  // };

  return (
    <FormSection backgroundColor={backgroundColor}>
      <FormContent>
        <LeftSide textColor={textColor}>
            <h2>{headline}</h2>
            <p className="body-text-medium">{text}</p>
            <p className="body-text-small">{smallText}</p>
        </LeftSide>

        <RightSide>
            <Form inputFields={inputFields}  />
            <p className="body-text">Any questions, please contact us at info@pubblo.com</p>
        </RightSide>

      </FormContent>
    </FormSection>
  );
};

export default FormComponent;
