import React from 'react';
import { Job, Container, Networks, Title } from './styles';
import Code from 'assets/icons/code.svg';
import Linkedin from 'assets/icons/linkedin.svg';
import Gmail from 'assets/icons/gmail.svg';
import Github from 'assets/icons/github.svg';
import withInView from 'hoc/withInView';
import Animated from 'components/Animation/Animated';

const AboutMe = (props: any) => (
  <Container>
    <Animated duration={0.5} delay={0} direction="top">
      <Title>
        Hi!
        <br />
        I'm César Mandamiento.
      </Title>
    </Animated>
    <Animated duration={0.5} delay={0.2} direction="top">
      <Job>
        <img src={Code} alt="César Mandamiento" className="icon" />
        Software Engineer at{' '}
        <a
          href="https://beauthentic.digital/"
          rel="noopener noreferrer"
          target="_blank"
        >
          authentic
        </a>
        .
      </Job>
    </Animated>
    <Animated duration={0.5} delay={0.4} direction="top">
      <Networks className="fadeUp--3">
        <a
          href="https://github.com/cmandamiento"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Github} alt="Github Cesar Mandamiento" />
        </a>
        <a
          href="https://www.linkedin.com/in/cmandamiento/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Linkedin} alt="LinkedIn César Mandamiento" />
        </a>

        <a href="mailto:cesarmandamiento@gmail.com">
          <img src={Gmail} alt="Mail to César Mandamiento" />
        </a>
      </Networks>
    </Animated>
  </Container>
);

export default withInView(AboutMe);
