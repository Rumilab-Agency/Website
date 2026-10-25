import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../layouts/AppLayout.style';
import { canHover } from '../../styles/animations';

// Shared look for the reading pages (cost guide, guarantee, FAQ, case studies),
// matching the Work page: dark, a faint lavender glow at the top, one column.

export const ArticlePage = styled.div`
  overflow-x: clip;
  background:
    radial-gradient(70rem 32rem at 50% -8%, rgb(160 132 255 / 12%), transparent 70%),
    #010101;
`;

export const ArticleInner = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 2rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 50rem;
  }
`;

export const ArticleIntro = styled.header`
  padding: 8.5rem 0 3rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 10.5rem 0 4rem;
  }
`;

export const Eyebrow = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a084ff;
`;

export const ArticleTitle = styled.h1`
  margin-top: 1rem;
  font-size: clamp(2.25rem, 5.5vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #fff;
`;

export const Lede = styled.p`
  margin-top: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #c4bfd3;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export const Updated = styled.p`
  margin-top: 1rem;
  font-size: 0.8125rem;
  color: #8a849b;
`;

// The short, direct answer at the top: what AI tools and skimmers quote
export const Answer = styled.div`
  margin-bottom: 3rem;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid #a084ff;
  border-radius: 0 0.75rem 0.75rem 0;
  background: rgb(160 132 255 / 8%);
  color: #ece8f6;
  font-size: 1.0625rem;
  line-height: 1.65;

  strong {
    color: #fff;
  }
`;

export const Section = styled.section`
  padding: 2.5rem 0;
  border-top: 1px solid rgb(255 255 255 / 8%);
`;

export const H2 = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const H3 = styled.h3`
  margin-top: 1.75rem;
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 1.35;
  color: #fff;
`;

export const P = styled.p`
  margin-top: 1rem;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #c4bfd3;

  strong {
    color: #fff;
    font-weight: 600;
  }

  a {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: rgb(160 132 255 / 60%);
    text-underline-offset: 4px;
  }
`;

export const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.25rem;
  color: #c4bfd3;
  font-size: 1.0625rem;
  line-height: 1.7;

  li + li {
    margin-top: 0.5rem;
  }

  li::marker {
    color: #a084ff;
  }

  strong {
    color: #fff;
    font-weight: 600;
  }
`;

export const TableWrap = styled.div`
  margin-top: 1.5rem;
  overflow-x: auto;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 0.75rem;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 34rem;
  border-collapse: collapse;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #c4bfd3;

  th,
  td {
    padding: 0.875rem 1rem;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid rgb(255 255 255 / 8%);
  }

  th {
    color: #fff;
    font-weight: 600;
    background: rgb(255 255 255 / 4%);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    color: #fff;
    font-weight: 500;
  }
`;

export const Note = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #8a849b;
`;

export const InlineLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
  text-decoration-color: rgb(160 132 255 / 60%);
  text-underline-offset: 4px;
  transition: text-decoration-color 150ms ease;

  ${canHover} {
    &:hover {
      text-decoration-color: #f780ff;
    }
  }
`;

export const Closing = styled.section`
  margin-top: 3rem;
  padding: 4rem 0 6rem;
  border-top: 1px solid rgb(255 255 255 / 8%);
  text-align: center;
`;

export const ClosingTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #fff;
`;

export const ClosingText = styled.p`
  margin: 1rem auto 2rem;
  max-width: 30rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #b3adc4;
`;

// A key phrase in body text, in the brand gradient (used sparingly: the promise
// or number a reader shouldn't miss)
export const Highlight = styled.strong`
  font-weight: 600;
  background: linear-gradient(90deg, #c9b8ff 0%, #f780ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;
