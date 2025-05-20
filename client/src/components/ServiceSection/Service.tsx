
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
      title: 'Cost-Effective Pricing',
      description: 'Choose one-time or subscription plans for clean, high-impact websites tailored to your budget.',
    },
    {
      icon: responsiveIcon,
      title: 'Mobile Optimization',
      description: 'Fast, mobile-first websites optimized for all devices to ensure seamless user experiences on the go.',
    },

    {
        icon: seoIcon,
        title: 'SEO Optimization',
        description: 'Foundational SEO setup to improve visibility and help your site rank on search engines.',
    },


    {
      icon: supportIcon,
      title: 'Hosting & Maintenance',
      description: 'Keep your website secure, updated, and running smoothly after launch.',
    },
  ];

const Service = () => (
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

        <ServiceBg src={serviceBg} alt="Service Background" />
    

          </ServiceContentWrapper>
    </ServiceContainer>
  );
  
  export default Service; 