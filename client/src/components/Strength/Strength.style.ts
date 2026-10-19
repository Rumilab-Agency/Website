import styled, {  } from 'styled-components';
import { breakpoints, Title, Container, ContentWrapper } from '../../layouts/AppLayout.style';


export const StrengthContainer = styled(Container)`
  background-color: black;
  /* The cards' glow halo can reach past the screen edge on phones */
  overflow-x: hidden;
  overflow-x: clip;

`;

export const StrengthTitle = styled(Title)`
  color:white;

`;


export const StrengthContentWrapper = styled.div`
    width: 88%;
    max-width: 26rem;
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
  align-items: stretch;
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

// One grid cell; stretches the BorderGlow card inside so all three match height
export const CardCell = styled.div`
  display: flex;

  > .border-glow-card {
    flex: 1;
  }

  .border-glow-inner {
    height: 100%;
  }
`;

// Content of each BorderGlow card: left-aligned so the longer copy scans easily.
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 19rem;
  padding: 2.25rem 2rem;
  border-radius: 50px;
  /* Faint nebula haze held inside the card, lit from the top */
  background:
    radial-gradient(120% 70% at 50% 0%, rgb(180 155 255 / 15%), transparent 65%),
    radial-gradient(80% 60% at 85% 100%, rgb(244 200 255 / 7%), transparent 70%);
  color: white;
  text-align: left;

  @media (min-width: ${breakpoints.xl}) {
    min-height: 22rem;
    padding: 2.75vw 2.5vw;
  }
`;

export const Kicker = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a084ff;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.9vw;
  }
`;

// The guarantee card's headline number
export const Figure = styled.p`
  margin-top: 0.75rem;
  font-size: clamp(3.5rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #a084ff, #f780ff 60%, #ffd1e3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardTitle = styled.h3`
  margin-top: 0.75rem;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.75vw;
  }
`;

export const CardContent = styled.p`
  margin-top: 0.875rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.55;
  color: #c9c3d8;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.1vw;
  }
`;

// Small print pinned to the bottom of a card
export const CardNote = styled.p`
  margin-top: auto;
  padding-top: 1.25rem;
  font-size: 0.875rem;
  color: #8f899f;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.9vw;
  }
`;
