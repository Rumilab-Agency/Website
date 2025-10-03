import React from 'react';
import {
    PortfolioGrid,
    PortfolioCard,
    ImageWrapper,
    InfoWrapper,
    Title,
    Client,
} from './Portfolio.style';

type Project = {
    id: string;
    imageUrl: string;
    title: string;
    clientName: string;
};

type PortfolioDisplayProps = {
    projects: Project[];
};

const PortfolioDisplay: React.FC<PortfolioDisplayProps> = ({ projects }) => {
    return (
        <PortfolioGrid>
            {projects.map((proj) => (
                <PortfolioCard key={proj.id}>
                    <ImageWrapper>
                        <img src={proj.imageUrl} alt={proj.title} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <Client>{proj.clientName}</Client>
                        <Title>{proj.title}</Title>
                    </InfoWrapper>
                </PortfolioCard>
            ))}
        </PortfolioGrid>
    );
};

export default PortfolioDisplay;
