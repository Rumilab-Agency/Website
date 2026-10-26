import styled, {  } from 'styled-components';
import { breakpoints, SubTitle, Title, Content, Container,ContentWrapper, SectionTitle } from '../../layouts/AppLayout.style';



export const WhyUsContainer = styled(Container)`
  background-color: black;
  position:relative;
  /* The aurora blob's glow overhangs the right edge; clip it sideways only
     (clip, unlike hidden, doesn't make this a scroll container). */
  overflow-x: hidden;
  overflow-x: clip;

`;

export const WhyUsTitle = styled(Title)`
  color:white;
`;

export const WhyUsContentWrapper = styled(ContentWrapper)`
  width: 80%;
    
  > * {
    position: relative;
    z-index: 3;
  }

  @media (min-width: ${breakpoints.md}) {
      width: 75%;

  }

  @media (min-width: ${breakpoints.lg}) {
      width: 70%;
  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 2.813rem;
  }

`;

export const WhyUsSubHeadline = styled(SubTitle)`
    color: transparent;
    font-weight:500;
`;

export const WhyUsHeadline = styled(SectionTitle).attrs({ as: 'h3' })`
  margin-top: 0.625rem;
  margin-bottom: 1.25rem;

    line-height:1.2;


  @media (min-width: ${breakpoints.md}) {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;


  }

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 1rem;
    margin-bottom: 2rem;

  }


  @media (min-width: ${breakpoints.xl}) {
    margin-top: 1.563vw;
    margin-bottom: 3.125vw;
  }

`;

export const WhyUsContent = styled(Content)`

  color: white;
  width: 100%;
  position: relative;
  z-index: 2;



  @media (min-width: ${breakpoints.md}) {
      width: 75%;
  }

  @media (min-width: ${breakpoints.lg}) {
        width: 55%;

  }

`;


export const WhyUsBg = styled.div`
  width: 17.813rem;
  aspect-ratio: 735 / 790; /* bg-why.webp */
  right: 0;
  bottom: 20%;
  opacity:0.9;
  position:absolute;
  z-index: 1;
  pointer-events: none;

  @media (min-width: ${breakpoints.md}) {
      width: 24.063rem;
      right: 0;
      bottom: 20%;
  }

  @media (min-width: ${breakpoints.lg}) {
      width: 45.938rem;
      bottom: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
      width: 57.422vw;
  }
`;
