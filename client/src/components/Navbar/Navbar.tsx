import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.png';

import {
  NavbarContainer,
  Logo,
  NavbarCTAButton,
  LogoImage,
  // HamburgerButton,
  // HamburgerLine,
} from './Navbar.styles';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show navbar near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <NavbarContainer className={isVisible ? 'visible' : 'hidden'}>
      <Logo>
        <LogoImage src={logoImg} alt="RomiLab Logo" />
      </Logo>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <NavbarCTAButton
          as="a"
          href="https://wa.me/6598323646"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </NavbarCTAButton>
        {/* <HamburgerButton 
          onClick={toggleMenu}
          className={isMenuOpen ? 'active' : ''}
          aria-label="Toggle menu"
        >
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerButton> */}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
