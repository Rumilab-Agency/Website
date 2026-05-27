import { css } from "@emotion/react";

export const styles = {
  section: css`
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Cormorant Garamond", Georgia, serif;
  `,

  header: css`
    text-align: center;
    margin-bottom: 5rem;
  `,

  eyebrow: css`
    font-family: "DM Mono", "Courier New", monospace;
    font-size: 0.72rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #b08c5d;
    margin-bottom: 1rem;
    display: block;
  `,

  heading: css`
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 300;
    color: #1a1a1a;
    line-height: 1.1;
    letter-spacing: -0.02em;
    max-width: 640px;
    margin: 0 auto;

    strong {
      font-weight: 600;
      font-style: italic;
    }
  `,

  grid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: #e8e0d5;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,

  card: css`
    position: relative;
    background: #faf8f5;
    overflow: hidden;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: inherit;

    &:hover .card-image {
      transform: scale(1.04);
    }

    &:hover .card-overlay {
      opacity: 1;
    }

    &:hover .card-arrow {
      transform: translate(4px, -4px);
    }
  `,

  imageWrapper: css`
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #e8e0d5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  `,

  imageWrapperFeatured: css`
    aspect-ratio: 21 / 9;

    @media (max-width: 768px) {
      aspect-ratio: 16 / 9;
    }
  `,

  overlay: css`
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(15, 10, 5, 0.7) 0%,
      transparent 55%
    );
    opacity: 0.6;
    transition: opacity 0.4s ease;
  `,

  badge: css`
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    font-family: "DM Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #faf8f5;
    background: rgba(15, 10, 5, 0.45);
    border: 1px solid rgba(250, 248, 245, 0.3);
    padding: 0.3rem 0.7rem;
    backdrop-filter: blur(6px);
  `,

  cardBody: css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.75rem 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
  `,

  cardTitle: css`
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 400;
    color: #faf8f5;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0 0 0.35rem 0;
  `,

  cardDesc: css`
    font-family: "DM Mono", monospace;
    font-size: 0.65rem;
    color: rgba(250, 248, 245, 0.65);
    letter-spacing: 0.06em;
    margin: 0;
    max-width: 340px;
    line-height: 1.6;
  `,

  cardArrow: css`
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid rgba(250, 248, 245, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #faf8f5;
    transition: transform 0.3s ease;
    align-self: flex-end;
  `,
};