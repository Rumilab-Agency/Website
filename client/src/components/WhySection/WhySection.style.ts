import styled, {  } from 'styled-components';
import { breakpoints, SubTitle, Title, Content, Container,ContentWrapper, SectionTitle } from '../../layouts/AppLayout.style';



export const WhyUsContainer = styled(Container)`
  background-color: black;
  position:relative;

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

export const WhyUsHeadline = styled(SectionTitle)`
  margin-top: 0.625rem;
  margin-bottom: 1.25rem;



  @media (min-width: ${breakpoints.md}) {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;


  }

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 1rem;
    margin-bottom: 2rem;

  }


  @media (min-width: ${breakpoints.xl}) {
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
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


export const WhyUsBg = styled.img`


  width: 17.813rem;
  right: 0;
  bottom: 20%;
  opacity:0.9;
  height: auto;
  position:absolute;
  margin-top: -4rem; /* Optional: overlap slightly with Hero */
  z-index: 1;
  pointer-event:none;


  @media (min-width: ${breakpoints.sm}) {
  }

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





