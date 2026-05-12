// src/components/Footer.jsx
import styled from "styled-components";
import IconDribbble from "../assets/icons/dribbble.svg";
import IconLinkedIn from "../assets/icons/linkedin.svg";
import IconTwitter from "../assets/icons/twitter.svg";

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
    transition: transform 160ms var(--timing-ease, cubic-bezier(.2,.9,.2,1)), box-shadow 160ms;
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
              <img src={IconDribbble} alt="" className="social-icon" aria-hidden="true" />
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
              <img src={IconLinkedIn} alt="" className="social-icon" aria-hidden="true" />
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
              <img src={IconTwitter} alt="" className="social-icon" aria-hidden="true" />
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
