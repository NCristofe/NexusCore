// src/components/PixelCard.jsx
import { useEffect, useRef } from "react";
import "./PixelCard.css";

export default function PixelCard({
  variant = "default",
  noFocus = false,
  className = "",
  children,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const finalNoFocus = noFocus ?? false;
  const gsapRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    import("gsap")
      .then((mod) => {
        if (!mounted) return;
        gsapRef.current = mod.default || mod;
        const el = containerRef.current;
        if (el && gsapRef.current && gsapRef.current.to) {
          gsapRef.current.set(el, { opacity: 0, y: 8 });
          gsapRef.current.to(el, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
        } else if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      })
      .catch(() => {
        const el = containerRef.current;
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });

    return () => {
      mounted = false;
      if (gsapRef.current && gsapRef.current.killTweensOf) {
        const el = containerRef.current;
        if (el) gsapRef.current.killTweensOf(el);
      }
    };
  }, []);

  function handleMouseEnter() {
    const el = containerRef.current;
    if (!el) return;
    if (gsapRef.current && gsapRef.current.to) {
      gsapRef.current.to(el, { scale: 1.03, duration: 0.22, ease: "power1.out" });
    } else {
      el.classList.add("pixel-card-hover");
    }
  }

  function handleMouseLeave() {
    const el = containerRef.current;
    if (!el) return;
    if (gsapRef.current && gsapRef.current.to) {
      gsapRef.current.to(el, { scale: 1, duration: 0.22, ease: "power1.out" });
    } else {
      el.classList.remove("pixel-card-hover");
    }
  }

  function handleFocus() {
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
