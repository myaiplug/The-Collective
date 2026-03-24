import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, X, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { Product } from '../types';

interface GlobalPlayerProps {
  track: Product | null;
  onClose: () => void;
  autoPlay?: boolean;
}

export const GlobalPlayer: React.FC<GlobalPlayerProps> = ({ track, onClose, autoPlay = false }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (track && audioRef.current && autoPlay) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.warn("Auto-play prevented:", error.message || error);
            setIsPlaying(false);
          });
      }
    } else if (track && !autoPlay) {
      setIsPlaying(false);
    }
  }, [track, autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(err => console.error("Playback error:", err.message || err));
        }
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      setCurrentTime(formatTime(current));
      setDuration(formatTime(dur));
      if (dur) {
        setProgress((current / dur) * 100);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleError = () => {
    console.error("Audio playback error: Failed to load or play the audio source.");
    setIsPlaying(false);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    if (audioRef.current) {
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#050505]/95 border-t border-white/10 backdrop-blur-xl animate-in slide-in-from-bottom duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
      {track.audioPreview && (
        <audio 
          ref={audioRef} 
          src={track.audioPreview}
          onTimeUpdate={handleTimeUpdate} 
          onEnded={handleEnded}
          onError={handleError}
          preload="metadata"
        />
      )}
      
      {/* Interactive Progress Bar */}
      <div 
        className="w-full h-1 bg-neutral-900 cursor-pointer group relative" 
        onClick={handleSeek}
      >
        <div 
          className="h-full bg-accent-cyan relative transition-all duration-100 ease-linear" 
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(0,240,255,0.8)] scale-150" />
        </div>
        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-12 h-12 bg-neutral-800 border border-white/10 overflow-hidden hidden sm:block">
            <img src={track.image} alt="Cover" className="w-full h-full object-cover opacity-80" />
            {/* Playing Animation Overlay */}
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-[2px]">
                <div className="w-[3px] bg-accent-cyan audio-bar"></div>
                <div className="w-[3px] bg-accent-cyan audio-bar"></div>
                <div className="w-[3px] bg-accent-cyan audio-bar"></div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
             <h4 className="text-white font-display font-bold tracking-wide text-sm">{track.name}</h4>
             <span className="text-neutral-500 font-mono text-xs">PREVIEW MODE</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center justify-center w-1/3">
           <div className="flex items-center gap-6">
              <button className="text-neutral-500 hover:text-white transition-colors">
                 <SkipBack size={20} fill="currentColor" className="opacity-50" />
              </button>
              <button 
                onClick={togglePlay}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
              </button>
              <button className="text-neutral-500 hover:text-white transition-colors">
                 <SkipForward size={20} fill="currentColor" className="opacity-50" />
              </button>
           </div>
           <div className="mt-1 flex gap-2 font-mono text-[10px] text-neutral-600">
              <span>{currentTime}</span>
              <span className="opacity-30">/</span>
              <span>{duration}</span>
           </div>
        </div>

        {/* Volume / Actions */}
        <div className="flex items-center justify-end gap-6 w-1/3">
          <div className="hidden sm:flex items-center gap-2 group">
             <Volume2 size={16} className="text-neutral-500 group-hover:text-accent-cyan transition-colors" />
             <div className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-neutral-500 group-hover:bg-accent-cyan transition-colors"></div>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};