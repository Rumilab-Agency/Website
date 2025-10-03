import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle, WhyUsBg } from './WhySection.style';

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
                Custom Websites That <br /> Grows Your Business
            </WhyUsHeadline>
            <WhyUsContent data-aos="fade-right">
                At RumiLab, we handcraft every website — no templates, no shortcuts. Each project is designed to showcase your brand and built to generate real business results, like more calls, appointments, and repeat customers. We see ourselves as your digital partner, ensuring your website continues to work for you as your business grows.
            </WhyUsContent>
            <WhyUsBg src={whyUsBg} alt="Why Us Background" />
        </WhyUsContentWrapper>

    </WhyUsContainer>
);

export default WhyUs; 