import { useState } from 'react';

import { PricingContainer, PricingTitle, PackageCardWrapper, 
    PackageCardGrid, PackageCard, PackageTitle, PackageTitleWrapper, PackageSubtitle, PackageListItemWrapper, PackageListItem, PackagePricing,
    PopularPackageCard, PopularBadge, BillingToggleWrapper, BillingToggleButton, PackageHostingNote
} from './Pricing.style';


import { IoCheckmarkSharp } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";


const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>('monthly');
  
    // Pricing values based on billingCycle
    const prices = {
      monthly: { essentials: '$48', growth: '$128' },
      oneTime: { essentials: '$648', growth: '$1688', hosting: '+$15/mo hosting' },
    };
  
    // Example: different features for monthly vs one-time if needed
    // const features = billingCycle === 'monthly' ? monthlyFeatures : oneTimeFeatures;
  
    return (
      <PricingContainer>
        <PricingTitle>Plans and Packages</PricingTitle>
  
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
                <PackageTitle>Starter</PackageTitle>
                <PackageSubtitle>Perfect foundation for your digital journey</PackageSubtitle>
              </PackageTitleWrapper>
              <PackageListItemWrapper>
                <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />Lifetime Support</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />
                {billingCycle === 'monthly'
                    ? 'Unlimited Hosting'
                    : 'Free 1 Year Hosting'}
                </PackageListItem>
                <PackageListItem><IoCheckmarkSharp />1 Fully Responsive page</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />1 Edit Per Month</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />{billingCycle === 'monthly'
                    ? '+$25/mo for each new page'
                    : '+$300 for each new page'}
                    </PackageListItem>

                <PackageListItem><IoCheckmarkSharp />{billingCycle === 'monthly'
                    ? '+$10/mo CMS Section Add on'
                    : '+$120 CMS Section Add On'}
                </PackageListItem>
              </PackageListItemWrapper>
              <PackagePricing>{prices[billingCycle].essentials} 
                <PackageHostingNote> 
                    {billingCycle === 'monthly' ? '/ month' : ''} 
                    </PackageHostingNote> 
                </PackagePricing>
            </PackageCard>

            <PopularPackageCard data-aos="fade-in">
              <PopularBadge>More Popular</PopularBadge>
              <PackageTitleWrapper>
                <PackageTitle>Growth</PackageTitle>
                <PackageSubtitle>Built to support your expanding business</PackageSubtitle>
              </PackageTitleWrapper>
              <PackageListItemWrapper>
                <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />Lifetime Support</PackageListItem>
                <PackageListItem><IoCheckmarkSharp />
                {billingCycle === 'monthly'
                    ? 'Unlimited Hosting'
                    : 'Free 1 Year Hosting'}
                </PackageListItem>
                <PackageListItem><FaAnglesUp />5 Fully Responsive pages</PackageListItem>

                <PackageListItem><FaAnglesUp />{billingCycle === 'monthly'
                    ? 'Unlimited Edits'
                    : 'Free 5 Edits/mo for 1 year'}
                </PackageListItem>

                <PackageListItem><FaAnglesUp />{billingCycle === 'monthly'
                    ? '+$15/mo for each new page'
                    : '+$180 for each new page'}
                </PackageListItem>
                <PackageListItem><FaAnglesUp />CMS Section Included</PackageListItem>
              </PackageListItemWrapper>
              <PackagePricing>{prices[billingCycle].growth}
              <PackageHostingNote>
                    {billingCycle === 'monthly'
                    ? '/ month'
                    : ''}
                </PackageHostingNote>
              </PackagePricing>
            </PopularPackageCard>
            
          </PackageCardGrid>
        </PackageCardWrapper>
      </PricingContainer>
    );
  };
  
  export default Pricing;