import styles from 'styled-components';
import { colors, media } from 'styles/variables';
export const UnorderedList = styles.ul`
  list-style: none;
  
  li {
    display: inline-block;
    width: 100%;
    line-height: 40px;

    &:before {
      background: ${colors.primary};
      border-radius: 50%;
      content: '';
      display: inline-block;
      height: 6px;
      margin-right: 8px;
      vertical-align: middle;
      width: 6px;
    }

    
  }

  ${media.md} {
    padding: 32px;

    li {
      width: 24.5%;
    }
  }
`;
