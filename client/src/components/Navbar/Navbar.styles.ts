import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints, CTAButton } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

export const NavbarContainer = styled.nav`
  /* left/right rather than 100vw, which would run under a desktop scrollbar */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: black;
  transition: transform 250ms ${easeOut}, background-color 300ms ease;

  /* Clear at the very top of the page so the hero shows through; solid again
     once the page scrolls (or the phone menu opens, which never gets this class). */
  &.at-top {
    background-color: transparent;
  }

  &.visible {
    transform: translateY(0);
  }

  &.hidden {
    transform: translateY(-100%);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 1rem 5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 1.25vw 6.25vw;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const LogoImage = styled.img`
  height: 1.25rem;

  @media (min-width: ${breakpoints.lg}) {
    height: 1.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    height: 1.875vw;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    gap: 2rem;
  }
`;

// Desktop links; on phones they live in the menu panel instead.
export const NavList = styled.ul`
  display: none;
  list-style: none;
  gap: 2rem;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 2.5vw;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  padding: 0.5rem 0;
  color: #b3adc4;
  font-size: 1rem;
  font-weight: 500;
  transition: color 150ms ease;

  /* the current page gets a small gradient underline */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.125rem;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #a084ff, #f780ff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 250ms ${easeOut};
  }

  &[aria-current='page'] {
    color: #fff;
  }

  &[aria-current='page']::after {
    transform: scaleX(1);
  }

  ${canHover} {
    &:hover {
      color: #fff;
    }
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 4px;
    border-radius: 2px;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.25vw;
  }
`;

// Phones already get the floating WhatsApp bubble, and the bar has no room.
export const NavWhatsApp = styled(WhatsAppButton)`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: inline-flex;
  }
`;

export const NavbarCTAButton = styled(CTAButton)`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

// ---------------------------------------------------------------- phone menu

export const MenuButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    border-radius: 2px;
    background: #fff;
    transition: transform 200ms ${easeOut}, opacity 150ms ease;
  }

  &[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  &[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }

  &[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 2px;
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const MenuPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0.5rem 1.25rem 1.5rem;
  background: black;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
  box-shadow: 0 24px 48px -12px rgb(0 0 0 / 90%);

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;

  a {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid rgb(255 255 255 / 8%);
    color: #fff;
    font-size: 1.375rem;
    font-weight: 600;
  }

  a[aria-current='page'] {
    color: #a084ff;
  }

  a:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 2px;
  }
`;
