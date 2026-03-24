import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CRTVideoProps {
  videoId: string;
  label?: string;
}

export const CRTVideo: React.FC<CRTVideoProps> = ({ videoId, label = "SIGNAL_SOURCE_01" }) => {
  const [isAdMoved, setIsAdMoved] = useState(false);
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAdMoved(true);
    }, 4000); // Move after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {/* Monitor Casing */}
      <div className="relative w-full aspect-video bg-black border-2 border-neutral-800 rounded-sm overflow-hidden group">
        
        {/* The Embed */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 contrast-125 saturate-100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* CRT Scanline Overlay (Pointer events none allows clicking video) */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
        
        {/* Vignette & CRT Curve Illusion */}
        <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />

        {/* HUD Elements */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]" />
          <span className="font-mono text-[10px] text-red-500 tracking-widest">REC</span>
        </div>

        <div className="absolute top-4 right-4 z-30 font-mono text-[10px] text-white/50 tracking-widest">
          {label}
        </div>

        {/* Upsale Ad */}
        {showAd && (
          <div 
            className={`absolute z-40 transition-all duration-1000 ease-in-out p-3 bg-accent-cyan text-black font-mono text-[10px] font-bold shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-white/20 flex flex-col items-center justify-center text-center
              ${isAdMoved 
                ? 'bottom-16 right-4 w-20 h-20 scale-90' 
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32'
              }`}
          >
            <button 
              onClick={() => setShowAd(false)}
              className="absolute top-1 right-1 hover:scale-110 transition-transform p-1"
            >
              <X size={12} />
            </button>
            <span className="uppercase text-[8px] mb-1 opacity-80">Limited Drop</span>
            <span className="text-2xl leading-none mb-1">$5</span>
            <span className="text-[7px] leading-tight opacity-90">UNLOCK ALL<br/>STEMS</span>
          </div>
        )}

        {/* Technical Crosshairs */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[1px] bg-white/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/50"></div>
        </div>

        {/* Bottom Data Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-white/10 p-2 flex justify-between items-center z-30">
           <div className="flex gap-4 font-mono text-[10px] text-accent-cyan">
              <span>FPS: 60</span>
              <span>BITRATE: 4800kbps</span>
           </div>
           <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-accent-cyan' : 'bg-neutral-800'}`} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};