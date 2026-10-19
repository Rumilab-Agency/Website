import type { IconType } from 'react-icons';
import {
  IoColorPaletteOutline, IoPhonePortraitOutline, IoSearchOutline,
  IoChatbubblesOutline, IoStatsChartOutline, IoCloudDoneOutline,
} from 'react-icons/io5';
import {
  ServiceContainer, ServiceTitle, ServiceIntro, IncludedGrid, IncludedItem,
  IncludedIcon, ItemTitle, ItemText, PlanTag, ServiceAurora,
} from './Service.style';

import SoftAurora from '../SoftAurora/SoftAurora';
import { useNearViewport } from '../../hooks/useNearViewport';

// "What's included": what every site comes with, in plain words. Items that only
// come with the Monthly plan are tagged.
const included: { icon: IconType; title: string; text: string; monthly?: boolean }[] = [
  {
    icon: IoColorPaletteOutline,
    title: 'Custom design',
    text: 'Made around your brand and your customers. Never a template.',
  },
  {
    icon: IoPhonePortraitOutline,
    title: 'Fast on every phone',
    text: 'Designed for phones first. Loads in under a second and scores 90+ on Google PageSpeed.',
  },
  {
    icon: IoSearchOutline,
    title: 'Found on Google',
    text: 'Search-ready from launch, with your Google Business Profile set up and linked.',
  },
  {
    icon: IoChatbubblesOutline,
    title: 'WhatsApp and bookings',
    text: 'Enquiries, chats and online bookings connected, so visitors can act in one tap.',
  },
  {
    icon: IoStatsChartOutline,
    title: 'Monthly progress report',
    text: 'Visits, button clicks and how close you are to the 5% guarantee.',
    monthly: true,
  },
  {
    icon: IoCloudDoneOutline,
    title: 'Hosting and unlimited edits',
    text: 'We keep the site online, fast and up to date. Ask for changes any time.',
    monthly: true,
  },
];

const Service = () => {
  const [auroraRef, showAurora] = useNearViewport<HTMLDivElement>();
  return (
    <ServiceContainer>
      <ServiceAurora aria-hidden="true" ref={auroraRef}>
        {showAurora && (
          <SoftAurora
            speed={0.6}
            scale={1.5}
            // Lower bandSpread widens the band but dims its peak by e^(1 - bandSpread);
            // brightness is raised by the same factor to keep the peak unchanged.
            brightness={1.8}
            color1="#a084ff"
            color2="#f780ff"
            noiseFrequency={2.5}
            noiseAmplitude={3}
            bandHeight={0.5}
            bandSpread={0.45}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1.0}
            enableMouseInteraction={false}
            mouseInfluence={0.25}
            resolution={0.5}
            fps={30}
          />
        )}
      </ServiceAurora>
      <ServiceTitle>What&apos;s included</ServiceTitle>
      <ServiceIntro>Everything your website needs to win customers, built in from day one.</ServiceIntro>
      <IncludedGrid>
        {included.map(({ icon: Icon, title, text, monthly }, idx) => (
          <IncludedItem key={title} data-aos="fade-up" data-aos-delay={(idx % 3) * 60}>
            <IncludedIcon aria-hidden="true"><Icon /></IncludedIcon>
            <div>
              <ItemTitle>
                {title}
                {monthly && <PlanTag>Monthly plan</PlanTag>}
              </ItemTitle>
              <ItemText>{text}</ItemText>
            </div>
          </IncludedItem>
        ))}
      </IncludedGrid>
    </ServiceContainer>
  );
};

export default Service;
