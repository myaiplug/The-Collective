import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { CRTVideo } from './media/CRTVideo';
import { SpotifyDeck } from './media/SpotifyDeck';
import { Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaSectionProps {
  onPlay?: (track: Product) => void;
  currentTrackId?: string;
}

const VIDEOS = [
  { id: 'bNnTFM8oe1s', label: 'STUDIO_DROP_01' },
  { id: 'WSKDE7qMZaQ', label: 'STUDIO_DROP_02' },
  { id: 'L1S5EtrCfzE', label: 'STUDIO_DROP_03' },
  { id: '9tc7qciUGOw', label: 'STUDIO_DROP_04' },
  { id: 'pFASSrH9Tq4', label: 'STUDIO_DROP_05' },
  { id: 'NEBS-2HbfwM', label: 'STUDIO_DROP_06' },
  { id: 'mOh4njLzVW0', label: 'STUDIO_DROP_07' },
  { id: 'KdfV3h-GU7k', label: 'STUDIO_DROP_08' },
];

export const MediaSection: React.FC<MediaSectionProps> = ({ onPlay, currentTrackId }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <SectionWrapper 
      id="media" 
      title="TRANSMISSION" 
      subtitle="Visual feeds and curated frequencies."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left: Spotify GUI */}
        <div className="lg:col-span-5 flex flex-col">
           <div className="flex items-end justify-between border-b border-ui-border pb-2 mb-4 shrink-0">
              <h4 className="font-display font-bold text-xl text-white">PLAYLIST_LOG_01</h4>
              <span className="font-mono text-[10px] text-accent-purple animate-pulse">LIVE LINK ACTIVE</span>
           </div>
           
           <div className="flex-1 min-h-[475px]">
              <SpotifyDeck onPlay={onPlay} currentTrackId={currentTrackId} />
           </div>
           
           {/* Decorative Specs */}
           <div className="grid grid-cols-3 gap-4 pt-4 mt-8 shrink-0 border-t border-ui-border/50">
              <div>
                 <div className="text-[10px] font-mono text-neutral-600 mb-1">TOTAL TIME</div>
                 <div className="text-lg font-display text-white">45:20</div>
              </div>
              <div>
                 <div className="text-[10px] font-mono text-neutral-600 mb-1">GENRE</div>
                 <div className="text-lg font-display text-white tracking-widest uppercase text-sm">Downtempo</div>
              </div>
              <div>
                 <div className="text-[10px] font-mono text-neutral-600 mb-1">FORMAT</div>
                 <div className="text-lg font-display text-white">FLAC/WAV</div>
              </div>
           </div>
        </div>

        {/* Right: YouTube GUI */}
        <div className="lg:col-span-7 flex flex-col">
           <div className="flex items-end justify-between border-b border-ui-border pb-2 mb-4 shrink-0">
              <div className="flex items-center gap-4">
                <h4 className="font-display font-bold text-xl text-white">VISUAL_FEED</h4>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                  <button 
                    onClick={prevVideo}
                    className="p-1 hover:text-accent-cyan transition-colors"
                    aria-label="Previous video"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span className="font-mono text-[9px] text-neutral-500">
                    {currentVideoIndex + 1} / {VIDEOS.length}
                  </span>
                  <button 
                    onClick={nextVideo}
                    className="p-1 hover:text-accent-cyan transition-colors"
                    aria-label="Next video"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <span className="font-mono text-[10px] text-accent-cyan uppercase">Signal_Strength: 98%</span>
           </div>
           
           <div className="flex-1">
              <div className="h-full">
                <CRTVideo 
                  videoId={VIDEOS[currentVideoIndex].id} 
                  label={VIDEOS[currentVideoIndex].label} 
                />
              </div>
            </div>
            
            {/* Additional tech noise */}
            <div className="font-mono text-[9px] text-neutral-700 mt-8 flex justify-between items-center border-t border-ui-border/30 pt-4 shrink-0">
               <div className="flex gap-4">
                  <span>ERR_04: PACKET_LOSS_DETECTED</span>
                  <span className="text-neutral-500">BUFFER: 1024KB</span>
               </div>
               <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`w-1 h-2 ${Math.random() > 0.3 ? 'bg-accent-cyan/20' : 'bg-red-500/40'}`}></div>
                  ))}
               </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
