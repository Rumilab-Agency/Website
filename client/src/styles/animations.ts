// src/styles/animations.ts
import { keyframes } from 'styled-components';

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
    filter: brightness(0.4) saturate(0.8);
    opacity: 0;
  }
  50% {
    filter: brightness(1) saturate(1.4);
    opacity: 0.8;
  }
  100% {
    filter: brightness(1.6) saturate(1);
    opacity: 1;
  }
`;
// Add more animations as needed
