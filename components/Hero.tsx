import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import { CASSETTES } from '../constants';
import { Product } from '../types';

interface HeroProps {
  onOpenProduct?: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProduct }) => {
  const purpleAckt = CASSETTES.find(c => c.id === 'pack-purple');

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto border-b border-ui-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full py-20">
        
        {/* Left Column (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-center z-10">
          <span className="font-mono text-accent-cyan text-xs tracking-[0.2em] mb-4">THE BEAT MOB COLLECTIVE</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
            CREATIVE<br/>
            CULTURE,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">ENGINEERED</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-sans font-light leading-relaxed max-w-md mb-8">
            Premium tools, limited cassette drops, and producer essentials designed for the modern studio.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="group" onClick={() => purpleAckt && onOpenProduct?.(purpleAckt)}>
              SHOP DROPS 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              const element = document.getElementById('tools');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              VIEW TOOLS
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-ui-border pt-8 mt-auto">
            {["One-time licenses", "Instant delivery", "Print-on-demand"].map((text) => (
              <div key={text} className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <div className="w-1 h-1 bg-accent-cyan rounded-full" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (7 cols) - Visual */}
        <div className="md:col-span-7 relative flex items-center justify-center">
          {/* Abstract background glow */}
          <div className="absolute w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Cassette Visual Construction */}
          <div className="relative w-full max-w-lg aspect-square md:aspect-auto md:h-[600px] overflow-hidden group transition-all duration-500">
             {/* Main Graphic Layer */}
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img 
                  src="https://public-files.gumroad.com/1wqxiqvan1bl0e9wjzzgvtfshea3" 
                  alt="PURPLE ACKT Limited Edition" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Default Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent backdrop-blur-[2px] group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-end justify-between">
                        <div>
                            <h3 className="font-display text-4xl tracking-widest text-white mb-1">PURPLE ACKT</h3>
                            <p className="font-mono text-xs text-accent-cyan tracking-[0.3em] uppercase">LIMITED EDITION BATCH</p>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 text-right">
                            <div className="mb-1">SERIAL_NO</div>
                            <div className="text-white">#001-050</div>
                        </div>
                    </div>
                </div>

                {/* Hover Info Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                    <div className="w-full max-w-xs">
                        <div className="inline-block px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-[10px] font-mono tracking-widest uppercase mb-4 border border-accent-cyan/30">
                            PRODUCER ESSENTIALS
                        </div>
                        <h3 className="font-display text-5xl text-white mb-2 tracking-tighter uppercase">Purple ACKT</h3>
                        <p className="text-neutral-300 text-sm font-sans mb-6 leading-relaxed">
                            20 Exclusive Instrumentals. Original compositions—no recycled loops. Multi-genre versatility from West Coast Bounce to Dark Cinematic.
                        </p>
                        <div className="flex flex-col gap-4 items-center">
                            <div className="flex items-center gap-4 text-xs font-mono text-accent-cyan uppercase tracking-widest">
                                <span>20 Beats</span>
                                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                                <span>Full Stems</span>
                                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                                <span>Royalty Free</span>
                            </div>
                            <div className="text-5xl font-display font-bold text-white mt-2">$19.99</div>
                            <Button 
                              className="w-full mt-4 bg-white text-black hover:bg-accent-cyan hover:text-black transition-all group/btn"
                              onClick={() => purpleAckt && onOpenProduct?.(purpleAckt)}
                            >
                                DOWNLOAD NOW <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
             </div>

             {/* Reflection Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
