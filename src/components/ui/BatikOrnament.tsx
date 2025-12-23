/**
 * Batik Ornament Component
 * 
 * A subtle, elegant batik-inspired decorative pattern
 * for use on white/neutral backgrounds.
 * 
 * Usage:
 *   <BatikOrnament position="top-right" />
 *   <BatikOrnament position="bottom-left" opacity={0.03} />
 */

import React from "react";

interface BatikOrnamentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  className?: string;
  opacity?: number;
  size?: "sm" | "md" | "lg" | "xl";
}

const BatikOrnament: React.FC<BatikOrnamentProps> = ({
  position = "top-right",
  className = "",
  opacity = 0.04,
  size = "lg",
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-72 h-72",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${sizeClasses[size]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Kawung Pattern - Classic Javanese Batik Motif */}
        <g fill="currentColor" className="text-primary">
          {/* Central flower */}
          <ellipse cx="200" cy="200" rx="30" ry="45" />
          <ellipse cx="200" cy="200" rx="45" ry="30" />
          <circle cx="200" cy="200" r="15" />

          {/* Top */}
          <ellipse cx="200" cy="100" rx="25" ry="40" />
          <ellipse cx="200" cy="100" rx="40" ry="25" />
          <circle cx="200" cy="100" r="12" />

          {/* Bottom */}
          <ellipse cx="200" cy="300" rx="25" ry="40" />
          <ellipse cx="200" cy="300" rx="40" ry="25" />
          <circle cx="200" cy="300" r="12" />

          {/* Left */}
          <ellipse cx="100" cy="200" rx="25" ry="40" />
          <ellipse cx="100" cy="200" rx="40" ry="25" />
          <circle cx="100" cy="200" r="12" />

          {/* Right */}
          <ellipse cx="300" cy="200" rx="25" ry="40" />
          <ellipse cx="300" cy="200" rx="40" ry="25" />
          <circle cx="300" cy="200" r="12" />

          {/* Diagonal top-left */}
          <ellipse cx="130" cy="130" rx="20" ry="32" transform="rotate(-45 130 130)" />
          <ellipse cx="130" cy="130" rx="32" ry="20" transform="rotate(-45 130 130)" />
          <circle cx="130" cy="130" r="10" />

          {/* Diagonal top-right */}
          <ellipse cx="270" cy="130" rx="20" ry="32" transform="rotate(45 270 130)" />
          <ellipse cx="270" cy="130" rx="32" ry="20" transform="rotate(45 270 130)" />
          <circle cx="270" cy="130" r="10" />

          {/* Diagonal bottom-left */}
          <ellipse cx="130" cy="270" rx="20" ry="32" transform="rotate(45 130 270)" />
          <ellipse cx="130" cy="270" rx="32" ry="20" transform="rotate(45 130 270)" />
          <circle cx="130" cy="270" r="10" />

          {/* Diagonal bottom-right */}
          <ellipse cx="270" cy="270" rx="20" ry="32" transform="rotate(-45 270 270)" />
          <ellipse cx="270" cy="270" rx="32" ry="20" transform="rotate(-45 270 270)" />
          <circle cx="270" cy="270" r="10" />

          {/* Outer decorative dots */}
          <circle cx="50" cy="50" r="8" />
          <circle cx="350" cy="50" r="8" />
          <circle cx="50" cy="350" r="8" />
          <circle cx="350" cy="350" r="8" />
          <circle cx="50" cy="200" r="6" />
          <circle cx="350" cy="200" r="6" />
          <circle cx="200" cy="50" r="6" />
          <circle cx="200" cy="350" r="6" />
        </g>
      </svg>
    </div>
  );
};

export default BatikOrnament;
