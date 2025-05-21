import styled, { } from 'styled-components';
import { breakpoints, Title, Container, } from '../../layouts/AppLayout.style';


export const PricingContainer = styled(Container)`
`;


export const PricingTitle = styled(Title)`
  color:white;
`;

export const BillingToggleWrapper = styled.div`
  position: relative;
  border-radius: 9999px; // pill shape
  padding: 2px; // spacing for gradient border

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 9999px;
    background: linear-gradient(135deg, #8e71ff, #c986f8, #f3b2ff);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
  }

  background-color: #0f0f0f; // or your base bg
  z-index: 10;
`;

interface ToggleButtonProps {
  selected: boolean;
}

export const BillingToggleButton = styled.button<ToggleButtonProps>`
  flex: 1;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  position: relative;

        /* Corner overrides */
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  background: ${({ selected }) =>
    selected
      ? 'linear-gradient(135deg, #8e71ff, #c986f8, #f3b2ff)'
      : 'transparent'};
  color: ${({ selected }) => (selected ? 'white' : '#fff')};
  transition: background 0.4s ease, color 0.3s ease;
  z-index: 1;
  border-radius: 9999px;

`;


// Wrapper for all package cards
export const PackageCardWrapper = styled.section`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
    width:100%;

      @media (min-width: ${breakpoints.xl}) {
    padding: 1.875vw;
  }

`;

export const PackageCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

@media (min-width: ${breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
        min-width: 800px;
  }

 @media (min-width: ${breakpoints.lg}) {
 }

  @media (min-width: ${breakpoints.xl}) {
    gap: 2.5vw;
    min-width: 62.5vw;
  }
`;

export const PackageCard = styled.div`
  position: relative;
  background-color: #111; // fallback or content background
  color: white;
  z-index: 30;
  transition: all 0.3s ease;
  padding: 32px;
  border-radius: 24px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px; // thickness of border
    border-radius: 24px;
    background: linear-gradient(135deg, #8e44f3, #a084ff, #d2b4ff);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
  }
`;

export const PopularPackageCard = styled(PackageCard)`
  background: linear-gradient(135deg, #8e44f3, #a084ff, #d2b4ff);
  color: #fff;

`

export const PackageTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;

 @media (min-width: ${breakpoints.lg}) {
     font-size: 32px;
 }

  @media (min-width: ${breakpoints.xl}) {
       font-size: 2.5vw;

  }
`;

export const PackageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

    @media (min-width: ${breakpoints.xl}) {
     font-size: 1.25vw;

  }
`;

export const PackageSubtitle = styled.span`
  font-size: 12px;
  color: #cfcfcf;

   @media (min-width: ${breakpoints.lg}) {
     font-size: 14px;
 }

  @media (min-width: ${breakpoints.xl}) {
     font-size: 1.094vw;

  }
`;

export const PackageListItemWrapper = styled.ul`
  margin: 18px 0;
  list-style: none;
  padding: 0;
`;

export const PackageListItem = styled.li`
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
  align-items: center; /* vertical center */
  gap: 8px; /* spacing between icon and text */

     @media (min-width: ${breakpoints.lg}) {
     font-size: 16px;
 }

  @media (min-width: ${breakpoints.xl}) {
     font-size: 1.25vw;
         margin-bottom: 0.938vw;

  }

`;

export const PackagePricing = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 16px;
  color: white;

       @media (min-width: ${breakpoints.lg}) {
     font-size: 48px;
       margin-top: 40px;

 }

  @media (min-width: ${breakpoints.xl}) {
     font-size: 3.75vw;
    margin-top: 3.125vw;
  }
`;

export const PackageHostingNote = styled.span`
  font-size: 12px; // or smaller
  color: rgba(255, 255, 255, 0.7); // subtle text

    @media (min-width: ${breakpoints.xl}) {
     font-size: 0.938vw;
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  background: linear-gradient(135deg, #a084ff, #f780ff);
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;


