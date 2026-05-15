import styled from "styled-components";
import Arrow from "../assets/icons/arrow-icon.svg";

const Section = styled.section`
  width: 100%;
  padding: 96px 24px;

  .cta-panel {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 28px;
    align-items: center;
    padding: 42px;
    border: 1px solid rgba(191, 219, 254, 0.9);
    border-radius: 28px;
    background:
      linear-gradient(135deg, rgba(239, 246, 255, 0.96), rgba(255, 255, 255, 0.96)),
      #ffffff;
    box-shadow: var(--shadow-md);
  }

  h2 {
    max-width: 760px;
    font-size: clamp(28px, 4vw, 46px);
  }

  p {
    max-width: 640px;
    margin-top: 14px;
    line-height: 1.75;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 52px;
    padding: 0 20px;
    border-radius: 999px;
    color: #ffffff;
    background: var(--primary);
    font-weight: 800;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.24);
    transition: transform 180ms var(--ease), background 180ms var(--ease);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    background: var(--primary-dark);
  }

  .cta-button img {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 760px) {
    padding: 72px 18px;

    .cta-panel {
      grid-template-columns: 1fr;
      padding: 28px;
    }

    .cta-button {
      width: 100%;
    }
  }
`;

export default function CallToAction() {
  return (
    <Section id="contact" aria-labelledby="cta-heading">
      <div className="cta-panel">
        <div>
          <h2 id="cta-heading">Vamos transformar sua ideia em uma interface clara</h2>
          <p>
            Conte o que você quer melhorar. A gente organiza o problema, desenha o fluxo
            e entrega uma experiência moderna para o usuário final.
          </p>
        </div>

        <a className="cta-button" href="mailto:contato@nexuscore.com">
          Iniciar conversa
          <img src={Arrow} alt="" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
