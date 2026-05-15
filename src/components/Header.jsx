import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import menuAside from "../assets/icons/menu-aside-icon.svg";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Serviços", href: "#specialities" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const StyledHeader = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  height: 86px;
  border-bottom: 1px solid rgba(220, 230, 242, 0.86);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);

  .header-inner {
    width: 100%;
    max-width: var(--container-max);
    height: 100%;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
  }

  .logo-link {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .logo-link img {
    width: 168px;
    height: auto;
  }

  .navigation ul,
  .mobile-panel ul {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0 14px;
    border-radius: 999px;
    color: var(--text-soft);
    font-size: 0.94rem;
    font-weight: 650;
    transition: background 180ms var(--ease), color 180ms var(--ease);
  }

  .nav-link:hover,
  .nav-link:focus-visible {
    color: var(--text);
    background: var(--bg-soft);
  }

  .start-button {
    margin-left: 6px;
    color: #ffffff;
    background: var(--primary);
    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.2);
  }

  .start-button:hover,
  .start-button:focus-visible {
    color: #ffffff;
    background: var(--primary-dark);
  }

  .menu-button {
    display: none;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
  }

  .menu-button img {
    width: 24px;
    height: 24px;
  }

  .mobile-panel {
    display: none;
  }

  @media (max-width: 780px) {
    height: 76px;

    .header-inner {
      padding: 0 18px;
    }

    .logo-link img {
      width: 150px;
    }

    .navigation {
      display: none;
    }

    .menu-button {
      display: grid;
    }

    .mobile-panel {
      position: fixed;
      top: 76px;
      left: 18px;
      right: 18px;
      display: block;
      padding: 14px;
      border: 1px solid var(--border);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: var(--shadow-md);
      transform: translateY(-14px);
      opacity: 0;
      pointer-events: none;
      transition: transform 180ms var(--ease), opacity 180ms var(--ease);
    }

    .mobile-panel.show {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-panel ul {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
    }

    .mobile-panel .nav-link {
      width: 100%;
      justify-content: flex-start;
      border-radius: 12px;
    }

    .mobile-panel .start-button {
      justify-content: center;
      margin: 8px 0 0;
    }
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <StyledHeader>
      <div className="header-inner">
        <a className="logo-link" href="#hero" aria-label="NexusCore - inicio" onClick={closeMenu}>
          <img src={logo} alt="NexusCore" />
        </a>

        <nav className="navigation" aria-label="Navegação principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="nav-link start-button" href="#contact">
                Começar
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Abrir menu"
        >
          <img src={menuAside} alt="" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-panel ${isMenuOpen ? "show" : ""}`}
        aria-label="Navegação mobile"
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-link start-button" href="#contact" onClick={closeMenu}>
              Começar
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
