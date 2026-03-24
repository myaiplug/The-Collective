import React from 'react';
import { X, ExternalLink, Shield } from 'lucide-react';

interface HalfScrewDemoProps {
  onClose?: () => void;
}

export const HalfScrewDemo: React.FC<HalfScrewDemoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
      <div className="relative w-full max-w-6xl h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden flex flex-col">
        
        {/* Browser-like Header */}
        <div className="bg-neutral-900/80 border-b border-white/10 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            
            <div className="bg-black/40 border border-white/5 rounded-md px-4 py-1.5 flex items-center gap-2 min-w-[300px]">
              <Shield size={12} className="text-green-500" />
              <span className="text-[10px] font-mono text-neutral-400 select-none tracking-tight">https://halfscrew.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://halfscrew.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-mono uppercase text-neutral-500 hover:text-white transition-colors"
            >
              Open in Browser <ExternalLink size={12} />
            </a>
            
            {onClose && (
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 w-full bg-white relative">
          <iframe 
            src="https://halfscrew.com" 
            className="w-full h-full border-none"
            title="HalfScrew Demo"
          />
          
          {/* Loading Overlay (Subtle) */}
          <div className="absolute inset-0 pointer-events-none bg-black/5 animate-pulse" />
        </div>

        {/* Footer Status */}
        <div className="bg-black border-t border-white/5 px-6 py-2 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Live_Demo_Active</span>
            </div>
          </div>
          <div className="text-[8px] font-mono text-neutral-700 uppercase tracking-widest">
            Protocol: HTTPS // Port: 443 // Latency: 24ms
          </div>
        </div>
      </div>
    </div>
  );
};
