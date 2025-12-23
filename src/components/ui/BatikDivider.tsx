/**
 * Batik Divider Component
 * 
 * A decorative horizontal divider with batik-inspired pattern.
 * Use between sections for elegant visual separation.
 */

import React from "react";

interface BatikDividerProps {
  className?: string;
}

const BatikDivider: React.FC<BatikDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <svg
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-5 text-primary/20"
      >
        {/* Left line */}
        <line x1="0" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="1" />
        
        {/* Center ornament */}
        <circle cx="85" cy="10" r="4" fill="currentColor" />
        <circle cx="100" cy="10" r="6" fill="currentColor" />
        <circle cx="115" cy="10" r="4" fill="currentColor" />
        
        {/* Right line */}
        <line x1="130" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default BatikDivider;
