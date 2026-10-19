// Types for Galaxy.jsx (React Bits, kept as JavaScript with small local changes).
import type { CSSProperties, JSX } from 'react';

export type GalaxyProps = {
  starColors?: string[];
  hueShift?: number;
  saturation?: number;
  density?: number;
  glowIntensity?: number;
  starSize?: number;
  flareIntensity?: number;
  twinkleIntensity?: number;
  starSpeed?: number;
  speed?: number;
  rotationSpeed?: number;
  layers?: number;
  direction?: 'forward' | 'backward';
  mouseInteraction?: boolean;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  clickWarp?: boolean;
  intro?: boolean;
  focal?: [number, number];
  rotation?: [number, number];
  transparent?: boolean;
  backgroundColor?: string;
  lightMode?: boolean;
  opacity?: number;
  disableAnimation?: boolean;
  dpr?: number;
  /** Local addition: holds the field at warp speed (0 = off, ~1 = full warp). */
  warp?: number;
  /** Local addition: change this value (e.g. a counter) to make the stars sparkle once. */
  sparkle?: number;
  /** Local addition: how strong each sparkle is, from 0 to 1. */
  sparkleStrength?: number;
  className?: string;
  style?: CSSProperties;
};

export default function Galaxy(props: GalaxyProps): JSX.Element;
