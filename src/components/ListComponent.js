import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';

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
  opacity: 0.6;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }
`;

const USPText = styled.div`
  display: flex;
  flex-direction: column;
  h3,
  p {
    color: ${(props) => props.textcolor || 'text'};
  }
`;

const ListComponent = ({ usps, textcolor }) => {
  return (
    <>
      {usps.map((usp, index) => (
        <USPItem key={index}>
          <USPIcon src={usp.icon} alt={`Icon ${index + 1}`} />
          <USPText textcolor={textcolor}>
            <h3>{usp.heading}</h3>
            <p className='body-text'>{usp.description} </p>
          </USPText>
        </USPItem>
      ))}
    </>
  );
};

export default ListComponent;
