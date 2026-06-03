
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
              <PackageListItem><IoCheckmarkSharp />+$350 for Article/Blog</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$25/mo Hosting</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />+$50/mo Unlimited Edits Add-on</PackageListItem>
              <PackageListItem></PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp />Perfomance-based Guarantee (4%)</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp />Monthly Analytics Report (PDF)</PackageListItem>

              <PackageListItem className="text-muted"><IoCloseSharp /> 24/7 Support</PackageListItem>
              <PackageListItem className="text-muted"><IoCloseSharp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>$4500
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
              <PackageListItem><IoCheckmarkSharp />+$350 for Article/Blog</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Includes Hosting</PackageListItem>
              <PackageListItem><IoCheckmarkSharp />Unlimited Edits</PackageListItem>
              <PackageListItem></PackageListItem>
              <PackageListItem><FaAnglesUp />Perfomance-based Guarantee (4%)</PackageListItem>
              <PackageListItem><FaAnglesUp />Monthly Analytics Report (PDF)</PackageListItem>
              <PackageListItem><FaAnglesUp /> 24/7 Support</PackageListItem>
              <PackageListItem><FaAnglesUp /> Lifetime Updates</PackageListItem>
            </PackageListItemWrapper>
            <PackagePricing>$200
              <PackageHostingNote>/ month</PackageHostingNote>
            </PackagePricing>
          </PopularPackageCard>
        </PackageCardGrid>
      </PackageCardWrapper>

    </PricingContainer>
  );
};

export default Pricing;