// BorderGlow from React Bits (https://reactbits.dev), ported to TypeScript.
// Local change: instead of following the pointer, the glow traces once around
// the border when the card scrolls into view, then the whole border stays lit
// (CSS animation on --reveal). prefers-reduced-motion shows it lit at once.

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import './BorderGlow.css';

function parseHSL(hslStr: string) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars: Record<string, string> = {};
  for (let i = 0; i < opacities.length; i++) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }
  return vars;
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors: string[]) {
  const vars: Record<string, string> = {};
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
  }
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function isLightColor(color: string) {
  const value = color.trim().replace('#', '');
  if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(value)) return false;
  const hex = value.length === 3 ? value.split('').map(char => char + char).join('') : value;
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return red * 0.2126 + green * 0.7152 + blue * 0.0722 > 180;
}

type BorderGlowProps = {
  children?: ReactNode;
  className?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  /** Halo strength only (the light outside the card), 0-3. */
  glowIntensity?: number;
  colors?: string[];
  /** Master dimmer for every layer: border line, halo and inner tint. 0 = off, 1 = full. */
  brightness?: number;
  /** Inner edge tint strength, 0-1, before brightness is applied. */
  fillOpacity?: number;
  /** Seconds for the glow to trace once around the border. */
  traceDuration?: number;
  /** Seconds to wait after entering view, e.g. to stagger a row of cards. */
  traceDelay?: number;
};

const BorderGlow = ({
  children,
  className = '',
  glowColor = '40 80 80',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  brightness = 1,
  fillOpacity = 0.5,
  traceDuration = 1.6,
  traceDelay = 0,
}: BorderGlowProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Start the trace the first time the card is mostly in view
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      card.classList.add('border-glow-card--revealed');
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const glowVars = buildGlowVars(glowColor, glowIntensity);
  const lightSurface = isLightColor(backgroundColor);

  return (
    <div
      ref={cardRef}
      className={`border-glow-card${lightSurface ? ' border-glow-card--light' : ''} ${className}`}
      style={{
        '--card-bg': backgroundColor,
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--border-opacity': brightness,
        '--halo-opacity': brightness,
        '--fill-strength': fillOpacity * brightness,
        '--trace-duration': `${traceDuration}s`,
        '--trace-delay': `${traceDelay}s`,
        ...glowVars,
        ...buildGradientVars(colors),
      } as CSSProperties}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
