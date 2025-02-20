import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import H2WithUnderline from './H2WithUnderline';

const TextSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.backgroundcolor || 'transparent'};
  padding: ${spacing.xXLarge};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
  }
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p,
  h2 {
    color: ${(props) => props.textcolor || 'text'};
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const BigMessageComponent = ({
  headline,
  text,
  backgroundcolor,
  textcolor,
  underlinecolor,
}) => {
  return (
    <TextSection backgroundcolor={backgroundcolor}>
      <TextContent textcolor={textcolor}>
        <H2WithUnderline underlinecolor={underlinecolor}>
          {headline}
        </H2WithUnderline>
        <p className='body-text-large'>{text}</p>
      </TextContent>
    </TextSection>
  );
};

export default BigMessageComponent;
