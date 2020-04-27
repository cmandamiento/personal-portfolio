import React from 'react';
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import Layout from 'layouts/Default';
import AboutMe from 'components/AboutMe/AboutMe';
import Skills from 'components/Skills/Skills';
import Career from 'components/Career/Career';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

const Home = (props: any) => (
  <>
    <Layout>
      <Helmet>
        <title>Cesar Mandamiento | Front-end developer.</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Passion+One&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <AboutMe />
      <Skills />
      <Career />
    </Layout>
    <Contact />
    <Footer />
  </>
);

export default Home;
