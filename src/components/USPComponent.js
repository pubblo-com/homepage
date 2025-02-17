import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import ListComponent from './ListComponent';
import backgroundImage from '../assets/curly-line.svg';

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

const ImageSection = styled.div`
  width: 50%;
  height: 350px;
  background: url(${backgroundImage}) center/cover no-repeat;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 250px;
  }
`;

const USPComponent = ({ headline, usps, backgroundcolor, textcolor }) => {
  return (
    <USPSection backgroundcolor={backgroundcolor}>
      <USPContent>
        <LeftSide textColor={textcolor}>
          <h2>{headline}</h2>
          <ImageSection />
        </LeftSide>

        <RightSide>
          <ListComponent usps={usps} textcolor={textcolor} />
        </RightSide>
      </USPContent>
    </USPSection>
  );
};

export default USPComponent;
