import React from 'react';

interface GlossSweepProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  triggerOnHover?: boolean;
}

export const GlossSweep: React.FC<GlossSweepProps> = ({
  children,
  className = '',
  intensity = 'medium',
  triggerOnHover = true,
}) => {
  const getGradient = () => {
    switch (intensity) {
      case 'subtle':
        return 'linear-gradient(115deg, transparent 0%, transparent 40%, rgba(223, 202, 149, 0.12) 50%, rgba(255, 255, 255, 0.2) 52%, rgba(223, 202, 149, 0.12) 54%, transparent 64%, transparent 100%)';
      case 'vibrant':
        return 'linear-gradient(115deg, transparent 0%, transparent 30%, rgba(223, 202, 149, 0.28) 48%, rgba(255, 255, 255, 0.45) 51%, rgba(223, 202, 149, 0.28) 54%, transparent 70%, transparent 100%)';
      case 'medium':
      default:
        return 'linear-gradient(115deg, transparent 0%, transparent 35%, rgba(223, 202, 149, 0.2) 49%, rgba(255, 255, 255, 0.32) 51%, rgba(223, 202, 149, 0.2) 53%, transparent 67%, transparent 100%)';
    }
  };

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
    >
      {children}
      <div
        className={`absolute inset-0 pointer-events-none transition-transform duration-1000 ease-out z-20 ${
          triggerOnHover
            ? 'transform -translate-x-[160%] skew-x-[-22deg] group-hover:translate-x-[160%]'
            : 'animate-gloss-sweep'
        }`}
        style={{
          background: getGradient(),
        }}
        aria-hidden="true"
      />
    </div>
  );
};
