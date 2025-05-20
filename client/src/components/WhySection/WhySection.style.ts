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
    font-size: 2.813vw;
  }

`;

export const WhyUsSubHeadline = styled(SubTitle)`
    color: transparent;
    font-weight:500;
`;

export const WhyUsHeadline = styled(SectionTitle)`
  margin-top: 10px;
  margin-bottom: 20px;



  @media (min-width: ${breakpoints.md}) {
    margin-top: 12px;
    margin-bottom: 24px;


  }

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 16px;
    margin-bottom: 32px;

  }


  @media (min-width: ${breakpoints.xl}) {
    margin-top: 1.25vw;
    margin-bottom: 2.5vw;
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


  width: 285px;
  right: 0;
  bottom: 20%;
  opacity:0.9;
  height: auto;
  position:absolute;
  margin-top: -64px; /* Optional: overlap slightly with Hero */
  z-index: 1;
  pointer-event:none;


  @media (min-width: ${breakpoints.sm}) {
  }

  @media (min-width: ${breakpoints.md}) {
      width: 385px;
      right: 0;
      bottom: 20%;

  }

  @media (min-width: ${breakpoints.lg}) {
      width: 735px;
      bottom: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
      width: 57.422vw;

  }

`;





