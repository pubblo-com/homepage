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

    background: url("data:image/svg+xml,%3Csvg width='80' height='12' viewBox='0 0 80 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,6 Q10,12 20,6 T40,6 T60,6 T80,6' stroke='white' stroke-width='2.5' fill='transparent'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: 80px 12px;
  }
`;

export default H2WithUnderline;
