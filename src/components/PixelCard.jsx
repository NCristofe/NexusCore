
import { useRef } from "react";
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

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${variant} ${className}`}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
}
