import styled, { keyframes } from 'styled-components';
import { breakpoints, Container, Title } from '../../layouts/AppLayout.style';
import { easeOut } from '../../styles/animations';

export const StepsContainer = styled(Container)`
  min-height: 0;
  background-color: black;
`;

export const StepsTitle = styled(Title)`
  color: #fff;
`;

// One path weaves through every step and draws itself as the page scrolls.
// Phones keep the steps in one column with the path waving down the left;
// from lg up the steps alternate sides and the path sweeps between them.
export const Timeline = styled.div`
  --node: 3rem;

  position: relative;
  width: 88%;
  max-width: 34rem;
  margin: 3.5rem auto 0;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 60rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    --node: 3.4vw;
    max-width: 66vw;
  }
`;

export const PathSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;

  .track {
    fill: none;
    stroke: rgb(160 132 255 / 14%);
    stroke-width: 1.5;
  }

  .glow {
    fill: none;
    stroke: url(#steps-line);
    stroke-width: 6;
    stroke-linecap: round;
    opacity: 0.35;
    filter: blur(6px);
  }

  .line {
    fill: none;
    stroke: url(#steps-line);
    stroke-width: 2;
    stroke-linecap: round;
  }
`;

// The star at the tip of the line, matching the form's progress twinkle. It
// only shows while the page is scrolling and fades away once scrolling stops.
const twinkle = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(0.75) rotate(0deg); opacity: 0.7; }
  50% { transform: translate(-50%, -50%) scale(1.15) rotate(22deg); opacity: 1; }
`;

// Painted before the steps, so it slips behind each number as it passes.
export const Sparkle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 35%, #f3e9ff);
  box-shadow: 0 0 12px 4px rgb(255 255 255 / 55%), 0 0 26px 8px rgb(247 128 255 / 45%);
  transform: translate(-50%, -50%) scale(0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 350ms ease, transform 450ms ${easeOut};

  /* two crossed rays */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.9rem;
    height: 1.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #fff 50%, transparent);
    transform: translate(-50%, -50%);
  }

  &::after {
    width: 1.5px;
    height: 1.9rem;
    background: linear-gradient(180deg, transparent, #fff 50%, transparent);
  }

  &.is-moving {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &.is-moving::before,
  &.is-moving::after {
    animation: ${twinkle} 900ms ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const StepList = styled.ol`
  position: relative;
  list-style: none;
  display: grid;
  gap: 6rem;

  @media (min-width: ${breakpoints.lg}) {
    gap: 10rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 11vw;
  }
`;

export const Step = styled.li`
  position: relative;
  min-height: var(--node);
  padding-left: calc(var(--node) + 1.25rem);

  @media (min-width: ${breakpoints.lg}) {
    width: 46%;
    padding-left: calc(var(--node) + 1.5rem);

    /* Even steps mirror the odd ones (circle on the outer right edge, text
       to its left) so the path swings evenly around the centre. */
    &:nth-child(even) {
      margin-left: auto;
      padding-left: 0;
      padding-right: calc(var(--node) + 1.5rem);
      text-align: right;
    }
  }
`;

// The gradient fill sits on a pseudo-element so it can fade in (gradients
// themselves can't transition) as the line reaches the step.
export const StepNumber = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  isolation: isolate;
  display: grid;
  place-items: center;
  width: var(--node);
  height: var(--node);
  border-radius: 50%;
  border: 1px solid rgb(160 132 255 / 35%);
  background: #08070d;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: #8f86a8;
  transition: color 500ms ease, border-color 500ms ease, box-shadow 700ms ${easeOut};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(135deg, #6b4dff 0%, #a084ff 45%, #f780ff 100%);
    opacity: 0.12;
    transition: opacity 700ms ${easeOut};
  }

  ${Step}.is-reached & {
    color: #fff;
    border-color: rgb(255 209 227 / 55%);
    box-shadow: 0 0 28px -4px rgb(200 140 255 / 75%);
  }

  ${Step}.is-reached &::before {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.lg}) {
    ${Step}:nth-child(even) & {
      left: auto;
      right: 0;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.1vw;
  }
`;

// Unreached steps stay readable, just quieter, so nothing is ever hidden.
export const StepBody = styled.div`
  opacity: 0.4;
  transform: translateY(8px);
  transition: opacity 700ms ${easeOut}, transform 700ms ${easeOut};

  ${Step}.is-reached & {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: opacity 300ms ease;
  }
`;

export const StepTitle = styled.h3`
  padding-top: 0.6rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  color: #fff;

  @media (min-width: ${breakpoints.xl}) {
    padding-top: 0.7vw;
    font-size: 1.45vw;
  }
`;

export const StepText = styled.p`
  margin-top: 0.625rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #b3adc4;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.1vw;
  }
`;
