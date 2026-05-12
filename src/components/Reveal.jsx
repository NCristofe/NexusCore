import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/* Styled wrapper with configurable delay token */
const RevealWrapper = styled.div`
  width: 100%;
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.65s ease, transform 0.65s ease;
  transition-delay: ${({ delay }) => delay || "0s"};

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Reveal component
   - Adds intersection observer to reveal children when visible
   - Respects reduced motion preference
   - Accepts delay as CSS time string (e.g., "0.2s") or number (ms)
*/
export default function Reveal({ children, delay = "0s" }) {
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* Normalize delay: allow number (ms) or string (CSS time) */
  const normalizedDelay =
    typeof delay === "number" ? `${Math.max(0, delay)}ms` : delay;

  useEffect(() => {
    if (!nodeRef.current) return;

    /* Respect user preference for reduced motion */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    let mounted = true;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!mounted) return;
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(nodeRef.current);

    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, []);

  return (
    <RevealWrapper
      ref={nodeRef}
      className={isVisible ? "is-visible" : ""}
      delay={normalizedDelay}
      aria-hidden={isVisible ? "false" : "true"}
    >
      {children}
    </RevealWrapper>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
