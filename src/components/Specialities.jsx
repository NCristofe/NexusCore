import styled from "styled-components";
import iconOne from "../assets/icons/icon-one.svg";
import iconTwo from "../assets/icons/icon-two.svg";
import iconThree from "../assets/icons/icon-three.svg";

const SPECIALITIES = [
  {
    id: "ui-design",
    icon: iconOne,
    alt: "",
    title: "UI Design",
    description:
      "Interfaces claras, consistentes e bonitas, com hierarquia visual que ajuda o usuário a entender o próximo passo.",
  },
  {
    id: "ux-research",
    icon: iconTwo,
    alt: "",
    title: "UX Research",
    description:
      "Mapeamento de dores, jornadas e oportunidades para reduzir fricção antes de investir em desenvolvimento.",
  },
  {
    id: "design-systems",
    icon: iconThree,
    alt: "",
    title: "Design Systems",
    description:
      "Componentes, tokens e regras visuais que mantêm o produto coerente conforme ele cresce.",
  },
];

const Section = styled.section`
  width: 100%;
  padding: 92px 24px;
  background: linear-gradient(180deg, rgba(238, 245, 255, 0.76), rgba(255, 255, 255, 0));

  .section-container {
    display: grid;
    gap: 36px;
  }
`;

const Header = styled.div`
  max-width: 760px;

  h4 {
    margin-bottom: 10px;
    color: var(--primary);
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(30px, 4vw, 48px);
  }

  p {
    margin-top: 16px;
    font-size: 1rem;
    line-height: 1.75;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  min-height: 260px;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--shadow-sm);
  transition: transform 180ms var(--ease), box-shadow 180ms var(--ease), border-color 180ms var(--ease);

  &:hover,
  &:focus-within {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.28);
    box-shadow: var(--shadow-md);
  }

  .icon-wrap {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    margin-bottom: 28px;
    border-radius: 16px;
    color: var(--primary);
    background: #eff6ff;
  }

  .icon {
    width: 26px;
    height: 26px;
    filter: brightness(0) saturate(100%) invert(36%) sepia(91%) saturate(1935%) hue-rotate(213deg) brightness(93%) contrast(92%);
  }

  h3 {
    margin-bottom: 12px;
    font-size: 1.24rem;
  }

  p {
    line-height: 1.7;
  }
`;

export default function Specialities() {
  return (
    <Section id="specialities" aria-labelledby="specialities-heading">
      <div className="section-container">
        <Header>
          <h4>Serviços</h4>
          <h2 id="specialities-heading">O que fica mais simples quando o design trabalha direito</h2>
          <p>
            A estrutura foi pensada para mostrar rapidamente o que fazemos, por que
            importa e como cada frente ajuda o produto a ficar mais fácil de usar.
          </p>
        </Header>

        <Grid>
          {SPECIALITIES.map((speciality) => (
            <Card key={speciality.id}>
              <div className="icon-wrap" aria-hidden="true">
                <img src={speciality.icon} alt={speciality.alt} className="icon" loading="lazy" />
              </div>
              <h3>{speciality.title}</h3>
              <p>{speciality.description}</p>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
