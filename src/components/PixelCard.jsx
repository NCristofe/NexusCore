
import { useEffect, useRef } from "react";
import "./PixelCard.css";

// Se quiser usar GSAP, já deve estar instalado: npm install gsap
let gsap;
try {
  // import dinamicamente para não quebrar se não estiver instalado
  // eslint-disable-next-line no-eval
  gsap = eval("require('gsap')"); // uso de eval/require para evitar erro em bundlers que checam estático
} catch (e) {
  gsap = null;
}

export default function PixelCard({
  variant = "default",
  noFocus = false,
  className = "",
  children,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const finalNoFocus = noFocus ?? false;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // exemplo simples: animação de entrada do conteúdo com GSAP se disponível
    if (gsap && gsap.to) {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    } else {
      // fallback CSS: garante que o elemento apareça
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }

    // cleanup (se necessário)
    return () => {
      if (gsap && gsap.killTweensOf) {
        gsap.killTweensOf(el);
      }
    };
  }, []);

  // handlers locais simples para hover/focus
  function handleMouseEnter() {
    const el = containerRef.current;
    if (!el) return;
    if (gsap && gsap.to) {
      gsap.to(el, { scale: 1.03, duration: 0.25, ease: "power1.out" });
    } else {
      el.classList.add("pixel-card-hover");
    }
  }

  function handleMouseLeave() {
    const el = containerRef.current;
    if (!el) return;
    if (gsap && gsap.to) {
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power1.out" });
    } else {
      el.classList.remove("pixel-card-hover");
    }
  }

  function handleFocus() {
    // comportamento simples no foco (acessibilidade)
    const el = containerRef.current;
    if (!el) return;
    el.classList.add("pixel-card-focus");
  }

  function handleBlur() {
    const el = containerRef.current;
    if (!el) return;
    el.classList.remove("pixel-card-focus");
  }

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${variant} ${className}`}
      tabIndex={finalNoFocus ? -1 : 0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={finalNoFocus ? undefined : handleFocus}
      onBlur={finalNoFocus ? undefined : handleBlur}
      aria-label="Pixel card"
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      <div className="pixel-card-content">{children}</div>
    </div>
  );
}
