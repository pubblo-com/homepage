import React from "react";
import styled from "styled-components";
import { spacing, typography, colors } from '../styles/tokens';

// Styled component for each USP item
const USPItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.medium};
`;

// Styled component for the pictogram (icon)
const USPIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: ${spacing.small};
`;

// Styled component for USP text
const USPText = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styled component for USP heading
const USPHeading = styled.h3`
  font-size: ${typography.fontSizeSubHeading};
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing.small};
`;

// Styled component for USP description (body text)
const USPDescription = styled.p`
  font-size: ${typography.fontSizeBase};
  line-height: ${typography.lineHeightBase};
  color: ${colors.text};
`;

// const usps = [
//   {
//     icon: 'icon1.svg',
//     heading: 'Fast and Reliable',
//     description: 'Experience lightning-fast delivery and guaranteed reliability.',
//   },
//   {
//     icon: 'icon2.svg',
//     heading: 'Easy Integration',
//     description: 'Our platform integrates seamlessly with your existing systems.',
//   },
//   {
//     icon: 'icon3.svg',
//     heading: 'Global Reach',
//     description: 'Connect with customers worldwide and grow your market.',
//   },
// ];

const ListComponent = ({ usps }) => {
  return (
    <>
          {usps.map((usp, index) => (
            <USPItem key={index}>
              <USPIcon src={usp.icon} alt={`Icon ${index + 1}`} />
              <USPText>
                <USPHeading>{usp.heading}</USPHeading>
                <USPDescription>{usp.description}</USPDescription>
              </USPText>
            </USPItem>
          ))}
    </>
  );
};

export default ListComponent;