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
      "Dashboard executivo para acompanhar receita, risco e previsoes com leitura rapida para times de operacao.",
    tags: ["UI/UX", "Dashboard", "Design System"],
    metric: "38%",
    metricLabel: "menos tempo em tarefas recorrentes",
  },
  {
    id: "commerce-app",
    image: secondProjectImage,
    alt: "Interface mobile de um aplicativo de comercio digital",
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
    eyebrow: "Operacoes B2B",
    title: "Operations Suite",
    description:
      "Central de controle para priorizar demandas, comparar indicadores e transformar dados dispersos em acao.",
    tags: ["Web App", "Data Viz", "Workflow"],
    metric: "3x",
    metricLabel: "mais clareza na priorizacao",
  },
];

const Section = styled.section`
  width: 100%;
  padding: 104px 24px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(280px, 0.58fr);
  gap: 32px;
  align-items: end;
  margin-bottom: 40px;

  h4 {
    margin: 0 0 10px;
    color: var(--primary, #3b82f6);
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 760px;
    margin: 0;
    text-align: left;
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.04;
  }

  p {
    margin: 0;
    color: var(--muted, #94a3b8);
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 28px;

    h2 {
      text-align: center;
    }

    p,
    h4 {
      text-align: center;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  min-height: ${({ $featured }) => ($featured ? "520px" : "250px")};
  grid-column: ${({ $featured }) => ($featured ? "span 7" : "span 5")};
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 8px;
  overflow: hidden;
  background: #080d16;
  box-shadow: 0 18px 48px rgba(2, 6, 23, 0.5);

  &:nth-child(3) {
    grid-column: 8 / span 5;
  }

  &:focus-within,
  &:hover {
    border-color: rgba(96, 165, 250, 0.45);
  }

  @media (max-width: 900px) {
    grid-column: 1;
    min-height: 420px;

    &:nth-child(3) {
      grid-column: 1;
    }
  }

  @media (max-width: 560px) {
    min-height: 430px;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.74;
  transform: scale(1.01);
  transition: transform 260ms ease, opacity 260ms ease;

  ${Card}:hover & {
    opacity: 0.88;
    transform: scale(1.04);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(2, 6, 23, 0.18), rgba(2, 6, 23, 0.9) 72%),
    linear-gradient(90deg, rgba(2, 6, 23, 0.82), rgba(2, 6, 23, 0.22));
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 18px;
  padding: ${({ $featured }) => ($featured ? "36px" : "28px")};

  @media (max-width: 560px) {
    padding: 24px;
  }
`;

const Eyebrow = styled.span`
  width: fit-content;
  color: #bfdbfe;
  border: 1px solid rgba(191, 219, 254, 0.28);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(15, 23, 42, 0.72);
`;

const Body = styled.div`
  display: grid;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: ${({ $featured }) => ($featured ? "clamp(28px, 4vw, 44px)" : "1.45rem")};
    line-height: 1.05;
  }

  p {
    max-width: 580px;
    margin: 0;
    color: rgba(230, 238, 248, 0.84);
    font-size: ${({ $featured }) => ($featured ? "1rem" : "0.94rem")};
    line-height: 1.65;
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 6px;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  color: rgba(230, 238, 248, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.78rem;
  background: rgba(2, 6, 23, 0.56);
`;

const Metric = styled.div`
  min-width: 120px;
  text-align: right;

  strong {
    display: block;
    color: #ffffff;
    font-size: 1.45rem;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 6px;
    color: var(--muted, #94a3b8);
    font-size: 0.78rem;
    line-height: 1.3;
  }

  @media (max-width: 520px) {
    width: 100%;
    text-align: left;
  }
`;

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <Header>
          <div>
            <h4>Portfolio</h4>
            <h2 id="projects-heading">Meus Projetos</h2>
          </div>
          <p>
            Uma selecao de interfaces digitais com foco em clareza, desempenho
            visual e decisoes de produto mais faceis de tomar.
          </p>
        </Header>

        <Grid>
          {PROJECTS.map((project, index) => {
            const featured = index === 0;

            return (
              <Card key={project.id} $featured={featured}>
                <Image src={project.image} alt={project.alt} loading="lazy" />
                <Overlay aria-hidden="true" />
                <Content $featured={featured}>
                  <Eyebrow>{project.eyebrow}</Eyebrow>
                  <Body $featured={featured}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </Body>
                  <Footer>
                    <Tags aria-label={`Tecnologias e escopo de ${project.title}`}>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                    <Metric aria-label={`${project.metric} ${project.metricLabel}`}>
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </Metric>
                  </Footer>
                </Content>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
