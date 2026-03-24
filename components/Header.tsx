import React from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = ['CASSETTES', 'TOOLS', 'APPAREL', 'ARTISTS', 'STUDIO GEAR'];

  const handleNav = (item: string) => {
    onNavClick(item.toLowerCase().replace(' ', '-'));
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top promotional bar */}
      <div className="bg-accent-cyan/10 text-accent-cyan text-[10px] md:text-xs font-mono py-1 text-center border-b border-accent-cyan/20">
        <span className="mx-4">SPLIT LOCALLY. NO SUBSCRIPTIONS.</span>
        <span className="opacity-30 mx-2">|</span>
        <span className="mx-4">LIMITED CASSETTE DROPS WEEKLY.</span>
      </div>

      <header className="sticky top-0 z-50 w-full bg-ui-bg/80 backdrop-blur-md border-b border-ui-border h-[72px] flex items-center justify-between px-6 md:px-12">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleNav('hero')}>
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display font-bold text-xl">
            TC
          </div>
          <span className="hidden md:block font-display font-bold text-xl tracking-tight uppercase">The Collective</span>
        </div>

        {/* Center: Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="text-sm font-sans font-medium text-neutral-400 hover:text-accent-cyan transition-colors tracking-widest uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-accent-cyan transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button className="hidden md:block hover:text-accent-cyan transition-colors"><User size={20} strokeWidth={1.5} /></button>
          <button className="relative hover:text-accent-cyan transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-cyan rounded-full"></span>
          </button>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ui-bg pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="text-2xl font-display font-bold text-left text-white border-b border-ui-border pb-4"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};