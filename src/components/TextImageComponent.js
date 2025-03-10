import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '../styles/tokens';
import backgroundImage from '../assets/timeline.jpg';

const Wrapper = styled.div`
  width: 90%;
  /* max-width: 1200px; */
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: ${spacing.xLarge};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: none;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const TextImageSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.backgroundcolor || 'beige'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
`;

const TextImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

const ImageSection = styled.div`
  width: 50%;
  height: 350px;
  background: url(${backgroundImage}) center/cover no-repeat;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
    height: 250px;
  }
`;

const TextSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: ${spacing.large};
  }
`;

const TextImageComponent = ({ headline, text, backgroundcolor }) => {
  return (
    <Wrapper>
      <TextImageSection backgroundcolor={backgroundcolor}>
        <TextImageContent>
          <ImageSection />
          <TextSection>
            <h2>{headline}</h2>
            <p className='body-text'>{text}</p>
          </TextSection>
        </TextImageContent>
      </TextImageSection>
    </Wrapper>
  );
};

export default TextImageComponent;
