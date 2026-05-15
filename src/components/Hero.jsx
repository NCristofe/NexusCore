import styled from "styled-components";

const SIGNALS = ["UX que vende", "Interface memorável", "Fluxo sem ruído", "Produto com presença"];

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding: 72px 24px 34px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background:
      linear-gradient(115deg, rgba(20, 184, 166, 0.14) 0 14%, transparent 14% 100%),
      linear-gradient(68deg, transparent 0 62%, rgba(37, 99, 235, 0.1) 62% 74%, transparent 74%),
      repeating-linear-gradient(90deg, rgba(23, 32, 51, 0.045) 0 1px, transparent 1px 88px),
      repeating-linear-gradient(0deg, rgba(23, 32, 51, 0.035) 0 1px, transparent 1px 88px);
  }

  .hero-inner {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(360px, 0.84fr);
    gap: 52px;
    align-items: center;
    min-width: 0;
  }

  .copy {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    margin-bottom: 22px;
    padding: 9px 12px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    border-radius: 999px;
    color: var(--primary-dark);
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.08);
    font-size: 0.84rem;
    font-weight: 850;
  }

  .eyebrow::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 0 8px rgba(20, 184, 166, 0.12);
    animation: pulseDot 1.9s ease-in-out infinite;
  }

  h1 {
    max-width: 820px;
    font-size: clamp(46px, 7vw, 92px);
    line-height: 0.95;
  }

  .skew-word {
    display: inline-block;
    color: #ffffff;
    padding: 0 12px 8px;
    border-radius: 18px;
    background: #172033;
    transform: rotate(-2deg) translateY(4px);
    box-shadow: 10px 12px 0 rgba(20, 184, 166, 0.24);
  }

  p {
    max-width: 660px;
    margin-top: 26px;
    font-size: clamp(1.03rem, 1.5vw, 1.22rem);
    line-height: 1.78;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 22px;
    border-radius: 999px;
    font-weight: 850;
    isolation: isolate;
    overflow: hidden;
    text-align: center;
    white-space: normal;
    transition: transform 180ms var(--ease), box-shadow 180ms var(--ease);
  }

  .button:hover {
    transform: translateY(-3px) rotate(-1deg);
  }

  .button-primary {
    color: #ffffff;
    background: var(--primary);
    box-shadow: 0 22px 44px rgba(37, 99, 235, 0.28);
  }

  .button-primary::after {
    content: "";
    position: absolute;
    inset: -50% auto -50% -30%;
    z-index: -1;
    width: 42%;
    background: rgba(255, 255, 255, 0.32);
    transform: skewX(-18deg);
    animation: buttonSweep 3.2s ease-in-out infinite;
  }

  .button-secondary {
    color: var(--text);
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.82);
  }

  .proof-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
  }

  .proof-row span {
    padding: 8px 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-soft);
    background: rgba(255, 255, 255, 0.68);
    font-size: 0.82rem;
    font-weight: 750;
  }

  .lab {
    position: relative;
    min-height: 590px;
    transform: rotate(1deg);
    min-width: 0;
  }

  .lab-card {
    position: absolute;
    border: 1px solid rgba(220, 230, 242, 0.92);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.78);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(16px);
  }

  .screen {
    inset: 38px 0 auto 56px;
    width: min(92%, 460px);
    min-height: 420px;
    padding: 18px;
    overflow: hidden;
  }

  .screen-bar {
    display: flex;
    gap: 7px;
    margin-bottom: 18px;
  }

  .screen-bar span {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #cbd5e1;
  }

  .screen-bar span:nth-child(2) {
    background: var(--accent);
  }

  .screen-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 14px;
    align-items: center;
    margin-bottom: 16px;
  }

  .screen-title {
    display: grid;
    gap: 8px;
  }

  .screen-title span {
    height: 12px;
    border-radius: 999px;
    background: #dbeafe;
  }

  .screen-title span:first-child {
    width: 72%;
    background: #172033;
  }

  .score {
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border-radius: 22px;
    color: #ffffff;
    background: linear-gradient(135deg, var(--primary), #14b8a6);
    font-weight: 900;
    font-size: 1.55rem;
  }

  .journey {
    display: grid;
    gap: 12px;
  }

  .journey li {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 12px;
    align-items: center;
    padding: 13px;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: #ffffff;
    animation: liftCard 4.8s ease-in-out infinite;
  }

  .journey li:nth-child(2) {
    animation-delay: 0.6s;
  }

  .journey li:nth-child(3) {
    animation-delay: 1.2s;
  }

  .journey i {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    background: var(--bg-soft);
  }

  .journey strong {
    display: block;
    color: var(--text);
    font-size: 0.92rem;
  }

  .journey span {
    color: var(--muted);
    font-size: 0.78rem;
  }

  .journey em {
    color: var(--accent);
    font-style: normal;
    font-weight: 900;
  }

  .floating-note {
    right: 4px;
    bottom: 78px;
    width: 210px;
    padding: 18px;
    transform: rotate(5deg);
    animation: floatNote 5s ease-in-out infinite;
  }

  .floating-note strong {
    display: block;
    margin-bottom: 8px;
    font-size: 1.45rem;
  }

  .floating-note span {
    color: var(--text-soft);
    font-size: 0.9rem;
  }

  .ticket {
    left: 0;
    bottom: 18px;
    width: 270px;
    padding: 18px;
    border-style: dashed;
    transform: rotate(-6deg);
  }

  .ticket small {
    color: var(--primary);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .ticket strong {
    display: block;
    margin-top: 8px;
    font-size: 1.25rem;
  }

  .ticket span {
    color: var(--muted);
    font-size: 0.88rem;
  }

  .marquee {
    width: min(100%, 1280px);
    margin: 44px auto 0;
    overflow: hidden;
    border-block: 1px solid rgba(220, 230, 242, 0.92);
    background: rgba(255, 255, 255, 0.64);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 24s linear infinite;
  }

  .marquee span {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    padding: 18px 26px;
    color: var(--text);
    font-size: clamp(0.94rem, 1.4vw, 1.08rem);
    font-weight: 900;
    white-space: nowrap;
  }

  .marquee span::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: var(--accent);
  }

  @keyframes marquee {
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes pulseDot {
    50% {
      transform: scale(0.72);
      box-shadow: 0 0 0 14px rgba(20, 184, 166, 0.04);
    }
  }

  @keyframes buttonSweep {
    45%,
    100% {
      left: 125%;
    }
  }

  @keyframes liftCard {
    50% {
      transform: translateX(8px);
      border-color: rgba(37, 99, 235, 0.24);
    }
  }

  @keyframes floatNote {
    50% {
      transform: rotate(2deg) translateY(-12px);
    }
  }

  @media (max-width: 980px) {
    padding-top: 56px;

    .hero-inner {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .lab {
      min-height: 540px;
      width: 100%;
      max-width: 620px;
      margin: 0 auto;
      transform: none;
    }
  }

  @media (max-width: 760px) {
    .eyebrow {
      max-width: 100%;
      flex-wrap: wrap;
    }

    .proof-row span {
      max-width: 100%;
    }

    .lab {
      min-height: 640px;
    }

    .screen {
      inset: 0 auto auto 0;
      width: 100%;
      min-height: 420px;
    }

    .floating-note {
      right: 0;
      bottom: 104px;
    }

    .ticket {
      left: 0;
      bottom: 0;
    }
  }

  @media (max-width: 620px) {
    padding: 52px 18px 30px;

    h1 {
      font-size: clamp(40px, 13vw, 62px);
      line-height: 0.98;
    }

    .skew-word {
      padding-bottom: 5px;
      border-radius: 14px;
    }

    .hero-actions,
    .button {
      width: 100%;
    }

    .lab {
      min-height: 700px;
    }

    .screen {
      inset: 0 auto auto 0;
      width: 100%;
      min-height: 430px;
    }

    .screen-header {
      grid-template-columns: 1fr;
    }

    .score {
      width: 64px;
      height: 64px;
      border-radius: 18px;
    }

    .floating-note {
      right: 0;
      bottom: 122px;
      width: 190px;
    }

    .ticket {
      left: 0;
      bottom: 0;
      width: 230px;
    }
  }

  @media (max-width: 420px) {
    padding-inline: 14px;

    .hero-actions {
      gap: 10px;
    }

    .button {
      min-height: 52px;
      padding: 12px 16px;
      line-height: 1.2;
    }

    .lab {
      min-height: 720px;
    }

    .screen {
      min-height: 460px;
      padding: 14px;
      border-radius: 22px;
    }

    .journey li {
      grid-template-columns: 1fr auto;
      gap: 10px;
      padding: 12px;
    }

    .journey i {
      display: none;
    }

    .floating-note {
      bottom: 128px;
      width: 168px;
      padding: 14px;
    }

    .ticket {
      width: min(100%, 230px);
      padding: 14px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .eyebrow::before,
    .button-primary::after,
    .journey li,
    .floating-note,
    .marquee-track {
      animation: none;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="copy">
          <span className="eyebrow">Design que parece produto vivo</span>
          <h1 id="hero-heading">
            Seu site não precisa parecer <span className="skew-word">mais um</span>
          </h1>
          <p>
            Eu transformo interfaces mornas em experiências que dão vontade de explorar:
            com narrativa visual, movimento na medida certa e uma jornada que conduz a pessoa
            até o próximo clique.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Quero uma experiência assim
            </a>
            <a className="button button-secondary" href="#projects">
              Ver a pegada visual
            </a>
          </div>
          <div className="proof-row" aria-label="Diferenciais">
            <span>Sem cara de template</span>
            <span>Foco em conversão</span>
            <span>Movimento com propósito</span>
          </div>
        </div>

        <aside className="lab" aria-label="Laboratório visual de interface">
          <div className="lab-card screen">
            <div className="screen-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="screen-header">
              <div className="screen-title" aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="score">97</div>
            </div>
            <ul className="journey">
              <li>
                <i aria-hidden="true" />
                <div>
                  <strong>Primeira dobra</strong>
                  <span>mensagem clara + tensão visual</span>
                </div>
                <em>on</em>
              </li>
              <li>
                <i aria-hidden="true" />
                <div>
                  <strong>Serviço</strong>
                  <span>o valor aparece antes da explicação</span>
                </div>
                <em>hot</em>
              </li>
              <li>
                <i aria-hidden="true" />
                <div>
                  <strong>Contato</strong>
                  <span>convite direto, sem enrolação</span>
                </div>
                <em>go</em>
              </li>
            </ul>
          </div>
          <div className="lab-card floating-note">
            <strong>+32%</strong>
            <span>mais intenção de clique quando o fluxo visual fica óbvio.</span>
          </div>
          <div className="lab-card ticket">
            <small>Diagnóstico rápido</small>
            <strong>Seu site prende ou só informa?</strong>
            <span>Essa é a pergunta que guia o redesign.</span>
          </div>
        </aside>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...SIGNALS, ...SIGNALS, ...SIGNALS, ...SIGNALS].map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}</span>
          ))}
        </div>
      </div>
    </HeroSection>
  );
}
