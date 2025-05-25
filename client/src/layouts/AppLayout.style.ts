import styled, { } from 'styled-components';

// src/styles/theme.ts
export const breakpoints = {
    sm: '480px',   // small devices (phones)
    md: '768px',   // tablets
    lg: '1024px',  // desktops
    xl: '1280px', // large screens
  };



export const MainContent = styled.div`
  padding-top: 4.438rem;  // 71px
  background: black;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 4.625rem;  // 74px
  }

  @media (min-width: ${breakpoints.lg}) {
    padding-top: 4.563rem;  // 73px
  }

  @media (min-width: ${breakpoints.xl}) {
    padding-top: 5.703vw;
  }
`;



  export const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.125rem;
    padding: 1rem 0;


    @media (min-width: ${breakpoints.md}) {
      font-size: 3rem;
      padding: 1.5rem 0;

    }

    @media (min-width: ${breakpoints.lg}) {
      font-size: 4.5rem;
      padding: 2rem 0;

    }

    @media (min-width: ${breakpoints.xl}) {
      font-size: 5.625vw;
      padding: 1.953vw 0;
      letter-spacing: -0.156vw;
    }


  `;

  export const Headline = styled.h1`
  font-size: 1.75rem;  // 28px
  font-weight: 800;
  text-align: center;
  background: linear-gradient(90deg, #a084ff 0%, #f780ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin: 0 0 0.5rem 0;  // 8px
  letter-spacing: -0.125rem;  // -2px

  @media (min-width: ${breakpoints.md}) {
    font-size: 2.5rem;  // 56px
    margin: 0 0 1rem 0;  // 24px
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 3.5rem;  // 56px
    margin: 0 0 1.5rem 0;  // 24px
  }

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 0 1.5rem 0;  // 24px
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 4.375vw;
    margin: 0 0 1.875vw 0;
  }
`;


export const SubTitle = styled.p`
  font-size: 1rem;  // 16px

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.125rem;  // 18px
  }

  @media (min-width: ${breakpoints.lg}) {
      font-size: 1.5rem;  // 24px

  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.875vw;
  }
`;

export const Container = styled.div`

  padding: 2rem 0;  // 32px
  min-height:80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 2.5rem 0;  // 40px
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 3rem 0;  // 48px
  }


  @media (min-width: ${breakpoints.xl}) {
    padding: 3.75vw 0;
  }
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 1.25rem;  // 20px
  font-weight:600;



  @media (min-width: ${breakpoints.md}) {
    font-size: 1.625rem;  // 26px
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 2.5rem;  // 40px

  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 3.125vw;
  }

`;


export const ContentWrapper = styled.div`
  margin: 1.25rem auto;  // 20px

  @media (min-width: ${breakpoints.md}) {
      margin-top: 2.5rem;  // 40px
      margin-bottom: 2.5rem;  // 40px
  }

  @media (min-width: ${breakpoints.lg}) {
      margin-top: 5rem;  // 80px
      margin-bottom: 5rem;  // 80px
  }


  @media (min-width: ${breakpoints.xl}) {
    margin-top: 6.25vw;
    margin-bottom: 6.25vw;
  }
`;



export const Content = styled.p`
  font-size: 0.875rem;

  @media (min-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }


  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.25rem;
  }
`;

export const CTAButton = styled.button`
  background: transparent;
  border: 0.125rem solid #a0a0ff;  // 2px
  color: #fff;
  padding: 0.5rem 1.25rem;  // 8px 20px
  border-radius: 1.5rem;  // 24px
  font-size: 0.875rem;  // 14px
  cursor: pointer;
  text-decoration:none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #a0a0ff;
    color: #111;
  }

    @media (min-width: ${breakpoints.md}) {
      padding: 0.5rem 1.5rem;  // 8px 24px
      font-size: 1rem;  // 16px
    }
  
    @media (min-width: ${breakpoints.xl}) {
          padding: 0.625vw 1.875vw;
          font-size: 1.25vw;
          border-radius: 1.875vw;
          border: 0.156vw solid #a0a0ff;

    }
`;

export const CTAButtonLarge = styled.button`
  background: transparent;
  border: 0.125rem solid #a0a0ff;  // 2px
  color: #fff;
  padding: 0.75rem 2rem;  // 12px 32px
  border-radius: 2.5rem;  // 40px
  font-size: 1.125rem;  // 18px
  cursor: pointer;
  text-decoration:none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #a0a0ff;
    color: #111;
  }

    @media (min-width: ${breakpoints.md}) {
      font-size: 1.5rem;  // 24px
    }


  
    @media (min-width: ${breakpoints.xl}) {
          padding: 0.938vw 2.5vw;
          font-size: 1.875vw;
          border-radius: 3.125vw;
          border: 0.156vw solid #a0a0ff;

    }
`;




export const GradientText = styled.span`
  background: linear-gradient(90deg, #a084ff 0%, #f780ff 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;