import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage, PriceHighlight } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
      <Headline>
        Websites Crafted to Convert
        {/* Crafting Digital IdentitiesThrough Custom Design. */}
      </Headline>
      <Subheadline>
        Custom websites built for Singapore small businesses — engineered to drive <PriceHighlight>enquiries, bookings, and sales</PriceHighlight>. Guaranteed.
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
