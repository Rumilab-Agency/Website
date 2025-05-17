import styled, { keyframes } from 'styled-components';
import { breakpoints, SubTitle, Title, Content, Container,ContentWrapper, SectionTitle } from '../../layouts/AppLayout.style';





export const WhyUsContainer = styled(Container)`
  background-color: black;
  position:relative;

`;

export const WhyUsTitle = styled(Title)`
  color:white;
  background-color: black;

`;

export const WhyUsContentWrapper = styled(ContentWrapper)`

  width: 80%;

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

    background: linear-gradient(90deg, #a084ff 0%, #f780ff 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
  width: 80%;


  @media (min-width: ${breakpoints.md}) {
    width: 60%;
  }

  @media (min-width: ${breakpoints.lg}) {
        width: 55%;

  }

`;


export const WhyUsBg = styled.img`
  width: 55%;
  right:0;
  top:0;
  height: auto;
  position:absolute;
  background-color: #010101;
  margin-top: -64px; /* Optional: overlap slightly with Hero */
  z-index: 1;

`;



