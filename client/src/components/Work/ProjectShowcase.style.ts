import styled from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';

// One project: the live site in a browser frame with its phone view tucked over
// the corner, beside the story of what we built. Rows alternate sides on desktop.
export const Row = styled.article<{ $flip: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 7fr 5fr;
    gap: 4.5rem;

    ${({ $flip }) => $flip && `
      grid-template-columns: 5fr 7fr;
      > :first-child { order: 2; }
    `}
  }
`;

export const Visual = styled.a`
  position: relative;
  display: block;
  /* room for the phone hanging off the bottom corner */
  padding-bottom: 8%;
  border-radius: 1rem;

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 6px;
  }

  /* a soft lavender pool of light behind the screens */
  &::before {
    content: '';
    position: absolute;
    inset: 10% 5% 0;
    background: radial-gradient(closest-side, rgb(160 132 255 / 22%), transparent);
    filter: blur(24px);
    z-index: 0;
    pointer-events: none;
  }
`;

export const Browser = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 0.875rem;
  border: 1px solid rgb(255 255 255 / 12%);
  background: #0f0c15;
  box-shadow: 0 30px 80px -20px rgb(0 0 0 / 80%);
  transition: transform 450ms ${easeOut};

  ${canHover} {
    ${Visual}:hover & {
      transform: translateY(-6px);
    }
  }
`;

export const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 2.25rem;
  padding: 0 0.875rem;
  border-bottom: 1px solid rgb(255 255 255 / 8%);
  background: #16121e;
`;

export const Dots = styled.span`
  display: flex;
  gap: 0.375rem;

  i {
    width: 0.5625rem;
    height: 0.5625rem;
    border-radius: 50%;
    background: rgb(255 255 255 / 18%);
  }
`;

export const Address = styled.span`
  flex: 1;
  max-width: 22rem;
  margin: 0 auto;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 6%);
  color: #9d97ad;
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Screen = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
`;

export const Phone = styled.div`
  position: absolute;
  z-index: 2;
  right: -2%;
  bottom: 0;
  width: 22%;
  min-width: 5.5rem;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 5px solid #1d1827;
  background: #000;
  box-shadow: 0 24px 60px -12px rgb(0 0 0 / 85%), 0 0 0 1px rgb(255 255 255 / 10%);
  transition: transform 450ms ${easeOut} 40ms;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 520 / 1125;
    object-fit: cover;
    object-position: top;
  }

  ${canHover} {
    ${Visual}:hover & {
      transform: translateY(-12px);
    }
  }

  @media (min-width: ${breakpoints.md}) {
    border-width: 7px;
    border-radius: 1.75rem;
  }
`;

export const Story = styled.div`
  max-width: 34rem;
`;

export const Meta = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a084ff;

  span {
    color: #6f6982;
    font-variant-numeric: tabular-nums;
  }
`;

export const Client = styled.h2`
  margin-top: 0.75rem;
  font-size: clamp(2rem, 3.4vw, 3rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
`;

export const Summary = styled.p`
  margin-top: 1rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #b3adc4;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.125rem;
  }
`;

export const BuiltTitle = styled.h3`
  margin-top: 1.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
`;

export const BuiltList = styled.ul`
  margin-top: 0.75rem;
  list-style: none;
  display: grid;
  gap: 0.625rem;

  li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #d6d0e4;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0.125rem;
    top: 0.55em;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #a084ff, #f780ff);
  }
`;

export const VisitLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  min-height: 2.75rem;
  padding: 0.625rem 1.375rem;
  border-radius: 999px;
  border: 2px solid #a0a0ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 200ms ease, color 200ms ease, transform 160ms ${easeOut};

  svg {
    transition: transform 200ms ${easeOut};
  }

  ${canHover} {
    &:hover {
      background-color: #a0a0ff;
      color: #111;
    }

    &:hover svg {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 3px;
  }
`;
