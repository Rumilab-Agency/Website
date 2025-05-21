import { useState } from 'react';

import { PricingContainer, PricingTitle, PackageCardWrapper, 
    PackageCardGrid, PackageCard, PackageTitle, PackageTitleWrapper, PackageSubtitle, PackageListItemWrapper, PackageListItem, PackagePricing,
    PopularPackageCard, PopularBadge, BillingToggleWrapper, BillingToggleButton, PackageHostingNote
} from './Pricing.style';


import { GradientText } from '../../layouts/AppLayout.style';

import { IoCheckmarkSharp } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";


const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>('monthly');
  
    // Pricing values based on billingCycle
    const prices = {
      monthly: { essentials: '$49', growth: '$129' },
      oneTime: { essentials: '$588', growth: '$1688', hosting: '+$15/mo hosting' },
    };
  
    // Example: different features for monthly vs one-time if needed
    // const features = billingCycle === 'monthly' ? monthlyFeatures : oneTimeFeatures;
  
    return (
      <PricingContainer>
        <PricingTitle>Our Packages</PricingTitle>
  
        {/* Tabs */}
        <BillingToggleWrapper>
        <BillingToggleButton
            selected={billingCycle === 'monthly'}
            onClick={() => setBillingCycle('monthly')}
        >
            Monthly
        </BillingToggleButton>
        <BillingToggleButton
            selected={billingCycle === 'oneTime'}
            onClick={() => setBillingCycle('oneTime')}
        >
            One-Time
        </BillingToggleButton>
        </BillingToggleWrapper>
  
        <PackageCardWrapper>
          <PackageCardGrid>
            <PackageCard data-aos="fade-in">
              <PackageTitleWrapper>
                <PackageTitle>Essential</PackageTitle>
                <PackageSubtitle>Perfect foundation for your digital journey</PackageSubtitle>
              </PackageTitleWrapper>
              <PackageListItemWrapper>
                <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />24/7 Support</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />
                {billingCycle === 'monthly'
                    ? 'Unlimited Hosting'
                    : '$15/mo for Hosting'}
                </PackageListItem>
                <PackageListItem><IoCheckmarkSharp />1 Fully Responsive page</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />
                {billingCycle === 'monthly'
                    ? '1 Edit Per Month'
                    : '1 Edit Per Month'}
                </PackageListItem>
                <PackageListItem><IoCheckmarkSharp />{billingCycle === 'monthly'
                    ? '+$25/mo for each new page'
                    : '+$300 for each new page'}</PackageListItem>
              </PackageListItemWrapper>
              <PackagePricing>{prices[billingCycle].essentials} 
                <PackageHostingNote> 
                    {billingCycle === 'monthly' ? ' Per month' : ' +$15/mo Hosting'} 
                    </PackageHostingNote> 
                </PackagePricing>
            </PackageCard>

            {/* <PackageCard>
              <PackageTitleWrapper>
                <PackageTitle>Lump Sum</PackageTitle>
                <PackageSubtitle>Built to support your expanding business</PackageSubtitle>
              </PackageTitleWrapper>
              <PackageListItemWrapper>
                <PackageListItem><IoCheckmarkSharp />5 pages (+$250 for each new page)</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />24/7 Support</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />$15/mo for Hosting
                </PackageListItem>
                <PackageListItem><IoCheckmarkSharp />+$35/mo Unlimited Edits Add-on</PackageListItem>
              </PackageListItemWrapper>
              <PackagePricing>$1688
                <PackageHostingNote>+$15/mo hosting</PackageHostingNote>
              </PackagePricing>
            </PackageCard> */}
  
            <PopularPackageCard data-aos="fade-in">
              <PopularBadge>More Popular</PopularBadge>
              <PackageTitleWrapper>
                <PackageTitle>Growth</PackageTitle>
                <PackageSubtitle>Built to support your expanding business</PackageSubtitle>
              </PackageTitleWrapper>
              <PackageListItemWrapper>
                <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />24/7 Support</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />
                {billingCycle === 'monthly'
                    ? 'Unlimited Hosting'
                    : '$15/mo for Hosting'}
                </PackageListItem>
                <PackageListItem><FaAnglesUp />5 Fully Responsive pages</PackageListItem>

                <PackageListItem><FaAnglesUp />
                {billingCycle === 'monthly'
                    ? '5 Edit Per Month'
                    : '5 Edit Per Month'}
                </PackageListItem>
                <PackageListItem><FaAnglesUp />{billingCycle === 'monthly'
                    ? '+$20/mo for each new page'
                    : '+$250 for each new page'}</PackageListItem>
              </PackageListItemWrapper>
              <PackagePricing>{prices[billingCycle].growth}
              <PackageHostingNote>
                    {billingCycle === 'monthly'
                    ? ' Per month'
                    : ' +$15/mo Hosting'}
                </PackageHostingNote>
              </PackagePricing>
            </PopularPackageCard>
            
          </PackageCardGrid>
        </PackageCardWrapper>
      </PricingContainer>
    );
  };
  
  export default Pricing;