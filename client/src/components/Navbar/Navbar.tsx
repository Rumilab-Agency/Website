import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

import {
  NavbarContainer,
  Logo,
  LogoImage,
  NavRight,
  NavList,
  NavItem,
  NavbarCTAButton,
  NavWhatsApp,
  MenuButton,
  MenuPanel,
  MenuList,
} from './Navbar.styles';
import { CTA_SHORT } from '../../data/offer';

interface NavbarProps {
  onMenuClick?: () => void;
}

// Each link is its own page and gets the active underline when you're on it.
const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  // Starts as "at the top" (as in the pre-rendered page); the scroll handler
  // corrects it straight after the page loads
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      setAtTop(currentScrollY < 10);

      if (currentScrollY < 50) {
        // Always show navbar near top
        setIsVisible(true);
      } else if (Math.abs(delta) < 6) {
        // Ignore tiny scroll jitter (trackpads, momentum tails)
        return;
      } else {
        // Scrolling down hides, scrolling up shows
        setIsVisible(delta < 0);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the phone menu whenever the page (or #section) changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Escape closes the menu and hands focus back to its button
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <NavbarContainer
      className={`${isVisible || menuOpen ? 'visible' : 'hidden'}${atTop && !menuOpen ? ' at-top' : ''}`}
      aria-label="Main"
    >
      <Logo as={Link} to="/" aria-label="RumiLab home">
        <LogoImage src={logoImg} alt="RumiLab" />
      </Logo>

      <NavRight>
        <NavList>
          <li><NavItem to="/portfolio">Work</NavItem></li>
          <li><NavItem to="/pricing">Pricing</NavItem></li>
          <li><NavItem to="/guarantee">Guarantee</NavItem></li>
          <li><NavItem to="/faq">FAQ</NavItem></li>
        </NavList>

        <NavWhatsApp iconOnly />
        <NavbarCTAButton as={Link} to="/contact">
          {CTA_SHORT}
        </NavbarCTAButton>

        <MenuButton
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </NavRight>

      {menuOpen && (
        <MenuPanel id="mobile-menu">
          <MenuList>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/portfolio">Work</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/guarantee">Guarantee</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </MenuList>
        </MenuPanel>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
