import React from 'react';
import { WhyUsContainer, WhyUsContentWrapper, WhyUsSubHeadline, WhyUsContent, WhyUsHeadline, WhyUsTitle, WhyUsBg } from './WhySection.style';

import whyUsBg from '../../assets/images/bg-why.png';


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
             We are a dedicated team comprising a professional web developer and an experienced web designer, committed to delivering bespoke digital solutions tailored to your brand. By combining technical expertise with creative design, we craft responsive, user-centric websites that effectively communicate your identity and support your business objectives.
            </WhyUsContent>
        </WhyUsContentWrapper>
  </WhyUsContainer>
);

export default WhyUs; 