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

interface NavbarProps {
  onMenuClick?: () => void;
}

// "Pricing" is a section of the home page, so it's a plain link (never marked as
// the current page); "Work" is its own page and gets the active underline.
const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(() => window.scrollY < 10);
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
          <li><NavItem as={Link} to="/#pricing">Pricing</NavItem></li>
        </NavList>

        <NavWhatsApp iconOnly />
        <NavbarCTAButton as={Link} to="/contact">
          Start your project
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
            <li><Link to="/#pricing">Pricing</Link></li>
          </MenuList>
        </MenuPanel>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
