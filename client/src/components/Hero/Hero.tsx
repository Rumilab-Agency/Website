import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage, PriceHighlight } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
      <Headline>
        Turn Visitors into Clients
        {/* Crafting Digital IdentitiesThrough Custom Design. */}
      </Headline>
      <Subheadline>
        Purpose-built for SMEs to drive more <PriceHighlight>bookings</PriceHighlight>, <PriceHighlight>enquiries</PriceHighlight>, <PriceHighlight>memberships</PriceHighlight>, and <PriceHighlight>students</PriceHighlight>
      </Subheadline>
    </HeadlineWrapper>
    {/* <SunWrapper>
      <SunriseGlow />
      <SunCurve />
    </SunWrapper> */}
    <SunriseImage src={sunriseGlow} alt="Sunrise Glow" />
  </HeroContainer>
);

export default Hero; 
