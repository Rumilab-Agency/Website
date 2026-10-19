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
      'Within 90 days, at least 5 in every 100 visitors will click one of your key buttons, like Book Now, Enquire or WhatsApp. If not, we refund your monthly fee and keep improving the site until they do.',
    note: 'On the Monthly plan.',
  },
  {
    kicker: 'Made for here',
    figure: 'Built',
    title: 'for Singapore businesses',
    description:
      'WhatsApp chats, online bookings and your Google Business Profile, all connected from day one, on a site designed for customers browsing on their phones.',
  },
  {
    kicker: 'Direct',
    figure: 'Talk',
    title: 'to the people who build it',
    description:
      'No account managers in between. You work directly with your designer and developer, and we reply to every message within 1 day.',
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
                {reason.note && <CardNote>{reason.note}</CardNote>}
              </CardBody>
            </BorderGlow>
          </CardCell>
        ))}
      </CardGrid>
    </StrengthContentWrapper>
  </StrengthContainer>
);

export default Strength;
