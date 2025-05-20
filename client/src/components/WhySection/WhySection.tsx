import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle,WhyUsBg } from './WhySection.style';

import whyUsBg from '../../assets/images/bg-why.png';
import { GradientText } from '../../layouts/AppLayout.style';


const WhyUs = () => (
  <WhyUsContainer>
        <WhyUsTitle>
            What We Do
        </WhyUsTitle>
        <WhyUsContentWrapper>
            <WhyUsSubHeadline data-aos="fade-right">
                <GradientText>What We Do at RumiLab</GradientText>
            </WhyUsSubHeadline>
            <WhyUsHeadline data-aos="fade-right">
            Custom Websites, Built <br/> for Small Business Growth
            </WhyUsHeadline>
            <WhyUsContent data-aos="fade-right">
            At RumiLab, we build custom websites from scratch — no templates, no generic solutions. Every project is coded by hand and designed in-house to reflect your brand’s unique personality and purpose.

We work closely with small business owners to create websites that not only look great but also help draw attention from potential customers. With thoughtful design and solid development, we help you build a stronger online presence.

Our goal is to be a long-term partner in your digital journey — growing with you as your business evolves.
             </WhyUsContent>
            <WhyUsBg src={whyUsBg} alt="Why Us Background" />
        </WhyUsContentWrapper>

  </WhyUsContainer>
);

export default WhyUs; 