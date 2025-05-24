import styled from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';

export const FooterContainer = styled.footer`
  background-color: black;
  padding: 1.5rem;
`;

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  background-color: #000;
  color: #fff;
  gap: 1.5rem;
  width: 90%;
  margin: 1.75rem auto;
  justify-content: space-between;

  & > :first-child {
    flex: 1 0 100%;
  }

  @media (min-width: ${breakpoints.sm}) {
  }
  
  @media (min-width: ${breakpoints.lg}) {
    width: 85%;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 1.875rem;
    margin: 2.188rem auto;
  }
`;

export const FooterColumn = styled.div``;

export const FooterHeading = styled.h4`
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

export const FooterItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.25rem;
    margin-bottom: 1.125rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.563rem;
    gap: 0.625rem;
    margin-bottom: 1.406rem;
  }
`;

export const FooterIcon = styled.span`
  font-size: 1rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.563rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const LogoImage = styled.img`
  height: 1.625rem;
  width: auto;

  @media (min-width: ${breakpoints.xl}) {
    height: 2.031rem;
  }
`;

