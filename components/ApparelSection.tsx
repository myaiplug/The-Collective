import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { APPAREL } from '../constants';

export const ApparelSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="apparel" 
      title="APPAREL" 
      subtitle="Uniform for the studio."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {APPAREL.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-neutral-900 mb-4 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 saturate-[0.6] group-hover:saturate-[1.5] group-hover:contrast-[1.1]" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-sans font-medium text-white group-hover:text-accent-cyan transition-colors">{item.name}</h4>
              <span className="text-xs font-mono text-neutral-500 mt-1">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bundle Banner */}
      <div className="mt-16 border-t border-b border-ui-border py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display font-bold text-xl uppercase tracking-widest">Studio Bundle</h4>
          <p className="text-neutral-500 text-sm">Get the hoodie and tee for 15% off.</p>
        </div>
        <button className="text-xs font-mono uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
          Shop Bundle
        </button>
      </div>
    </SectionWrapper>
  );
};