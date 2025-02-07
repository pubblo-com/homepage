import React, { useState } from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';



const Checkbox = () => {

  const CheckboxSection = styled.section`

`;

  return (
    <CheckboxSection>
      <input type="checkbox" id="crm" name="areas" value="crm" />
      <label htmlFor="option1">The CRM tool for receiving pitches from game designers</label>
    </CheckboxSection> 
  );
};

export default Checkbox;
