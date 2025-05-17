import { HeroContainer, Headline, HeadlineWrapper, Subheadline, SunriseImage } from './Hero.style';
import sunriseGlow from '../../assets/images/sunrise.png';


const Hero = () => (
  <HeroContainer>
    <HeadlineWrapper>
        <Headline>
        Crafting Digital Identities<br />Through Custom Design.
        </Headline>
        <Subheadline>
        Tailored design, fast delivery, and SEO-ready from day one.
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
