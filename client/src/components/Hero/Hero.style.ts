import styled, { keyframes } from 'styled-components';
import { breakpoints, SubTitle, CTAButton } from '../../layouts/AppLayout.style';
import { CTAGroup } from '../WhatsAppButton/WhatsAppButton.style';

import { fadeIn, easeOut } from '../../styles/animations'; // adjust the path as needed

// The hero is one screen split at the planet's horizon: the headline sits just
// above it, the subheadline and CTA on the planet below. Keep in step with
// HORIZON in HorizonBloom.tsx (0.48 from the bottom = 52% from the top).
const HERO_SPLIT = '52fr 48fr';

export const HeroContainer = styled.section`
  /* Headline size, shared so the rim overlap and the space below scale with it */
  --headline-size: clamp(2.25rem, 10.5vw, 3.5rem);

  @media (min-width: ${breakpoints.md}) {
    --headline-size: 7.5vw;
  }

  @media (min-width: ${breakpoints.xl}) {
    --headline-size: 8vw;
  }

  position: relative;
  display: grid;
  grid-template-rows: ${HERO_SPLIT};
  height: 100vh;
  height: 100svh;
  min-height: 560px;
  background-color: #010101;
  overflow: hidden;
`;

export const HeroTop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5%;
`;

export const HeroBottom = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 7vh, 4.5rem);
  /* Clear the lower half of the headline that hangs over the planet */
  padding: calc(var(--headline-size) * 0.35 + clamp(2.5rem, 8vh, 6rem)) 5% 0;
`;

const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Headline = styled.h1`
  /* Lower the headline so the planet's rim cuts through the middle of the
     second line: ~0.2em gets the baseline to the rim, a further ~0.35em
     (half the letter height) sinks the word halfway in. */
  margin: 0 0 -0.55em;
  text-align: center;
  line-height: 1;
  letter-spacing: -0.04em;
  font-size: var(--headline-size);
`;

// Line one: white
export const HeadlineLight = styled.span`
  display: block;
  color: #fff;
  font-weight: 700;
  opacity: 0;
  animation: ${textReveal} 1.2s ${easeOut} forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeIn} 0.6s ease forwards;
  }
`;

// Line two: in the brand gradient
export const HeadlineBold = styled.span`
  display: block;
  font-weight: 700;
  /* room for descenders so the gradient clip doesn't crop them */
  padding-bottom: 0.08em;
  background: linear-gradient(90deg, #a084ff, #f780ff 55%, #ffd1e3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  opacity: 0;
  animation: ${textReveal} 1.2s ${easeOut} 0.12s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeIn} 0.6s ease forwards;
  }
`;

export const PriceHighlight = styled.strong`
  background: linear-gradient(90deg, #a084ff, #f780ff, #ffd1e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
`;

export const Subheadline = styled(SubTitle)`
  color: #ddd;
  text-align: center;
  font-weight: 500;
  line-height: 1.45;
  max-width: 40rem;
  /* Even line lengths, no lone last word */
  text-wrap: balance;
  opacity: 0;
  animation: ${riseIn} 0.9s ${easeOut} 0.4s forwards;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.5vw;
    max-width: 54vw;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeIn} 0.6s ease 0.2s forwards;
  }
`;

export const HeroCTA = styled(CTAButton)``;

export const HeroActions = styled(CTAGroup)`
  opacity: 0;
  animation: ${riseIn} 0.9s ${easeOut} 0.55s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeIn} 0.6s ease 0.3s forwards;
  }
`;

// One line under the buttons that states the offer plainly
export const HeroOffer = styled.p`
  max-width: 34rem;
  margin-top: calc(clamp(2rem, 7vh, 4.5rem) * -0.6);
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(255 255 255 / 70%);
  opacity: 0;
  animation: ${riseIn} 0.9s ${easeOut} 0.7s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeIn} 0.6s ease 0.4s forwards;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 40vw;
    font-size: 1vw;
  }
`;
