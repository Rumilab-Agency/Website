import styled, {  } from 'styled-components';
import { breakpoints, Title, Container, ContentWrapper } from '../../layouts/AppLayout.style';


export const StrengthContainer = styled(Container)`
  background-color: black;

`;

export const StrengthTitle = styled(Title)`
  color:white;

`;


export const StrengthContentWrapper = styled.div`
    width:65%;
    max-width: 300px;
    margin:0 auto;

    @media (min-width: ${breakpoints.md}) {
        width:75%;
        max-width: none;
    }

    @media (min-width: ${breakpoints.lg}) {
        width:85%;
    }

`;

export const CardGrid = styled(ContentWrapper)`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;


  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

  }


  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px;

  }

  @media (min-width: ${breakpoints.xl}) {
        gap: 4.375vw;
  }
`;

export const GlowingCard = styled.div`
  padding: 48px 30px;
  border-radius: 50px;
  aspect-ratio: 1 / 1; /* 1:1 square */
  position: relative;
  color: white;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  z-index: 0;
  overflow: hidden;
    display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical center */
  align-items: center;     /* Horizontal center */



  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 50px;
    background: linear-gradient(180deg, #E95EBC, #AD6EF5);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
  }

  box-shadow: 0px 0px 32px rgba(162, 83, 237, 0.84);

 @media (min-width: ${breakpoints.xl}) {
    padding: 3.75vw 1.875vw;
    border-radius: 3.906vw;
    box-shadow: 0px 0px 2.5vw rgba(162, 83, 237, 0.84);

    &::before {
        padding: 0.156vw;
        border-radius: 3.906vw;
    }

  }
`;

export const CardTitle = styled.h2`
    margin-bottom:16px;
    font-weight:600;    
    font-size:16px;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 20px;
    margin-bottom:20px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 24px;
    margin-bottom:24px;

  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.875vw;
    margin-bottom:1.875vw;

  }


`;

export const CardContent = styled.p`
    font-weight:500;
    font-size: 14px;
    color: #ccc;



  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.094vw;

  }
`;
