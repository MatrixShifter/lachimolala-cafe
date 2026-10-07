import React from 'react';
import { Home, Utensils, Sparkles, MapPin, Heart } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-espresso-800/10 px-3 py-1.5 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <a
          href="#home"
          className="flex flex-col items-center gap-0.5 text-[11px] font-semibold text-espresso-700 hover:text-[#FF537A] transition-colors py-1"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </a>

        <a
          href="#menu"
          className="flex flex-col items-center gap-0.5 text-[11px] font-semibold text-espresso-700 hover:text-[#FF537A] transition-colors py-1"
        >
          <Utensils className="w-4 h-4" />
          <span>Menu</span>
        </a>

        <a
          href="#kpop-vibes"
          className="flex flex-col items-center gap-0.5 text-[11px] font-semibold text-espresso-700 hover:text-[#FF537A] transition-colors py-1"
        >
          <Sparkles className="w-4 h-4 text-[#FF537A]" />
          <span>Vibes</span>
        </a>

        <a
          href="#location"
          className="flex flex-col items-center gap-0.5 text-[11px] font-semibold text-espresso-700 hover:text-[#FF537A] transition-colors py-1"
        >
          <MapPin className="w-4 h-4" />
          <span>Location</span>
        </a>

        <a
          href="#location"
          className="flex flex-col items-center gap-0.5 text-[11px] font-bold text-[#FF537A] py-1"
        >
          <Heart className="w-4 h-4 fill-current text-[#FF537A]" />
          <span>Visit Us</span>
        </a>
      </div>
    </div>
  );
};
