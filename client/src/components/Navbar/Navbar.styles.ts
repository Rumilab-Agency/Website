import styled, { keyframes } from 'styled-components';
import { breakpoints, CTAButton } from '../../layouts/AppLayout.style';



// Shooting star animation
export const shoot = keyframes`
  0% { box-shadow: 0 0 0px 0px #a0a0ff; }
  70% { box-shadow: 40px 0 20px 0px #a0a0ff88; }
  100% { box-shadow: 80px 0 40px 0px #a0a0ff00; }
`;

export const NavbarContainer = styled.nav`
  width: 100vw;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

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
        height: 24px;
    }

      @media (min-width: ${breakpoints.xl}) {
        height: 1.875vw;
        margin-right: 0.625vw;
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


export const NavbarCTAButton = styled(CTAButton)`

`;
