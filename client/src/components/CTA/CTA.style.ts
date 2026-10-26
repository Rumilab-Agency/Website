import styled, {  } from 'styled-components';
import { breakpoints, Title, Container, ContentWrapper, SubTitle, CTAButtonLarge } from '../../layouts/AppLayout.style';
import { CTAGroup } from '../WhatsAppButton/WhatsAppButton.style';



export const CTAContainer = styled(Container)`
  background-color: black;
  padding: 0 0.75rem;
  position: relative;

  > * {
    position: relative;
    z-index: 3;
  }
`;


export const CTATitle = styled(Title)`
  color:white;

`;

export const CTASubTitle = styled(SubTitle)`
    color: #ccc;
    text-align:center;



`;


export const CTAContentWrapper = styled(ContentWrapper)`
    width: 18.75rem;
    display:flex;
    flex-direction:column;
    margin-top:6.25rem;
    margin-bottom:6.25rem;



    @media (min-width: ${breakpoints.md}) {
        width:36.25rem;
            margin-top:7.813rem;
      }

    @media (min-width: ${breakpoints.lg}) {
        width:48.75rem;
        margin-top:9.375rem;

    }

    @media (min-width: ${breakpoints.xl}) {
        width: 60.938vw;
        margin-top: 9.155vw;
        margin-bottom: 6.103vw;
    }

`;

export const CTASlogan1 = styled.p`
  text-align:left;
  color:white;
  font-size:1.25rem;

      @media (min-width: ${breakpoints.md}) {
        font-size:1.5rem;

      }
  
      @media (min-width: ${breakpoints.lg}) {
        font-size: 1.75rem;
      }

      @media (min-width: ${breakpoints.xl}) {
        font-size: 2.188vw;
      }

`;

// Styled like a title but not a heading: it answers the line above it
export const CTASlogan2 = styled(Title).attrs({ as: 'p' })`
  text-align:right;

`;

export const CTAButton1 = styled(CTAButtonLarge)`
  text-align:center;
`;

export const CTAActions = styled(CTAGroup)`
  margin: 2.5rem auto;

  @media (min-width: ${breakpoints.xl}) {
    margin: 3.125vw auto;
  }
`;

// AeroShards band: a wide stream through the middle of the section, fading
// out on every edge so the stars show above and around it and the footer
// horizon below stays clear.
export const CTAShards = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 8%;
  height: 62%;
  z-index: 2;
  pointer-events: none;
  -webkit-mask-image:
    linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent),
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent),
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  mask-composite: intersect;
`;


// Upside-down twin of the hero sunrise, spanning the full width (it cancels
// the container's side padding) right above the footer.
export const CTAHorizon = styled.div`
  width: calc(100% + 1.5rem);
  margin: 0 -0.75rem;
  height: clamp(150px, 20vw, 340px);
`;


