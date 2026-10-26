
import {
  PricingContainer, PricingTitle, PackageCardWrapper,
  PackageCardGrid, PackageCard, PackageTitle, PackageTitleWrapper, PackageSubtitle, PackageListItemWrapper, PackageListItem, PackagePricing,
  PopularPackageCard, PopularBadge, PackageHostingNote, OldPrice, PriceTerms
} from './Pricing.style';


import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";
import { lazy, Suspense } from 'react';
import InfoTip from '../InfoTip/InfoTip';

// What "every page your business needs" means, since the scope isn't a fixed count
const PAGES_TIP = (
  <InfoTip label="Which pages are included?">
    Your main pages (Home, Services, About, FAQ and Contact) plus pages that answer the questions your customers
    ask most. Usually 5 to 10 pages, all listed in your quote before we start.
  </InfoTip>
);

// Plain-words explanation for owners who haven't run a website before
const HOSTING_TIP = (
  <InfoTip label="What is hosting?">
    Hosting is what keeps your website online 24/7. We run it on fast, secure servers, keep backups and renew the
    security padlock in the browser for you. If you host it yourself, you set this up and pay a hosting company directly.
  </InfoTip>
);
import { useNearViewport } from '../../hooks/useNearViewport';

// Loaded only when the pricing cards come near
const HoloFoil = lazy(() => import('../HoloFoil/HoloFoil'));


const Pricing = () => {
  const [popularRef, showFoil] = useNearViewport<HTMLDivElement>();


  // Example: different features for monthly vs one-time if needed
  // const features = billingCycle === 'monthly' ? monthlyFeatures : oneTimeFeatures;

  return (
    <PricingContainer id="pricing">
      <PricingTitle>Plans and Packages</PricingTitle>


      <PackageCardWrapper>
        <PackageCardGrid>
          {/* One-Time Plan */}
          <PackageCard data-aos="fade-in">
            <PackageTitleWrapper>
              <PackageTitle>One-Time</PackageTitle>
              <PackageSubtitle>Pay once, launch confidently</PackageSubtitle>
            </PackageTitleWrapper>
            <PackageListItemWrapper>
              <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
              <PackageListItem><IoCheckmarkSharp /><span>Every page your business needs {PAGES_TIP}</span></PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$100 per page outside the agreed scope</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$300 for Article/Blog</PackageListItem>
              <PackageListItem><IoCheckmarkSharp /><span>Hosting {HOSTING_TIP} free for 3 months, then $25/mo</span></PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Unlimited edits free for 3 months, then $50/mo</PackageListItem>
              <PackageListItem></PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp />Performance-based Guarantee (5%)</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp />Monthly Analytics Report (PDF)</PackageListItem>

              <PackageListItem className="text-muted"><IoCloseSharp /> 24/7 Support</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>$4,000
            </PackagePricing>
          </PackageCard>

          {/* Monthly Plan */}
          <PopularPackageCard data-aos="fade-in" ref={popularRef}>
            <PopularBadge>Most Popular</PopularBadge>
            <PackageTitleWrapper>
              <PackageTitle>Monthly</PackageTitle>
              <PackageSubtitle>Spread the cost, stay supported</PackageSubtitle>
            </PackageTitleWrapper>
            <PackageListItemWrapper>
              <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
              <PackageListItem><IoCheckmarkSharp /><span>Every page your business needs {PAGES_TIP}</span></PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$100 per page outside the agreed scope</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$300 for Article/Blog</PackageListItem>
              <PackageListItem><IoCheckmarkSharp /><span>Includes Hosting {HOSTING_TIP}</span></PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Unlimited Edits</PackageListItem>
              <PackageListItem></PackageListItem>
              <PackageListItem><FaAnglesUp />Performance-based Guarantee (5%)</PackageListItem>
              <PackageListItem><FaAnglesUp />Monthly Analytics Report (PDF)</PackageListItem>
              <PackageListItem><FaAnglesUp /> 24/7 Support</PackageListItem>
              <PackageListItem><FaAnglesUp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>
              <OldPrice aria-label="Usually $198">$198</OldPrice>$0
              <PackageHostingNote> / month for 3 months</PackageHostingNote>
            </PackagePricing>
            <PriceTerms>Then $25/month for hosting, or host it yourself. Cancel anytime. Only for our first 10 clients.</PriceTerms>
            {/* Gold foil sheen drifting over the card on its own (no tilt, no hover) */}
            {showFoil && <Suspense fallback={null}><HoloFoil intensity={0.6} glare={0.5} /></Suspense>}
          </PopularPackageCard>
        </PackageCardGrid>
      </PackageCardWrapper>

    </PricingContainer>
  );
};

export default Pricing;