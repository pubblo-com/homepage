import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';

const USPItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${spacing.medium};

  @media (min-width: ${breakpoints.tablet}) {
    margin-left: calc(-${(props) => props.$index * 60}px - 380px);
  }
`;

const USPIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: ${spacing.small};
  margin-top: ${spacing.xSmall};
  background-color: ${colors.contrast};
  -webkit-mask-image: url(${(p) => p.$src});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  mask-image: url(${(p) => p.$src});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;

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
        <USPItem key={index} $index={index}>
          <USPIcon $src={usp.icon} aria-hidden='true' />
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
