import React from 'react';
import { HeadingTitle, TextContent } from 'styles/components';
import { UnorderedList } from './styles';
import Animated from 'components/Animation/Animated';

const Skills = (props: any) => (
  <>
    <Animated duration={0.5} delay={0} direction="top">
      <HeadingTitle as="h2">My Skills</HeadingTitle>
    </Animated>

    <Animated duration={0.5} delay={0.5} direction="top">
      <TextContent>
        <p>
          I worked as Front-end developer last 6 years, but also, I've developed some
          web applications as Full-Stack developer, using PHP and Javascript.
        </p>
        <p>Currently, I'm working to became in a Full-Stack developer.</p>
        <UnorderedList>
          <li>Javascript</li>
          <li>Angular</li>
          <li>React</li>
          <li>Vue</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>AWS</li>
          <li>SCSS</li>
          <li>Styled-components</li>
          <li>Wordpress</li>
        </UnorderedList>
      </TextContent>
    </Animated>
  </>
);

export default Skills;
