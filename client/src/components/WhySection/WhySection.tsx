import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle, WhyUsBg } from './WhySection.style';

import { GradientText } from '../../layouts/AppLayout.style';
import AuroraBlob from '../AuroraBlob/AuroraBlob';
import whyUsBg from '../../assets/images/bg-why.png';


const WhyUs = () => (
    <WhyUsContainer>
        <WhyUsTitle>
            What We Do
        </WhyUsTitle>
        <WhyUsContentWrapper>
            <WhyUsSubHeadline data-aos="fade-right">
                <GradientText>The RumiLab principle</GradientText>
            </WhyUsSubHeadline>
            <WhyUsHeadline data-aos="fade-right">
                A Website Should Earn <br /> More Than It Costs
            </WhyUsHeadline>
            <WhyUsContent data-aos="fade-right">
                We only succeed when you do. If a website doesn't bring you more customers, it isn't worth what you paid for it, and we don't believe in charging for work that doesn't pay you back. So every site we build is custom-made to bring in real business: more enquiries, more bookings and more repeat customers. We judge our work by your results, and we stay with you to keep improving them as your business grows.
            </WhyUsContent>
            <WhyUsBg aria-hidden="true">
                <AuroraBlob src={whyUsBg} />
            </WhyUsBg>
        </WhyUsContentWrapper>

    </WhyUsContainer>
);

export default WhyUs;
