import styles from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styles.div`
  background: ${colors.darkGray};
  padding: 200px 0;
  text-align: center;
  color: ${colors.white};

  a {
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.primary};
  }
`;
