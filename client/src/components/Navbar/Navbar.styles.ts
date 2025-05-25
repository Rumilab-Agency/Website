import styled, { keyframes } from 'styled-components';
import { breakpoints, CTAButton } from '../../layouts/AppLayout.style';



// Shooting star animation
export const shoot = keyframes`
  0% { box-shadow: 0 0 0px 0px #a0a0ff; }
  70% { box-shadow: 2.5rem 0 1.25rem 0px #a0a0ff88; }
  100% { box-shadow: 5rem 0 2.5rem 0px #a0a0ff00; }
`;

export const NavbarContainer = styled.nav`
  width: 100vw;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
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
    padding: 1rem 5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 1.25rem 6.25rem;
  }
`;


export const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.125rem;
  display: flex;
  align-items: center;

    @media (min-width: ${breakpoints.md}) {

    }
  
    @media (min-width: ${breakpoints.xl}) {
      font-size: 1.25rem;
      letter-spacing: 0.156rem;
    }
`;

export const LogoImage = styled.img`
  height: 1.25rem;
  margin-right: 0.5rem;


    @media (min-width: ${breakpoints.lg}) {
        height: 1.5rem;
    }

      @media (min-width: ${breakpoints.xl}) {
        height: 1.875rem;
        margin-right: 0.625rem;
    }
`;

export const ShootingStarButton = styled.button`
  background: linear-gradient(90deg, #a0a0ff 60%, #fff 100%);
  border: none;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 1rem 0 #a0a0ff88;
  animation: ${shoot} 2s infinite linear;
  &:after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: 3.75rem;
    height: 4px;
    background: linear-gradient(90deg, #a0a0ff88 0%, #fff0 100%);
    transform: translateY(-50%);
    border-radius: 2px;
    pointer-events: none;
  }
`; 


export const NavbarCTAButton = styled(CTAButton)`

`;

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #8e71ff, #c986f8, #f3b2ff);
    opacity: 0.15;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.25;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 0.625rem;
    gap: 0.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 0.75rem;
    gap: 0.625rem;
  }
`;

export const HamburgerLine = styled.span`
  display: block;
  width: 1.5rem;
  height: 0.125rem;
  background: white;
  border-radius: 0.25rem;
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (min-width: ${breakpoints.md}) {
    width: 1.75rem;
    height: 0.156rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 2rem;
    height: 0.188rem;
  }

  ${HamburgerButton}.active & {
    &:first-child {
      transform: translateY(0.5rem) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      transform: translateY(-0.5rem) rotate(-45deg);
    }
  }
`;
