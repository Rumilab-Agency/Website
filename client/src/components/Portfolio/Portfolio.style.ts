import styled, { } from 'styled-components';

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  padding: 16px;
  width: 95%;
  max-width:1280px;
  margin:0 auto;
`;

export const PortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5; /* maintain ratio, or use fixed height */
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
`;

export const Title = styled.h3`
    margin-top: auto; /* push to bottom */
  font-size: 0.9rem;
  color: #777;
`;

export const Client = styled.p`
  font-size: 1.1rem;
  margin: 0;
  color: #333;
`;
