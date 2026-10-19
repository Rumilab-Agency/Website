import { Helmet } from 'react-helmet-async';
import AppLayout from '../layouts/AppLayout';

import Hero from '../components/Hero/Hero';
import WhySection from '../components/WhySection/WhySection';
import Strength from '../components/Strength/Strength';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Service from '../components/ServiceSection/Service';
import Pricing from '../components/Pricing/Pricing';
import CTA from '../components/CTA/CTA';

const Landing = () => {
    return (
      <AppLayout>
        <Helmet>
          <title>RumiLab | High-Conversion Web Design for Small Businesses – Guaranteed to Perform</title>
          <link rel="canonical" href="https://rumilab.org/" />
          <meta property="og:url" content="https://rumilab.org/" />
        </Helmet>
        <Hero />
        <WhySection/>
        <Strength/>
        <HowItWorks/>
        <Service/>
        <Pricing/>
        <CTA/>
      </AppLayout>
    );
  };

export default Landing;
