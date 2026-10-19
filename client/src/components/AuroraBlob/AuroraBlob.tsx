import { useEffect, useRef, useState } from 'react';
import { AuroraCanvas, AuroraFallback } from './AuroraBlob.style';
import { createFullscreenProgram, resizeCanvas } from '../../utils/webgl';

// Fills a transparent image's silhouette with slow-moving aurora light:
// swaying light curtains, a drifting pink/violet colour field, and a soft
// glow that spills just past the edges. The silhouette itself barely moves,
// so the shape stays recognisable. Size the parent to the image's aspect
// ratio; the canvas overhangs it by PAD so the glow isn't clipped.

const PAD = 0.08; // canvas overhang on each side, as a fraction of the image
const PAD_UV = PAD / (1 + 2 * PAD);

const FRAGMENT_SHADER = `
precision highp float;

uniform sampler2D uImage;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPad;

const vec3 VIOLET = vec3(0.42, 0.30, 1.0);
const vec3 PURPLE = vec3(0.627, 0.518, 1.0);   // #a084ff
const vec3 PINK = vec3(0.969, 0.502, 1.0);     // #f780ff
const vec3 LIGHT = vec3(0.96, 0.90, 1.0);
const float BRIGHTNESS = 0.8;   // overall light level

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    value += amplitude * noise(p);
    p *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

vec4 sampleImage(vec2 uv) {
  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));
  return texture2D(uImage, uv) * inside.x * inside.y;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 img = (uv - uPad) / (1.0 - 2.0 * uPad);
  float t = uTime * 0.05;

  // A whisper of edge drift so the silhouette breathes without changing shape
  vec2 drift = (vec2(fbm(img * 3.0 + t), fbm(img * 3.0 + vec2(4.1, 7.3) - t)) - 0.5) * 0.012;
  vec4 tex = sampleImage(img + drift);

  // Soft halo: the image's alpha blurred over 8 taps, alternating two radii
  float halo = 0.0;
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.7854;
    float radius = mod(float(i), 2.0) < 0.5 ? 0.015 : 0.035;
    halo += sampleImage(img + vec2(cos(a), sin(a)) * radius).a;
  }
  halo /= 8.0;

  // Aurora curtains: tall rays whose columns sway and whose brightness rolls upward
  float column = img.x * 5.0 + fbm(vec2(img.x * 1.2, img.y * 1.2 + t)) * 2.5;
  float rays = fbm(vec2(column, img.y * 0.35 - t * 1.2));
  rays = smoothstep(0.3, 0.75, rays);

  // Drifting colour field in the brand palette
  float hue = fbm(img * 1.5 + vec2(t * 0.8, -t * 0.5));
  vec3 aurora = mix(VIOLET, PURPLE, smoothstep(0.2, 0.5, hue));
  aurora = mix(aurora, PINK, smoothstep(0.45, 0.75, hue));
  aurora = mix(aurora, LIGHT, rays * 0.45);

  // Blend with the artwork's own gradient so it still reads as bg-why.png
  vec3 base = tex.rgb / max(tex.a, 0.001);
  vec3 color = mix(base, aurora, 0.4) * (0.85 + 0.55 * rays);
  float alpha = tex.a * (0.8 + 0.2 * rays);
  vec3 rgb = color * alpha;

  // Bright cores along the curtains
  rgb += LIGHT * rays * rays * 0.35 * tex.a;

  // Glow spilling just past the edges (premultiplied, so it adds light)
  float glow = halo * 0.35 * (1.0 - tex.a);
  rgb += aurora * glow;
  alpha = alpha + glow * (1.0 - alpha);

  // Living grain inside the shape
  rgb += (hash(floor(gl_FragCoord.xy) + floor(uTime * 8.0) * 13.1) - 0.5) * 0.04 * tex.a;

  rgb = clamp(rgb * BRIGHTNESS, 0.0, 1.0);
  alpha = max(alpha, max(rgb.r, max(rgb.g, rgb.b)));
  gl_FragColor = vec4(rgb, alpha);
}
`;

// Soft light doesn't need full resolution: render below 1x and let CSS scale
// it up, and cap at 30fps since the motion is slow. Both cut GPU load a lot.
const RENDER_SCALE = 0.75;
const FRAME_INTERVAL = 1000 / 30;

type Props = {
  src: string;
};

const AuroraBlob = ({ src }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, antialias: false });
    const created = gl && createFullscreenProgram(gl, FRAGMENT_SHADER);
    if (!gl || !created) {
      setFailed(true);
      return;
    }
    const { program, dispose } = created;

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    gl.uniform1f(gl.getUniformLocation(program, 'uPad'), PAD_UV);

    const texture = gl.createTexture();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let loaded = false;
    let disposed = false;
    let frame = 0;
    let inView = false;
    let startTime: number | null = null;
    let lastDraw = -Infinity;

    const draw = (now: number) => {
      if (!loaded) return;
      resizeCanvas(gl, canvas, RENDER_SCALE);
      if (startTime === null) startTime = now;
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, reducedMotion ? 0 : (now - startTime) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      if (now - lastDraw >= FRAME_INTERVAL - 1) {
        lastDraw = now;
        draw(now);
      }
      frame = inView && !document.hidden ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (reducedMotion) draw(performance.now());
      else if (!frame) frame = requestAnimationFrame(loop);
    };

    const image = new Image();
    image.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      // Non-power-of-two textures in WebGL1 need clamping and no mipmaps
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      loaded = true;
      setReady(true);
      if (inView || reducedMotion) start();
    };
    image.onerror = () => setFailed(true);
    image.src = src;

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

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      gl.deleteTexture(texture);
      dispose();
    };
  }, [src]);

  if (failed) return <AuroraFallback src={src} alt="" />;
  return <AuroraCanvas ref={canvasRef} $ready={ready} $pad={PAD} />;
};

export default AuroraBlob;
