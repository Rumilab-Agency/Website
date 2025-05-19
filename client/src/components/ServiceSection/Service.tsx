
import { ServiceContainer, ServiceTitle, ServiceContentWrapper, 
    ServiceCard, IconContainer, CardTitle, CardDescription, IconImage, ServiceBg} from './Service.style';

import serviceBg from '../../assets/images/bg-service.png';

import designIcon from '../../assets/images/service-icon/design.png';
import businessIcon from '../../assets/images/service-icon/business.png';
import responsiveIcon from '../../assets/images/service-icon/responsive.png';
import seoIcon from '../../assets/images/service-icon/seo.png';
import supportIcon from '../../assets/images/service-icon/support.png';


const services = [
    {
      icon: designIcon,
      title: 'Custom Website Design',
      description: 'Unique, brand-driven designs tailored to your business goals — no templates, just thoughtful creativity.',
    },
    {
      icon: businessIcon,
      title: 'Frontend Development',
      description: 'Clean, responsive interfaces built with React, Next.js, and modern web tech.',
    },
    {
      icon: responsiveIcon,
      title: 'UI/UX Design',
      description: 'Human-centered designs with smooth flow and aesthetic visuals.',
    },
    {
      icon: seoIcon,
      title: 'Mobile Optimization',
      description: 'Fast, mobile-first websites optimized for all devices.',
    },
    {
      icon: supportIcon,
      title: 'Hosting & Maintenance',
      description: 'Reliable cloud hosting and post-launch support to keep you running smoothly.',
    },
  ];

const Strength = () => (
    <ServiceContainer>
          <ServiceTitle>
              Services
          </ServiceTitle>
          <ServiceContentWrapper>

          {services.map((service, idx) => (
          <ServiceCard key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <IconContainer>
                <IconImage src={service.icon} alt={service.title} />
            </IconContainer>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}

        <ServiceBg data-aos="fade-in" data-aos-anchor-placement="center-bottom" src={serviceBg} alt="Service Background" />
    

          </ServiceContentWrapper>
    </ServiceContainer>
  );
  
  export default Strength; 