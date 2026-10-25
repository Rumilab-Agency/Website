import { useEffect, useRef, useState } from 'react';
import {
  StepsContainer, StepsTitle, Timeline, PathSvg, Sparkle, StepList, Step, StepNumber,
  StepBody, StepTitle, StepText,
} from './HowItWorks.style';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

const steps = [
  {
    title: 'Tell us about your business',
    text: 'Tap "Apply for a free website" and answer a few quick questions about what you do and who you serve. We reply within 1 day.',
  },
  {
    title: 'Discovery',
    text: 'A short call to understand your customers, your competitors and what a good month looks like for you. We then map out your pages and the key buttons that should bring in enquiries.',
  },
  {
    title: 'We design it',
    text: 'A custom design made for your business and your customers, never a template. You review it, and we refine it until it feels right.',
  },
  {
    title: 'We build and launch',
    text: 'Fast and mobile-first, tested on every kind of phone, tablets and laptops, with WhatsApp and your Google Business Profile connected.',
  },
  {
    title: 'We optimise to 5%',
    text: 'We track clicks on your key buttons and keep improving the site until at least 5 in every 100 visitors take action. If not, we refund your monthly fee and keep improving the site until they do.',
  },
];

// The line's tip follows this point of the viewport (0 = top, 1 = bottom).
const DRAW_LINE = 0.62;

type Point = { x: number; y: number };

// Builds one smooth path through the step nodes. When steps alternate sides,
// the path runs down beside each step's text, then sweeps across in an S-curve
// to the next node; in a single column it waves gently between the nodes.
const buildPath = (nodes: Point[], bottoms: number[]) => {
  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    if (Math.abs(b.x - a.x) > 40) {
      const from = Math.max(a.y, bottoms[i] - 8);
      const bend = (b.y - from) * 0.95;
      d += ` L ${a.x} ${from} C ${a.x} ${from + bend} ${b.x} ${b.y - bend} ${b.x} ${b.y}`;
    } else {
      const sway = (i % 2 === 0 ? 1 : -1) * 26;
      const third = (b.y - a.y) / 3;
      d += ` C ${a.x + sway} ${a.y + third} ${b.x + sway} ${b.y - third} ${b.x} ${b.y}`;
    }
  }
  return d;
};

const HowItWorks = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);
  const sparkleRef = useRef<HTMLSpanElement>(null);
  const [geometry, setGeometry] = useState({ d: '', width: 0, height: 0 });

  // Measure where the nodes sit and rebuild the path whenever the layout changes
  useIsomorphicLayoutEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const measure = () => {
      const box = timeline.getBoundingClientRect();
      const nodes: Point[] = [];
      const bottoms: number[] = [];
      stepRefs.current.forEach((step) => {
        const node = step?.querySelector('span');
        if (!step || !node) return;
        const r = node.getBoundingClientRect();
        nodes.push({ x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top });
        bottoms.push(step.getBoundingClientRect().bottom - box.top);
      });
      if (nodes.length < 2) return;
      setGeometry({ d: buildPath(nodes, bottoms), width: box.width, height: box.height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  // Draw the path up to the scroll position and light up the steps it has reached
  useEffect(() => {
    const timeline = timelineRef.current;
    const paths = lineRefs.current.filter((p): p is SVGPathElement => Boolean(p));
    if (!timeline || !paths.length || !geometry.d) return;

    const total = paths[0].getTotalLength();
    paths.forEach((p) => { p.style.strokeDasharray = `${total} ${total}`; });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Path length at which the path first reaches a given height
    const lengthAtY = (y: number) => {
      let lo = 0;
      let hi = total;
      for (let i = 0; i < 18; i++) {
        const mid = (lo + hi) / 2;
        if (paths[0].getPointAtLength(mid).y < y) lo = mid; else hi = mid;
      }
      return lo;
    };

    let frame = 0;
    let scrolling = false;
    let idle = 0;
    const update = () => {
      frame = 0;
      const box = timeline.getBoundingClientRect();
      const markerY = reduceMotion ? Infinity : window.innerHeight * DRAW_LINE - box.top;
      const drawn = markerY >= geometry.height ? total : markerY <= 0 ? 0 : lengthAtY(markerY);
      paths.forEach((p) => { p.style.strokeDashoffset = String(total - drawn); });

      const sparkle = sparkleRef.current;
      if (sparkle) {
        const point = paths[0].getPointAtLength(drawn);
        sparkle.style.left = `${point.x}px`;
        sparkle.style.top = `${point.y}px`;
        sparkle.classList.toggle('is-moving', scrolling && drawn > 0 && drawn < total - 1);
      }

      stepRefs.current.forEach((step) => {
        const node = step?.querySelector('span');
        if (!step || !node) return;
        const r = node.getBoundingClientRect();
        step.classList.toggle('is-reached', r.top + r.height / 2 - box.top <= markerY);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    // The sparkle shows while scrolling and hides shortly after it stops
    const onScroll = () => {
      scrolling = true;
      window.clearTimeout(idle);
      idle = window.setTimeout(() => { scrolling = false; schedule(); }, 450);
      schedule();
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idle);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', schedule);
    };
  }, [geometry]);

  return (
    <StepsContainer>
      <StepsTitle>How it works</StepsTitle>
      <Timeline ref={timelineRef}>
        <PathSvg
          aria-hidden="true"
          viewBox={`0 0 ${geometry.width || 1} ${geometry.height || 1}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="steps-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geometry.height || 1}>
              <stop offset="0" stopColor="#a084ff" />
              <stop offset="0.6" stopColor="#c9b8ff" />
              <stop offset="1" stopColor="#f780ff" />
            </linearGradient>
          </defs>
          {geometry.d && (
            <>
              <path className="track" d={geometry.d} />
              <path className="glow" d={geometry.d} ref={(el) => { lineRefs.current[0] = el; }} />
              <path className="line" d={geometry.d} ref={(el) => { lineRefs.current[1] = el; }} />
            </>
          )}
        </PathSvg>
        <Sparkle ref={sparkleRef} aria-hidden="true" />
        <StepList>
          {steps.map((step, idx) => (
            <Step key={step.title} ref={(el) => { stepRefs.current[idx] = el; }}>
              <StepNumber aria-hidden="true">{String(idx + 1).padStart(2, '0')}</StepNumber>
              <StepBody>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </StepBody>
            </Step>
          ))}
        </StepList>
      </Timeline>
    </StepsContainer>
  );
};

export default HowItWorks;
