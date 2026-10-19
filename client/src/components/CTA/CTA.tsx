

import {
  CTAContainer, CTATitle, CTASubTitle, CTAContentWrapper,
  CTASlogan1, CTASlogan2, CTAButton1, CTAActions, CTAHorizon, CTAShards, CTABgStars
} from './CTA.style';

import { GradientText } from '../../layouts/AppLayout.style';

import HorizonBloom from '../HorizonBloom/HorizonBloom';

import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

import backgroundStars from '../../assets/images/bg-stars.png';

// WebGPU + shader compiler are ~90 KB gzipped: load them in their own chunk,
// after the main bundle, so the effect at the bottom never delays first paint.
const AeroShards = lazy(() => import('../AeroShards/AeroShards'));


const CTA = () => (
  <CTAContainer>
    <CTATitle>Ready to grow <br /> <GradientText data-aos="fade-in" data-aos-duration="2000">your customer base?</GradientText></CTATitle>
    <CTASubTitle>
      A website that not only looks great — <br />
      but actually grows your business.
    </CTASubTitle>
    <CTAContentWrapper>
      <CTASlogan1 data-aos="fade-right">Not sure where to begin?</CTASlogan1>
      <CTASlogan2><GradientText data-aos="fade-left">We're here to help.</GradientText></CTASlogan2>
      <CTAActions>
        <CTAButton1 as={Link} to="/contact">Start your project</CTAButton1>
        <WhatsAppButton size="large" />
      </CTAActions>
    </CTAContentWrapper>
    <CTAShards aria-hidden="true">
      <Suspense fallback={null}>
        <AeroShards
          backgroundColor="#000000"
          shardColor="#8f78d6"
          accentColor="#f780ff"
          placement="center"
          flow="stream"
          material="pearl"
          detail="balanced"
          effect="none"
          scale={2.2}
          spread={1}
          depth={0}
          speed={0.4}
          spin={1}
          interaction="none"
          density={1.2}
          shardSize={0.7}
          stretch={1}
          turbulence={1}
          glow={0.3}
          edgeSoftness={2}
          bloom={0.5}
          grain={0.05}
          chromaticAberration={0.0075}
          rippleIntensity={0}
          holdToGather={false}
        />
      </Suspense>
    </CTAShards>
    <CTABgStars src={backgroundStars} alt="" />

    <CTAHorizon>
      <HorizonBloom horizon={0.62} drop={0.6} flip />
    </CTAHorizon>
  </CTAContainer>
);

export default CTA; 