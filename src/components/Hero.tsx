import React from 'react';
import { Utensils, Car, PackageCheck, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex items-center justify-between overflow-hidden pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-14 select-none"
    >
      {/* ============================================================
          LAYER 1: EXACT CAFÉ BACKGROUND PHOTOGRAPH
          ============================================================ */}
      <picture className="absolute inset-0 z-0 pointer-events-none">
        <source srcSet="/images/hero-cafe.webp" type="image/webp" />
        <source srcSet="/images/hero-cafe-clean.jpg" type="image/jpeg" />
        <img
          src="/images/hero-cafe.png"
          alt="Lachimolala Korean themed café interior in Chennai"
          className="w-full h-full object-cover object-[62%_center] md:object-[58%_center] lg:object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* ============================================================
          LAYER 2: SUBTLE READABILITY GRADIENT (LEFT SIDE ONLY)
          Preserves the bright café lights, hanging foliage, and neon!
          ============================================================ */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.52) 34%, rgba(0,0,0,0.22) 58%, rgba(0,0,0,0.02) 85%)',
        }}
      />

      {/* ============================================================
          LAYER 3 & 4: HERO CONTENT & DECORATIONS
          ============================================================ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: HERO BRAND & VALUE PROPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left text-white max-w-2xl"
        >
          {/* 1. Small Hand-painted / Paper Tape Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD7C2]/95 border border-[#FFAAA6]/50 text-[#542C1E] text-xs font-black tracking-wider uppercase rotate-[-1.5deg] shadow-sm mb-3.5">
            <MapPin className="w-3.5 h-3.5 text-[#E63956]" />
            <span>KOREAN CAFÉ IN CHENNAI</span>
          </div>

          {/* 2. Brand Name: Lachimolala + Bunny Mascot */}
          <div className="relative flex items-center gap-3">
            {/* Floating small doodled heart on the left */}
            <span className="absolute -left-6 top-2 text-[#FF85A2] text-xl font-hand animate-pulse hidden sm:inline">
              ♡
            </span>

            <h1 className="font-hand font-bold text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white drop-shadow-md">
              Lachimolala
            </h1>

            {/* Authentic Physical 3D Logo Mark with Outer 3-Color Glow */}
            <div className="logo-glow-wrapper logo-glow-hero flex-shrink-0">
              <div className="logo-glow-aura" aria-hidden="true" />
              <img
                src="/logo.png"
                alt="Lachimolala café official logo"
                className="relative z-10 h-12 sm:h-14 md:h-16 w-auto object-contain select-none hover:scale-105 transition-transform"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>

          {/* 3. Sub-title: - 7 DAYS A WEEK - */}
          <div className="text-xs sm:text-[13px] uppercase tracking-[0.28em] font-extrabold text-white/90 mt-1 mb-2 ml-1">
            - 7 DAYS A WEEK -
          </div>

          {/* 4. Main Headline: A Little Korea in Chennai ♡ */}
          <div className="my-1">
            <h2 className="font-hand text-4xl sm:text-5xl md:text-[58px] text-[#FFA0B8] font-bold leading-tight tracking-wide drop-shadow-sm">
              A Little Korea
            </h2>
            <h2 className="font-hand text-4xl sm:text-5xl md:text-[58px] text-[#FFA0B8] font-bold leading-tight tracking-wide drop-shadow-sm flex items-center gap-2">
              <span>in Chennai</span>
              <span className="text-[#FFA0B8]">♡</span>
            </h2>
          </div>

          {/* 5. Supporting Text */}
          <p className="text-white/95 text-sm sm:text-base font-medium mt-3 mb-6 sm:mb-7 tracking-wide">
            Korean food • Bubble tea • K-pop vibes • Cozy café
          </p>

          {/* 6. CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-7 w-full sm:w-auto">
            {/* Primary: Explore Menu → */}
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF537A] hover:bg-[#FF3E69] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg shadow-pink-600/30 hover:shadow-glow-pink transition-all duration-200 active:scale-95"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary: Find Us with Pin */}
            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full backdrop-blur-md border border-white/40 transition-all duration-200 active:scale-95"
            >
              <MapPin className="w-4 h-4 text-[#FFA0B8]" />
              <span>Find Us</span>
            </a>
          </div>

          {/* 7. Service Indicators */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-white" />
              <span className="font-medium">Dine-in</span>
            </div>

            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-white" />
              <span className="font-medium">Drive-through</span>
            </div>

            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-white" />
              <span className="font-medium">No-contact delivery</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: POLAROID, KOREAN STICKY NOTE, DOODLES */}
        <div className="lg:col-span-5 xl:col-span-5 relative w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center lg:justify-end">
          
          {/* 1. Taped Korean Sticky Note (Top Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute top-0 right-0 sm:right-6 rotate-[3deg] z-20"
          >
            <div className="relative bg-[#FFFBF0] px-4 py-3 rounded-xs shadow-md border border-amber-200/60 max-w-[150px] text-center">
              {/* Top Masking Tape Strips */}
              <div className="absolute -top-2 left-3 w-8 h-3.5 bg-[#FFC5D0]/80 rotate-[-4deg] rounded-xs shadow-xs" />
              <div className="absolute -top-2 right-3 w-8 h-3.5 bg-[#FFC5D0]/80 rotate-[3deg] rounded-xs shadow-xs" />
              
              <p className="font-hand font-bold text-espresso-900 text-lg leading-tight">
                좋은 커피<br />
                좋은 음식<br />
                좋은 하루 ♡
              </p>
            </div>
          </motion.div>

          {/* 2. Large Polaroid Photo Frame (Lower Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            className="absolute bottom-6 sm:bottom-10 right-2 sm:right-8 z-25 polaroid-frame p-3 pb-4 rounded-sm bg-white shadow-polaroid w-56 sm:w-64 cursor-pointer"
          >
            {/* Top Masking Tape Strip */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-[#FEF08A]/85 rotate-[-1deg] rounded-xs shadow-xs" />
            
            {/* Inner Food & Boba Photography */}
            <div className="w-full aspect-[4/3] rounded-xs overflow-hidden bg-espresso-900 grid grid-cols-2 gap-0.5">
              <img
                src="/images/specialty-boba.jpg"
                alt="Strawberry Boba at Lachimolala"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/specialty-ramyun.jpg"
                alt="Shin Ramyun bowl at Lachimolala"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Handwritten Caption on Polaroid Bottom */}
            <div className="pt-2 text-center">
              <p className="font-hand font-bold text-lg sm:text-xl text-espresso-900 leading-none">
                Good Food<br />Great Vibes ♡
              </p>
            </div>
          </motion.div>

          {/* 3. Handwritten "Better Boba Days ♡" next to Polaroid */}
          <div className="absolute top-44 sm:top-48 right-0 sm:-right-2 z-20 text-right rotate-[-2deg]">
            <p className="font-hand font-bold text-xl sm:text-2xl text-white drop-shadow-md leading-tight">
              Better<br />
              Boba<br />
              Days
            </p>
            <span className="text-[#FF85A2] text-xl font-hand">♡</span>
          </div>

          {/* 4. Doodled Arrow + "Shin Ramyun Must Try!" */}
          <div className="absolute bottom-0 sm:bottom-1 right-20 sm:right-28 z-30 flex items-center gap-1.5">
            <svg viewBox="0 0 35 22" fill="none" stroke="#333" strokeWidth="2" className="w-7 h-5 rotate-[-10deg]">
              <path d="M5 5 C 15 15, 25 15, 33 18 M 33 18 L 26 15 M 33 18 L 30 10" />
            </svg>
            <span className="font-hand font-bold text-xs sm:text-sm text-espresso-900 bg-white/95 px-2 py-0.5 rounded shadow-xs">
              Shin Ramyun Must Try! ♡
            </span>
          </div>

        </div>

      </div>

      {/* ============================================================
          LAYER 5: ORGANIC TORN-PAPER / RIPPED BOTTOM TRANSITION
          Blends into the #FAF6ED cream background with botanical sketches!
          ============================================================ */}
      {/* <div className="absolute inset-x-0 bottom-0 z-30 pointer-events-none w-full leading-none overflow-hidden">
        <picture>
          <img
            src="/images/hero-bottom-torn-clean.png"
            alt="Organic ripped paper transition"
            className="w-full h-16 sm:h-22 object-cover object-bottom"
          />
        </picture>
      </div> */}
    </section>
  );
};
