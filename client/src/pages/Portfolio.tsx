// src/pages/Portfolio.jsx
import AppLayout from '../layouts/AppLayout';
import SubBanner from '../components/SubBanner/SubBanner';
import PortfolioDisplay from '../components/Portfolio/PortfolioDisplay';

const projects = [
    {
        id: '1',
        imageUrl: '/portfolio/portfolio-1.webp',
        title: 'Educational Services',
        clientName: 'Maythematics',
    },
    {
        id: '2',
        imageUrl: '/portfolio/portfolio-1.webp',
        title: 'Blog & CMS',
        clientName: 'Beta Media',
    },
    {
        id: '2',
        imageUrl: '/portfolio/portfolio-1.webp',
        title: 'Blog & CMS',
        clientName: 'Beta Media',
    },
    {
        id: '2',
        imageUrl: '/portfolio/portfolio-1.webp',
        title: 'Blog & CMS',
        clientName: 'Beta Media',
    },
    {
        id: '2',
        imageUrl: '/portfolio/portfolio-1.webp',
        title: 'Blog & CMS',
        clientName: 'Beta Media',
    },
    // ... more
];

function Portfolio() {
    return (
        <>
            <AppLayout>
                <SubBanner />
                <PortfolioDisplay projects={projects} />

            </AppLayout>
        </>
    );
}

export default Portfolio;
