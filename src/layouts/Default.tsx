import React from 'react';
import styles from 'styled-components';

const DefaultLayout = styles.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 15px;
  width: 1440px;

  @media screen and (min-width: 1400px) {
    
  }
`;

const Layout = (props: any) => <DefaultLayout>{props.children}</DefaultLayout>;

export default Layout;
