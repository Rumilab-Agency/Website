import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';

const ACCENT = '#a084ff';
const PINK = '#f780ff';

// ---------------------------------------------------------------- progress

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProgressTrack = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${breakpoints.md}) {
    gap: 1.25rem;
  }
`;

// The current step's dot twinkles like a star when you arrive: it flares bright,
// four thin rays flash out and fade, then it settles into a soft glow. The
// animation restarts each time a dot becomes current, going forward or back.
const flare = keyframes`
  0% {
    transform: scale(0.4);
    box-shadow: 0 0 0 0 rgb(255 255 255 / 0%);
  }
  35% {
    transform: scale(1.7);
    box-shadow: 0 0 12px 4px rgb(255 255 255 / 90%), 0 0 26px 8px rgb(247 128 255 / 55%);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px 2px rgb(160 132 255 / 55%);
  }
`;

const rays = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(20deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25) rotate(45deg);
  }
`;

export type DotState = 'done' | 'current' | 'todo';

export const ProgressDot = styled.span<{ $state: DotState }>`
  position: relative;
  flex: none;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transition: background-color 300ms ease, border-color 300ms ease;

  ${({ $state }) =>
    $state === 'done'
      ? css`
          background: ${ACCENT};
        `
      : $state === 'todo'
        ? css`
            border: 1.5px solid rgb(255 255 255 / 22%);
          `
        : css`
            width: 0.625rem;
            height: 0.625rem;
            background: radial-gradient(circle, #fff 35%, #f3e9ff);
            box-shadow: 0 0 10px 2px rgb(160 132 255 / 55%);
            animation: ${flare} 700ms ${easeOut} both;

            /* two crossed rays */
            &::before,
            &::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 1.75rem;
              height: 1.5px;
              border-radius: 2px;
              background: linear-gradient(90deg, transparent, #fff 50%, transparent);
              opacity: 0;
              pointer-events: none;
              animation: ${rays} 700ms ${easeOut} both;
            }

            &::after {
              width: 1.5px;
              height: 1.75rem;
              background: linear-gradient(180deg, transparent, #fff 50%, transparent);
            }
          `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::before,
    &::after {
      animation: none;
    }
  }
`;

export const ProgressCount = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #9d97ad;
  font-variant-numeric: tabular-nums;
`;

// ---------------------------------------------------------------- step motion

const inNext = keyframes`
  from { opacity: 0; transform: translateX(56px); }
  to { opacity: 1; transform: none; }
`;
const inPrev = keyframes`
  from { opacity: 0; transform: translateX(-56px); }
  to { opacity: 1; transform: none; }
`;
const outNext = keyframes`
  to { opacity: 0; transform: translateX(-56px); }
`;
const outPrev = keyframes`
  to { opacity: 0; transform: translateX(56px); }
`;

export type StepMotion = 'in-next' | 'in-prev' | 'out-next' | 'out-prev';

const MOTION = {
  'in-next': css`animation: ${inNext} 450ms ${easeOut} both;`,
  'in-prev': css`animation: ${inPrev} 450ms ${easeOut} both;`,
  'out-next': css`animation: ${outNext} 200ms ease-in both;`,
  'out-prev': css`animation: ${outPrev} 200ms ease-in both;`,
};

export const StepPanel = styled.div<{ $motion: StepMotion }>`
  margin-top: 2.5rem;
  min-height: 20rem;
  ${({ $motion }) => MOTION[$motion]}

  @media (min-width: ${breakpoints.md}) {
    margin-top: 3.5rem;
    min-height: 22rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// ---------------------------------------------------------------- copy

export const Question = styled.h2`
  &:focus {
    outline: none;
  }

  font-size: clamp(1.875rem, 4.5vw, 3.25rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
`;

export const Hint = styled.p`
  margin: 0.75rem 0 2rem;
  font-size: 1.0625rem;
  line-height: 1.5;
  color: #b3adc4;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.125rem;
  }
`;

export const ErrorText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ff8fa3;
`;

// ---------------------------------------------------------------- fields

const fieldBase = css`
  width: 100%;
  border-radius: 1rem;
  border: 2px solid rgb(255 255 255 / 14%);
  background: #0d0a12;
  padding: 1rem 1.25rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.25rem;
  transition: border-color 150ms ease, box-shadow 150ms ease;

  &::placeholder {
    color: #6f6982;
  }

  &:focus {
    outline: none;
    border-color: ${ACCENT};
    box-shadow: 0 0 0 4px rgb(160 132 255 / 22%);
  }

  &[aria-invalid='true'] {
    border-color: #ff8fa3;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const TextInput = styled.input`
  ${fieldBase}
`;

export const TextArea = styled.textarea`
  ${fieldBase}
  resize: none;
  font-size: 1.125rem;
  line-height: 1.5;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export const FollowUp = styled.div`
  margin-top: 1.25rem;
`;

export const FollowUpLabel = styled.label`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 1rem;
  color: #b3adc4;
`;

// ---------------------------------------------------------------- choices

export const ChoiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    gap: 0.75rem;
  }
`;

// A full-size label around a visually hidden native radio/checkbox, so keyboard,
// screen-reader and form behaviour all stay native.
export const Choice = styled.label<{ $checked: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 3.5rem;
  justify-content: center;
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  border: 2px solid ${({ $checked }) => ($checked ? ACCENT : 'rgb(255 255 255 / 14%)')};
  background: ${({ $checked }) => ($checked ? 'rgb(160 132 255 / 14%)' : '#0d0a12')};
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;

  @media (min-width: ${breakpoints.md}) {
    padding: 0.875rem 1.125rem;
    font-size: 1.0625rem;
  }
  transition: border-color 150ms ease, background-color 150ms ease, transform 160ms ${easeOut};

  ${canHover} {
    &:hover {
      border-color: ${({ $checked }) => ($checked ? ACCENT : 'rgb(255 255 255 / 32%)')};
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:has(input:focus-visible) {
    outline: 2px solid ${PINK};
    outline-offset: 3px;
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

export const ChoiceNote = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #b3adc4;
`;

// ---------------------------------------------------------------- actions

export const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.875rem;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 150ms ease, color 150ms ease, opacity 150ms ease, transform 160ms ${easeOut};

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${PINK};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const PrimaryButton = styled.button`
  ${buttonBase}
  border: none;
  color: #0b0710;
  background: linear-gradient(90deg, ${ACCENT}, ${PINK});

  ${canHover} {
    &:hover:not(:disabled) {
      opacity: 0.88;
    }
  }
`;

export const SecondaryButton = styled.button`
  ${buttonBase}
  border: 2px solid rgb(255 255 255 / 22%);
  background: transparent;
  color: #fff;

  ${canHover} {
    &:hover {
      background-color: rgb(255 255 255 / 8%);
    }
  }
`;

export const Fallback = styled.p`
  margin-left: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #9d97ad;
  text-align: right;

  a {
    color: #d6d0e4;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  ${canHover} {
    a:hover {
      color: #fff;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 0;
    flex-basis: 100%;
    text-align: left;
  }
`;

// ---------------------------------------------------------------- sending

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// A small ring in the brand gradient, turning while the enquiry sends
export const Loader = styled.span`
  display: block;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  border: 3px solid rgb(255 255 255 / 12%);
  border-top-color: ${ACCENT};
  border-right-color: ${PINK};
  animation: ${spin} 900ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2400ms;
  }
`;

// ---------------------------------------------------------------- done

export const DoneTitle = styled.h2`
  font-size: clamp(2.25rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: #fff;
`;

export const DoneBody = styled.p`
  margin-top: 1.25rem;
  max-width: 36rem;
  font-size: 1.125rem;
  line-height: 1.55;
  color: #b3adc4;
`;
