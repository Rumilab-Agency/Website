import styled from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';

export const FooterContainer = styled.footer`
  background-color:black;
  padding: 24px;
  
`;

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  background-color: #000;
  color: #fff;
  gap: 24px;
  width:90%;
  margin: 28px auto;
  justify-content: space-between;


    & > :first-child {
    flex: 1 0 100%;
  }

      @media (min-width: ${breakpoints.sm}) {

      }
  
      @media (min-width: ${breakpoints.lg}) {
          width:85%;
      }

       @media (min-width: ${breakpoints.xl}) {
        gap: 1.875vw;
        margin: 2.188vw auto;

      }
`

export const FooterColumn = styled.div``;

export const FooterHeading = styled.h4`
  font-size: 12px;
  font-weight:500;
  color: #ccc;
  margin-bottom: 16px;

    @media (min-width: ${breakpoints.lg}) {
        font-size: 14px;
        margin-bottom: 18px;

    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 1.094vw;
        margin-bottom: 1.406vw;

    }
`;

export const FooterItem = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 16px;
  cursor:pointer;


  &:hover{
  }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 20px;
        margin-bottom: 18px;

    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 1.563vw;
          gap: 0.625vw;
        margin-bottom: 1.406vw;

    }
`;

export const FooterIcon = styled.span`
  font-size: 16px;

      @media (min-width: ${breakpoints.lg}) {
        font-size: 20px;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 1.563vw;

    }
`;


export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content:end;
`;

export const LogoImage = styled.img`
  height: 26px;
  width: auto;

      @media (min-width: ${breakpoints.xl}) {
        height: 2.031vw;

    }
`;

