import React from "react";
import styled from "styled-components";
import { spacing, typography, colors } from '../styles/tokens';

const USPItem = styled.div`
  display: flex;
  align-items: top;
  margin-bottom: ${spacing.medium};
`;

const USPIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${spacing.small};
  margin-top: ${spacing.xSmall};
`;

const USPText = styled.div`
  display: flex;
  flex-direction: column;
  h3, p {
    color: ${props => props.textColor || 'text'};
  }
`;

const ListComponent = ({ usps, textColor }) => {
  return (
    <>
      {usps.map((usp, index) => (
        <USPItem key={index}>
          <USPIcon src={usp.icon} alt={`Icon ${index + 1}`} />
          <USPText textColor={textColor}>
            <h3>{usp.heading}</h3>
            <p className="body-text">{usp.description} </p>
          </USPText>
        </USPItem>
      ))}
    </>
  );
};

export default ListComponent;