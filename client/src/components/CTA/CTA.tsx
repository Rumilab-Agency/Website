

import {
  CTAContainer, CTATitle, CTASubTitle, CTAContentWrapper,
  CTASlogan1, CTASlogan2, CTAButton1, SunriseImageFlip, CTABg, CTABgStars
} from './CTA.style';

import { GradientText } from '../../layouts/AppLayout.style';

import sunriseGlowFlip from '../../assets/images/sunrise-flip.png';

import ctaBg from '../../assets/images/bg-cta.png';

import backgroundStars from '../../assets/images/bg-stars.png';


const CTA = () => (
  <CTAContainer>
    <CTATitle>Ready to grow <br /> <GradientText data-aos="fade-in" data-aos-duration="2000">your customer base?</GradientText></CTATitle>
    <CTASubTitle>
      A website that not only looks great— <br />
      but actually grows your business.
    </CTASubTitle>
    <CTAContentWrapper>
      <CTASlogan1 data-aos="fade-right">Not sure where to begin?</CTASlogan1>
      <CTASlogan2><GradientText data-aos="fade-left">We're here to help.</GradientText></CTASlogan2>
      <CTAButton1
        as="a"
        href="https://wa.me/6598323646"
        target="_blank"
        rel="noopener noreferrer"
      >Chat With Us</CTAButton1>
    </CTAContentWrapper>
    <CTABg src={ctaBg} alt="CTA Background" />
    <CTABgStars src={backgroundStars} alt="CTA Background Stars" />

    <SunriseImageFlip src={sunriseGlowFlip} alt="Sunrise Glow" />
  </CTAContainer>
);

export default CTA; 