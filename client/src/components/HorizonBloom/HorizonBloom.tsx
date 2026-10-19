import { useEffect, useRef, useState } from 'react';
import { BloomWrapper, BloomCanvas, BloomFallback } from './HorizonBloom.style';
import sunriseFallback from '../../assets/images/sunrise.png';
import { createFullscreenProgram, resizeCanvas } from '../../utils/webgl';

// A sunrise breaking over the glowing edge of a dark planet, drawn in a single
// WebGL fragment shader. Falls back to the static sunrise image without WebGL.

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uRise;
uniform vec2 uPointer;
uniform float uHorizon;   // top of the planet, as a fraction of height from the bottom
uniform float uDrop;      // how far the rim falls by the screen edges (fraction of height)

const float DAWN_DELAY = 0.2;   // seconds of darkness
const float DAWN_BUILD = 1.6;   // seconds to reach full glow

// Brand palette, from the far ends of the horizon in toward the sun: deep
// violet, the site's lavender, orchid pink, and a blush core (as in the
// headline gradient and the What We Do aurora).
const vec3 DEEP = vec3(0.30, 0.22, 0.72);      // #4d38b8
const vec3 LAVENDER = vec3(0.627, 0.518, 1.0); // #a084ff
const vec3 ORCHID = vec3(0.92, 0.62, 1.0);     // #eb9eff
const vec3 BLUSH = vec3(1.0, 0.86, 0.94);      // #ffdbf0
const vec3 SUNLIGHT = vec3(0.97, 0.94, 1.0);
const vec3 PLANET_LIT = vec3(0.085, 0.07, 0.15);    // surface near the rim
const vec3 PLANET_SHADOW = vec3(0.035, 0.03, 0.07); // surface further down

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// Smooth 1D value noise, for the aurora's slow ripples along the horizon
float noise1(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash(vec2(i, 0.0)), hash(vec2(i + 1.0, 0.0)), u);
}

