import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { PAGES } from '../seo';
import AppLayout from '../layouts/AppLayout';
import ProjectShowcase from '../components/Work/ProjectShowcase';
import { PROJECTS } from '../data/projects';
import { breakpoints, CTAButtonLarge, GradientText } from '../layouts/AppLayout.style';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import { CTAGroup } from '../components/WhatsAppButton/WhatsAppButton.style';

// overflow-x: clip because the phone screens hang off the frames' corners.
const Page = styled.div`
  overflow-x: clip;
  background:
    radial-gradient(70rem 32rem at 50% -8%, rgb(160 132 255 / 12%), transparent 70%),
    #010101;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 2.5rem;
  }
`;

const Intro = styled.header`
  padding: 8.5rem 0 4rem;
  max-width: 50rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 11rem 0 6rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a084ff;
`;

const Heading = styled.h1`
  margin-top: 1rem;
  font-size: clamp(2.5rem, 6.5vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #fff;
`;

const Lede = styled.p`
  margin-top: 1.5rem;
  max-width: 38rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #b3adc4;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const Projects = styled.div`
  display: grid;
  gap: 6rem;

  @media (min-width: ${breakpoints.lg}) {
    gap: 9rem;
  }
`;

const Closing = styled.section`
  margin: 7rem 0 0;
  padding: 5rem 0 7rem;
  border-top: 1px solid rgb(255 255 255 / 8%);
  text-align: center;

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 10rem;
  }
`;

const ClosingTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
`;

const ClosingText = styled.p`
  margin: 1rem auto 2.5rem;
  max-width: 32rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #b3adc4;
`;

const Portfolio = () => (
  <AppLayout>
    <PageMeta page={PAGES.portfolio} />
    <Page>
      <Inner>
        <Intro>
          <Eyebrow>Our work</Eyebrow>
          <Heading>
            Websites built <br /> <GradientText>for real businesses</GradientText>
          </Heading>
          <Lede>
            A selection of sites we&apos;ve designed and built, each shaped around what its
            visitors came to do.
          </Lede>
        </Intro>

        <Projects>
          {PROJECTS.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index} />
          ))}
        </Projects>

        <Closing>
          <ClosingTitle>Your business could be next.</ClosingTitle>
          <ClosingText>Tell us about your business and what you need. It takes about a minute.</ClosingText>
          <CTAGroup>
            <CTAButtonLarge as={Link} to="/contact">Start your project</CTAButtonLarge>
            <WhatsAppButton size="large" />
          </CTAGroup>
        </Closing>
      </Inner>
    </Page>
  </AppLayout>
);

export default Portfolio;
