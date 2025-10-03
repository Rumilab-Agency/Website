import { StrengthContainer, StrengthContentWrapper, StrengthTitle, CardGrid, GlowingCard, CardTitle, CardContent } from './Strength.style';



const strengths = [
  {
    title: 'Built to Convert',
    description: 'Your website is designed not just to look good, but to drive enquiries, bookings, and real business growth.',
  },
  {
    title: 'Simple, Transparent Pricing',
    description: 'Choose between a one-time investment or a monthly plan—affordable options with no hidden costs.',
  },
  {
    title: 'Direct Collaboration',
    description: 'Work 1-on-1 with our developer and designer to bring your vision to life, with clear communication at every step.',
  },
];


const Strength = () => (
  <StrengthContainer>
    <StrengthTitle>
      Grow Your Business
    </StrengthTitle>
    <StrengthContentWrapper>
      <CardGrid>
        {strengths.map((strength, idx) => (
          <GlowingCard key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <CardTitle>{strength.title}</CardTitle>
            <CardContent>{strength.description}</CardContent>
          </GlowingCard>
        ))}
      </CardGrid>
    </StrengthContentWrapper>


  </StrengthContainer>
);

export default Strength; 