

import { CTAContainer, CTATitle, CTASubTitle, CTAContentWrapper, 
    CTASlogan1, CTASlogan2, CTAButton1, SunriseImageFlip, CTABg, CTABgStars} from './CTA.style';

import { GradientText } from '../../layouts/AppLayout.style';

import sunriseGlowFlip from '../../assets/images/sunrise-flip.png';

import ctaBg from '../../assets/images/bg-cta.png';

import backgroundStars from '../../assets/images/bg-stars.png';




const Strength = () => (
  <CTAContainer>
    <CTATitle>Ready to get your <br/> <GradientText data-aos="fade-in" data-aos-duration="2000">business online?</GradientText></CTATitle>
    <CTASubTitle>Let’s build a website that reflects your identity <br/>and connects with your audience.</CTASubTitle>
    <CTAContentWrapper>
        <CTASlogan1>Not sure where to begin?</CTASlogan1>
        <CTASlogan2 data-aos="fade-left"><GradientText>We're here to help.</GradientText></CTASlogan2>
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

export default Strength; 