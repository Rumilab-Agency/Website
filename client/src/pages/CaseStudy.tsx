import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import PageMeta from '../components/PageMeta';
import PageCta from '../components/Article/PageCta';
import { PROJECTS } from '../data/projects';
import { caseStudyPage } from '../seo';
import { breakpoints, GradientText } from '../layouts/AppLayout.style';
import {
  ArticlePage, ArticleInner, ArticleIntro, Eyebrow, ArticleTitle, Lede,
  Section, H2, P, List, Note, InlineLink,
} from '../components/Article/Article.style';

const Shots = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-right: 12%;
`;

const DesktopShot = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  border: 1px solid rgb(255 255 255 / 12%);
  box-shadow: 0 30px 80px -30px rgb(0 0 0 / 90%);
`;

const PhoneShot = styled.img`
  position: absolute;
  right: 0;
  bottom: -1.5rem;
  width: 24%;
  height: auto;
  border-radius: 1rem;
  border: 3px solid #1b1724;
  box-shadow: 0 20px 50px -15px rgb(0 0 0 / 90%);
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  div {
    padding: 1.25rem;
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 0.75rem;
  }

  dt {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
  }

  dd {
    margin-top: 0.25rem;
    color: #c4bfd3;
    line-height: 1.5;
  }

  small {
    display: block;
    margin-top: 0.5rem;
    color: #8a849b;
  }
`;

const VisitLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgb(160 132 255 / 60%);
  text-underline-offset: 5px;
`;

// One client project, in more depth than the Work page.
// Not live yet: waiting for real results. To publish, add a /portfolio/:slug
// route in App.tsx, add the case study pages to ALL_PAGES in seo.ts (which also
// adds them to the sitemap), add Vercel rewrites, and link them from the Work page.
const CaseStudy = () => {
  const { slug = '' } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/portfolio" replace />;
  const others = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <AppLayout>
      <PageMeta page={caseStudyPage(project.slug)} />
      <ArticlePage>
        <ArticleInner>
          <ArticleIntro>
            <Eyebrow>Case study · {project.category}</Eyebrow>
            <ArticleTitle><GradientText>{project.client}</GradientText></ArticleTitle>
            <Lede>{project.summary}</Lede>
          </ArticleIntro>

          <Shots>
            <DesktopShot src={project.desktop} alt={`${project.client} website on a computer`} width={1600} height={1000} />
            <PhoneShot src={project.mobile} alt={`${project.client} website on a phone`} width={520} height={1125} />
          </Shots>

          <Section>
            <H2>What we built</H2>
            <List>
              {project.built.map((item) => <li key={item}>{item}</li>)}
            </List>
            <VisitLink href={project.url} target="_blank" rel="noopener noreferrer">
              Visit {project.displayUrl}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </VisitLink>
          </Section>

          {project.results && project.results.length > 0 && (
            <Section>
              <H2>Results</H2>
              <Stats>
                {project.results.map((r) => (
                  <div key={r.label}>
                    <dt>{r.value}</dt>
                    <dd>{r.label}<small>{r.source}</small></dd>
                  </div>
                ))}
              </Stats>
              <Note>Figures come from the client&apos;s own analytics. They show change over time, not proof that the website alone caused it.</Note>
            </Section>
          )}

          <Section>
            <H2>More of our work</H2>
            <P>
              {others.map((p, i) => (
                <span key={p.slug}>
                  {i > 0 && ' · '}
                  <InlineLink to={`/portfolio/${p.slug}`}>{p.client}</InlineLink>
                </span>
              ))}
              {' · '}
              <InlineLink to="/portfolio">All work</InlineLink>
            </P>
          </Section>

          <PageCta title="Want a website like this?" />
        </ArticleInner>
      </ArticlePage>
    </AppLayout>
  );
};

export default CaseStudy;
