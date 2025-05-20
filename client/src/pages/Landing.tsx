import AppLayout from '../layouts/AppLayout';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero/Hero';
import WhySection from '../components/WhySection/WhySection';
import Strength from '../components/Strength/Strength';
import Service from '../components/ServiceSection/Service';
import CTA from '../components/CTA/CTA';





const Landing = () => {
    return (
        <>
        <Helmet>
        <title>Web Design for Small Businesses in Singapore | RumiLab</title>
        <meta name="description" content="RumiLab offers professional web development and design services for small businesses in Singapore at friendly prices." />
        <meta name="keywords" content="Singapore Web Design, Web development for small businesses, Small Business Websites, RumiLab, Web Development Singapore, Affordable web developer Singapore" />
        <meta name="author" content="RumiLab" />
        <meta property="og:title" content="RumiLab | Friendly Web Design for Small Businesses in Singapore" />
        <meta property="og:description" content="We help Singapore businesses thrive online with stunning, budget-friendly websites." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rumilab.co" />
      </Helmet>

      <AppLayout>
        <Hero />
        <WhySection/>
        <Strength/>
        <Service/>
        <CTA/>
      </AppLayout>
      </>
    );
  };

export default Landing;