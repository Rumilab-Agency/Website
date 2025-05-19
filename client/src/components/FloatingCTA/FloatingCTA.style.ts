import styled, {  } from 'styled-components';

export const FloatingCTAButton = styled.a<{ isVisible?: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: transparent;
  border: 2px solid #a0a0ff;
  color: #fff;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
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
    isVisible ? 'translateY(0)' : 'translateY(20px)'};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  &:hover {
    background: #a0a0ff;
    color: #111;
  }

  @media (min-width: 768px) { /* example for md breakpoint */
    padding: 8px 24px;
    font-size: 16px;
  }

  @media (min-width: 1200px) { /* example for xl breakpoint */
    padding: 8px 1.875vw;
    font-size: 1.25vw;
    border-radius: 1.875vw;
    border: 0.156vw solid #a0a0ff;
  }
`;

