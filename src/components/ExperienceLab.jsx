import styled from "styled-components";

const MOMENTS = [
  {
    label: "01",
    title: "Primeiro impacto",
    text: "A página precisa dizer em três segundos que existe pensamento por trás do serviço.",
  },
  {
    label: "02",
    title: "Ritmo de descoberta",
    text: "O visitante encontra detalhes novos enquanto rola, sem sentir que caiu em um catálogo parado.",
  },
  {
    label: "03",
    title: "Convite para agir",
    text: "O CTA aparece como consequência da experiência, não como botão jogado no final.",
  },
];

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 110px 24px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 10% auto auto 50%;
    width: min(680px, 86vw);
    aspect-ratio: 1;
    border: 1px solid rgba(37, 99, 235, 0.16);
    border-radius: 42% 58% 44% 56%;
    transform: translateX(-50%) rotate(18deg);
    animation: morphRing 9s ease-in-out infinite;
  }

  .section-container {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(320px, 0.7fr);
    gap: 44px;
    align-items: center;
  }

  .poster {
    position: relative;
    min-height: 560px;
    border: 1px solid rgba(220, 230, 242, 0.9);
    border-radius: 38px;
    background:
      radial-gradient(circle at 76% 18%, rgba(20, 184, 166, 0.28), transparent 28%),
      linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(239, 246, 255, 0.74));
    box-shadow: var(--shadow-md);
    overflow: hidden;
  }

  .poster::before,
  .poster::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    border: 1px solid rgba(23, 32, 51, 0.12);
  }

  .poster::before {
    width: 330px;
    height: 330px;
    left: -96px;
    top: 62px;
    animation: orbitOne 10s linear infinite;
  }

  .poster::after {
    width: 210px;
    height: 210px;
    right: -54px;
    bottom: 36px;
    animation: orbitTwo 7s linear infinite reverse;
  }

  .poster-word {
    position: absolute;
    left: 28px;
    top: 28px;
    max-width: 380px;
    color: var(--text);
    font-size: clamp(3.4rem, 8vw, 7.2rem);
    font-weight: 950;
    line-height: 0.82;
    letter-spacing: -0.04em;
  }

  .poster-word span {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1.8px rgba(23, 32, 51, 0.72);
  }

  .floating-chip {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border: 1px solid rgba(220, 230, 242, 0.94);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 14px 34px rgba(23, 32, 51, 0.1);
    color: var(--text);
    font-weight: 900;
  }

  .floating-chip::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--accent);
  }

  .chip-one {
    right: 34px;
    top: 176px;
    transform: rotate(5deg);
    animation: driftChip 5.4s ease-in-out infinite;
  }

  .chip-two {
    left: 46px;
    bottom: 68px;
    transform: rotate(-5deg);
    animation: driftChip 6.2s ease-in-out infinite reverse;
  }

  .console {
    position: absolute;
    right: 34px;
    bottom: 40px;
    width: min(330px, 72%);
    padding: 18px;
    border: 1px solid rgba(23, 32, 51, 0.12);
    border-radius: 24px;
    background: rgba(23, 32, 51, 0.92);
    box-shadow: 0 24px 48px rgba(23, 32, 51, 0.24);
  }

  .console small {
    color: #93c5fd;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .console strong {
    display: block;
    margin-top: 10px;
    color: #ffffff;
    font-size: 1.45rem;
    line-height: 1.1;
  }

  .console span {
    display: block;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.68);
    line-height: 1.5;
  }

  .copy h4 {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .copy h2 {
    font-size: clamp(34px, 5vw, 66px);
    line-height: 0.96;
  }

  .copy > p {
    margin-top: 20px;
    line-height: 1.78;
    font-size: 1.04rem;
  }

  .moments {
    display: grid;
    gap: 12px;
    margin-top: 30px;
  }

  .moment {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 16px;
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.74);
    transition: transform 180ms var(--ease), border-color 180ms var(--ease), background 180ms var(--ease);
  }

  .moment:hover {
    transform: translateX(-10px);
    border-color: rgba(20, 184, 166, 0.34);
    background: #ffffff;
  }

  .moment b {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    color: #ffffff;
    background: var(--text);
    font-size: 0.84rem;
  }

  .moment strong {
    display: block;
    margin-bottom: 5px;
    color: var(--text);
  }

  .moment span {
    color: var(--text-soft);
    line-height: 1.52;
  }

  @keyframes morphRing {
    50% {
      border-radius: 58% 42% 56% 44%;
      transform: translateX(-50%) rotate(-10deg) scale(0.92);
    }
  }

  @keyframes orbitOne {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes orbitTwo {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes driftChip {
    50% {
      translate: 0 -14px;
    }
  }

  @media (max-width: 940px) {
    .section-container {
      grid-template-columns: 1fr;
    }

    .poster {
      min-height: 500px;
    }
  }

  @media (max-width: 600px) {
    padding: 78px 18px;

    .poster {
      min-height: 620px;
    }

    .console {
      left: 22px;
      right: 22px;
      width: auto;
    }

    .chip-one {
      right: 20px;
      top: 240px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    .poster::before,
    .poster::after,
    .floating-chip {
      animation: none;
    }
  }
`;

export default function ExperienceLab() {
  return (
    <Section aria-labelledby="experience-lab-heading">
      <div className="section-container">
        <div className="poster" aria-label="Manifesto visual NexusCore">
          <div className="poster-word">
            Fora
            <span>do óbvio</span>
          </div>
          <div className="floating-chip chip-one">Interface com pulso</div>
          <div className="floating-chip chip-two">Conversão com estética</div>
          <div className="console">
            <small>Experience layer</small>
            <strong>O visitante precisa sentir antes de entender tudo.</strong>
            <span>Movimento, contraste e copy trabalham juntos para criar desejo.</span>
          </div>
        </div>

        <div className="copy">
          <h4>Camada extra</h4>
          <h2 id="experience-lab-heading">A diferença está nos momentos que ninguém espera.</h2>
          <p>
            Um site memorável não depende de encher a tela de efeitos. Ele cria pequenas
            surpresas nos lugares certos, dá ritmo à leitura e transforma o serviço em
            uma sensação concreta.
          </p>
          <div className="moments">
            {MOMENTS.map((moment) => (
              <div className="moment" key={moment.label}>
                <b>{moment.label}</b>
                <div>
                  <strong>{moment.title}</strong>
                  <span>{moment.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
