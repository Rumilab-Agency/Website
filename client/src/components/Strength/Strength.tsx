import { StrengthContainer, StrengthContentWrapper, StrengthTitle, CardGrid, GlowingCard, CardTitle, CardContent } from './Strength.style';



const strengths = [
    {
      title: 'Brand-Driven Design',
      description: 'Every website we create is carefully crafted to reflect your unique brand identity and voice.',
    },
    {
      title: 'Responsive Across Devices',
      description: 'Your site will look and perform beautifully on desktops, tablets, and smartphones—because first impressions matter everywhere.',
    },
    {
      title: '1-on-1 Collaboration',
      description: 'You work directly with our developer and designer—no middlemen, just clear communication and personalized service.',
    },
  ];

const Strength = () => (
  <StrengthContainer>
        <StrengthTitle>
            Core Strengths
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