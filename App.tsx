import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CassetteSection } from './components/CassetteSection';
import { ToolsSection } from './components/ToolsSection';
import { ApparelSection } from './components/ApparelSection';
import { ArtistSection } from './components/ArtistSection';
import { MediaSection } from './components/MediaSection';
import { GearSection } from './components/GearSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductPage } from './components/ProductPage';
import { GlobalPlayer } from './components/GlobalPlayer';
import { ReverbDeGloss } from './components/tools/ReverbDeGloss';
import { HalfScrewDemo } from './components/tools/HalfScrewDemo';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { Product, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Product | null>(null);
  const [isPlayerAutoPlay, setIsPlayerAutoPlay] = useState(false);
  const [showReverbDemo, setShowReverbDemo] = useState(false);
  const [showHalfScrewDemo, setShowHalfScrewDemo] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavClick = (sectionId: string) => {
    setView(ViewState.HOME);
    // Timeout to allow render if coming from product page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setView(ViewState.PRODUCT);
  };

  const closeProduct = () => {
    setView(ViewState.HOME);
    setSelectedProduct(null);
  };

  const handlePlayTrack = (product: Product) => {
    if (product.audioPreview) {
      setCurrentTrack(product);
      setIsPlayerAutoPlay(true);
    }
  };

  const handleClosePlayer = () => {
    setCurrentTrack(null);
  };

  return (
    <div className="min-h-screen font-sans bg-ui-bg text-white selection:bg-accent-cyan selection:text-black overflow-x-hidden pb-24">
      {/* Global Particle Background & Sweeping Gradient */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header onNavClick={handleNavClick} />
        
        {view === ViewState.HOME && (
          <main className="animate-in fade-in duration-500">
            <Hero onOpenProduct={openProduct} />
            <CassetteSection 
              onOpenProduct={openProduct} 
              onPlay={handlePlayTrack}
            />
            <ToolsSection onOpenDemo={(tool) => {
              if (tool.id === 't5') setShowReverbDemo(true);
              if (tool.id === 't6') setShowHalfScrewDemo(true);
            }} />
            <MediaSection 
              onPlay={handlePlayTrack} 
              currentTrackId={currentTrack?.id} 
            />
            <ApparelSection />
            <ArtistSection />
            <GearSection />
            <Newsletter />
          </main>
        )}

        {view === ViewState.PRODUCT && selectedProduct && (
          <ProductPage 
            product={selectedProduct} 
            onBack={closeProduct} 
            onPlay={() => handlePlayTrack(selectedProduct)}
          />
        )}
        
        <Footer />
      </div>

      {showReverbDemo && (
        <ReverbDeGloss onClose={() => setShowReverbDemo(false)} />
      )}

      {showHalfScrewDemo && (
        <HalfScrewDemo onClose={() => setShowHalfScrewDemo(false)} />
      )}

      <GlobalPlayer 
        track={currentTrack} 
        onClose={handleClosePlayer} 
        autoPlay={isPlayerAutoPlay}
      />
    </div>
  );
}

export default App;