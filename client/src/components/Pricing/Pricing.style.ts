import styled, { } from 'styled-components';
import { breakpoints, Title, Container, } from '../../layouts/AppLayout.style';


export const PricingContainer = styled(Container)`
`;


export const PricingTitle = styled(Title)`
  color:white;
`;

export const BillingToggleWrapper = styled.div`
  position: relative;
  border-radius: 9999px;
  padding: 2px;
  margin: 0 auto;

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

  background-color: #0f0f0f;
  z-index: 10;

  @media (min-width: ${breakpoints.xl}) {
    padding: 0.156vw;
    border-radius: 3.125vw;

    &::before {
      padding: 0.156vw;
      border-radius: 3.125vw;
    }
  }
`;

interface ToggleButtonProps {
  selected: boolean;
}

export const BillingToggleButton = styled.button<ToggleButtonProps>`
  flex: 1;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 0.75rem;

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

  @media (min-width: ${breakpoints.md}) {
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.938vw;
    padding: 0.938vw 1.875vw;
    border-radius: 3.125vw;
  }
`;


// Wrapper for all package cards
export const PackageCardWrapper = styled.section`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
    width:100%;

    @media (min-width: ${breakpoints.md}) {
                width:auto;


}

      @media (min-width: ${breakpoints.xl}) {
    padding: 1.875vw;
  }

`;

export const PackageCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
width: 92%;

@media (min-width: ${breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
        min-width: 700px;
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
  background-color: #111;
  color: white;
  z-index: 30;
  transition: all 0.3s ease;
  padding: 2rem;
  border-radius: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #8e44f3, #a084ff, #d2b4ff);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 2.5vw;
    border-radius: 1.875vw;
    
    &::before {
      padding: 0.156vw;
      border-radius: 1.875vw;
    }
  }
`;

export const PopularPackageCard = styled(PackageCard)`
  background: linear-gradient(135deg, #8e44f3, #a084ff, #d2b4ff);
  color: #fff;

`

export const PackageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.953vw;
  }
`;

export const PackageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.25rem;
  }
`;

export const PackageSubtitle = styled.span`
  font-size: 0.75rem;
  color: #cfcfcf;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 0.875rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.977vw;
  }
`;

export const PackageListItemWrapper = styled.ul`
  margin: 18px 0;
  list-style: none;
  padding: 0;
`;

export const PackageListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.977vw;
    margin-bottom: 0.938vw;
  }
`;

export const PackagePricing = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
    margin-top: 2.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 2.93vw;
    margin-top: 2.344vw;
  }
`;

export const PackageHostingNote = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.977vw;
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  background: linear-gradient(135deg, #a084ff, #f780ff);
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.15);
  z-index: 10;

  @media (min-width: ${breakpoints.md}) {
    top: -0.875rem;
    right: -0.875rem;
    padding: 0.313rem 0.625rem;
    font-size: 0.875rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    top: -0.938vw;
    right: -0.938vw;
    padding: 0.313vw 0.625vw;
    font-size: 0.938vw;
    border-radius: 3.125vw;
    box-shadow: 0 0.313vw 0.781vw rgba(0, 0, 0, 0.15);
  }
`;


