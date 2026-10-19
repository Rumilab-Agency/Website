import styled from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';

// Round WhatsApp bubble in the corner. It fades in once the visitor scrolls
// past the hero and steps aside near the footer, where the contact details are.
export const FloatingCTAButton = styled.a<{ $visible: boolean }>`
  position: fixed;
  right: 1rem;
  bottom: calc(1rem + env(safe-area-inset-bottom));
  z-index: 1000;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 10px 30px -8px rgb(0 0 0 / 70%), 0 0 0 1px rgb(255 255 255 / 12%) inset;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(0.75rem) scale(0.9)')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 300ms ease, transform 400ms ${easeOut};

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  ${canHover} {
    &:hover {
      transform: scale(1.06);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 3px;
  }

  @media (min-width: ${breakpoints.md}) {
    right: 1.5rem;
    bottom: 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 200ms ease;
    transform: none;
  }
`;
