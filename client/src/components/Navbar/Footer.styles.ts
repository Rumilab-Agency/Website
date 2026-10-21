import styled from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';
import { canHover } from '../../styles/animations';

export const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 1.5rem;
`;

// Phones: brand on top, then two columns. Desktop: brand plus three columns.
export const FooterWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  width: 90%;
  margin: 1.75rem auto 0;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    width: 85%;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 2.5vw;
    margin-top: 2.188rem;
  }
`;

export const FooterBrand = styled.div`
  grid-column: 1 / -1;

  @media (min-width: ${breakpoints.lg}) {
    grid-column: auto;
  }
`;

export const FooterTagline = styled.p`
  max-width: 20rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #9d97ad;

  @media (min-width: ${breakpoints.xl}) {
    max-width: 22vw;
    font-size: 1.05vw;
  }
`;

export const FooterColumn = styled.div``;

export const FooterHeading = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #ccc;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 0.875rem;
    margin-bottom: 1.125rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.094rem;
    margin-bottom: 1.406rem;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;

  a {
    transition: color 150ms ease;
  }

  ${canHover} {
    a:hover {
      color: #a0a0ff;
    }
  }

  a:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 3px;
    border-radius: 2px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.3vw;
    gap: 0.625rem;
    margin-bottom: 1.2vw;
  }
`;

export const FooterIcon = styled.span`
  display: inline-flex;
  font-size: 1rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.3vw;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  width: 90%;
  margin: 2rem auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgb(255 255 255 / 10%);
  font-size: 0.8125rem;
  color: #8a849b;

  @media (min-width: ${breakpoints.lg}) {
    width: 85%;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 0.95vw;
  }
`;

export const LogoImage = styled.img`
  display: block;
  height: 1.625rem;
  width: auto;

  @media (min-width: ${breakpoints.xl}) {
    height: 2.031rem;
  }
`;
