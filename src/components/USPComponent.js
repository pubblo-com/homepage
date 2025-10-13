import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';
import ListComponent from './ListComponent';
import backgroundImage from '../assets/curly-line.svg';
import WaveImage from '../assets/wave.svg';

const USPSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.backgroundcolor || 'transparent'};
  padding: ${spacing.xXLarge} ${spacing.xXLarge} ${spacing.xXLarge} ${spacing.xXLarge};
  padding-top: ${spacing.xXLarge * 2};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.large};
    padding-top: ${spacing.xLarge * 1.5};
  }
`;

const ImageSection = styled.div`
  width: min(85%, 1200px);
  height: min(700px, 55vh);
  position: absolute;
  bottom: 0;
  left: -15vw;
  z-index: 0;
  transform: rotate(0deg);
  transform-origin: bottom left;
  opacity: 0.18;
  background-color: ${colors.contrast};
  -webkit-mask-image: url(${backgroundImage});
  -webkit-mask-position: bottom left;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-image: url(${backgroundImage});
  mask-position: bottom left;
  mask-repeat: no-repeat;
  mask-size: contain;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const TopWave = styled.img`
  display: none;
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

  max-width: 1200px;
  margin: 0 auto;
  padding: 32px ${spacing.xXLarge};
  padding-left: 0;
  padding-right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px ${spacing.large};
  }
`;

const LeftSide = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.textColor || 'text'};
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.textColor || 'text'};
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const USPComponent = ({ headline, usps, backgroundcolor, textcolor }) => {
  return (
    <USPSection backgroundcolor={backgroundcolor}>
      <TopWave src={WaveImage} alt='' aria-hidden='true' />
      <ImageSection />
      <USPContent>
        <LeftSide textColor={textcolor}>
          <h2>{headline}</h2>
        </LeftSide>

        <RightSide>
          <ListComponent usps={usps} textcolor={textcolor} />
        </RightSide>
      </USPContent>
    </USPSection>
  );
};

export default USPComponent;
