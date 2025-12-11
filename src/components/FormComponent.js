import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import Form from './Form';

const FormSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: ${spacing.xLarge};
  padding-left: 0;
  padding-right: 0;
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
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.textcolor || 'text'};

  h2 {
    display: ${(props) => (props.$hideHeadline ? 'none' : 'block')};
  }

  p {
    display: ${(props) => (props.$hideText ? 'none' : 'block')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 0 0 ${spacing.large} 0;
  }
`;

const RightSide = styled.div`
  width: 0;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F9F8F6;
  padding: ${spacing.large};
  border-radius: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const FormComponent = forwardRef(
  (
    { headline, text, backgroundColor, textcolor, inputFields, checkboxes },
    ref,
  ) => {
    return (
      <FormSection ref={ref} backgroundColor={backgroundColor}>
        <FormContent>
          <LeftSide textcolor={textcolor} $hideHeadline={!headline} $hideText={!text}>
            <Form inputFields={inputFields} checkboxes={checkboxes} />
          </LeftSide>
          <RightSide />
        </FormContent>
      </FormSection>
    );
  },
);

FormComponent.displayName = 'FormComponent';

export default FormComponent;
