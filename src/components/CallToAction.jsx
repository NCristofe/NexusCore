import styled from "styled-components";
import Arrow from "../assets/icons/arrow-icon.svg";

const Section = styled.section`
  width: 100%;
  padding: 108px 24px 118px;

  .cta-panel {
    position: relative;
    width: 100%;
    max-width: var(--container-max);
    min-height: 420px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
    gap: 34px;
    align-items: center;
    padding: clamp(30px, 5vw, 56px);
    border: 1px solid rgba(23, 32, 51, 0.12);
    border-radius: 36px;
    background:
      linear-gradient(120deg, #172033 0 58%, #2563eb 58% 72%, #14b8a6 72% 100%);
    box-shadow: 0 34px 90px rgba(23, 32, 51, 0.24);
    overflow: hidden;
    isolation: isolate;
    min-width: 0;
  }

  .cta-panel::before {
    content: "";
    position: absolute;
    inset: 24px;
    z-index: -1;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 26px;
  }

  .cta-panel::after {
    content: "NexusCore";
    position: absolute;
    right: -32px;
    bottom: -26px;
    z-index: -1;
    color: rgba(255, 255, 255, 0.06);
    font-size: clamp(5rem, 13vw, 12rem);
    font-weight: 950;
    letter-spacing: 0;
    line-height: 0.8;
  }

  .label {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 18px;
    padding: 8px 11px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    color: #bfdbfe;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 820px;
    color: #ffffff;
    font-size: clamp(36px, 6vw, 76px);
    line-height: 0.94;
  }

  p {
    max-width: 670px;
    margin-top: 22px;
    color: rgba(255, 255, 255, 0.78);
    font-size: 1.08rem;
    line-height: 1.78;
  }

  .cta-button {
    position: relative;
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 58px;
    margin-top: 34px;
    padding: 0 24px;
    border-radius: 999px;
    color: var(--text);
    background: #ffffff;
    font-weight: 950;
    box-shadow: 12px 12px 0 rgba(20, 184, 166, 0.34);
    transition: transform 180ms var(--ease), box-shadow 180ms var(--ease);
    text-align: center;
    white-space: normal;
    line-height: 1.2;
  }

  .cta-button:hover {
    transform: translate(-4px, -4px) rotate(-1deg);
    box-shadow: 18px 18px 0 rgba(20, 184, 166, 0.3);
  }

  .cta-button img {
    width: 18px;
    height: 18px;
    filter: brightness(0) saturate(100%) invert(10%) sepia(23%) saturate(1197%) hue-rotate(184deg) brightness(91%) contrast(90%);
  }

  .mini-board {
    display: grid;
    gap: 12px;
    min-width: 0;
  }

  .mini-card {
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(14px);
    color: #ffffff;
    animation: ctaFloat 5s ease-in-out infinite;
  }

  .mini-card:nth-child(2) {
    animation-delay: 0.8s;
    transform: translateX(-22px);
  }

  .mini-card:nth-child(3) {
    animation-delay: 1.4s;
    transform: translateX(18px);
  }

  .mini-card strong {
    display: block;
    margin-bottom: 6px;
    font-size: 1.1rem;
  }

  .mini-card span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
  }

  @keyframes ctaFloat {
    50% {
      translate: 0 -10px;
    }
  }

  @media (max-width: 840px) {
    padding: 80px 18px 92px;

    .cta-panel {
      grid-template-columns: 1fr;
      background: linear-gradient(145deg, #172033 0 66%, #2563eb 66% 82%, #14b8a6 82% 100%);
    }

    .cta-button {
      width: 100%;
      min-height: auto;
      padding: 16px 18px;
    }

    .mini-card,
    .mini-card:nth-child(2),
    .mini-card:nth-child(3) {
      transform: none;
    }
  }

  @media (max-width: 520px) {
    padding: 72px 14px 84px;

    .cta-panel {
      min-height: auto;
      padding: 26px 20px;
      border-radius: 28px;
    }

    .cta-panel::after {
      right: -18px;
      bottom: -12px;
      font-size: clamp(4rem, 19vw, 6rem);
    }

    .cta-panel::before {
      inset: 14px;
      border-radius: 20px;
    }

    h2 {
      font-size: clamp(2.35rem, 12vw, 3.6rem);
      line-height: 0.98;
    }

    p {
      font-size: 1rem;
    }

    .mini-card,
    .mini-card:nth-child(2),
    .mini-card:nth-child(3) {
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mini-card {
      animation: none;
    }
  }
`;

export default function CallToAction() {
  return (
    <Section id="contact" aria-labelledby="cta-heading">
      <div className="cta-panel">
        <div>
          <span className="label">Próximo passo</span>
          <h2 id="cta-heading">Vamos fazer seu site parar de pedir desculpa.</h2>
          <p>
            Se a sua marca entrega bem, a interface precisa ter a mesma confiança.
            Me chama e eu te devolvo um caminho visual mais ousado, claro e vendável.
          </p>
          <a className="cta-button" href="mailto:contato@nexuscore.com">
            Quero redesenhar minha presença
            <img src={Arrow} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="mini-board" aria-label="O que acontece no contato">
          <div className="mini-card">
            <strong>1. Diagnóstico</strong>
            <span>onde o site perde atenção hoje</span>
          </div>
          <div className="mini-card">
            <strong>2. Direção visual</strong>
            <span>o tom certo para sua marca parecer desejável</span>
          </div>
          <div className="mini-card">
            <strong>3. Experiência</strong>
            <span>uma página que conduz, encanta e converte</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
