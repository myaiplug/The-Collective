import React from 'react';
import { Button } from './ui/Button';

export const Newsletter: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 border-t border-ui-border">
      <div className="max-w-2xl mx-auto text-center bg-ui-card border border-ui-border p-12 relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20"></div>

        <h2 className="text-3xl font-display font-bold tracking-tight mb-2">DROP ALERTS</h2>
        <p className="text-neutral-400 mb-8 font-light">Be first when cassette colors change. No spam.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="producer@studio.com" 
            className="flex-1 bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan placeholder:text-neutral-700 font-mono"
          />
          <Button type="submit">GET ALERTS</Button>
        </form>
      </div>
    </section>
  );
};