import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { TOOLS } from '../constants';
import { Button } from './ui/Button';
import { Activity, Sliders, Cpu, Mic, ExternalLink, Zap } from 'lucide-react';

interface ToolsSectionProps {
  onOpenDemo?: (tool: any) => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ onOpenDemo }) => {
  const getIcon = (name: string) => {
    if (name.includes('Stem')) return <Activity className="text-accent-cyan" />;
    if (name.includes('Screw')) return <Sliders className="text-accent-purple" />;
    if (name.includes('Meta')) return <Cpu className="text-white" />;
    if (name.includes('Reverb')) return <Zap className="text-accent-cyan" />;
    if (name.includes('HalfScrew')) return <Zap className="text-accent-purple" />;
    return <Mic className="text-neutral-400" />;
  };

  const handleToolAction = (tool: any) => {
    if (tool.demo && onOpenDemo) {
      onOpenDemo(tool);
    }
  };

  return (
    <SectionWrapper 
      id="tools" 
      title="STUDIO TOOLS" 
      subtitle="Offline-first workflows built for speed."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOLS.map((tool) => (
          <div 
            key={tool.id} 
            onClick={() => handleToolAction(tool)}
            className={`bg-ui-card border border-ui-border p-8 flex flex-col justify-between min-h-[280px] hover:border-white/30 transition-all duration-300 group relative overflow-hidden ${tool.demo ? 'cursor-pointer' : ''}`}
          >
            
            {/* Vivid Background Image Transition */}
            {tool.image && (
              <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
                <img 
                  src={tool.image} 
                  alt="" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 saturate-[0.6] group-hover:saturate-[1.8] group-hover:contrast-[1.1]" 
                  referrerPolicy="no-referrer"
                />
                {/* Fade-out mask to blend with black card */}
                <div className="absolute inset-0 bg-gradient-to-r from-ui-card via-ui-card/40 to-transparent" />
              </div>
            )}

            {/* Background Tech Decoration (Waveform) */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity z-10">
               <div className="flex items-end gap-1 h-12">
                 {[...Array(8)].map((_, i) => (
                   <div 
                    key={i} 
                    className="w-1 bg-white" 
                    style={{ 
                      height: `${20 + Math.random() * 80}%`,
                      transition: 'height 0.5s ease-in-out'
                    }} 
                   />
                 ))}
               </div>
            </div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black/40 backdrop-blur-sm border border-white/5 rounded">
                  {getIcon(tool.name)}
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-white transition-colors">
                  {tool.name}
                </h3>
                {tool.demo && (
                  <span className="text-[8px] font-mono bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 px-2 py-0.5 rounded-full animate-pulse">
                    DEMO AVAILABLE
                  </span>
                )}
              </div>
              
              <p className="text-neutral-400 font-sans mb-6 text-sm border-l-2 border-neutral-800 pl-4 max-w-[60%] group-hover:text-neutral-300 transition-colors">
                {tool.description}
              </p>

              <ul className="space-y-2 mb-8">
                {tool.features?.map(feature => (
                  <li key={feature} className="text-xs font-mono text-neutral-500 flex items-center gap-2 group-hover:text-neutral-400">
                    <span className="w-1 h-1 bg-accent-cyan/40 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-20">
               <div className="flex flex-col">
                 <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">LifeTime License</span>
                 <span className="font-mono text-white text-lg">${tool.price}</span>
               </div>
               <Button 
                variant="secondary" 
                size="sm" 
                className="group/btn"
                onClick={(e) => {
                  if (tool.demo) {
                    e.stopPropagation();
                    handleToolAction(tool);
                  }
                }}
               >
                  {tool.demo ? 'TRY DEMO' : 'GET TOOL'}
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
               </Button>
            </div>

            {/* Subtle gloss overlay on card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
