import AppLayout from '../layouts/AppLayout';

import Hero from '../components/Hero/Hero';
import WhySection from '../components/WhySection/WhySection';
import Strength from '../components/Strength/Strength';
import Service from '../components/ServiceSection/Service';
import CTA from '../components/CTA/CTA';





const Landing = () => {
    return (
      <AppLayout>
        <Hero />
        <WhySection/>
        <Strength/>
        <Service/>
        <CTA/>
      </AppLayout>
    );
  };

export default Landing;