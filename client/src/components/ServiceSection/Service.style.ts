
import styled, {  } from 'styled-components';
import { breakpoints, Title, Container, ContentWrapper } from '../../layouts/AppLayout.style';



export const ServiceContainer = styled(Container)`
  background-color: black;


    @media (min-width: ${breakpoints.md}) {

  }


`;

export const ServiceTitle = styled(Title)`
  color:white;

`;

export const ServiceContentWrapper = styled(ContentWrapper)`
    display: flex;
    gap: 65px;
    justify-content:center;
    flex-wrap: wrap;
    position:relative;



    @media (min-width: ${breakpoints.xl}) {
        gap: 5.078vw;
      }

`;

export const ServiceCard = styled.article`
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  width:300px;
    //   margin-bottom: 20px;

    @media (min-width: ${breakpoints.xl}) {
    width: 23.438vw;
  }

`;

export const IconContainer = styled.div`
  border: 2px solid #c056f7;
  border-radius: 16px;
  padding: 1rem;
  display: inline-block;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color:white;



  @media (min-width: ${breakpoints.md}) {
  } 

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.563vw;

  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #ccc;

@media (min-width: ${breakpoints.xl}) {
    font-size: 1.25vw;

  }
`;

export const IconImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;

  @media (min-width: ${breakpoints.xl}) {
    width: 3.75vw;
    height: 3.75vw;


  }
`;


export const ServiceBg = styled.img`
  width: 285px;
  left: 0;
  bottom: 0;
  height: auto;
  position:absolute;
  margin-top: -64px; /* Optional: overlap slightly with Hero */
  z-index: 1;


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









