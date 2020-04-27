import React from 'react';
import { HeadingTitle, TextContent, Row, Column } from 'styles/components';
import Legacy from 'assets/icons/legacy.svg';
import Authentic from 'assets/icons/authentic.svg';
import { Container } from './styles';
import withInView from 'hoc/withInView';
import Animated from 'components/Animation/Animated';

const Career = (props: any) => (
  <Container className={props.inView && 'is-inView'}>
    <Animated duration={0.5} delay={0} direction="top">
      <HeadingTitle className="fadeUp" as="h2">
        What I'm doing...
      </HeadingTitle>
    </Animated>
    <Row>
      <Column className="fadeUp">
        <Animated duration={0.5} delay={0.5} direction="left">
          <HeadingTitle as="h3">
            <img src={Authentic} alt="authentic." className="icon" />
            authentic.
          </HeadingTitle>
          <TextContent>
            <p>
              I'm working as Software Engineer at authentic, developing web
              applications using Angular.
            </p>
            <p>
              We work building scalable web applications based on Angular and SASS,
              but also we work with web applications developed with VanilaJS, React
              or Vue.
            </p>
            <p>I keep learning to do my best!</p>
          </TextContent>
        </Animated>
      </Column>
      <Column className="fadeUp">
        <Animated duration={0.5} delay={0.75} direction="right">
          <HeadingTitle as="h3">
            <img src={Legacy} alt="Legacy Studio" className="icon" />
            Legacy Studio
          </HeadingTitle>
          <TextContent>
            <p>
              I'm working as Full-Stack developer in Legacy Studio, developing web
              applications using React and Vue.
            </p>
            <p>
              I love work in Legacy's projects, because I feel as part of the staff.
              I can purpose things and all projects there developed from scratch.
            </p>
            <p>We are a small company but we have very interesting projects.</p>
            <p>
              Look at them:{' '}
              <a
                href="http://legacyrules.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Legacy Studio.
              </a>
            </p>
          </TextContent>
        </Animated>
      </Column>
    </Row>
  </Container>
);

export default withInView(Career);
