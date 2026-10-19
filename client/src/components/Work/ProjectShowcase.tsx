import type { Project } from '../../data/projects';
import {
  Row, Visual, Browser, BrowserBar, Dots, Address, Screen, Phone,
  Story, Meta, Client, Summary, BuiltTitle, BuiltList, VisitLink,
} from './ProjectShowcase.style';

type Props = {
  project: Project;
  index: number;
};

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectShowcase = ({ project, index }: Props) => {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Row $flip={index % 2 === 1} aria-labelledby={`project-${project.slug}`}>
      {/* The screens open the live site too; hidden from screen readers so the
          site isn't announced twice (the Visit link below is the labelled one). */}
      <Visual href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" data-aos="fade-up">
        <Browser>
          <BrowserBar>
            <Dots><i /><i /><i /></Dots>
            <Address>{project.displayUrl}</Address>
          </BrowserBar>
          <Screen src={project.desktop} alt="" width={1600} height={1000} loading="lazy" decoding="async" />
        </Browser>
        <Phone>
          <img src={project.mobile} alt="" width={520} height={1125} loading="lazy" decoding="async" />
        </Phone>
      </Visual>

      <Story data-aos="fade-up" data-aos-delay="60">
        <Meta><span>{number}</span>{project.category}</Meta>
        <Client id={`project-${project.slug}`}>{project.client}</Client>
        <Summary>{project.summary}</Summary>
        <BuiltTitle>What we built</BuiltTitle>
        <BuiltList>
          {project.built.map((item) => <li key={item}>{item}</li>)}
        </BuiltList>
        <VisitLink href={project.url} target="_blank" rel="noopener noreferrer">
          Visit live site <ArrowUpRight />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </VisitLink>
      </Story>
    </Row>
  );
};

export default ProjectShowcase;
