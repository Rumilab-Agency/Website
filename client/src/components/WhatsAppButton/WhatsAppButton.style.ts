import styled, { css } from 'styled-components';
import { breakpoints } from '../../layouts/AppLayout.style';
import { easeOut, canHover } from '../../styles/animations';

// Sits beside a primary "Start your project" button and wraps under it when
// there isn't room.
export const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1rem;

  @media (min-width: ${breakpoints.xl}) {
    gap: 1.25vw;
  }
`;

// Quieter than the primary outline button: a soft filled pill, so the
// project form stays the main action and WhatsApp reads as the quick option.
export const WhatsAppLink = styled.a<{ $size: 'regular' | 'large'; $iconOnly: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.125rem solid transparent;
  border-radius: 999px;
  background: rgb(255 255 255 / 8%);
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 200ms ease, transform 160ms ${easeOut};

  svg {
    flex: none;
    color: #25d366;
  }

  ${canHover} {
    &:hover {
      background: rgb(255 255 255 / 15%);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 3px;
  }

  ${({ $size, $iconOnly }) =>
    $iconOnly
      ? css`
          width: 2.5rem;
          height: 2.5rem;
          padding: 0;

          svg {
            width: 1.3rem;
            height: 1.3rem;
          }

          @media (min-width: ${breakpoints.xl}) {
            width: 3.1vw;
            height: 3.1vw;

            svg {
              width: 1.6vw;
              height: 1.6vw;
            }
          }
        `
      : $size === 'large'
        ? css`
            padding: 0.75rem 1.75rem;
            font-size: 1.125rem;

            svg {
              width: 1.35em;
              height: 1.35em;
            }

            @media (min-width: ${breakpoints.md}) {
              font-size: 1.5rem;
            }

            @media (min-width: ${breakpoints.xl}) {
              padding: 0.938vw 2.2vw;
              font-size: 1.875vw;
              border-width: 0.156vw;
            }
          `
        : css`
            padding: 0.5rem 1.25rem;
            font-size: 0.875rem;

            svg {
              width: 1.3em;
              height: 1.3em;
            }

            @media (min-width: ${breakpoints.md}) {
              padding: 0.5rem 1.5rem;
              font-size: 1rem;
            }

            @media (min-width: ${breakpoints.xl}) {
              padding: 0.625vw 1.875vw;
              font-size: 1.25vw;
              border-width: 0.156vw;
            }
          `}
`;
