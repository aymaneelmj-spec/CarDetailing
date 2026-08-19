import React from 'react';

interface BeadRollProps {
  className?: string;
  delay?: number;
}

export const BeadRoll: React.FC<BeadRollProps> = ({
  className = '',
  delay = 0,
}) => {
  return (
    <div
      className={`pointer-events-none absolute z-10 ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div className="relative animate-bead-roll">
        {/* Main 3D refraction bead */}
        <div className="w-3.5 h-4.5 rounded-[50%_50%_45%_45%] bg-radial from-white via-[#C6A664]/30 to-[#24352C]/90 shadow-[0_4px_12px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(255,255,255,0.7)] border border-white/40 backdrop-blur-xs">
          {/* Specular pinpoint highlight */}
          <div className="absolute top-1 left-1 w-1 h-1.5 bg-white rounded-full opacity-90" />
        </div>
        {/* Micro moisture trail behind the bead */}
        <div className="absolute -top-6 left-1.5 w-0.5 h-6 bg-gradient-to-t from-white/30 to-transparent opacity-60" />
      </div>
    </div>
  );
};
