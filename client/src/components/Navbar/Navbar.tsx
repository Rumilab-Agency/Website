import React from 'react';
import logoImg from '../../assets/images/logo.png';


import {
  NavbarContainer,
  Logo,
  // ShootingStarButton,
  NavbarCTAButton,
  LogoImage,
} from './Navbar.styles';
// Define props type
interface NavbarProps {
    onMenuClick: () => void;
  }

  const Navbar: React.FC<NavbarProps> = ({  }) => (
    <NavbarContainer>
      <Logo>
        <LogoImage src={logoImg} alt="RomiLab Logo" />
      </Logo>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavbarCTAButton 
          as="a"
          href="https://wa.me/6598323646"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch</NavbarCTAButton>
        {/* <ShootingStarButton onClick={onMenuClick} aria-label="Open menu" /> */}
      </div>
    </NavbarContainer>
  );

export default Navbar;
