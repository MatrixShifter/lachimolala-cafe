import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS } from '../data/business';
import { Heart, MapPin, Phone, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#why-visit' },
    { label: 'K-Pop Vibes', href: '#kpop-vibes' },
    { label: 'The Vibe', href: '#the-vibe' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#140E0A] text-white pt-16 pb-24 sm:pb-16 border-t border-white/10 overflow-hidden">
      
      {/* Top Washi Tape Scrapbook Transitions */}
      <div className="absolute top-0 left-12 washi-tape-pink w-24 h-4 rotate-[-1deg] opacity-80 shadow-xs hidden sm:block" />
      <div className="absolute top-0 right-20 washi-tape-yellow w-28 h-4 rotate-[1.5deg] opacity-75 shadow-xs hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Korean Motto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo dark size="lg" />
            
            <div className="pt-2">
              <p className="font-hand text-2xl text-kpink-200 font-bold leading-tight">
                {BUSINESS.koreanMotto}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1 font-semibold">
                {BUSINESS.koreanMottoMeaning}
              </p>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-normal">
              A little piece of Korea nestled in Old Washermanpet, Chennai. Serving authentic ramyun, bubble tea, and memories 7 days a week.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display font-bold text-sm uppercase tracking-wider text-kpink block">
              Quick Links
            </span>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-kpink transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('lachimolala_show_splash'))}
                  className="hover:text-kpink transition-colors inline-flex items-center gap-1.5 py-0.5 text-left text-kpink/90 cursor-pointer"
                >
                  <span>✨ Replay Café Intro</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-display font-bold text-sm uppercase tracking-wider text-kpink block">
              Contact & Location
            </span>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kpink flex-shrink-0 mt-1" />
                <span>{BUSINESS.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kpink flex-shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-kpink font-semibold">
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-white/60 pt-1">
                <span className="font-bold text-amber-300">Hours:</span>
                <span>{BUSINESS.hours.daily} (Open Daily)</span>
              </div>
            </div>

            {/* Editorial Café Warmth Accent */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-white/70 font-hand text-lg">
              <Coffee className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Good Vibes Only • 7 Days a Week ♡</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} Lachimolala 7 Days a Week. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-white/60">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-kpink fill-kpink" />
            <span>for K-pop & Food Lovers in Chennai</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
