/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styles } from "./PortfolioDisplay.style";

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    id: "cactus",
    title: "Cactus Vacation Rentals",
    tags: ["Branding", "Design", "Development"],
    description:
      "Responsive website for a vacation rental property management company",
    image: "https://phoexa.com/images/works/cactus/mobile/splash.webp",
    href: "https://phoexa.com/works/cactus-vacation-rentals",
  },
  {
    id: "metamare",
    title: "Metamare",
    tags: ["Branding", "Design", "Development"],
    description: "Responsive website for a luxury beach resort",
    image: "https://phoexa.com/images/works/metamare/mobile/splash.webp",
    href: "https://phoexa.com/works/metamare",
  },
  {
    id: "wwwallet",
    title: "wwwallet",
    tags: ["Branding", "Design", "Development"],
    description:
      "Cryptocurrency trading & investments tracking web and mobile app, updated real-time",
    image: "https://phoexa.com/images/works/wwwallet/mobile/splash.webp",
    href: "https://phoexa.com/works/wwwallet",
  },
  {
    id: "trips",
    title: "Trips!",
    tags: ["Branding", "Design", "Development"],
    description:
      "Mobile app to manage & organize trips, with cloud storage and sharing features",
    image: "https://phoexa.com/images/works/trips/mobile/splash.webp",
    href: "https://phoexa.com/works/trips",
  },
  {
    id: "way",
    title: "Way",
    tags: ["Development"],
    description:
      "Mobile app to manage bookings & payments infrastructure for a simulator-based driving school",
    image: "https://phoexa.com/images/works/way/mobile/splash.webp",
    href: "https://phoexa.com/works/way",
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12L12 2M12 2H5M12 2V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <a
      css={styles.card}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        css={[styles.imageWrapper, featured && styles.imageWrapperFeatured]}
        className="card-image-wrapper"
      >
        <img
          className="card-image"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <div css={styles.overlay} className="card-overlay" />

      <span css={styles.badge}>{project.tags.join(" · ")}</span>

      <div css={styles.cardBody}>
        <div>
          <h3 css={styles.cardTitle}>{project.title}</h3>
          <p css={styles.cardDesc}>{project.description}</p>
        </div>
        <div css={styles.cardArrow} className="card-arrow">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
};

const PortfolioDisplay = () => {
  const [featured, ...rest] = projects;

  return (
    <section css={styles.section}>
      <header css={styles.header}>
        <span css={styles.eyebrow}>Explore our digital creations</span>
        <h2 css={styles.heading}>
          We uphold the same standard of meticulousness and{" "}
          <strong>excellence</strong> on every project
        </h2>
      </header>

      <div css={styles.grid}>
        <ProjectCard project={featured} featured />
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioDisplay;