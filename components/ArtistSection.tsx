import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { ARTISTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const ArtistSection: React.FC = () => {
  return (
    <SectionWrapper id="artists" title="ARTIST CAPSULES">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ui-border divide-y md:divide-y-0 md:divide-x divide-ui-border bg-ui-card">
        {ARTISTS.map((artist) => (
          <div key={artist.id} className="group relative p-8 h-64 flex flex-col justify-between hover:bg-neutral-900 transition-colors cursor-pointer overflow-hidden">
             {/* Background Image on Hover */}
             <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               <img src={artist.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
             </div>

             <div className="relative z-10">
               <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-display font-bold text-xl mb-4 rounded-full">
                 {artist.name.charAt(0)}
               </div>
               <h3 className="font-display font-bold text-2xl uppercase tracking-wide">{artist.name}</h3>
               <p className="text-neutral-500 text-sm font-mono mt-2">{artist.tagline}</p>
             </div>
             
             <div className="relative z-10 flex justify-end">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:text-accent-cyan transition-colors">
                  Enter Capsule <ArrowUpRight size={14} />
                </span>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};