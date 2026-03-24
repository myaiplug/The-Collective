import React, { useState } from 'react';
import { Play, Pause, ExternalLink, BarChart3, Disc } from 'lucide-react';
import { Product } from '../../types';

interface SpotifyDeckProps {
  onPlay?: (track: Product) => void;
  currentTrackId?: string;
}

const MOCK_PLAYLIST: Partial<Product>[] = [
  { id: 'track-1', name: "Night Walk", artist: "Wireframe Audio", specs: "2:45", tags: ["88 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3", image: "https://picsum.photos/seed/track1/200/200" },
  { id: 'track-2', name: "Analog Systems", artist: "Beat Mob", specs: "3:12", tags: ["92 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/03/24/audio_3489437b42.mp3", image: "https://picsum.photos/seed/track2/200/200" },
  { id: 'track-3', name: "Cyber District", artist: "Ceasa Matic", specs: "2:58", tags: ["140 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3", image: "https://picsum.photos/seed/track3/200/200" },
  { id: 'track-4', name: "Tape Deck Logic", artist: "Producer X", specs: "3:30", tags: ["85 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/10/14/audio_982b6831fd.mp3", image: "https://picsum.photos/seed/track4/200/200" },
  { id: 'track-5', name: "Glitch Theory", artist: "bTHIRTYthreezy", specs: "2:20", tags: ["174 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/10/14/audio_982b6831fd.mp3", image: "https://picsum.photos/seed/track5/200/200" },
  { id: 'track-6', name: "Neon Drift", artist: "Wireframe", specs: "4:15", tags: ["128 BPM"], audioPreview: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3", image: "https://picsum.photos/seed/track6/200/200" },
];

export const SpotifyDeck: React.FC<SpotifyDeckProps> = ({ onPlay, currentTrackId }) => {
  return (
    <div className="w-full h-full bg-ui-card border border-ui-border flex flex-col relative overflow-hidden group">
      {/* Decorative Header */}
      <div className="bg-neutral-900/80 backdrop-blur border-b border-ui-border p-3 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent-purple rounded-full shadow-[0_0_10px_#7000ff] animate-pulse" />
            <h3 className="font-mono text-[10px] text-accent-purple tracking-[0.2em] uppercase">Frequency_Log // INTERNAL_FEED</h3>
        </div>
        <div className="flex gap-2">
           <div className="w-1 h-3 bg-accent-purple/40"></div>
           <div className="w-1 h-3 bg-accent-purple/20"></div>
        </div>
      </div>

      {/* Playlist Grid - Scrollable */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pb-[21px] space-y-[9px] bg-black/20">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 text-[10px] font-mono text-neutral-600 mb-2 px-2 uppercase tracking-wider sticky top-0 bg-ui-card/95 py-1 z-10">
           <div className="col-span-1">ST</div>
           <div className="col-span-5">IDENTIFIER</div>
           <div className="col-span-3">ARTIST</div>
           <div className="col-span-2 text-right">BPM</div>
           <div className="col-span-1 text-right">TIME</div>
        </div>

        {/* Tracks */}
        {MOCK_PLAYLIST.map((track, idx) => {
            const isActive = currentTrackId === track.id;
            return (
                <div 
                  key={track.id}
                  onClick={() => onPlay && onPlay(track as Product)}
                  className={`group grid grid-cols-12 gap-2 items-center p-2 rounded-sm cursor-pointer transition-all duration-200 border border-transparent ${
                      isActive 
                      ? 'bg-accent-purple/20 border-accent-purple/40 shadow-[inset_0_0_20px_rgba(112,0,255,0.1)]' 
                      : 'hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                    <div className="col-span-1 flex items-center justify-center">
                        {isActive ? (
                            <div className="flex items-end gap-[1px] h-3">
                               <div className="w-1 bg-accent-purple audio-bar h-full"></div>
                               <div className="w-1 bg-accent-purple audio-bar h-1/2"></div>
                               <div className="w-1 bg-accent-purple audio-bar h-2/3"></div>
                            </div>
                        ) : (
                            <span className="text-[10px] font-mono text-neutral-600 group-hover:text-accent-purple transition-colors">
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                        )}
                    </div>
                    <div className={`col-span-5 flex items-center gap-3 font-sans text-sm font-medium truncate ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                        <div className="w-8 h-8 bg-neutral-800 rounded-sm overflow-hidden shrink-0 border border-white/5">
                           <img 
                              src={track.image} 
                              alt="" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                           />
                        </div>
                        <span className="truncate">{track.name}</span>
                    </div>
                    <div className="col-span-3 font-mono text-[10px] text-neutral-500 group-hover:text-neutral-400 truncate">
                        {track.artist}
                    </div>
                    <div className="col-span-2 text-right font-mono text-[10px] text-neutral-600">
                        {track.tags?.[0].split(' ')[0]}
                    </div>
                    <div className="col-span-1 text-right font-mono text-[10px] text-neutral-600">
                        {track.specs}
                    </div>
                </div>
            )
        })}
      </div>

      {/* Footer Controls / Action */}
      <div className="border-t border-ui-border p-3 bg-neutral-900/50 flex justify-between items-center shrink-0">
         <div className="flex gap-4 items-center">
            <button className="text-neutral-500 hover:text-accent-purple transition-colors">
               <Play size={14} fill="currentColor" />
            </button>
            <div className="h-3 w-[1px] bg-neutral-800" />
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-ping" />
               <span className="font-mono text-[9px] text-neutral-500 tracking-tighter uppercase">
                 Sync_Active
               </span>
            </div>
         </div>
         <a 
            href="https://spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[9px] font-mono uppercase text-neutral-500 hover:text-white transition-colors"
         >
            External_Node <ExternalLink size={10} />
         </a>
      </div>
      
      {/* Gloss Overlay */}
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      {/* Scanline subtle overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
    </div>
  );
};