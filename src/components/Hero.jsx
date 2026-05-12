import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 480px;
  padding: 6rem 1.5rem;
  background: linear-gradient(180deg, rgba(2,6,23,0.6), rgba(0,0,0,0.85));
  color: var(--text, #e6eef8);
  text-align: center;

  > div {
    max-width: 1100px;
    width: 100%;
    padding: 0 1.25rem;
  }

  h1 {
    font-size: clamp(28px, 6vw, 72px);
    font-weight: 700;
    line-height: 1.05;
    margin: 0;
    color: inherit;
  }

  p {
    margin-top: 1rem;
    font-size: 1.125rem;
    color: rgba(230, 238, 248, 0.88);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h1 {
      font-size: clamp(24px, 8vw, 40px);
      line-height: 1.15;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection role="banner" aria-labelledby="hero-heading">
      <div>
        <h1 id="hero-heading">
          Interfaces elegantes, soluções digitais orientadas por resultado
        </h1>
        <p>
          Criamos experiências digitais claras e eficientes que equilibram estratégia,
          usabilidade e estética para impulsionar o valor do seu produto.
        </p>
      </div>
    </HeroSection>
  );
}
