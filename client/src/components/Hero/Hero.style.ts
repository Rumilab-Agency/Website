import styled, { keyframes } from 'styled-components';
import { breakpoints, Title, SubTitle } from '../../layouts/AppLayout.style';

import { fadeIn, sunriseGlow } from '../../styles/animations'; // adjust the path as needed



export const sunrise = keyframes`
  0% { filter: blur(2.5rem) brightness(1.1); opacity: 0.7; }
  50% { filter: blur(3.75rem) brightness(1.3); opacity: 1; }
  100% { filter: blur(2.5rem) brightness(1.1); opacity: 0.7; }
`;


export const HeroContainer = styled.div`
  background-color: #010101;

`;

export const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  height: 15.625rem; 
  min-height:80vh;
  width: 90%;
  margin:0 auto;
  background-color:#010101;


  @media (min-width: ${breakpoints.md}) {
    height: 25rem;
    min-height:60vh;
  }


  @media (min-width: ${breakpoints.xl}) {
    height: 31.25rem;
  }
`;


const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

export const Headline = styled(Title)`
  background: linear-gradient(180deg, #a084ff, #f780ff, #ffd1e3);
  background-size: 100% 150%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: 700;
  animation: ${textReveal} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform-origin: center;
  will-change: transform, opacity, filter;
  
  @media (min-width: ${breakpoints.xl}) {
    animation: ${textReveal} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

export const SubHeadlinePrice = styled(SubTitle)`
  color: #ccc;
  text-align: center;
  margin: 0 0 3rem 0;
 opacity: 0;
  animation: ${fadeIn} 2.5s ease-in-out forwards;
`;

export const PriceHighlight = styled.strong`
  background: linear-gradient(90deg, #a084ff, #f780ff, #ffd1e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
`;



export const Subheadline = styled(SubTitle)`
  color: #ccc;
  text-align: center;
  margin: 0 0 3rem 0;
 opacity: 0;
  animation: ${fadeIn} 3s ease-in-out forwards;
  font-weight:500;
`;



export const SunriseImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-top: -4rem; /* Optional: overlap slightly with Hero */
  z-index: -1;
  opacity: 0;
  animation: ${sunriseGlow} 2.5s ease-in-out forwards;

@media (min-width: ${breakpoints.xl}) {
    margin-top: -5rem;
  }
`;


