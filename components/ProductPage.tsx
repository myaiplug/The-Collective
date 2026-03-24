import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { ArrowLeft, Play, Download, Disc, Share2, AlertCircle, Eye, ShieldCheck, Zap, Check, X } from 'lucide-react';
import { LiquidVisual } from './media/LiquidVisual';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onPlay?: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onBack, onPlay }) => {
  // Simulate live viewer count for social proof
  const [viewerCount, setViewerCount] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(8, Math.min(24, prev + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-ui-bg animate-in fade-in duration-500">
      {/* Back Nav */}
      <div className="sticky top-[72px] z-30 bg-ui-bg/90 backdrop-blur border-b border-ui-border px-6 py-4 flex justify-between items-center">
         <button onClick={onBack} className="flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> BACK TO DROPS
         </button>
         
         {/* Urgency Badge in Header */}
         {product.scarcity && product.scarcity < 20 && (
           <div className="flex items-center gap-2 text-xs font-mono text-red-500 animate-pulse">
             <AlertCircle size={14} />
             <span>HIGH DEMAND: {product.scarcity} LEFT</span>
           </div>
         )}
      </div>

      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
           
           {/* Visual Area - Sweeping Gradient Background */}
           <div className="border-b lg:border-b-0 lg:border-r border-ui-border relative overflow-hidden flex items-center justify-center p-8 md:p-16">
              {/* Animated Sweeping Gradient Layer */}
              <div className="absolute inset-0 z-0 bg-[conic-gradient(from_225deg,at_50%_50%,#050505_0%,#1a0033_25%,#050505_50%,#1a0033_75%,#050505_100%)] animate-sweep opacity-60" />
              
              <div className="relative w-full max-w-lg aspect-square shadow-2xl z-10 lg:-translate-y-12">
                <LiquidVisual imageSrc={product.image} />
                
                {product.audioPreview && onPlay && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center gap-4">
                     <button 
                       onClick={onPlay}
                       className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-accent-cyan hover:text-black hover:border-accent-cyan transition-all group shadow-xl"
                     >
                        <Play fill="currentColor" size={18} />
                        <span className="font-display tracking-wider">PREVIEW</span>
                     </button>
                  </div>
                )}
              </div>
              
              {/* Background ambient glow & texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-purple/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
           </div>

           {/* Sales Copy Area */}
           <div className="p-8 md:p-16 flex flex-col justify-center">
              
              {/* Social Proof Header */}
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs mb-6">
                <Eye size={14} />
                <span>{viewerCount} producers are viewing this pack right now</span>
              </div>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                 {product.badges?.map(badge => (
                    <span key={badge} className="text-[10px] font-bold font-mono uppercase bg-accent-purple/10 text-accent-purple border border-accent-purple/20 px-2 py-1 tracking-wider rounded-sm">
                      {badge}
                    </span>
                 ))}
                 {product.tags?.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase border border-neutral-800 text-neutral-500 px-2 py-1 tracking-wider rounded-sm">{tag}</span>
                 ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-2 leading-none">{product.name}</h1>
              <div className="text-sm text-neutral-400 font-light mb-8 max-w-2xl space-y-1">
                {product.description?.split('. ').map((sentence, i) => (
                  <p key={i}>{sentence}{sentence.endsWith('.') ? '' : '.'}</p>
                ))}
              </div>
              
              {product.quote && (
                <div className="mb-8 border-l-2 border-accent-cyan pl-6 py-2 italic text-neutral-300 font-serif text-lg">
                  {product.quote}
                </div>
              )}

              {product.benefits && (
                <div className="mb-8 grid grid-cols-1 gap-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-neutral-300">
                      <Zap size={18} className="text-accent-cyan shrink-0 mt-1" />
                      <p className="text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Price & Scarcity */}
              <div className="bg-ui-card border border-ui-border p-6 rounded mb-8">
                 <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-xs font-mono text-neutral-500 mb-1">ONE-TIME PURCHASE</span>
                      <p className="text-4xl font-mono text-white">${product.price}</p>
                    </div>
                    {product.scarcity && (
                      <div className="text-right">
                         <span className="text-xs font-mono text-red-500 block mb-1">ALMOST GONE</span>
                         <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-red-500"></div>
                         </div>
                      </div>
                    )}
                 </div>
                 
                 <div className="grid grid-cols-1 gap-3 mb-4">
                   <Button size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                     GET INSTANT ACCESS
                   </Button>
                   {product.audioPreview && (
                      <a href={product.audioPreview} download target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button variant="outline" size="lg" className="w-full border-dashed opacity-80 hover:opacity-100 hover:border-accent-cyan hover:text-accent-cyan">
                           <Download size={16} className="mr-2" />
                           DOWNLOAD FREE DEMO MP3
                        </Button>
                      </a>
                   )}
                 </div>
                 
                 <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 font-mono">
                   <span className="flex items-center gap-1"><Zap size={12}/> Instant Download</span>
                   <span className="flex items-center gap-1"><ShieldCheck size={12}/> Royalty Free</span>
                 </div>
              </div>

              {product.license && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 bg-neutral-900/50 border border-ui-border rounded">
                  <div>
                    <h4 className="text-xs font-bold text-accent-cyan mb-4 uppercase tracking-widest font-mono">The License: YES</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                      {product.license.yes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={12} className="text-green-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-500 mb-4 uppercase tracking-widest font-mono">The License: NO</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                      {product.license.no.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <X size={12} className="text-red-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-8 pt-4">
                 <div>
                    <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wide font-display border-b border-ui-border pb-2">Technical Specs</h4>
                    <ul className="text-sm text-neutral-400 space-y-3 font-mono grid grid-cols-1 md:grid-cols-2 gap-x-8">
                       {product.specs?.split(' • ').map((spec, i) => (
                         <li key={i} className="flex items-center gap-3"><Disc size={14} className="text-accent-cyan shrink-0"/> {spec}</li>
                       ))}
                       {!product.specs && (
                         <>
                           <li className="flex items-center gap-3"><Disc size={14} className="text-accent-cyan"/> 100% Royalty Free</li>
                           <li className="flex items-center gap-3"><Download size={14} className="text-accent-cyan"/> 24-bit / 48kHz WAV</li>
                           <li className="flex items-center gap-3"><Zap size={14} className="text-accent-cyan"/> Compatible with All DAWs</li>
                         </>
                       )}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};