import AppLayout from '../layouts/AppLayout';

import Hero from '../components/Hero/Hero';
import WhySection from '../components/WhySection/WhySection';
import Strength from '../components/Strength/Strength';




const Landing = () => {
    return (
      <AppLayout>
        <Hero />
        <WhySection/>
        <Strength/>
      </AppLayout>
    );
  };

export default Landing;