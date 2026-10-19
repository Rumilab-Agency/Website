import styled from 'styled-components';

// Fills its (position: relative) parent as a background layer.
export const BloomWrapper = styled.div<{ $flip: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  transform: ${({ $flip }) => ($flip ? 'scaleY(-1)' : 'none')};
`;

export const BloomCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const BloomFallback = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: block;
`;
