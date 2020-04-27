import withInView from 'hoc/withInView';
import React from 'react';
import styled from 'styled-components';
import { Fade } from 'styles/animations';

interface AnimationProps {
  duration: number;
  delay: number;
  inView: boolean;
  direction: 'top' | 'left' | 'right' | 'bottom';
}

const FadeComponent = styled.div<AnimationProps>`
  ${(props) => (props.inView ? Fade(props.direction) : `opacity: 0`)};
  animation-duration: ${(props) => props.duration}s;
  animation-delay: ${(props) => props.delay}s;
`;

const AnimatedComponent = ({
  inView,
  duration,
  delay,
  children,
  direction,
}: any) => (
  <FadeComponent
    inView={inView}
    duration={duration}
    delay={delay}
    direction={direction}
  >
    {children}
  </FadeComponent>
);

export default withInView(AnimatedComponent);
