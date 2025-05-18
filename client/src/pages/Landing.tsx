import AppLayout from '../layouts/AppLayout';

import Hero from '../components/Hero/Hero';
import WhySection from '../components/WhySection/WhySection';
import Strength from '../components/Strength/Strength';
import Service from '../components/ServiceSection/Service';




const Landing = () => {
    return (
      <AppLayout>
        <Hero />
        <WhySection/>
        <Strength/>
        <Service/>
      </AppLayout>
    );
  };

export default Landing;