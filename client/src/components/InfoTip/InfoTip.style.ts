import styled, { keyframes } from 'styled-components';
import { easeOut } from '../../styles/animations';

export const TipWrap = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

export const TipButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 1.4em;
  height: 1.4em;
  margin: -0.2em 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  opacity: 0.75;
  cursor: help;
  transition: opacity 150ms ease;

  svg {
    width: 1.1em;
    height: 1.1em;
  }

  &[aria-expanded='true'] {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 2px;
  }
`;

// Sits above the icon. --shift nudges it sideways so it never runs off screen.
// Only rendered while open, so a closed bubble can't widen the page on phones.
const tipIn = keyframes`
  from { opacity: 0; transform: translate(calc(-50% + var(--shift, 0px)), 4px); }
  to { opacity: 1; transform: translate(calc(-50% + var(--shift, 0px)), 0); }
`;

export const TipBubble = styled.span`
  position: absolute;
  bottom: calc(100% + 0.6rem);
  left: 50%;
  z-index: 50;
  width: max-content;
  max-width: min(17rem, calc(100vw - 2rem));
  padding: 0.75rem 0.875rem;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 0.75rem;
  background: #16121e;
  box-shadow: 0 16px 40px -12px rgb(0 0 0 / 80%);
  color: #e9e4f5;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  white-space: normal;
  transform: translate(calc(-50% + var(--shift, 0px)), 0);
  animation: ${tipIn} 200ms ${easeOut};

  /* little arrow pointing at the icon */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: calc(50% - var(--shift, 0px));
    border: 6px solid transparent;
    border-top-color: #16121e;
    transform: translateX(-50%);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
