// Gold holo foil overlay, adapted from the "gold" preset of React Bits'
// HoloCard (https://reactbits.dev). HoloCard renders an image card that tilts
// under the pointer; this keeps only its smooth gold sheen (no etched lines,
// glitter flakes or edge sparkles), drawn as a layer on top of an existing
// element and screen-blended so dark areas leave it untouched. Nothing tilts
// or reacts to the pointer: the light and a virtual tilt drift slowly on their
// own (as HoloCard's idle mode does), so the foil keeps shimmering.
//
// Place inside a `position: relative` parent; it fills it and matches its
// corner radius.

import { useEffect, useRef } from 'react';
import './HoloFoil.css';

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// HoloCard's shader reduced to the gold preset. The art texture is gone (art is
// black), so the output is exactly the foil term HoloCard screens over its art.
const FRAGMENT = `#version 300 es
precision highp float;

uniform vec2 uSize;
uniform float uAspect;
uniform vec2 uTilt;
uniform vec2 uLight;
uniform float uDistance;
uniform float uIntensity;
uniform float uRadius;
uniform float uGlare;
uniform vec3 uFoil;

out vec4 outColor;

const float TAU = 6.28318530718;

vec3 hue(float t) {
  t = abs(fract(t * 0.5) * 2.0 - 1.0);
  vec3 c = mix(vec3(0.1, 0.25, 1.0), vec3(0.0, 0.85, 1.0), smoothstep(0.0, 0.25, t));
  c = mix(c, vec3(0.25, 1.0, 0.2), smoothstep(0.25, 0.45, t));
  c = mix(c, vec3(1.0, 0.92, 0.05), smoothstep(0.45, 0.65, t));
  c = mix(c, vec3(1.0, 0.45, 0.05), smoothstep(0.65, 0.85, t));
  return mix(c, vec3(0.95, 0.12, 0.3), smoothstep(0.85, 1.0, t));
}

void main() {
  vec2 uv = vec2(gl_FragCoord.x / uSize.x, 1.0 - gl_FragCoord.y / uSize.y);
  vec2 p = vec2(uv.x, uv.y * uAspect);
  vec2 center = vec2(0.5, 0.5 * uAspect);
  vec2 q = abs(p - center) - center + uRadius;
  float outside = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;
  float pixel = 1.0 / uSize.x;
  float alpha = clamp(0.5 - outside / pixel, 0.0, 1.0);
  if (alpha <= 0.0) {
    outColor = vec4(0.0);
    return;
  }

  mat3 rx = mat3(1.0, 0.0, 0.0, 0.0, cos(uTilt.x), sin(uTilt.x), 0.0, -sin(uTilt.x), cos(uTilt.x));
  mat3 ry = mat3(cos(uTilt.y), 0.0, -sin(uTilt.y), 0.0, 1.0, 0.0, sin(uTilt.y), 0.0, cos(uTilt.y));
  mat3 turn = rx * ry;
  vec3 world = turn * vec3(p - center, 0.0);
  vec3 view = normalize(transpose(turn) * (vec3(0.0, 0.0, uDistance) - world));
  vec3 lamp = vec3((uLight - 0.5) * vec2(1.1, 1.1 * uAspect), 0.9);
  vec3 light = normalize(transpose(turn) * (lamp - world));
  vec3 halfway = normalize(light + view);
  vec2 sweep = light.xy + view.xy;
  float sheen = pow(max(halfway.z, 0.0), 10.0);
  float shine = pow(max(halfway.z, 0.0), 80.0);

  vec3 metal = vec3(1.0, 0.74, 0.38) * dot(uFoil, vec3(0.3333)) * 1.15;
  vec4 look = vec4(0.3, 1.0, 0.2, 0.95);
  float phase = dot(sweep, vec2(cos(0.9), sin(0.9))) * look.x + dot(sweep, vec2(0.8, 0.6)) * look.y + 0.4 * look.z;
  vec3 tint = mix(hue(phase), metal, 0.65);
  vec3 foil = tint * (1.15 + 0.3 * sheen);
  float tilted = smoothstep(0.02, 0.21, length(sin(uTilt)));
  float awake = mix(0.2, 1.0, tilted);
  // 0.78 is the average strength the etched lines used to give, so the sheen
  // keeps the same overall brightness without them.
  float strength = uIntensity * 0.78 * awake;
  float band = 0.25 + 0.75 * smoothstep(0.3, 0.95, 0.5 + 0.5 * cos(phase * TAU * 0.5 + 1.3));
  vec3 color = clamp(foil * look.w * band * strength, 0.0, 1.0);
  color += vec3(sheen * 0.07 + shine * 0.3) * uGlare;
  // Left linear (no gamma lift): screened over the card, a gamma curve would
  // wash the whole face out instead of leaving the foil as a sheen.
  outColor = vec4(clamp(color, 0.0, 1.0) * alpha, alpha);
}
`;

