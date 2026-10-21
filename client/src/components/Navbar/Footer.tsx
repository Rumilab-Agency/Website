import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logoImg from '../../assets/images/logo.png';
import { WHATSAPP_URL } from '../../data/contact';

import {
  FooterContainer,
  FooterWrapper,
  FooterBrand,
  FooterTagline,
  FooterColumn,
  FooterHeading,
  FooterList,
  FooterItem,
  FooterIcon,
  FooterBottom,
  LogoImage,
} from './Footer.styles';

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterWrapper>
      <FooterBrand>
        <Link to="/" aria-label="RumiLab home">
          <LogoImage src={logoImg} alt="RumiLab" />
        </Link>
        <FooterTagline>Custom websites for Singapore small businesses, built to bring in customers.</FooterTagline>
      </FooterBrand>

      <FooterColumn as="nav" aria-label="Footer">
        <FooterHeading>Pages</FooterHeading>
        <FooterList>
          <FooterItem><Link to="/">Home</Link></FooterItem>
          <FooterItem><Link to="/portfolio">Work</Link></FooterItem>
          <FooterItem><Link to="/#pricing">Pricing</Link></FooterItem>
          <FooterItem><Link to="/contact">Start your project</Link></FooterItem>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Connect</FooterHeading>
        <FooterList>
          <FooterItem>
            <FooterIcon aria-hidden="true"><FaLinkedin /></FooterIcon>
            <a href="https://www.linkedin.com/company/107114819/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </FooterItem>
          <FooterItem>
            <FooterIcon aria-hidden="true"><FaInstagram /></FooterIcon>
            <a href="https://www.instagram.com/rumilab_solutions/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </FooterItem>
          <FooterItem>
            <FooterIcon aria-hidden="true"><FaWhatsapp /></FooterIcon>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </FooterItem>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Contact</FooterHeading>
        <FooterList>
          <FooterItem>
            <FooterIcon aria-hidden="true"><MdEmail /></FooterIcon>
            <a href="mailto:contact@rumilab.org">contact@rumilab.org</a>
          </FooterItem>
          <FooterItem>
            <FooterIcon aria-hidden="true"><FaPhone /></FooterIcon>
            <a href="tel:+6598323646">+65 9832 3646</a>
          </FooterItem>
        </FooterList>
      </FooterColumn>
    </FooterWrapper>

    <FooterBottom>
      <span>© {new Date().getFullYear()} RumiLab. All rights reserved.</span>
      <span>UEN 53511446W · Singapore</span>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;
