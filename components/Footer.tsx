import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-ui-border bg-black py-16 px-6 md:px-12 text-sm">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h5 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Shop</h5>
          <ul className="space-y-3 text-neutral-500 font-sans">
            <li><a href="#" className="hover:text-white transition-colors">Cassettes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Apparel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gear</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Support</h5>
          <ul className="space-y-3 text-neutral-500 font-sans">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Legal</h5>
          <ul className="space-y-3 text-neutral-500 font-sans">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
          </ul>
        </div>
        <div>
           <h5 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Connect</h5>
           <div className="flex gap-4 text-neutral-400">
             <a href="#" className="hover:text-accent-cyan transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-accent-cyan transition-colors"><Twitter size={20} /></a>
             <a href="#" className="hover:text-accent-cyan transition-colors"><Youtube size={20} /></a>
           </div>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ui-border text-xs text-neutral-600 font-mono">
        <p>&copy; {new Date().getFullYear()} THE COLLECTIVE / BEAT MOB COLLECTIVE.</p>
        <p className="mt-2 md:mt-0">ENGINEERED IN TOKYO.</p>
      </div>
    </footer>
  );
};