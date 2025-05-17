import React from 'react';
import logoImg from '../../assets/images/logo.png';


import {
  NavbarContainer,
  Logo,
  CTAButton,
  ShootingStarButton,
  LogoImage,
} from './Navbar.styles';
// Define props type
interface NavbarProps {
    onMenuClick: () => void;
  }

  const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => (
    <NavbarContainer>
      <Logo>
        <LogoImage src={logoImg} alt="RomiLab Logo" />
      </Logo>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CTAButton>Get in touch</CTAButton>
        {/* <ShootingStarButton onClick={onMenuClick} aria-label="Open menu" /> */}
      </div>
    </NavbarContainer>
  );

export default Navbar;
