import styled, {  } from 'styled-components';
import { breakpoints, Title, Container, ContentWrapper, SubTitle, CTAButtonLarge } from '../../layouts/AppLayout.style';
import { sunriseGlow } from '../../styles/animations'; // adjust the path as needed



export const CTAContainer = styled(Container)`
  background-color: black;
  padding: 0 0.75rem;
  position: relative;

  > * {
    position: relative;
    z-index: 3;
  }
`;


export const CTATitle = styled(Title)`
  color:white;

`;

export const CTASubTitle = styled(SubTitle)`
    color: #ccc;
    text-align:center;



`;


export const CTAContentWrapper = styled(ContentWrapper)`
    width: 18.75rem;
    display:flex;
    flex-direction:column;
    margin-top:6.25rem;
    margin-bottom:6.25rem;



    @media (min-width: ${breakpoints.md}) {
        width:36.25rem;
            margin-top:7.813rem;
      }

    @media (min-width: ${breakpoints.lg}) {
        width:48.75rem;
        margin-top:9.375rem;

    }

    @media (min-width: ${breakpoints.xl}) {
        width: 60.938vw;
        margin-top: 9.155vw;
        margin-bottom: 6.103vw;
    }

`;

export const CTASlogan1 = styled.p`
  text-align:left;
  color:white;
  font-size:1.25rem;

      @media (min-width: ${breakpoints.md}) {
        font-size:1.5rem;

      }
  
      @media (min-width: ${breakpoints.lg}) {
        font-size: 1.75rem;
      }

      @media (min-width: ${breakpoints.xl}) {
        font-size: 2.188vw;
      }

`;

export const CTASlogan2 = styled(Title)`
  text-align:right;

`;

export const CTAButton1 = styled(CTAButtonLarge)`
  text-align:center;
  width:70%;
  margin:2.5rem auto;

    @media (min-width: ${breakpoints.md}) {
             width:50%;
    }

    @media (min-width: ${breakpoints.xl}) {
        margin:3.125vw auto;
    }

`;

export const CTABg = styled.img`
    width: 27.188rem;
    right: 0;
    top: 0;
  opacity:0.7;
  height: auto;
  position:absolute;
  z-index: 2;
  pointer-events: none;


  @media (min-width: ${breakpoints.md}) {
    width: 36.563rem;

  }

  @media (min-width: ${breakpoints.lg}) {
      width: 45.938rem;
  }

  @media (min-width: ${breakpoints.xl}) {
      width: 57.422vw;

  }

`;

export const CTABgStars = styled.img`
    width: 100%;
    bottom: 0;
  opacity:0.8;
  height: auto;
  position:absolute;
  z-index: 1;
  pointer-events: none;


  @media (min-width: ${breakpoints.sm}) {
  }

`;

export const SunriseImageFlip = styled.img`
  width: 100%;
  height: auto;
  display: block;
  animation: ${sunriseGlow} 3s ease-in-out forwards;
    z-index: 0;


@media (min-width: ${breakpoints.xl}) {
  }
`;


