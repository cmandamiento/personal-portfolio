import styles from 'styled-components';
import { media } from 'styles/variables';

export const Heading = styles.h1`
  font-family: 'Passion One', cursive;
  font-size: 30px;
  font-weight: 400;
  margin: 0;

  ${media.sm} {
    font-size: 40px;
  }
`;
