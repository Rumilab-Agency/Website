import styled, {  } from 'styled-components';

export const FloatingCTAButton = styled.a<{ isVisible?: boolean }>`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: 2px solid #a0a0ff;
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1000;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    opacity 0.4s ease,
    transform 0.4s ease;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(1.25rem)'};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  &:hover {
    background: #a0a0ff;
    color: #111;
  }

  @media (min-width: 768px) { /* example for md breakpoint */
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 1200px) { /* example for xl breakpoint */
    padding: 0.5rem 1.875rem;
    font-size: 1.25rem;
    border-radius: 1.875rem;
    border: 2px solid #a0a0ff;
  }
`;

