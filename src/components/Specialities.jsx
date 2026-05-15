import styled from "styled-components";
import iconOne from "../assets/icons/icon-one.svg";
import iconTwo from "../assets/icons/icon-two.svg";
import iconThree from "../assets/icons/icon-three.svg";

const SPECIALITIES = [
  {
    id: "ui-design",
    icon: iconOne,
    title: "Visual que segura atenção",
    description:
      "Composição, contraste, ritmo e detalhes interativos para a pessoa sentir que está diante de algo feito sob medida.",
    cue: "01",
  },
  {
    id: "ux-research",
    icon: iconTwo,
    title: "Jornada que convida",
    description:
      "Cada bloco empurra o próximo passo com naturalidade: entendimento, desejo, prova e contato.",
    cue: "02",
  },
  {
    id: "design-systems",
    icon: iconThree,
    title: "Sistema fácil de evoluir",
    description:
      "Um visual autoral, mas organizado por tokens e componentes para o site não virar vitrine impossível de manter.",
    cue: "03",
  },
];

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 108px 24px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0 18%, transparent 18%),
    linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(238, 245, 255, 0.8));

  .section-container {
    display: grid;
    grid-template-columns: minmax(260px, 0.46fr) minmax(0, 1fr);
    gap: 44px;
    align-items: start;
    min-width: 0;
  }

  .sticky-copy {
    position: sticky;
    top: 118px;
  }

  h4 {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(34px, 4.6vw, 58px);
    line-height: 0.98;
  }

  .intro {
    margin-top: 18px;
    line-height: 1.78;
  }

  .signal-stack {
    display: grid;
    gap: 10px;
    margin-top: 28px;
  }

  .signal-stack span {
    width: fit-content;
    padding: 9px 11px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    color: var(--text-soft);
    font-size: 0.86rem;
    font-weight: 800;
  }

  .signal-stack span:nth-child(2) {
    margin-left: 32px;
  }

  .signal-stack span:nth-child(3) {
    margin-left: 12px;
  }

  @media (max-width: 920px) {
    .section-container {
      grid-template-columns: 1fr;
    }

    .sticky-copy {
      position: static;
    }
  }

  @media (max-width: 560px) {
    padding: 78px 18px;

    .signal-stack span,
    .signal-stack span:nth-child(2),
    .signal-stack span:nth-child(3) {
      max-width: 100%;
      margin-left: 0;
    }
  }

  @media (max-width: 420px) {
    padding-inline: 14px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
`;

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 22px;
  min-height: 210px;
  padding: 28px;
  border: 1px solid rgba(220, 230, 242, 0.98);
  border-radius: 28px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.74)),
    #ffffff;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  isolation: isolate;
  transform: translateX(${({ $offset }) => $offset});
  transition: transform 220ms var(--ease), box-shadow 220ms var(--ease), border-color 220ms var(--ease);
  min-width: 0;

  &::before {
    content: attr(data-cue);
    position: absolute;
    right: 22px;
    bottom: -24px;
    z-index: -1;
    color: rgba(37, 99, 235, 0.08);
    font-size: 8.4rem;
    font-weight: 950;
    line-height: 1;
  }

  &:hover {
    transform: translateX(${({ $offset }) => $offset}) translateY(-8px) rotate(-0.7deg);
    border-color: rgba(37, 99, 235, 0.28);
    box-shadow: var(--shadow-md);
  }

  .icon-wrap {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(37, 99, 235, 0.16);
    border-radius: 20px;
    background: #eff6ff;
    transform: rotate(-4deg);
  }

  .icon {
    width: 28px;
    height: 28px;
    filter: brightness(0) saturate(100%) invert(36%) sepia(91%) saturate(1935%) hue-rotate(213deg) brightness(93%) contrast(92%);
  }

  h3 {
    margin-bottom: 12px;
    font-size: clamp(1.3rem, 2vw, 1.7rem);
  }

  p {
    max-width: 610px;
    line-height: 1.72;
  }

  @media (max-width: 920px) {
    transform: none;

    &:hover {
      transform: translateY(-6px);
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 24px;
    border-radius: 24px;
  }

  @media (max-width: 420px) {
    padding: 20px;
  }
`;

export default function Specialities() {
  return (
    <Section id="specialities" aria-labelledby="specialities-heading">
      <div className="section-container">
        <div className="sticky-copy">
          <h4>O que eu mexo</h4>
          <h2 id="specialities-heading">Não é só deixar bonito. É criar vontade.</h2>
          <p className="intro">
            A proposta é fazer o visitante sentir que o serviço tem personalidade,
            método e direção. O visual vira argumento, não enfeite.
          </p>
          <div className="signal-stack" aria-label="Pilares do serviço">
            <span>Impacto na primeira dobra</span>
            <span>História visual clara</span>
            <span>CTA que parece convite</span>
          </div>
        </div>

        <Grid>
          {SPECIALITIES.map((speciality, index) => (
            <Card
              key={speciality.id}
              data-cue={speciality.cue}
              $offset={index === 1 ? "34px" : "0px"}
            >
              <div className="icon-wrap" aria-hidden="true">
                <img src={speciality.icon} alt="" className="icon" loading="lazy" />
              </div>
              <div>
                <h3>{speciality.title}</h3>
                <p>{speciality.description}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
