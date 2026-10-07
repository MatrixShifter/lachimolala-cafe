import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu as MenuIcon, X, Heart, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { isPlaying, togglePlay } = useMusic();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'menu', 'why-visit', 'kpop-vibes', 'gallery', 'location'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Our Story', href: '#why-visit', id: 'why-visit' },
    { label: 'K-Pop Vibes', href: '#kpop-vibes', id: 'kpop-vibes' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
  ];

  const scrollToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 flex justify-center pointer-events-none ${
          scrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <nav
          className={`pointer-events-auto w-full max-w-5xl mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl px-4 sm:px-6 border select-none ${
            scrolled
              ? 'py-2 sm:py-2.5 bg-[#FFFDF9]/95 backdrop-blur-md border-espresso-800/10 shadow-md'
              : 'py-2.5 sm:py-3 bg-[#FFFDF9]/85 backdrop-blur-md border-white/60 shadow-xs'
          }`}
          aria-label="Main Navigation"
        >
          {/* LEFT: Lachimolala Brand Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-none flex-shrink-0 group"
            aria-label="Lachimolala Home"
          >
            <BrandLogo size="sm" />
          </a>

          {/* CENTER: Editorial Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-semibold text-espresso-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-[#FF477E] font-bold' : 'hover:text-[#FF477E] text-espresso-800/90'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#FF477E] rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* RIGHT: Actions (Visit Us ♡ & Music Control) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Small Elegant Music Control (Requirement 11) */}
            <button
              type="button"
              onClick={togglePlay}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer active:scale-95 ${
                isPlaying
                  ? 'bg-pink-50 border-[#FF85A2]/40 text-[#FF477E] shadow-xs'
                  : 'bg-white/80 border-espresso-800/10 text-espresso-700 hover:text-[#FF477E] hover:border-[#FF85A2]/30'
              }`}
              title={isPlaying ? 'Pause music' : 'Play café vibe music'}
              aria-label={isPlaying ? 'Music On' : 'Music Off'}
            >
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#FF477E]' : 'text-espresso-500'}`} />
              <span className="font-mono text-[11px] font-bold tracking-wider">
                {isPlaying ? '♫ ON' : '♫ OFF'}
              </span>

              {/* Animated Mini Equalizer Bars when Playing */}
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-2.5 ml-0.5" aria-hidden="true">
                  <span className="w-0.5 h-2.5 bg-[#FF477E] rounded-full animate-pulse" />
                  <span className="w-0.5 h-1.5 bg-[#FF477E] rounded-full animate-bounce" />
                  <span className="w-0.5 h-2 bg-[#FF477E] rounded-full animate-pulse" />
                </div>
              )}
            </button>

            {/* Primary CTA: VISIT US ♡ (Desktop) */}
            <a
              href="#location"
              onClick={scrollToLocation}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF537A] hover:bg-[#FF3E69] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-glow-pink transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Visit Us</span>
              <Heart className="w-3 h-3 fill-current" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl text-espresso-800 hover:bg-[#FAF6ED] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAVIGATION DRAWER (Requirement 12) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-espresso-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="fixed top-4 right-4 left-4 max-w-sm ml-auto bg-[#FFFDF9] rounded-3xl p-6 shadow-2xl border border-espresso-800/10 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-espresso-800/10">
              <BrandLogo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-espresso-600 hover:bg-[#FAF6ED] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-1 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wider rounded-xl px-4 py-2.5 transition-colors ${
                      isActive
                        ? 'bg-pink-50 text-[#FF477E]'
                        : 'text-espresso-800 hover:bg-[#FAF6ED]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Divider & Actions */}
            <div className="pt-4 border-t border-espresso-800/10 space-y-3">
              {/* Visit Us Button */}
              <a
                href="#location"
                onClick={scrollToLocation}
                className="w-full flex items-center justify-center gap-2 bg-[#FF537A] hover:bg-[#FF3E69] text-white font-bold py-3 rounded-2xl shadow-md text-sm active:scale-95 transition-transform"
              >
                <span>VISIT US</span>
                <Heart className="w-4 h-4 fill-current" />
              </a>

              {/* Music Toggle */}
              <button
                type="button"
                onClick={togglePlay}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold border transition-all ${
                  isPlaying
                    ? 'bg-pink-50 border-[#FF85A2]/40 text-[#FF477E]'
                    : 'bg-white border-espresso-800/15 text-espresso-700'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>{isPlaying ? '♫ MUSIC ON (Playing)' : '♫ MUSIC OFF (Tap to play)'}</span>
              </button>

              {/* Korean Motto Note */}
              <p className="text-center font-hand text-sm text-espresso-600 pt-1">
                좋은 커피 • 좋은 음식 • 좋은 하루 ♡
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
