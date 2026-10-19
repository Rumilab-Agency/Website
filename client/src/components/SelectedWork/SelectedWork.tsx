import { PROJECTS } from '../../data/projects';
import {
  WorkContainer, WorkTitle, WorkIntro, WorkGrid, WorkCard, Frame, FrameBar,
  Shot, CardMeta, ClientName, Category, AllWorkLink,
} from './SelectedWork.style';

// A short strip of client sites on the home page; each opens the full Work page.
const SelectedWork = () => (
  <WorkContainer>
    <WorkTitle>Recent work</WorkTitle>
    <WorkIntro>Sites we&apos;ve designed and built for real businesses and organisations.</WorkIntro>
    <WorkGrid>
      {PROJECTS.map((project, idx) => (
        <li key={project.slug} data-aos="fade-up" data-aos-delay={idx * 60}>
          <WorkCard to="/portfolio" aria-label={`${project.client}, ${project.category}. See our work`}>
            <Frame>
              <FrameBar aria-hidden="true"><i /><i /><i /></FrameBar>
              <Shot src={project.desktop} alt="" width={1600} height={1000} loading="lazy" decoding="async" />
            </Frame>
            <CardMeta>
              <ClientName>{project.client}</ClientName>
              <Category>{project.category}</Category>
            </CardMeta>
          </WorkCard>
        </li>
      ))}
    </WorkGrid>
    <AllWorkLink to="/portfolio">See all our work <span aria-hidden="true">→</span></AllWorkLink>
  </WorkContainer>
);

export default SelectedWork;
