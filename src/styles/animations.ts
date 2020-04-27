import { keyframes, css } from 'styled-components';

const appearUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const appearRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Fade = (direction: 'top' | 'left' | 'right' | 'bottom') => {
  let animation;
  switch (direction) {
    case 'top':
      animation = appearUp;
      break;
    case 'left':
      animation = appearRight;
      break;
    case 'right':
      animation = appearLeft;
      break;
    default:
      break;
  }

  return css`
    opacity: 0;
    animation-name: ${animation};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  `;
};
