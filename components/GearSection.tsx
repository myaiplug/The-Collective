import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { GEAR } from '../constants';

export const GearSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="studio-gear" 
      title="STUDIO ESSENTIALS" 
      subtitle="Curated hardware and setup upgrades."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {GEAR.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center group">
            <div className="w-full aspect-square bg-neutral-900 border border-ui-border mb-6 p-8 flex items-center justify-center hover:border-white/30 transition-colors rounded-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 saturate-[0.6] group-hover:saturate-[1.6] group-hover:contrast-[1.1]" 
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-display text-lg tracking-wide text-white mb-1">{item.name}</h4>
            <p className="text-neutral-500 text-sm mb-3">{item.description}</p>
            <span className="font-mono text-sm border-b border-transparent group-hover:border-accent-cyan text-white pb-0.5 transition-colors">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-[10px] uppercase font-mono text-neutral-600 mt-12 tracking-widest">
        * Items ship separately from cassette orders
      </p>
    </SectionWrapper>
  );
};