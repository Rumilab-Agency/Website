import styled, { } from 'styled-components';
import { breakpoints, Title, Container } from '../../layouts/AppLayout.style';



export const ServiceContainer = styled(Container)`
  background-color: black;
  position: relative;


    @media (min-width: ${breakpoints.md}) {

  }


`;

export const ServiceTitle = styled(Title)`
  color:white;
  position: relative;
  z-index: 1;

`;

export const ServiceIntro = styled.p`
  position: relative;
  z-index: 1;
  max-width: 34rem;
  padding: 0 1.25rem;
  text-align: center;
  font-size: 1.0625rem;
  line-height: 1.55;
  color: #b3adc4;

  @media (min-width: ${breakpoints.xl}) {
    max-width: 44vw;
    font-size: 1.25vw;
  }
`;

// A light checklist rather than cards, so it reads as "everything's covered"
// and doesn't compete with the Why RumiLab cards above.
export const IncludedGrid = styled.ul`
  position: relative;
  z-index: 1;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 2.5rem;
  width: 88%;
  max-width: 72rem;
  margin: 3rem auto 0;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 80vw;
    gap: 0 3vw;
  }
`;

export const IncludedItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgb(255 255 255 / 10%);
`;

export const IncludedIcon = styled.span`
  flex: none;
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.875rem;
  border: 1px solid rgb(160 132 255 / 45%);
  background: rgb(160 132 255 / 10%);
  color: #c9b8ff;
  font-size: 1.25rem;

  @media (min-width: ${breakpoints.xl}) {
    width: 3.25vw;
    height: 3.25vw;
    font-size: 1.5vw;
  }
`;

export const ItemTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  color: #fff;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.35vw;
  }
`;

export const ItemText = styled.p`
  margin-top: 0.375rem;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #b3adc4;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.05vw;
  }
`;

export const PlanTag = styled.span`
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgb(247 128 255 / 45%);
  color: #f7b0ff;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.75vw;
  }
`;

export const ServiceAurora = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.45;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent);
`;
