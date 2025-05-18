import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle } from './WhySection.style';

// import whyUsBg from '../../assets/images/bg-why.png';


const WhyUs = () => (
  <WhyUsContainer>
        <WhyUsTitle>
            Why Us
        </WhyUsTitle>
        <WhyUsContentWrapper>
            <WhyUsSubHeadline>
                Why Choose Rumilab?
            </WhyUsSubHeadline>
            <WhyUsHeadline>
                The right partner for <br/> your digital growth
            </WhyUsHeadline>
            <WhyUsContent>
            We're a small, passionate team — a professional web developer and an experienced designer — who work closely with you to bring your business online with purpose. Our mission is to create websites that not only look great but help you grow. No fluff, no confusing jargon — just reliable, custom-built sites designed to make your brand stand out.            </WhyUsContent>
        </WhyUsContentWrapper>
  </WhyUsContainer>
);

export default WhyUs; 