float fbm1(float x) {
  return noise1(x) * 0.6 + noise1(x * 2.13 + 7.1) * 0.3 + noise1(x * 4.37 + 3.3) * 0.1;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2((frag.x / uResolution.x - 0.5) * aspect, frag.y / uResolution.y);

  // Planet: a large circle whose top sits at uHorizon and whose rim has fallen
  // by uDrop just past the left and right edges.
  // the frame just past the bottom corners.
  float edgeX = 0.55 * aspect;
  float radius = (edgeX * edgeX + uDrop * uDrop) / (2.0 * uDrop);
  vec2 center = vec2(uPointer.x * 0.012, uHorizon - radius - uPointer.y * 0.006);
  float d = length(p - center) - radius;   // > 0 above the surface
  float sky = smoothstep(-0.003, 0.003, d);

  float rise = uRise;
  // Dawn: a beat of complete darkness, then the glow builds once and holds,
  // like the sun is about to break the horizon.
  float swell = smoothstep(DAWN_DELAY, DAWN_DELAY + DAWN_BUILD, uTime);

  // Sun climbs from deep below the horizon and hovers just under the rim.
  float sunX = center.x + uPointer.x * 0.03;
  float surfaceY = center.y + sqrt(radius * radius - (sunX - center.x) * (sunX - center.x));
  vec2 sun = vec2(sunX, surfaceY + mix(-0.12, -0.032, rise) + 0.014 * swell);
  vec2 ds = p - sun;
  float sd = length(ds);

  float along = abs(p.x - sunX);
  float spread = mix(0.18, 0.9, rise) * (0.85 + 0.2 * swell) * max(1.0, aspect * 0.45);
  float lateral = exp(-(along * along) / (spread * spread));
  float above = max(d, 0.0);

  vec3 col = vec3(0.0);

  // Slow aurora ripples along the horizon: which stretches glow, and how high
  float along_ = p.x - center.x;
  float drift = uTime * 0.035;
  float patches = smoothstep(0.25, 0.85, fbm1(along_ * 3.6 + drift));
  // The sunrise glow (lateral) is wide; the rim gets a much tighter falloff of
  // its own so it's bright only near the middle and fades out well before the ends.
  float rimFocus = exp(-(along_ * along_) / 0.06);
  float waver = (fbm1(along_ * 1.4 - drift * 0.7 + 11.0) - 0.5) * 0.05;

  // Atmosphere scattering above the rim. Away from the sun it fades almost to
  // nothing and only glows where the aurora patches are, so the arc's ends
  // dissolve instead of finishing in a line.
  float atmosphere = exp(-above / (0.03 + 0.10 * lateral)) * (0.03 + 0.12 * patches + 0.85 * lateral);
  vec3 atmosphereCol = mix(DEEP, LAVENDER, lateral);
  atmosphereCol = mix(atmosphereCol, ORCHID, lateral * exp(-above / 0.07));
  atmosphereCol = mix(atmosphereCol, BLUSH, lateral * lateral * exp(-above / 0.025));
  col += atmosphereCol * atmosphere * 0.8 * sky;

  // Soft rim along the planet's edge: bright only near the sun, broken into
  // drifting patches elsewhere, never one hard line across the whole arc.
  float rim = exp(-abs(d) / (d > 0.0 ? 0.007 : 0.003));
  col += mix(LAVENDER, BLUSH, rimFocus) * rim * (0.015 + 0.05 * patches + 0.45 * rimFocus);

  // Aurora curtains floating above the rim: a soft ribbon whose height wavers,
  // lit in uneven patches with faint vertical streaks that fade upward.
  float lift = d - (0.07 + waver);
  float curtain = exp(-pow(lift / 0.035, 2.0)) * smoothstep(-0.05, 0.02, lift + 0.035);
  float streaks = 0.55 + 0.45 * noise1(along_ * 38.0 + drift * 6.0);
  float glowUp = exp(-max(lift, 0.0) / 0.05);
  vec3 auroraCol = mix(DEEP, LAVENDER, patches);
  auroraCol = mix(auroraCol, ORCHID, patches * glowUp * 0.6);
  col += auroraCol * curtain * patches * streaks * 0.32 * sky;

  // Sun bloom and horizontal flare, occluded by the planet
  float bloom = exp(-sd / 0.025) * 0.8 + exp(-sd / 0.11) * 0.3 + exp(-sd / 0.38) * 0.12;
  col += mix(ORCHID, SUNLIGHT, exp(-sd / 0.035)) * bloom * sky;
  float flare = exp(-abs(ds.y) / 0.004) * exp(-abs(ds.x) / (0.06 + 0.12 * rise));
  col += BLUSH * flare * 0.25 * sky;

  col *= rise * 0.6 * swell;

  // Night side of the planet catches a little light just under the rim
  col += LAVENDER * exp(d / 0.025) * 0.12 * lateral * rise * (1.0 - sky);

  // Planet surface: a few shades lighter than the sky so it reads as its own
  // layer. Lightest just under the rim, curving away into shadow below, with a
  // soft lavender sheen along the limb near the sun. It fades to black at the
  // bottom of the hero so it meets the next section without a seam.
  float depth = max(-d, 0.0);
  vec3 surface = mix(PLANET_LIT, PLANET_SHADOW, smoothstep(0.0, 0.4, depth));
  surface += LAVENDER * exp(-depth / 0.05) * 0.07 * (0.3 + 0.7 * lateral);
  float planetFade = smoothstep(0.0, 0.22, p.y);
  surface *= planetFade * (0.45 + 0.55 * swell);
  col += surface * (1.0 - sky);

  // Twinkling stars in the dark sky
  vec2 starUv = (frag + uPointer * 6.0) / uResolution.y * 55.0;
  vec2 cell = floor(starUv);
  float h = hash(cell);
  if (h > 0.955) {
    vec2 starPos = cell + vec2(hash(cell + 1.7), hash(cell + 9.2));
    float twinkle = 0.55 + 0.45 * sin(uTime * (0.8 + h * 2.5) + h * 60.0);
    float star = exp(-length(starUv - starPos) * 14.0) * twinkle * (0.4 + 0.6 * hash(cell + 3.1));
    float glowMask = 1.0 - clamp(atmosphere * lateral * 3.0 * rise, 0.0, 1.0);
    col += vec3(0.9, 0.9, 1.0) * star * 0.8 * glowMask * sky;
  }

  // Fade the top edge into the page background
  col *= smoothstep(1.0, 0.55, p.y);

  col = 1.0 - exp(-col * 0.95);
  col += (hash(frag + fract(uTime)) - 0.5) / 255.0;
  col = max(col, 0.0);

  // Premultiplied alpha: the sky is see-through, the planet body is solid.
  // The planet's far side fades to transparent (not just dark), so whatever is
  // behind the component shows through without a hard edge.
  float alpha = max(max(max(col.r, col.g), col.b), (1.0 - sky) * planetFade);
  gl_FragColor = vec4(col, alpha);
}
`;

// Default top of the planet as a fraction of height from the bottom: the hero
// splits its copy around this line (see Hero.style.ts HERO_SPLIT).
const DEFAULT_HORIZON = 0.48;

const RISE_DURATION = 1800;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type HorizonBloomProps = {
  /** Top of the planet, as a fraction of height from the bottom. */
  horizon?: number;
  /** How far the rim falls by the side edges, as a fraction of height.
      Defaults to a gentle arc that suits a full-screen hero. */
  drop?: number;
  /** Render upside down: planet overhead, glow spreading below it. */
  flip?: boolean;
};

const HorizonBloom = ({ horizon = DEFAULT_HORIZON, drop, flip = false }: HorizonBloomProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, antialias: false });
    if (!gl) {
      setFailed(true);
      return;
    }

    const created = createFullscreenProgram(gl, FRAGMENT_SHADER);
    if (!created) {
      setFailed(true);
      return;
    }
    const { program, dispose } = created;

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uRise = gl.getUniformLocation(program, 'uRise');
    const uPointer = gl.getUniformLocation(program, 'uPointer');
    const uHorizon = gl.getUniformLocation(program, 'uHorizon');
    const uDrop = gl.getUniformLocation(program, 'uDrop');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let riseStart: number | null = null;
    let frame = 0;
    let inView = true;

    const draw = (now: number) => {
      resizeCanvas(gl, canvas);
      if (riseStart === null) riseStart = now;
      const rise = reducedMotion ? 1 : easeOutCubic(Math.min((now - riseStart) / RISE_DURATION, 1));
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      // Reduced motion skips straight to the finished dawn.
      gl.uniform1f(uTime, reducedMotion ? 10 : (now - riseStart) / 1000);
      gl.uniform1f(uRise, rise);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uHorizon, horizon);
      // A gentle arc on wide screens, never steeper than a quarter of the height
      gl.uniform1f(uDrop, drop ?? Math.min(canvas.width * 0.14, canvas.height * 0.25) / canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      frame = inView && !document.hidden ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (reducedMotion) {
        draw(performance.now());
      } else if (!frame) {
        frame = requestAnimationFrame(loop);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      if (reducedMotion) draw(performance.now());
    });
    resizeObserver.observe(canvas);

    const onVisibility = () => {
      if (!document.hidden && inView) start();
    };

    document.addEventListener('visibilitychange', onVisibility);
    if (!reducedMotion) window.addEventListener('pointermove', onPointerMove, { passive: true });
    start();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      dispose();
    };
  }, [horizon, drop]);

  return (
    <BloomWrapper aria-hidden="true" $flip={flip}>
      {failed ? (
        <BloomFallback src={sunriseFallback} alt="" />
      ) : (
        <BloomCanvas ref={canvasRef} />
      )}
    </BloomWrapper>
  );
};

export default HorizonBloom;
