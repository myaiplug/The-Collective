import React from 'react';

interface LiquidVisualProps {
  imageSrc: string;
}

export const LiquidVisual: React.FC<LiquidVisualProps> = ({ imageSrc }) => {
  // Generate a random ID to ensure multiple instances don't conflict
  const filterId = React.useMemo(() => `liquid-filter-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded bg-black group">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId}>
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.02" 
              numOctaves="2" 
              result="warp" 
            >
              <animate 
                attributeName="baseFrequency" 
                dur="8s" 
                values="0.01 0.02; 0.015 0.03; 0.01 0.02" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="warp" 
              scale="30" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>
      
      {/* Base Image with Filter */}
      <div 
        className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-[3s] scale-105 group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          filter: `url(#${filterId})`,
        }}
      />
      
      {/* Clean Image Overlay (Optional: fades out to reveal liquid on hover, or mix-blend) */}
      {/* We keep the liquid always visible as requested for the 'moving syrup' effect */}

      {/* Gloss/Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50 pointer-events-none" />
    </div>
  );
};