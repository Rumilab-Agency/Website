import styled, { } from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';

export const PortfolioGrid = styled.div`
  display: grid;
  gap: 24px;
  padding: 16px;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

  width: 95%;
  max-width:1280px;
  margin:0 auto;

      @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

      }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 6 / 5; /* maintain ratio, or use fixed height */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

  }
`;

export const InfoWrapper = styled.div`
  padding: 12px 16px;
  flex: 1; /* take remaining vertical space */
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
`;

export const Client = styled.p`
  font-size: 1.1rem;
  font-weight:700;
  margin: 0;
  background: linear-gradient(90deg, #a084ff, #f780ff, #ffd1e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PortfolioCard = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
      background: transparent;
  border: 2px solid #a0a0ff;

  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
  }

  &:hover ${InfoWrapper} {
    background-color: #a0a0ff;
  }

  &:hover ${Client} {
    background: none;
    -webkit-text-fill-color: #fff;
    color: #fff;
  }
`;



export const Title = styled.h3`
    margin-top: auto; /* push to bottom */
  font-size: 0.9rem;
  color: #777;
`;


