// src/styles/animations.ts
import { keyframes } from 'styled-components';

// Strong custom curves: the built-in CSS easings are too weak.
export const easeOut = 'cubic-bezier(0.23, 1, 0.32, 1)';
export const easeInOut = 'cubic-bezier(0.77, 0, 0.175, 1)';

// Hover effects only on devices with a real pointer, so taps don't stick.
export const canHover = '@media (hover: hover) and (pointer: fine)';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  

export const sunriseGlow = keyframes`
  0% {
    filter: brightness(0.2) saturate(0.8);
    opacity: 0;
  }

  100% {
    filter: brightness(1.6) saturate(1);
    opacity: 1;
  }
`;

// Add more animations as needed
