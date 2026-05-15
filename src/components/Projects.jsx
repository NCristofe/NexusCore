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
      "Uma interface de dados que deixa o decisor confortável: menos tabela crua, mais leitura visual e prioridade clara.",
    tags: ["Dashboard", "UX Writing", "Design System"],
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
      "Uma vitrine mobile com fluxo de compra mais gostoso de seguir, removendo atritos antes do checkout.",
    tags: ["Mobile", "Checkout", "Conversão"],
    metric: "24%",
    metricLabel: "aumento estimado na conversão",
  },
  {
    id: "ops-suite",
    image: firstProjectImage,
    alt: "Visão de cards e indicadores de uma suíte operacional",
    eyebrow: "Operações B2B",
    title: "Operations Suite",
    description:
      "Uma central operacional com foco em ritmo: status, prioridade e próximos passos sem caçar informação.",
    tags: ["Web App", "Workflow", "Data Viz"],
    metric: "3x",
    metricLabel: "mais clareza na priorização",
  },
];

const Section = styled.section`
  width: 100%;
  padding: 112px 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(23, 32, 51, 0.04)),
    repeating-linear-gradient(135deg, transparent 0 22px, rgba(37, 99, 235, 0.035) 22px 23px);

  .section-container {
    display: grid;
    gap: 42px;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;

  h4 {
    margin-bottom: 10px;
    color: var(--primary);
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 850px;
    font-size: clamp(34px, 5vw, 64px);
    line-height: 0.98;
  }

  p {
    max-width: 360px;
    line-height: 1.72;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;

    p {
      max-width: 640px;
    }
  }
`;

const ProjectList = styled.div`
  display: grid;
  gap: 22px;
`;

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1fr);
  min-height: 420px;
  border: 1px solid rgba(220, 230, 242, 0.95);
  border-radius: 32px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow-sm);
  transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-md);
  }

  &:nth-child(even) {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  }

  &:nth-child(even) .image-wrap {
    order: 2;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;

    &:nth-child(even) {
      grid-template-columns: 1fr;
    }

    &:nth-child(even) .image-wrap {
      order: 0;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background: #dbeafe;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.04);
    transition: transform 320ms var(--ease), filter 320ms var(--ease);
    filter: saturate(0.92) contrast(0.96);
  }

  ${Card}:hover & img {
    transform: scale(1.1) rotate(1deg);
    filter: saturate(1.08) contrast(1);
  }

  .stamp {
    position: absolute;
    left: 22px;
    top: 22px;
    padding: 8px 11px;
    border-radius: 999px;
    color: var(--primary-dark);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 12px 24px rgba(23, 32, 51, 0.1);
    font-size: 0.78rem;
    font-weight: 900;
  }

  .scanline {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0 34%, rgba(255, 255, 255, 0.42) 35%, transparent 36%);
    animation: scanProject 4.8s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    min-height: 300px;
  }

  @keyframes scanProject {
    50% {
      transform: translateY(42%);
      opacity: 0.35;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: clamp(26px, 4vw, 44px);

  h3 {
    max-width: 620px;
    margin-bottom: 16px;
    font-size: clamp(2rem, 4.6vw, 4.6rem);
    line-height: 0.94;
  }

  p {
    max-width: 620px;
    line-height: 1.74;
    font-size: 1.02rem;
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  padding: 7px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-soft);
  background: var(--surface-strong);
  font-size: 0.78rem;
  font-weight: 750;
`;

const Metric = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  padding-top: 22px;
  border-top: 1px solid var(--border);

  strong {
    color: var(--primary);
    font-size: clamp(2.4rem, 5vw, 4.7rem);
    line-height: 0.9;
  }

  span {
    max-width: 260px;
    color: var(--muted);
    line-height: 1.35;
    font-weight: 700;
  }
`;

const Action = styled.a`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  color: var(--text);
  font-weight: 900;

  &::after {
    content: "";
    width: 42px;
    height: 2px;
    background: var(--accent);
    transition: width 180ms var(--ease);
  }

  ${Card}:hover &::after {
    width: 72px;
  }
`;

const LabNote = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border: 1px dashed rgba(37, 99, 235, 0.36);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--text-soft);
  font-weight: 750;
  text-align: center;

  strong {
    color: var(--text);
  }
`;

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <Header>
          <div>
            <h4>Vitrine viva</h4>
            <h2 id="projects-heading">Projetos que parecem convite, não relatório.</h2>
          </div>
          <p>
            A lógica é simples: mostrar contexto, sensação e resultado antes da pessoa
            cansar de ler.
          </p>
        </Header>

        <ProjectList>
          {PROJECTS.map((project) => (
            <Card key={project.id}>
              <ImageWrap className="image-wrap">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="stamp">{project.eyebrow}</span>
                <span className="scanline" aria-hidden="true" />
              </ImageWrap>
              <Content>
                <div>
                  <Tags aria-label={`Escopo de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                  <Action href="#contact">Quero esse nível</Action>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <Metric aria-label={`${project.metric} ${project.metricLabel}`}>
                  <strong>{project.metric}</strong>
                  <span>{project.metricLabel}</span>
                </Metric>
              </Content>
            </Card>
          ))}
        </ProjectList>

        <LabNote>
          <strong>Ideia central:</strong> o site precisa criar desejo antes de explicar tudo.
        </LabNote>
      </div>
    </Section>
  );
}
