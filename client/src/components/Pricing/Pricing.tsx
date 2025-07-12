
import {
  PricingContainer, PricingTitle, PackageCardWrapper,
  PackageCardGrid, PackageCard, PackageTitle, PackageTitleWrapper, PackageSubtitle, PackageListItemWrapper, PackageListItem, PackagePricing,
  PopularPackageCard, PopularBadge, PackageHostingNote
} from './Pricing.style';


import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";


const Pricing = () => {


  // Example: different features for monthly vs one-time if needed
  // const features = billingCycle === 'monthly' ? monthlyFeatures : oneTimeFeatures;

  return (
    <PricingContainer>
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
              <PackageListItem><IoCheckmarkSharp />5 Fully Responsive Pages</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$150 for each additional page</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$300 for Article/Blog</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Free 1 Year - 5 Edits per month</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Free 1 Year Hosting</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp /> 24/7 Support</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>$2688
            </PackagePricing>
          </PackageCard>

          {/* Monthly Plan */}
          <PopularPackageCard data-aos="fade-in">
            <PopularBadge>More Popular</PopularBadge>
            <PackageTitleWrapper>
              <PackageTitle>Monthly</PackageTitle>
              <PackageSubtitle>Spread the cost, stay supported</PackageSubtitle>
            </PackageTitleWrapper>
            <PackageListItemWrapper>
              <PackageListItem><IoCheckmarkSharp />Design and Development</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />5 Fully Responsive Pages</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$150 for each additional page</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$300 for Article/Blog</PackageListItem>
              <PackageListItem><FaAnglesUp />Unlimited Edits</PackageListItem>
              <PackageListItem><FaAnglesUp />Unlimited Hosting</PackageListItem>
              <PackageListItem><FaAnglesUp /> 24/7 Support</PackageListItem>
              <PackageListItem><FaAnglesUp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>$168
              <PackageHostingNote>/ month</PackageHostingNote>
            </PackagePricing>
          </PopularPackageCard>
        </PackageCardGrid>
      </PackageCardWrapper>

    </PricingContainer>
  );
};

export default Pricing;