import styled from 'styled-components';
import { spacing } from '../styles/tokens';

const H2WithUnderline = styled.h2`
  position: relative;
  display: inline;
  width: fit-content;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 12px;
    margin-top: ${spacing.xSmall};
    background: ${(props) => {
      const color = encodeURIComponent(props.underlinecolor || 'white'); // URL-encode the color
      return `url("data:image/svg+xml,<svg width='80' height='12' viewBox='0 0 80 12' xmlns='http://www.w3.org/2000/svg'><path d='M0,6 Q10,12 20,6 T40,6 T60,6 T80,6' stroke='${color}' stroke-width='2.5' fill='transparent'/></svg>")`;
    }};
    background-repeat: repeat-x;
    background-size: 80px 12px;
  }
`;

export default H2WithUnderline;
