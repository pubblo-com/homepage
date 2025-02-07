import React from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';
import ListComponent from "./ListComponent";

const TextSection = styled.section`
  width: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
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

const TextComponent = ({ headline, text, smallText, backgroundColor, textColor, }) => {
  return (
    <TextSection backgroundColor={backgroundColor}>
      <TextContent>

        <LeftSide textColor={textColor}>
          <h2>{headline}</h2>
        </LeftSide>

        <RightSide>
          <p className="body-text-medium">{text}</p>
          <p className="body-text-small">{smallText}</p>
        </RightSide>
        
      </TextContent>
    </TextSection>
  );
};

export default TextComponent;

