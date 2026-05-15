import styled from "styled-components";
import firstProjectImage from "../assets/img/first-project-image.png";
import secondProjectImage from "../assets/img/second-project-image.png";

const PROJECTS = [
  {
    id: "finance-platform",
    image: firstProjectImage,
    alt: "Dashboard de uma plataforma financeira corporativa",
    eyebrow: "SaaS financeiro",
    title: "Financial Platform",
    description:
      "Dashboard executivo para acompanhar receita, risco e previsões com uma leitura mais rápida para times de operação.",
    tags: ["UI/UX", "Dashboard", "Design System"],
    metric: "38%",
    metricLabel: "menos tempo em tarefas recorrentes",
  },
  {
    id: "commerce-app",
    image: secondProjectImage,
    alt: "Interface mobile de um aplicativo de comércio digital",
    eyebrow: "Produto mobile",
    title: "Commerce App",
    description:
      "Experiencia de compra com fluxo enxuto, vitrine organizada e checkout pensado para reduzir abandono.",
    tags: ["Product Design", "Mobile", "Checkout"],
    metric: "24%",
    metricLabel: "aumento estimado na conversao",
  },
  {
    id: "ops-suite",
    image: firstProjectImage,
    alt: "Visao de cards e indicadores de uma suite operacional",
    eyebrow: "Operações B2B",
    title: "Operations Suite",
    description:
      "Central de controle para priorizar demandas, comparar indicadores e transformar dados dispersos em ação.",
    tags: ["Web App", "Data Viz", "Workflow"],
    metric: "3x",
    metricLabel: "mais clareza na priorização",
  },
];

const Section = styled.section`
  width: 100%;
  padding: 96px 24px;

  .section-container {
    display: grid;
    gap: 36px;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.55fr);
  gap: 28px;
  align-items: end;

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
    line-height: 1.75;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  transition: transform 180ms var(--ease), box-shadow 180ms var(--ease);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-soft);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 220ms var(--ease);
  }

  ${Card}:hover & img {
    transform: scale(1.035);
  }

  span {
    position: absolute;
    left: 16px;
    bottom: 16px;
    padding: 7px 10px;
    border-radius: 999px;
    color: var(--primary-dark);
    background: rgba(255, 255, 255, 0.88);
    font-size: 0.78rem;
    font-weight: 800;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  h3 {
    margin-bottom: 10px;
    font-size: 1.35rem;
  }

  p {
    line-height: 1.68;
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-soft);
  background: var(--surface-strong);
  font-size: 0.78rem;
  font-weight: 650;
`;

const Metric = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--border);

  strong {
    color: var(--primary);
    font-size: 1.7rem;
    line-height: 1;
  }

  span {
    max-width: 190px;
    color: var(--muted);
    font-size: 0.84rem;
    line-height: 1.35;
    text-align: right;
  }
`;

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <Header>
          <div>
            <h4>Portfolio</h4>
            <h2 id="projects-heading">Projetos com estrutura, contexto e resultado</h2>
          </div>
          <p>
            A antiga grade virou uma vitrine mais objetiva: cada projeto mostra
            problema, tipo de entrega e impacto esperado sem sobrecarregar a tela.
          </p>
        </Header>

        <Grid>
          {PROJECTS.map((project) => (
            <Card key={project.id}>
              <ImageWrap>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span>{project.eyebrow}</span>
              </ImageWrap>
              <Content>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <Tags aria-label={`Escopo de ${project.title}`}>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
                <Metric aria-label={`${project.metric} ${project.metricLabel}`}>
                  <strong>{project.metric}</strong>
                  <span>{project.metricLabel}</span>
                </Metric>
              </Content>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
