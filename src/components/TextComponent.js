import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';

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
  color: ${(props) => props.textcolor || 'text'};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    color: ${(props) => props.textcolor || 'text'};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const TextComponent = ({ headline, text, backgroundcolor, textcolor }) => {
  return (
    <TextSection backgroundcolor={backgroundcolor}>
      <TextContent>
        <LeftSide textcolor={textcolor}>
          <h2>{headline}</h2>
        </LeftSide>

        <RightSide textcolor={textcolor}>
          <p className='body-text'>{text}</p>
        </RightSide>
      </TextContent>
    </TextSection>
  );
};

export default TextComponent;
