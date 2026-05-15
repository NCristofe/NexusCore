import styled from "styled-components";

const FooterRoot = styled.footer`
  width: 100%;
  padding: 34px 24px 42px;
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.74);

  .footer-inner {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .brand {
    display: grid;
    gap: 4px;
  }

  .name {
    color: var(--text);
    font-weight: 800;
  }

  .legal,
  .footer-link {
    color: var(--muted);
    font-size: 0.92rem;
  }

  .footer-links {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .footer-link {
    padding: 8px 10px;
    border-radius: 999px;
    transition: color 180ms var(--ease), background 180ms var(--ease);
  }

  .footer-link:hover,
  .footer-link:focus-visible {
    color: var(--text);
    background: var(--bg-soft);
  }

  @media (max-width: 720px) {
    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-links {
      justify-content: flex-start;
    }
  }
`;

export default function Footer() {
  return (
    <FooterRoot role="contentinfo">
      <div className="footer-inner">
        <div className="brand">
          <span className="name">NexusCore</span>
          <span className="legal">© 2026 NexusCore. Todos os direitos reservados.</span>
        </div>

        <nav className="footer-links" aria-label="Links do rodape">
          <a className="footer-link" href="#hero">
            Home
          </a>
          <a className="footer-link" href="#projects">
            Projetos
          </a>
          <a className="footer-link" href="#contact">
            Contato
          </a>
        </nav>
      </div>
    </FooterRoot>
  );
}
