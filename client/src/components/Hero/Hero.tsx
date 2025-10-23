import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage, PriceHighlight } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
      <Headline>
        Turn Clicks into Clients
        {/* Crafting Digital IdentitiesThrough Custom Design. */}
      </Headline>
      <Subheadline>
        Custom websites built to drive <PriceHighlight>bookings & enquiries</PriceHighlight>
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
