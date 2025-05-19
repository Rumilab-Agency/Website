import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle,WhyUsBg } from './WhySection.style';

import whyUsBg from '../../assets/images/bg-why.png';
import { GradientText } from '../../layouts/AppLayout.style';


const WhyUs = () => (
  <WhyUsContainer>
        <WhyUsTitle>
            Why Us
        </WhyUsTitle>
        <WhyUsContentWrapper>
            <WhyUsSubHeadline data-aos="fade-right">
                <GradientText>Why Choose Rumilab?</GradientText>
            </WhyUsSubHeadline>
            <WhyUsHeadline data-aos="fade-right">
            Your digital success starts <br/> with the right partner
            </WhyUsHeadline>
            <WhyUsContent data-aos="fade-right">
            We're a small, passionate team — a professional web developer and an experienced designer — who work closely with you to bring your business online with purpose. Our mission is to create websites that not only look great but help you grow. No fluff, no confusing jargon — just reliable, custom-built sites designed to make your brand stand out.            </WhyUsContent>
            <WhyUsBg src={whyUsBg} alt="Why Us Background" />
        </WhyUsContentWrapper>

  </WhyUsContainer>
);

export default WhyUs; 