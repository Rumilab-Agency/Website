import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
        <Headline>
        Beautiful, Custom Websites <br /> for Small Businesses.
        {/* Crafting Digital IdentitiesThrough Custom Design. */}
        </Headline>
        <Subheadline>
        Built for your brand, delivered quickly, and ready to rank.
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
