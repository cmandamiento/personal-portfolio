import styles from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styles.div`
  background: ${colors.black};
  padding: 15px;
  text-align: center;
  font-size: 12px;
  color: ${colors.white};
`;
