import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';



// Shooting star animation
export const shoot = keyframes`
  0% { box-shadow: 0 0 0px 0px #a0a0ff; }
  70% { box-shadow: 40px 0 20px 0px #a0a0ff88; }
  100% { box-shadow: 80px 0 40px 0px #a0a0ff00; }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  @media (min-width: ${breakpoints.md}) {
      padding: 16px 80px;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 1.25vw 6.25vw;
  }
`;

export const Logo = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

    @media (min-width: ${breakpoints.md}) {

    }
  
    @media (min-width: ${breakpoints.xl}) {
      font-size: 1.25vw;
      letter-spacing: 0.156vw;
    }
`;

export const LogoImage = styled.img`
  height: 20px;
  margin-right: 8px;


    @media (min-width: ${breakpoints.lg}) {
        height: 30px;
    }

      @media (min-width: ${breakpoints.xl}) {
        height: 2.344vw;
        margin-right: 0.625vw;
    }
`;

export const CTAButton = styled.button`
  background: transparent;
  border: 2px solid #a0a0ff;
  color: #fff;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  margin-right: 0px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #a0a0ff;
    color: #111;
  }

    @media (min-width: ${breakpoints.md}) {
      margin-right: 0px;
      padding: 8px 24px;
      font-size: 16px;
    }
  
    @media (min-width: ${breakpoints.xl}) {
          padding: 8px 1.875vw;
          font-size: 1.25vw;
          border-radius: 1.875vw;
          border: 0.156vw solid #a0a0ff;

    }
`;

export const ShootingStarButton = styled.button`
  background: linear-gradient(90deg, #a0a0ff 60%, #fff 100%);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 16px 0 #a0a0ff88;
  animation: ${shoot} 2s infinite linear;
  &:after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #a0a0ff88 0%, #fff0 100%);
    transform: translateY(-50%);
    border-radius: 2px;
    pointer-events: none;
  }
`; 