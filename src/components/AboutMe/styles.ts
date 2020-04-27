import styles from 'styled-components';
import { media } from 'styles/variables';

export const Container = styles.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100%;
  /* Mobile issues*/
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  
  ${media.lg} {
    // display: flex;
    min-height: 100vh;
  }
  `;

export const Title = styles.h1`
  font-size: 36px;
  letter-spacing: -0.1px;
  margin: 8px 0;
  font-family: Passion One;
  
  strong {
    text-decoration: underline;
  }

  ${media.sm} {
    font-size: 60px;
  }

  ${media.md} {
    font-size: 70px;            
  }

  ${media.lg} {
    font-size: 80px;
  }
`;

export const Job = styles.div`
  font-size: 16px;
  margin: 1em 0;
  
  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    width: 20px;
  }

  ${media.sm} {
    font-size: 20px;

    .icon {
      margin-right: 12px;
      width: 24px;
    }
  }
`;

export const Networks = styles.div`
  margin: 1em 0;

  a {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
  }

  img {
    display: block;
    height: 20px;
    width: auto;
  }

  ${media.sm} {
    a {
      margin-right: 12px;
    }
    
    img {
      height: 30px;
    }
  }
`;
