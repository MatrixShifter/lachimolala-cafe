import React from 'react';

interface BrandLogoProps {
  dark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  glowVariant?: 'nav' | 'hero' | 'splash' | 'footer';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  dark = false,
  className = '',
  size = 'md',
  showText = true,
  glowVariant = dark ? 'footer' : 'nav',
}) => {
  // Height rules:
  // Desktop navbar: 38-48px (sm / md)
  // Mobile navbar: 32-40px (sm)
  // Footer / Hero / Splash: 56-112px (lg / xl)
  const imgHeights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-24 sm:h-28',
  };

  const textSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-[28px]',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-5xl sm:text-6xl',
  };

  const subTextSizes = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.22em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.24em]',
    lg: 'text-[10px] sm:text-[11px] tracking-[0.26em]',
    xl: 'text-xs sm:text-sm tracking-[0.3em]',
  };

  const glowClass = `logo-glow-${glowVariant}`;

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Real Physical 3D Café Logo Mark with Outer 3-Color Glow */}
      <div className={`logo-glow-wrapper ${glowClass} flex-shrink-0`}>
        <div className="logo-glow-aura" aria-hidden="true" />
        <img
          src="/logo.png"
          alt="Lachimolala café official logo"
          className={`relative z-10 ${imgHeights[size]} w-auto object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
          style={{ aspectRatio: 'auto' }}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-hand font-bold tracking-tight leading-none ${textSizes[size]} ${
              dark ? 'text-white' : 'text-espresso-900'
            }`}
          >
            Lachimolala
          </span>
          <span
            className={`font-sans uppercase font-black ${subTextSizes[size]} mt-0.5 ${
              dark ? 'text-[#FF85A2]' : 'text-[#FF537A]'
            }`}
          >
            7 DAYS A WEEK
          </span>
        </div>
      )}
    </div>
  );
};