type Props = {
  /** How strongly the foil shows, 0-1. */
  intensity?: number;
  /** Strength of the soft glossy highlight. */
  glare?: number;
  /** Colour of the metal under the foil (gold is derived from its brightness). */
  foilColor?: string;
  /** Largest virtual tilt used for the lighting drift, in degrees. */
  driftTilt?: number;
};

const FRAME_INTERVAL = 1000 / 30;

const parseColor = (value: string): [number, number, number] => {
  const fallback: [number, number, number] = [0.78, 0.8, 0.84];
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) return fallback;
  ctx.fillStyle = '#000000';
  ctx.fillStyle = value;
  const resolved = String(ctx.fillStyle);
  if (!resolved.startsWith('#') || resolved.length !== 7) return fallback;
  return [1, 3, 5].map(i => Math.pow(parseInt(resolved.slice(i, i + 2), 16) / 255, 2.2)) as [number, number, number];
};

const compile = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
};

const HoloFoil = ({
  intensity = 0.6,
  glare = 0.5,
  foilColor = '#e2e6ec',
  driftTilt = 20
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) return;
    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vertex || !fragment) return;
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, 'position');
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(program, name);
    const uSize = u('uSize');
    const uAspect = u('uAspect');
    const uTilt = u('uTilt');
    const uLight = u('uLight');
    const uDistance = u('uDistance');
    const uRadius = u('uRadius');
    gl.uniform1f(u('uIntensity'), Math.min(1, Math.max(0, intensity)));
    gl.uniform1f(u('uGlare'), Math.min(1, Math.max(0, glare)));
    const foil = parseColor(foilColor);
    gl.uniform3f(u('uFoil'), foil[0], foil[1], foil[2]);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Random start so the foil isn't caught at the same moment on every visit
    const clockOffset = Math.random() * 40;
    let radiusPx = 0;
    let raf = 0;
    let lastDraw = -Infinity;
    let inView = false;

    const draw = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;
      if (!w || !h) return;
      // HoloCard's idle drift: a slow sway of the light and a virtual tilt
      const t = reduce ? 6 : now / 1000 + clockOffset;
      const tiltX = Math.sin(t * 0.7) * driftTilt * 0.28;
      const tiltY = Math.sin(t * 0.53 + 1.2) * driftTilt * 0.4;
      gl.viewport(0, 0, w, h);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uSize, w, h);
      gl.uniform1f(uAspect, h / w);
      gl.uniform2f(uTilt, (tiltX * Math.PI) / 180, (tiltY * Math.PI) / 180);
      gl.uniform2f(uLight, 0.5 + Math.sin(t * 0.41) * 0.42, 0.38 + Math.sin(t * 0.33 + 0.6) * 0.3);
      gl.uniform1f(uDistance, 1100 / Math.max(1, canvas.clientWidth));
      gl.uniform1f(uRadius, radiusPx / Math.max(1, canvas.clientWidth));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      if (now - lastDraw >= FRAME_INTERVAL - 1) {
        lastDraw = now;
        draw(now);
      }
      raf = inView && !document.hidden ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (reduce) draw(performance.now());
      else if (!raf) raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      // A smooth gradient: extra device pixels add cost, not detail
      const dpr = 1;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      radiusPx = parseFloat(getComputedStyle(host).borderTopLeftRadius) || 0;
      draw(performance.now());
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
    });
    observer.observe(canvas);

    const onVisibility = () => {
      if (!document.hidden && inView) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [intensity, glare, foilColor, driftTilt]);

  return <canvas ref={canvasRef} className="holo-foil" aria-hidden="true" />;
};

export default HoloFoil;
