import styled from "styled-components";

const FooterRoot = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  border-top: 1px solid rgba(255,255,255,0.04);
  padding: 28px 48px;
  box-sizing: border-box;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  color: var(--muted, #94a3b8);

  .brand {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .brand .name {
    font-weight: 700;
    color: var(--text, #e6eef8);
    font-size: 0.95rem;
  }

  .brand .legal {
    font-size: 0.875rem;
    color: var(--muted, #94a3b8);
  }

  nav.social {
    display: flex;
    gap: 18px;
    align-items: center;
  }

  .social-list {
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .social-link {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.03);
    transition: transform 160ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms;
    color: var(--text, #e6eef8);
    text-decoration: none;
  }

  .social-link:hover,
  .social-link:focus {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(2,6,23,0.45);
    outline: none;
  }

  .social-icon {
    width: 18px;
    height: 18px;
    display: block;
  }

  .footer-actions {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .footer-link {
    font-size: 0.9rem;
    color: var(--muted, #94a3b8);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 160ms, color 160ms;
  }

  .footer-link:hover,
  .footer-link:focus {
    background: rgba(255,255,255,0.02);
    color: var(--text, #e6eef8);
    outline: none;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 20px;
  }
`;

/* Inline SVG icons to avoid missing file imports */
function IconDribbble() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 15.5c3-1 6-1 9 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M7 6.5c2 2.5 5 4 9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M16 4.5c-1.5 2.5-3 5.5-3.5 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 10v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="7.5" r="1" fill="currentColor" />
      <path d="M11 10v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 10c1.5 0 3-0.5 3 1.5v4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C16.6 6 15.6 5.5 14.5 5.5c-1.9 0-3.4 1.6-3.4 3.5 0 .3 0 .6.1.9C7.7 9.7 5 8.1 3.2 6c-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3 2.3-1.1.9-2.5 1.4-4 1.4-.3 0-.6 0-.9-.1 1.4.9 3 1.4 4.7 1.4 5.6 0 8.7-4.7 8.7-8.8v-.4c.6-.4 1.1-1 1.5-1.6-.6.3-1.2.5-1.9.6z" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <FooterRoot role="contentinfo" aria-label="Footer">
      <div className="brand" aria-hidden={false}>
        <span className="name">Suporte de Domingo</span>
        <span className="legal">© 2025 Suporte de Domingo. All rights reserved.</span>
      </div>

      <nav className="social" aria-label="Social media">
        <ul className="social-list">
          <li>
            <a
              className="social-link"
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble — opens in a new tab"
            >
              <IconDribbble />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — opens in a new tab"
            >
              <IconLinkedIn />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter — opens in a new tab"
            >
              <IconTwitter />
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer-actions" aria-hidden={false}>
        <a className="footer-link" href="/privacy">Privacy</a>
        <a className="footer-link" href="/terms">Terms</a>
        <a className="footer-link" href="#contact">Contact</a>
      </div>
    </FooterRoot>
  );
}
