import styled, { keyframes } from 'styled-components';



// src/styles/theme.ts
export const breakpoints = {
    sm: '480px',   // small devices (phones)
    md: '768px',   // tablets
    lg: '1024px',  // desktops
    xl: '1280px', // large screens
  };



  export const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    letter-spacing: -2px;
    padding: 16px 0;


    @media (min-width: ${breakpoints.md}) {
      font-size: 48px;
      padding: 24px 0;

    }

    @media (min-width: ${breakpoints.lg}) {
      font-size: 72px;
      padding: 32px 0;

    }

    @media (min-width: ${breakpoints.xl}) {
      font-size: 5.625vw;
      padding: 2.5vw 0;

    }


  `;

  export const Headline = styled.h1`
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(90deg, #a084ff 0%, #f780ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin: 0 0 8px 0;
  letter-spacing: -2px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 56px;
    margin: 0 0 24px 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 0 24px 0;

  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 4.375vw;
    margin: 0 0 1.875vw 0;
  }
`;


export const SubTitle = styled.p`
  font-size: 12px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.lg}) {
      font-size: 24px;

  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.875vw;
  }
`;

export const Container = styled.div`

  padding: 32px 0;

  @media (min-width: ${breakpoints.md}) {
    padding: 40px 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 48px 0;
  }


  @media (min-width: ${breakpoints.xl}) {
    padding: 3.75vw 0;
  }
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight:600;



  @media (min-width: ${breakpoints.md}) {
    font-size: 26px;


  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 40px;

  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 3.125vw;
  }

`;


export const ContentWrapper = styled.div`
  margin: 20px auto;

  @media (min-width: ${breakpoints.md}) {

  }

  @media (min-width: ${breakpoints.lg}) {
      margin-top: 40px;
      margin-bottom: 40px;
  }


  @media (min-width: ${breakpoints.xl}) {
    margin-top: 3.125vw;
    margin-bottom: 3.125vw;
  }
`;



export const Content = styled.p`
  font-size: 10px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 12px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 16px;
  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.25vw;
  }
`;