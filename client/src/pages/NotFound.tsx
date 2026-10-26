import { Link } from 'react-router-dom';
import { useHead } from '../hooks/useHead';
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import { CTAButton, GradientText, breakpoints } from '../layouts/AppLayout.style';
import { CTA_LABEL } from '../data/offer';
import { ArticlePage, ArticleInner, Eyebrow, ArticleTitle, Lede, InlineLink } from '../components/Article/Article.style';

const Body = styled.div`
  padding: 9rem 0 7rem;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 12rem 0 9rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1rem;
  margin-top: 2.25rem;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1.5rem;
  margin-top: 2.5rem;
  list-style: none;
`;

// Shown for any address that isn't a page. Pre-rendered as dist/404.html,
// which Vercel serves with a real 404 status.
const NotFound = () => {
  useHead('Page not found | RumiLab', [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } }]);
  return (
  <AppLayout>
    <ArticlePage>
      <ArticleInner>
        <Body>
          <Eyebrow>404</Eyebrow>
          <ArticleTitle>
            This page <GradientText>drifted off</GradientText>
          </ArticleTitle>
          <Lede>The link may be old or mistyped. Here are the pages people usually look for.</Lede>
          <Actions>
            <CTAButton as={Link} to="/">Back to home</CTAButton>
            <CTAButton as={Link} to="/contact">{CTA_LABEL}</CTAButton>
          </Actions>
          <Links>
            <li><InlineLink to="/portfolio">Our work</InlineLink></li>
            <li><InlineLink to="/pricing">Pricing</InlineLink></li>
            <li><InlineLink to="/guarantee">The 5% guarantee</InlineLink></li>
            <li><InlineLink to="/faq">FAQ</InlineLink></li>
          </Links>
        </Body>
      </ArticleInner>
    </ArticlePage>
  </AppLayout>
  );
};

export default NotFound;
