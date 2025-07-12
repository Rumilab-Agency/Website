import React from 'react';
import { FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import logoImg from '../../assets/images/logo.png';

import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterHeading,
  FooterItem,
  FooterIcon,
  FooterBottom,
  LogoImage,
} from './Footer.styles';

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterWrapper>

    <FooterColumn>
    <LogoImage src={logoImg} alt="RumiLab Logo" />

    </FooterColumn>

    <FooterColumn>

    <FooterHeading>Connect</FooterHeading>

    <FooterItem>
        <FooterIcon>
        <FaLinkedin />
        </FooterIcon>
        <a href="https://www.linkedin.com/company/107114819/" target="_blank" rel="noopener noreferrer">
        LinkedIn
        </a>
    </FooterItem>

    <FooterItem>
        <FooterIcon>
        <FaInstagram />
        </FooterIcon>
        <a href="https://www.instagram.com/rumilab_solutions/" target="_blank" rel="noopener noreferrer">
        Instagram
        </a>
    </FooterItem>
    </FooterColumn>

    <FooterColumn>
    <FooterHeading>Contact Information</FooterHeading>

    <FooterItem>
        <FooterIcon>
        <MdEmail />
        </FooterIcon>
        <a href="mailto:contact@rumilab.co">contact@rumilab.co</a>
    </FooterItem>

    <FooterItem>
        <FooterIcon>
        <FaPhone />
        </FooterIcon>
        <a href="tel:+6598323646">+65 98323646</a>
    </FooterItem>
    </FooterColumn>

    <FooterColumn></FooterColumn>

    </FooterWrapper>

    <FooterBottom>
    </FooterBottom>

  </FooterContainer>
);

export default Footer;
