import { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import firstProjectImage from "../assets/img/first-project-image.png";
import secondProjectImage from "../assets/img/second-project-image.png";

/* Data model: use arrays/objects so copy and translations are easy to maintain */
const PROJECTS = [
  {
    id: "finance-platform",
    image: firstProjectImage,
    alt: "Dashboard da plataforma financeira",
    title: "Financial Platform",
    description: "Design de interface para gestão financeira corporativa",
    tags: ["UI/UX", "Web App"],
  },
  {
    id: "commerce-app",
    image: secondProjectImage,
    alt: "Tela do aplicativo de e-commerce",
    title: "Commerce App",
    description: "Produto móvel focado em conversão e experiência do usuário",
    tags: ["Product Design", "Mobile"],
  },
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 96px 24px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  text-align: center;
  max-width: 920px;

  h4 {
    color: var(--color-primary, #3b82f6);
    letter-spacing: 0.12em;
    font-size: 0.85rem;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(28px, 4vw, 40px);
    margin: 0;
    font-weight: 700;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 28px;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    display: none; /* hide desktop grid on small screens, mobile carousel will show */
  }
`;

const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06));
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 8px 28px rgba(2,6,23,0.45);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 200ms ease, box-shadow 200ms ease;
  cursor: pointer;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 18px 48px rgba(2,6,23,0.6);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    color: var(--muted, #94a3b8);
    font-size: 0.95rem;
  }

  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  .tag {
    background: rgba(255,255,255,0.03);
    color: var(--muted, #94a3b8);
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 0.8rem;
  }
`;

/* Mobile carousel styles */
const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 920px;
  display: none;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 720px) {
    display: flex;
  }
`;

const TrackOuter = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

const Track = styled.div`
  display: flex;
  transition: transform 320ms cubic-bezier(.2,.9,.2,1);
  will-change: transform;
`;

const Slide = styled.div`
  min-width: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: none;
  background: ${({ active }) => (active ? "var(--color-primary, #3b82f6)" : "rgba(255,255,255,0.12)")};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  cursor: pointer;
`;

/* Component */
export default function Projects() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const trackOuterRef = useRef(null);

  /* keyboard navigation for carousel */
  const handleKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, PROJECTS.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    },
    [setIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* touch handlers for mobile swipe */
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) setIndex((i) => Math.min(i + 1, PROJECTS.length - 1));
      else setIndex((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  }

  /* ensure track transform updates when index changes */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  /* optional: auto-center focus when changing slides for screen readers */
  useEffect(() => {
    const activeCard = trackRef.current?.children[index];
    if (activeCard) activeCard.setAttribute("aria-current", "true");
    Array.from(trackRef.current?.children || []).forEach((c, i) => {
      if (i !== index) c.removeAttribute("aria-current");
    });
  }, [index]);

  return (
    <Section aria-labelledby="projects-heading">
      <Header>
        <h4>Selected Work</h4>
        <h2 id="projects-heading">Featured Projects</h2>
      </Header>

      {/* Desktop grid */}
      <Grid>
        {PROJECTS.map((p) => (
          <Card key={p.id} tabIndex={0} aria-labelledby={`${p.id}-title`}>
            <img src={p.image} alt={p.alt} loading="lazy" />
            <h3 id={`${p.id}-title`}>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags" aria-hidden="true">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </Grid>

      {/* Mobile carousel */}
      <CarouselWrapper>
        <TrackOuter
          ref={trackOuterRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Featured projects carousel"
        >
          <Track ref={trackRef}>
            {PROJECTS.map((p) => (
              <Slide key={p.id} role="group" aria-roledescription="slide" aria-label={p.title}>
                <img src={p.image} alt={p.alt} loading="lazy" />
                <h3>{p.title}</h3>
                <p style={{ color: "var(--muted, #94a3b8)" }}>{p.description}</p>
              </Slide>
            ))}
          </Track>
        </TrackOuter>

        <Dots role="tablist" aria-label="Project navigation">
          {PROJECTS.map((_, i) => (
            <Dot
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </Dots>
      </CarouselWrapper>
    </Section>
  );
}
