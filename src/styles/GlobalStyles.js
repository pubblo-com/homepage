import { createGlobalStyle } from 'styled-components';
import { colors, typography, spacing, breakpoints } from './tokens';

const GlobalStyle = createGlobalStyle`
  /* Reset Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global Typography */
  body {
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSizeBase};
    line-height: ${typography.lineHeightBase};
    color: ${colors.text};
    background-color: ${colors.background};
    margin: 0;
    padding: 0;
  }

  /* Headings */
  h1 {
    font-size: ${typography.fontSizeH1};
    font-weight: ${typography.fontWeightRegular};
    margin-bottom: ${spacing.small};
    /* color: ${colors.primary}; */
  }

  h2 {
    font-size: ${typography.fontSizeH2};
    font-weight: ${typography.fontWeightRegular};
    margin-bottom: ${spacing.medium};
    /* color: ${colors.secondary}; */
  }

  h3 {
    font-size: ${typography.fontSizeH3};
    font-weight: ${typography.fontWeightBold};
    /* margin-bottom: ${spacing.medium}; */
    color: ${colors.text};
  }

  /* Body Text (Base text) */
  .body-text {
    font-size: ${typography.fontSizeBody};
    /* margin-bottom: ${spacing.small}; */
    color: ${colors.text};
  }

  /* Variations for Body Text */
  .body-text-large {
    font-size: ${typography.fontSizeBodyLarge};
    /* margin-bottom: ${spacing.medium}; */
    color: ${colors.text};
  }

  .body-text-medium {
    font-size: ${typography.fontSizeBodyMedium};
    margin-bottom: ${spacing.medium};
    color: ${colors.text};
  }

  .body-text-small {
    font-size: ${typography.fontSizeBodySmall};
    /* margin-bottom: ${spacing.extraSmall}; */
    color: ${colors.text};
  }

  /* Links */
  a {
    text-decoration: none;
    color: ${colors.link};
    &:hover {
      color: ${colors.linkHover};
    }
  }

  /* Buttons */
  button {
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSizeBody};
    font-weight: ${typography.fontWeightSemiBold};
    background-color: ${colors.buttonBackground};
    color: ${colors.buttonText};
    border: none;
    border-radius: 80px;
    padding: ${spacing.small} ${spacing.medium};
    margin-bottom: ${spacing.small};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.buttonBackgroundHover};
    }

    &:focus {
      outline: none;
    }
  }

  /* Responsive Typography */
  @media (max-width: ${breakpoints.tablet}) {
    h1 {
      font-size: ${typography.fontSizeH1Mobile};
    }

    h2 {
      font-size: ${typography.fontSizeH2Mobile};
    }

    h3 {
      font-size: ${typography.fontSizeH3Mobile};
      margin-bottom: ${spacing.xSmall};
    }
  .body-text-large {
    font-size: ${typography.fontSizeBodyLargeMobile};
  }
  }
`;

export default GlobalStyle;
