import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, Container, Title } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';

export const WorkContainer = styled(Container)`
  min-height: 0;
  background-color: black;
`;

export const WorkTitle = styled(Title)`
  color: #fff;
`;

export const WorkIntro = styled.p`
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

export const WorkGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 88%;
  max-width: 72rem;
  margin: 3rem auto 0;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 80vw;
    gap: 2vw;
  }
`;

export const WorkCard = styled(Link)`
  display: block;
  border-radius: 1rem;

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 6px;
  }
`;

export const Frame = styled.div`
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid rgb(255 255 255 / 12%);
  background: #0f0c15;
  box-shadow: 0 24px 60px -24px rgb(0 0 0 / 85%);
  transition: transform 450ms ${easeOut}, border-color 300ms ease;

  ${canHover} {
    ${WorkCard}:hover & {
      transform: translateY(-6px);
      border-color: rgb(160 132 255 / 45%);
    }
  }
`;

export const FrameBar = styled.div`
  display: flex;
  gap: 0.3rem;
  padding: 0.5rem 0.625rem;
  border-bottom: 1px solid rgb(255 255 255 / 8%);
  background: #16121e;

  i {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: rgb(255 255 255 / 18%);
  }
`;

export const Shot = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
`;

export const CardMeta = styled.div`
  margin-top: 1rem;
`;

export const ClientName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.35vw;
  }
`;

export const Category = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #a084ff;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1vw;
  }
`;

export const AllWorkLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgb(160 132 255 / 60%);
  text-underline-offset: 6px;
  transition: text-decoration-color 200ms ease;

  ${canHover} {
    &:hover {
      text-decoration-color: #f780ff;
    }
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 4px;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.2vw;
  }
`;
