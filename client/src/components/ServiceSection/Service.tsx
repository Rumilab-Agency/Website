
import {
  ServiceContainer, ServiceTitle, ServiceContentWrapper,
  ServiceCard, IconContainer, CardTitle, CardDescription, IconImage, ServiceBg
} from './Service.style';

import serviceBg from '../../assets/images/bg-service.png';

import designIcon from '../../assets/images/service-icon/design.png';
import businessIcon from '../../assets/images/service-icon/business.png';
import responsiveIcon from '../../assets/images/service-icon/responsive.png';
import seoIcon from '../../assets/images/service-icon/seo.png';
import supportIcon from '../../assets/images/service-icon/support.png';


const services = [
  {
    icon: designIcon,
    title: 'Custom Design',
    description: 'Unique, brand-driven designs tailored to your business goals — no templates, just thoughtful creativity.',
  },
  {
    icon: businessIcon,
    title: 'Performance-Based Guarantee',
    description:
      'If your website doesn’t bring in more inquiries, bookings, or sales within 3 months, we’ll work with you at no extra cost until it does.',
  },
  {
    icon: responsiveIcon,
    title: 'Mobile-first',
    description: 'Over 60% of web traffic comes from mobile — we build mobile-first to keep your business front and center.',
  },
  {
    icon: seoIcon,
    title: 'SEO-Ready',
    description: 'Foundational SEO setup to improve visibility and help your site rank on search engines.',
  },

  {
    icon: supportIcon,
    title: 'Optimized Page Speed',
    description: 'Load your site in under 1 second and score 90+ on PageSpeed for top-tier performance.',
  },

];

const Service = () => (
  <ServiceContainer>
    <ServiceTitle>
      What We Offer
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