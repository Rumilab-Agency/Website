import styled from 'styled-components';

// Overhangs its parent by $pad on every side so the edge glow has room.
export const AuroraCanvas = styled.canvas<{ $ready: boolean; $pad: number }>`
  position: absolute;
  top: ${({ $pad }) => -$pad * 100}%;
  left: ${({ $pad }) => -$pad * 100}%;
  width: ${({ $pad }) => (1 + 2 * $pad) * 100}%;
  height: ${({ $pad }) => (1 + 2 * $pad) * 100}%;
  display: block;
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  transition: opacity 600ms ease;
`;

export const AuroraFallback = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;
