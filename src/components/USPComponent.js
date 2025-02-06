import React from "react";
import styled from "styled-components";
import { spacing, typography, colors } from '../styles/tokens';
import ListComponent from "./ListComponent";

const USPSection = styled.section`
  width: 100%;
  /* background-color: ${colors.background}; */
  padding: ${spacing.xLarge};
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
`;

const USPContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  width: 45%; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightSide = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



const USPComponent = ({ headline, usps }) => {
  return (
    <USPSection>
      <USPContent>

        <LeftSide>
          <h2>{headline}</h2>
        </LeftSide>

        <RightSide>
          <ListComponent usps={usps}/>
        </RightSide>
        
      </USPContent>
    </USPSection>
  );
};

export default USPComponent;

