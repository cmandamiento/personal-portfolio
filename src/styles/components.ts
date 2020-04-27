import styles from 'styled-components';
import { colors, media } from './variables';

type heading = 'h2' | 'h3';

const HeadingSizeMobile = {
  h2: '36px',
  h3: '28px',
};

const HeadingSizeTablet = {
  h2: '48px',
  h3: '40px',
};

export const HeadingTitle = styles.h2`
  font-family: Passion One;
  font-size: ${(props: any) => HeadingSizeMobile[props.as as heading]};
  margin: .5em 0;

  .icon {
    display: inline-block;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    width: auto;
  }

  &:after {
    content: '';
    margin-top: 5px;
    width: 50px;
    height: 2px;
    display: ${(props: any) => (props.as === 'h2' ? 'block' : 'none')};
    background: ${colors.primary}
  }


  ${media.sm} {
    font-size: ${(props: any) => HeadingSizeTablet[props.as as heading]};

    .icon {
      height: 32px;
      margin-right: 16px;
    }
  }
`;

export const TextContent = styles.div`
  line-height: 28px;
  margin-bottom: 64px;
  
  p {
    margin-bottom: 16px;
  }

  ${media.sm} {
    font-size: 18px;
    letter-spacing: 1px;
  }
  
  ${media.md} {
    padding-right: 24px;
    margin-bottom: 156px;
  }
`;

export const Row = styles.div`
  display: flex;
  flex-wrap: wrap;  
  margin: 0 -15px;
  mwidth: 100%;
`;

export const Column = styles.div`
  flex: 0 0 100%;
  padding: 0 15px;

  ${media.md} {
    flex: 1;
  }
`;
