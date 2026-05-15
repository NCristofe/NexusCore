import styled from "styled-components";
import financeCommandImage from "../assets/img/project-finance-command.svg";
import commerceMobileImage from "../assets/img/project-commerce-mobile.svg";
import opsControlImage from "../assets/img/project-ops-control.svg";

const PROJECTS = [
  {
    id: "finance-platform",
    image: financeCommandImage,
    alt: "Mockup de dashboard financeiro com gráficos, métricas e navegação lateral",
    eyebrow: "Fintech SaaS",
    title: "Aurora Finance",
    description:
      "Redesign de um painel financeiro B2B para transformar relatórios densos em uma visão executiva de receita, risco e saúde de contas.",
    tags: ["Dashboard UX", "Data Viz", "Design System"],
    scope: "Pesquisa, arquitetura da informação e UI de alta fidelidade",
    metric: "38%",
    metricLabel: "menos tempo para encontrar indicadores críticos",
  },
  {
    id: "commerce-app",
    image: commerceMobileImage,
    alt: "Mockup de aplicativo mobile de comércio com vitrine, produtos e botão de checkout",
    eyebrow: "Mobile commerce",
    title: "Luma Store",
    description:
      "Experiência mobile para uma loja digital com vitrine mais editorial, cards de produto claros e checkout reduzido a três etapas.",
    tags: ["Mobile UI", "Checkout", "Conversão"],
    scope: "Fluxo de compra, interface mobile e microcopy",
    metric: "24%",
    metricLabel: "aumento projetado na conversão do checkout",
  },
  {
    id: "ops-suite",
    image: opsControlImage,
    alt: "Mockup de central operacional com colunas, prioridades e cards de tarefas",
    eyebrow: "Operações B2B",
    title: "PulseOps",
    description:
      "Central operacional para times de suporte acompanharem backlog, tarefas em andamento e prioridades sem depender de planilhas paralelas.",
    tags: ["Web App", "Workflow", "Ops"],
    scope: "Produto web, sistema de status e hierarquia de tarefas",
    metric: "3x",
    metricLabel: "mais clareza para priorizar demandas do dia",
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
    min-width: 0;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;
  min-width: 0;

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
  isolation: isolate;
  min-width: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 18px;
    z-index: -1;
    border: 1px solid rgba(37, 99, 235, 0.08);
    border-radius: 24px;
    pointer-events: none;
  }

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

  @media (max-width: 520px) {
    border-radius: 24px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 18%, rgba(20, 184, 166, 0.2), transparent 28%),
    linear-gradient(135deg, #eff6ff, #ffffff);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: clamp(18px, 3vw, 34px);
    transform: scale(1);
    transition: transform 320ms var(--ease), filter 320ms var(--ease);
    filter: saturate(0.92) contrast(0.96);
  }

  ${Card}:hover & img {
    transform: scale(1.04) rotate(1deg);
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

  .project-type {
    position: absolute;
    right: 22px;
    bottom: 22px;
    max-width: 220px;
    padding: 12px 14px;
    border: 1px solid rgba(220, 230, 242, 0.9);
    border-radius: 18px;
    color: var(--text);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 14px 30px rgba(23, 32, 51, 0.1);
    font-size: 0.82rem;
    font-weight: 850;
  }

  .scanline {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0 34%, rgba(255, 255, 255, 0.42) 35%, transparent 36%);
    animation: scanProject 4.8s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    min-height: 360px;
  }

  @media (max-width: 620px) {
    min-height: 310px;

    img {
      padding: 18px;
    }

    .project-type {
      display: none;
    }
  }

  @media (max-width: 420px) {
    min-height: 250px;

    img {
      padding: 12px;
    }

    .stamp {
      left: 14px;
      top: 14px;
      max-width: calc(100% - 28px);
      font-size: 0.72rem;
    }
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
  min-width: 0;

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

  @media (max-width: 620px) {
    padding: 24px;
    gap: 24px;

    h3 {
      font-size: clamp(2rem, 12vw, 3.2rem);
      line-height: 0.98;
    }
  }

  @media (max-width: 420px) {
    padding: 20px;

    h3 {
      font-size: clamp(1.8rem, 11vw, 2.6rem);
    }
  }
`;

const Scope = styled.span`
  display: block;
  max-width: 600px;
  margin-top: 16px;
  color: var(--primary-dark);
  font-size: 0.88rem;
  font-weight: 850;
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

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 8px;

    span {
      max-width: none;
    }
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
  max-width: 100%;

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

  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
  }
`;

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <Header>
          <div>
            <h4>Cases selecionados</h4>
            <h2 id="projects-heading">Projetos com cara de produto real, não vitrine genérica.</h2>
          </div>
          <p>
            Cada case agora tem uma interface própria, contexto claro e resultado
            visível para parecer portfólio de estúdio de verdade.
          </p>
        </Header>

        <ProjectList>
          {PROJECTS.map((project) => (
            <Card key={project.id}>
              <ImageWrap className="image-wrap">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="stamp">{project.eyebrow}</span>
                <span className="project-type">{project.scope}</span>
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
                  <Scope>{project.scope}</Scope>
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
