import { Link } from 'react-router-dom';
import {
  StrengthContainer, StrengthContentWrapper, StrengthTitle, CardGrid,
  CardCell, CardBody, Kicker, Figure, CardTitle, CardContent, CardNote,
} from './Strength.style';
import BorderGlow from '../BorderGlow/BorderGlow';

// "Why RumiLab": the three reasons to choose us, led by the guarantee.
const reasons = [
  {
    kicker: 'The guarantee',
    figure: '5%',
    title: 'of your visitors take action. Guaranteed.',
    description:
      "From your very first month, at least 5 in every 100 visitors will click one of your key buttons, like Book Now, Enquire or WhatsApp. Any month they don't, you don't pay for that month, and we keep improving the site until they do.",
    note: 'On the Monthly plan.',
  },
  {
    kicker: 'No lock-in',
    figure: 'Cancel',
    title: 'anytime. No minimum term or period.',
    description:
      "Stay with us because your website keeps bringing in customers, not because a contract says you have to. contact us directly to cancel no questions asked, and we won't charge you for the rest of the month.",
    note: 'On the Monthly plan.',
  },
  {
    kicker: 'Quick start',
    figure: '28',
    title: 'days from first chat to a live site worldwide.',
    description:
      "We start with a quick chat about your business, then design your site around your customers, build it and test it on every kind of phone, setting up WhatsApp, bookings and Google along the way. Most sites go live within 4 weeks, so you start winning customers sooner.",
  },
];

const Strength = () => (
  <StrengthContainer>
    <StrengthTitle>Why RumiLab</StrengthTitle>
    <StrengthContentWrapper>
      <CardGrid>
        {reasons.map((reason, idx) => (
          // AOS animates transform, so it lives on a wrapper rather than the card
          <CardCell key={reason.kicker} data-aos="fade-up" data-aos-delay={idx * 60}>
            <BorderGlow
              glowColor="258 85 78"
              backgroundColor="#08070d"
              borderRadius={50}
              glowRadius={70}
              brightness={0.8}
              glowIntensity={1.0}
              fillOpacity={0.3}
              colors={['#c9b8ff', '#f1c9ff', '#aebcff']}
              traceDuration={2.4}
              traceDelay={idx * 0.25}
            >
              <CardBody>
                <Kicker>{reason.kicker}</Kicker>
                {reason.figure && <Figure aria-hidden="true">{reason.figure}</Figure>}
                <CardTitle>
                  {reason.figure && <span className="visually-hidden">{reason.figure} </span>}
                  {reason.title}
                </CardTitle>
                <CardContent>{reason.description}</CardContent>
                {reason.note && (
                  <CardNote>
                    {reason.note}
                    {reason.kicker === 'The guarantee' && <> <Link to="/guarantee">How we measure it</Link></>}
                  </CardNote>
                )}
              </CardBody>
            </BorderGlow>
          </CardCell>
        ))}
      </CardGrid>
    </StrengthContentWrapper>
  </StrengthContainer>
);

export default Strength;
