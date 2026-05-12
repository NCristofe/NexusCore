import { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import iconOne from "../assets/icons/icon-one.svg";
import iconTwo from "../assets/icons/icon-two.svg";
import iconThree from "../assets/icons/icon-three.svg";

const SPECIALITIES = [
  {
    id: "ui-design",
    icon: iconOne,
    alt: "UI Design icon",
    title: "UI Design",
    description:
      "Concebemos interfaces visuais elegantes, coerentes e orientadas à conversão.",
  },
  {
    id: "ux-research",
    icon: iconTwo,
    alt: "UX Research icon",
    title: "UX Research",
    description:
      "Investigamos comportamentos reais para reduzir atritos e aumentar retenção.",
  },
  {
    id: "design-systems",
    icon: iconThree,
    alt: "Design Systems icon",
    title: "Design Systems",
    description:
      "Criamos bibliotecas de componentes e regras que aceleram desenvolvimento e garantem consistência.",
  },
];

const Section = styled.section`
  width: 100%;
  padding: 96px 24px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
`;

const Header = styled.div`
  text-align: center;
  max-width: 920px;

  h4 {
    margin: 0;
    color: var(--color-primary, #3b82f6);
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 8px 0 0;
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    line-height: 1.05;
  }
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06));
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(2,6,23,0.45);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  border: 1px solid rgba(255,255,255,0.03);
  min-height: 220px;

  &:hover,
  &:focus-within {
    transform: translateY(-8px);
    box-shadow: 0 22px 56px rgba(2,6,23,0.6);
    border-color: rgba(255,255,255,0.06);
  }

  .meta {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .icon-wrap {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(255,102,204,0.06));
    flex-shrink: 0;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: var(--muted, #94a3b8);
    line-height: 1.5;
    font-size: 0.95rem;
  }
`;

/* Mobile carousel */
const Carousel = styled.div`
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

  .card {
    padding: 20px;
    min-height: 200px;
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
  transition: transform 160ms ease, opacity 160ms ease;

  &:focus {
    outline: 3px solid rgba(59,130,246,0.12);
    outline-offset: 4px;
  }
`;

export default function Specialities() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) setIndex((i) => Math.min(i + 1, SPECIALITIES.length - 1));
      else setIndex((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  };

  const handleKey = useCallback((e) => {
    if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, SPECIALITIES.length - 1));
    if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) track.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <Section aria-labelledby="specialities-heading">
      <Header>
        <h4>Capabilities</h4>
        <h2 id="specialities-heading">Raising the standard of your digital product</h2>
      </Header>

      <Grid>
        {SPECIALITIES.map((s) => (
          <Card key={s.id} tabIndex={0} aria-labelledby={`${s.id}-title`}>
            <div className="meta">
              <div className="icon-wrap" aria-hidden="true">
                <img src={s.icon} alt={s.alt} className="icon" loading="lazy" />
              </div>
              <div>
                <h3 id={`${s.id}-title`}>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>

      <Carousel>
        <TrackOuter onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-roledescription="carousel" aria-label="Specialities carousel">
          <Track ref={trackRef}>
            {SPECIALITIES.map((s) => (
              <Slide key={s.id} role="group" aria-roledescription="slide" aria-label={s.title}>
                <Card className="card">
                  <div className="meta">
                    <div className="icon-wrap" aria-hidden="true">
                      <img src={s.icon} alt={s.alt} className="icon" loading="lazy" />
                    </div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                  </div>
                </Card>
              </Slide>
            ))}
          </Track>
        </TrackOuter>

        <Dots role="tablist" aria-label="Specialities navigation">
          {SPECIALITIES.map((_, i) => (
            <Dot
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to speciality ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </Dots>
      </Carousel>
    </Section>
  );
}
