import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import AppLayout from '../layouts/AppLayout';
import ProjectForm, { type FormStatus } from '../components/ProjectForm/ProjectForm';
import Galaxy, { type GalaxyProps } from '../components/Galaxy/Galaxy';
import { breakpoints } from '../layouts/AppLayout.style';

// The galaxy behind the form follows it: while filling it in, the lavender stars
// grow from nothing at step 1 to a faint drift by the last step (and each step's
// sparkle grows with them); warp speed while sending; then warm pink and gold
// stars easing back to a slow drift for the thank-you. Galaxy eases between these
// values itself.
const LAVENDER = ['#a084ff', '#c9b8ff', '#ffffff', '#8f78d6'];
const CELEBRATE = ['#f780ff', '#ffd1e3', '#ffd98a', '#ffffff'];

const GALAXY: Record<'filling' | 'sending' | 'done', GalaxyProps> = {
  // opacity here is the level reached at the last step; earlier steps scale it down
  filling: { starColors: LAVENDER, opacity: 0.45, starSpeed: 0.3, glowIntensity: 0.25, warp: 0 },
  sending: { starColors: LAVENDER, opacity: 0.9, starSpeed: 4, glowIntensity: 0.45, warp: 1 },
  done: { starColors: CELEBRATE, opacity: 0.75, starSpeed: 0.35, glowIntensity: 0.4, warp: 0 },
};

const phaseOf = (status: FormStatus) =>
  status === 'submitting' ? 'sending' : status === 'success' ? 'done' : 'filling';

// The navbar is fixed, so the page pads for it itself. overflow-x: clip because
// the steps slide in from the side and must never widen the page.
const Page = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100svh;
  overflow-x: clip;
  padding: 7.5rem 1rem 4rem;
  background:
    radial-gradient(60rem 30rem at 50% -10%, rgb(160 132 255 / 10%), transparent 70%),
    #010101;

  @media (min-width: ${breakpoints.md}) {
    padding: 9rem 1.5rem 5rem;
  }
`;

const Sky = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a084ff;
`;

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  // Bumped each time a step is answered; the galaxy sparkles on every change
  const [sparkle, setSparkle] = useState(0);
  // How far through the steps we are, 0 at the first step and 1 at the last
  const [progress, setProgress] = useState(0);
  const onStepChange = useCallback((step: number, total: number) => {
    setProgress(total > 1 ? step / (total - 1) : 1);
  }, []);
  const onStepComplete = useCallback(() => setSparkle((n) => n + 1), []);

  const phase = phaseOf(status);
  const galaxy = GALAXY[phase];

  return (
  <AppLayout>
    <Helmet>
      <title>Start Your Project | RumiLab</title>
      <meta name="description" content="Tell RumiLab about your business and the website you need. It takes about a minute." />
      <link rel="canonical" href="https://rumilab.org/contact" />
      <meta property="og:url" content="https://rumilab.org/contact" />
    </Helmet>
    <Page>
      <Sky aria-hidden="true">
        <Galaxy
          {...galaxy}
          opacity={phase === 'filling' ? (galaxy.opacity ?? 0) * progress : galaxy.opacity}
          sparkle={sparkle}
          sparkleStrength={phase === 'filling' ? progress : 1}
          density={1}
          twinkleIntensity={0.35}
          rotationSpeed={0.04}
          flareIntensity={0.8}
          mouseInteraction={false}
          clickWarp={false}
          intro={false}
          dpr={1.5}
        />
      </Sky>
      <Inner>
        <PageTitle>Start your project</PageTitle>
        <ProjectForm onStatusChange={setStatus} onStepComplete={onStepComplete} onStepChange={onStepChange} />
      </Inner>
    </Page>
  </AppLayout>
  );
};

export default Contact;
