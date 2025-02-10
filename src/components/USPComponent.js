import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import ListComponent from './ListComponent';

const USPSection = styled.section`
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

const USPContent = styled.div`
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
  color: ${(props) => props.textColor || 'text'};

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

const USPComponent = ({ headline, usps, backgroundcolor, textColor }) => {
  return (
    <USPSection backgroundcolor={backgroundcolor}>
      <USPContent>
        <LeftSide textColor={textColor}>
          <h2>{headline}</h2>
        </LeftSide>

        <RightSide>
          <ListComponent usps={usps} textColor={textColor} />
        </RightSide>
      </USPContent>
    </USPSection>
  );
};

export default USPComponent;
