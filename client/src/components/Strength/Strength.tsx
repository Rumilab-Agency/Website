import { StrengthContainer, StrengthContentWrapper, StrengthTitle, CardGrid, GlowingCard, CardTitle, CardContent } from './Strength.style';



const strengths = [
    {
      title: 'Brand-Driven Design',
      description: 'Every website we create is carefully crafted in-house with our designers to reflect your unique brand identity and voice.',
    },
    {
      title: 'Flexible Pricing Options',
      description: 'Affordable, transparent pricing with options to pay once or monthly—because great websites shouldn’t come with financial stress.',
    },
    {
      title: '1-on-1 Collaboration',
      description: 'You work directly with our developer and designer—no middlemen, just clear communication and personalized service.',
    },
  ];

const Strength = () => (
  <StrengthContainer>
        <StrengthTitle>
            Built Around You
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