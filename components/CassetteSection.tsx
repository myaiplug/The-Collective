import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { CASSETTES } from '../constants';
import { Button } from './ui/Button';
import { Play, Download } from 'lucide-react';
import { Product } from '../types';

interface CassetteSectionProps {
  onOpenProduct: (product: Product) => void;
  onPlay?: (product: Product) => void;
}

export const CassetteSection: React.FC<CassetteSectionProps> = ({ onOpenProduct, onPlay }) => {
  return (
    <SectionWrapper 
      id="cassettes" 
      title="FEATURED DROPS" 
      action={<a href="#" className="text-xs font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-wider underline underline-offset-4">View All Archives</a>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CASSETTES.map((cassette) => (
          <div 
            key={cassette.id} 
            className={`group relative bg-ui-card border border-ui-border transition-all duration-300 ${
              cassette.isLocked 
                ? 'opacity-70 grayscale cursor-not-allowed' 
                : 'hover:border-accent-cyan/50 hover:-translate-y-1'
            }`}
          >
            {/* Image Area */}
            <div className="relative aspect-square overflow-hidden bg-neutral-900 border-b border-ui-border">
              <img 
                src={cassette.image} 
                alt={cassette.name} 
                className={`w-full h-full object-cover transition-all duration-700 ${
                  cassette.isLocked 
                    ? 'opacity-40 grayscale blur-[2px]' 
                    : 'opacity-90 group-hover:opacity-100 scale-125 group-hover:scale-100 saturate-[0.7] group-hover:saturate-[1.8] group-hover:contrast-[1.1]'
                }`} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-xs font-mono px-2 py-1 border border-white/10 z-10">
                {cassette.isLocked ? 'LOCKED' : cassette.specs}
              </div>
              
              {/* Overlay Play Button */}
              {onPlay && cassette.audioPreview && !cassette.isLocked && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-4">
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       onPlay(cassette);
                     }}
                     className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-accent-cyan hover:text-black hover:border-accent-cyan hover:scale-110 transition-all shadow-xl"
                   >
                      <Play fill="currentColor" className="ml-1" size={24} />
                   </button>
                </div>
              )}

              {/* Locked Icon Overlay */}
              {cassette.isLocked && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-black/60 backdrop-blur-sm border border-white/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                </div>
              )}
            </div>
            
            {/* Info Area */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={cassette.isLocked ? 'blur-[3px] select-none' : ''}>
                  <h3 className="text-xl font-display font-bold tracking-wide text-white mb-1 group-hover:text-accent-cyan transition-colors">{cassette.name}</h3>
                  <div className="flex gap-2">
                    {cassette.tags?.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-mono text-neutral-500 border border-neutral-800 px-1 rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className={`font-mono text-lg text-white ${cassette.isLocked ? 'blur-[3px] select-none' : ''}`}>
                  ${cassette.price}
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className={`flex-1 ${cassette.isLocked ? 'opacity-50 cursor-not-allowed' : 'group-hover:bg-white group-hover:text-black'}`}
                  onClick={() => !cassette.isLocked && onOpenProduct(cassette)}
                  disabled={cassette.isLocked}
                >
                  {cassette.isLocked ? 'LOCKED' : 'OPEN DROP'}
                </Button>
                {cassette.audioPreview && !cassette.isLocked && (
                  <a 
                    href={cassette.audioPreview} 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Download Demo MP3"
                  >
                    <Button variant="outline" className="px-3 hover:text-accent-cyan hover:border-accent-cyan">
                      <Download size={18} />
                    </Button>
                  </a>
                )}
              </div>
            </div>
            
            {/* Glow Effect on Hover */}
            {!cassette.isLocked && (
              <div className="absolute inset-0 pointer-events-none shadow-[0_0_30px_rgba(0,240,255,0)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-shadow duration-300" />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};