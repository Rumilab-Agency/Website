import {
  HeroContainer, HeroTop, HeroBottom, Headline, HeadlineLight, HeadlineBold,
  Subheadline, PriceHighlight, HeroCTA, HeroActions, HeroOffer,
} from './Hero.style';
import { Link } from 'react-router-dom';
import HorizonBloom from '../HorizonBloom/HorizonBloom';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import { CTA_LABEL, OFFER_NOTE } from '../../data/offer';


const Hero = () => (
  <HeroContainer>
    <HorizonBloom />
    <HeroTop>
      <Headline>
        <HeadlineLight>Websites Crafted</HeadlineLight>
        <HeadlineBold>to Convert</HeadlineBold>
      </Headline>
    </HeroTop>
    <HeroBottom>
      <Subheadline>
        Custom websites built for Singapore small businesses — made to drive <PriceHighlight>enquiries, bookings, and sales</PriceHighlight>. Guaranteed.
      </Subheadline>
      <HeroActions>
        <HeroCTA as={Link} to="/contact">
          {CTA_LABEL}
        </HeroCTA>
        <WhatsAppButton />
      </HeroActions>
      <HeroOffer>{OFFER_NOTE}</HeroOffer>
    </HeroBottom>
  </HeroContainer>
);

export default Hero;
