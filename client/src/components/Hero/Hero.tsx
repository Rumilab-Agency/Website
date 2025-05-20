import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage, SubHeadlinePrice, PriceHighlight } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
        <Headline>
        Beautiful, Custom Websites <br /> for Small Businesses.
        {/* Crafting Digital IdentitiesThrough Custom Design. */}
        </Headline>
        <Subheadline>
        Starting at just <PriceHighlight>$49/mo</PriceHighlight> — complete with design, hosting, and support.
        </Subheadline>
    </HeadlineWrapper>
    {/* <SunWrapper>
      <SunriseGlow />
      <SunCurve />
    </SunWrapper> */}
    <SunriseImage data-aos="fade-up" src={sunriseGlow} alt="Sunrise Glow" />
  </HeroContainer>
);

export default Hero; 
