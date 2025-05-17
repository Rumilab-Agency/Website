import React from 'react';
import { StrengthContainer, StrengthContentWrapper, StrengthTitle, CardGrid, GlowingCard, CardTitle, CardContent } from './Strength.style';



const Strength = () => (
  <StrengthContainer>
        <StrengthTitle>
            Core Strengths
        </StrengthTitle>
        <StrengthContentWrapper>
        <CardGrid>
            <GlowingCard>
            <CardTitle>Brand-Driven Design</CardTitle>
            <CardContent>Every website we create is carefully crafted to reflect your unique brand identity and voice.</CardContent>
            </GlowingCard>
            <GlowingCard>
            <CardTitle>Responsive Across <br /> All Devices</CardTitle>
            <CardContent>Your site will look and perform beautifully on desktops, tablets, and smartphones—because first impressions matter everywhere.</CardContent>
            </GlowingCard>
            <GlowingCard>
            <CardTitle>1-on-1 Collaboration</CardTitle>
            <CardContent>You work directly with our developer and designer—no middlemen, just clear communication and personalized service.</CardContent>
            </GlowingCard>
        </CardGrid>
        </StrengthContentWrapper>
  </StrengthContainer>
);

export default Strength; 