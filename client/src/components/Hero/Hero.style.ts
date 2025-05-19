import styled, { keyframes } from 'styled-components';
import { breakpoints, Title, SubTitle } from '../../layouts/AppLayout.style';

import { fadeIn, sunriseGlow } from '../../styles/animations'; // adjust the path as needed



export const sunrise = keyframes`
  0% { filter: blur(40px) brightness(1.1); opacity: 0.7; }
  50% { filter: blur(60px) brightness(1.3); opacity: 1; }
  100% { filter: blur(40px) brightness(1.1); opacity: 0.7; }
`;


export const HeroContainer = styled.div`
  background-color: #010101;

`;

export const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  height: 250px; 
  min-height:80vh;
  width: 90%;
  margin:0 auto;
  background-color:#010101;


  @media (min-width: ${breakpoints.md}) {
    height: 400px;
    min-height:60vh;
  }


  @media (min-width: ${breakpoints.xl}) {
    height: 31.25vw;
  }
`;


export const Headline = styled(Title)`
  background: linear-gradient(180deg, #a084ff, #f780ff, #ffd1e3);
  background-size: 100% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight:700;
  animation:
    ${fadeIn} 2s ease-in-out forwards;

`;

export const Subheadline = styled(SubTitle)`
  color: #ccc;
  text-align: center;
  margin: 0 0 48px 0;
 opacity: 0;
  animation: ${fadeIn} 2.5s ease-in-out forwards;
`;



export const SunriseImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-top: -64px; /* Optional: overlap slightly with Hero */
  z-index: -1;
  opacity: 0;
  animation: ${sunriseGlow} 3s ease-in-out forwards;

@media (min-width: ${breakpoints.xl}) {
    margin-top: -5vw;
  }
`;


