import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Music, ArrowRight, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

interface SplashScreenProps {
  onEnter?: (withMusic: boolean) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  // Always show on page load so visitor experiences the café doorway
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hasAttemptedAudio, setHasAttemptedAudio] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Consume single persistent MusicContext
  const { isPlaying, isLoading, error: musicError, transitionToMainMusic } = useMusic();

  // Global event listener to allow replaying the splash screen anytime
  useEffect(() => {
    const handleReplay = () => {
      setIsExiting(false);
      setHasAttemptedAudio(false);
      setPhase(0);
      setIsVisible(true);
    };

    window.addEventListener('lachimolala_show_splash', handleReplay);
    (window as any).showLachimolalaSplash = handleReplay;

    return () => {
      window.removeEventListener('lachimolala_show_splash', handleReplay);
      delete (window as any).showLachimolalaSplash;
    };
  }, []);

  // Sequential atmospheric lighting animation
  useEffect(() => {
    if (!isVisible) return;

    setPhase(0);
    setIsExiting(false);

    const t1 = setTimeout(() => setPhase(1), 250);
    const t2 = setTimeout(() => setPhase(2), 600);
    const t3 = setTimeout(() => setPhase(3), 950);
    const t4 = setTimeout(() => setPhase(4), 1300);
    const t5 = setTimeout(() => setPhase(5), 1650);
    const t6 = setTimeout(() => setPhase(6), 2000);
    const t7 = setTimeout(() => setPhase(7), 2350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [isVisible]);

  /**
   * INSTANT 0ms TRANSITION TRIGGER WITH USER GESTURE AUDIO KICKOFF
   * - Locks buttons immediately to prevent double-clicks
   * - Starts non-blocking audio transition immediately
   * - Triggers exit animation at 0ms (no setTimeout delay)
   */
  const handleEnterWithMusic = () => {
    if (isExiting) return;
    setIsExiting(true);
    setHasAttemptedAudio(true);

    if (onEnter) {
      onEnter(true);
    }

    // Direct user gesture playback - kick off immediately & non-blockingly
    transitionToMainMusic().catch((err) => {
      console.warn('Audio playback error:', err);
    });

    // Start UI exit transition immediately (0ms delay)
    setIsVisible(false);
  };

  const handleEnterWithoutMusic = () => {
    if (isExiting) return;
    setIsExiting(true);

    if (onEnter) {
      onEnter(false);
    }

    // Start UI exit transition immediately (0ms delay)
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="lachimolala-splash-portal"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.025,
            transition: {
              duration: shouldReduceMotion ? 0.25 : 0.72,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#120C09] text-white select-none ${
            isExiting ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
        >
          {/* ============================================================
              1. ACTUAL CAFÉ BACKGROUND PHOTOGRAPH
              ============================================================ */}
          <motion.div
            animate={{
              scale: phase >= 3 ? 1.02 : 1.0,
              filter:
                phase === 0
                  ? 'brightness(0.2) contrast(1.2)'
                  : phase <= 2
                  ? 'brightness(0.38) contrast(1.15)'
                  : phase <= 4
                  ? 'brightness(0.58) contrast(1.1)'
                  : 'brightness(0.82) contrast(1.05)',
            }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <picture className="w-full h-full">
              <source srcSet="/images/hero-cafe.webp" type="image/webp" />
              <source srcSet="/images/hero-cafe-clean.jpg" type="image/jpeg" />
              <img
                src="/images/hero-cafe.png"
                alt="Lachimolala café interior at night"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>

          {/* Ambient Night Vignette Overlay */}
          <div
            className={`absolute inset-0 z-[1] transition-opacity duration-1000 ${
              phase >= 4 ? 'bg-black/50' : 'bg-black/75'
            }`}
          />

          {/* ============================================================
              2. CAFÉ LIGHTS ILLUMINATION (CINEMATIC SEQUENTIAL GLOWS)
              ============================================================ */}
          {/* Light 1: Warm Amber Pendant Light at Top-Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: phase >= 2 ? 0.9 : 0,
              scale: phase >= 2 ? 1 : 0.6,
            }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute top-12 left-1/4 w-80 h-80 rounded-full pointer-events-none z-[2]"
            style={{
              background:
                'radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(251, 146, 60, 0.15) 50%, transparent 75%)',
              filter: 'blur(32px)',
            }}
          />

          {/* Light 2: Purple / Pink Neon Ambient Glow at Center-Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: phase >= 3 ? 0.95 : 0,
              scale: phase >= 3 ? 1 : 0.6,
            }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none z-[2]"
            style={{
              background:
                'radial-gradient(circle, rgba(255, 101, 132, 0.42) 0%, rgba(192, 132, 252, 0.22) 50%, transparent 75%)',
              filter: 'blur(36px)',
            }}
          />

          {/* ============================================================
              3. TOP SKIP / ENTER WITHOUT MUSIC LINK
              ============================================================ */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={handleEnterWithoutMusic}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 transition-colors bg-black/30 backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95"
              aria-label="Skip splash and enter website"
            >
              <span>Skip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ============================================================
              4. CENTER EXPERIENCE & BRAND REVEAL
              ============================================================ */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto space-y-4">
            
            {/* Real Physical 3D Café Entrance Sign Logo (Phase >= 1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                scale: phase >= 1 ? 1 : 0.96,
              }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-1"
            >
              <div className="logo-glow-wrapper logo-glow-splash flex-shrink-0">
                <div className="logo-glow-aura" aria-hidden="true" />
                <img
                  src="/logo.png"
                  alt="Lachimolala café official entrance sign"
                  className="relative z-10 h-28 sm:h-36 md:h-40 w-auto object-contain select-none"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            </motion.div>

            {/* Lachimolala Main Logo (Phase >= 4) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: phase >= 4 ? 1 : 0,
                y: phase >= 4 ? 0 : 12,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-hand font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none text-white drop-shadow-xl">
                Lachimolala
              </h1>
              <p className="font-sans uppercase font-black tracking-[0.35em] text-xs sm:text-sm text-[#FF85A2] mt-2">
                7 DAYS A WEEK
              </p>
            </motion.div>

            {/* "A Little Korea in Chennai" (Phase >= 5) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase >= 5 ? 1 : 0,
                y: phase >= 5 ? 0 : 10,
              }}
              transition={{ duration: 0.6 }}
              className="pt-1"
            >
              <h2 className="font-hand text-2xl sm:text-3xl md:text-4xl text-[#FFD7C2] font-semibold tracking-wide flex items-center justify-center gap-2">
                <span>A Little Korea in Chennai</span>
                <Heart className="w-5 h-5 text-[#FF537A] fill-current animate-pulse" />
              </h2>
            </motion.div>

            {/* Subtle Korean Calligraphy (Phase >= 6) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase >= 6 ? 1 : 0,
              }}
              transition={{ duration: 0.7 }}
              className="pt-2"
            >
              <p className="font-hand text-lg sm:text-xl text-white/85 tracking-wide">
                좋은 커피 • 좋은 음식 • 좋은 하루 ♡
              </p>
            </motion.div>

            {/* Enter Actions & Music Button (Phase >= 7) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: phase >= 7 ? 1 : 0,
                y: phase >= 7 ? 0 : 18,
              }}
              transition={{ duration: 0.6 }}
              className="pt-6 sm:pt-8 flex flex-col items-center gap-3.5 w-full"
            >
              {/* PRIMARY ACTION BUTTON: ENTER WITH MUSIC */}
              <button
                type="button"
                onClick={handleEnterWithMusic}
                disabled={isExiting || isLoading}
                className={`group relative inline-flex items-center justify-center gap-3 font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 active:scale-95 shadow-2xl ${
                  isExiting
                    ? 'opacity-80 pointer-events-none cursor-default'
                    : 'cursor-pointer'
                } ${
                  isPlaying
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30'
                    : 'bg-[#FF537A] hover:bg-[#FF3E69] text-white shadow-pink-500/40 hover:shadow-glow-pink'
                }`}
                aria-label="Enter Lachimolala with music"
              >
                {isLoading ? (
                  <>
                    <Music className="w-4 h-4 animate-spin text-pink-200" />
                    <span>♫ Playing...</span>
                  </>
                ) : isPlaying ? (
                  <>
                    <Music className="w-4 h-4 text-emerald-200" />
                    <span>♫ Music on</span>
                    {/* Live Equalizer Visualizer (Requirement 16) */}
                    <div className="flex items-end gap-0.5 h-3.5 ml-1" aria-hidden="true">
                      <span className="w-1 h-3.5 bg-emerald-200 rounded-full animate-pulse" />
                      <span className="w-1 h-2 bg-emerald-100 rounded-full animate-bounce" />
                      <span className="w-1 h-3 bg-emerald-200 rounded-full animate-pulse" />
                      <span className="w-1 h-1.5 bg-emerald-100 rounded-full animate-bounce" />
                    </div>
                  </>
                ) : hasAttemptedAudio && musicError ? (
                  <>
                    <Music className="w-4 h-4 text-pink-200" />
                    <span>♫ Try music again</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    <Music className="w-4 h-4 text-pink-200" />
                    <span>♫ Enter with music</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {/* SECONDARY ACTION: ENTER WITHOUT MUSIC (Requirement 13) */}
              <button
                type="button"
                onClick={handleEnterWithoutMusic}
                disabled={isExiting}
                className={`inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/40 bg-black/30 backdrop-blur-xs transition-colors active:scale-95 ${
                  isExiting
                    ? 'opacity-50 pointer-events-none cursor-default'
                    : 'cursor-pointer'
                }`}
              >
                <span>Enter without music →</span>
              </button>

              {/* Playback Error Notice with Safe UI Handling (Requirement 6 & 12) */}
              {hasAttemptedAudio && musicError && (
                <div className="bg-red-950/80 border border-red-500/40 rounded-xl px-4 py-2.5 text-xs text-red-200 text-center max-w-sm flex items-center gap-2 mt-1 shadow-lg">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="flex-1 text-left">
                    {musicError}
                  </p>
                </div>
              )}
            </motion.div>

          </div>

          {/* Ambient Bottom Note */}
          <div className="absolute bottom-6 inset-x-0 text-center pointer-events-none">
            <p className="text-[11px] uppercase tracking-widest text-white/40 font-mono flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-[#FF85A2]" />
              <span>Old Washermanpet, Chennai • Korean Café Experience</span>
              <Sparkles className="w-3 h-3 text-[#FF85A2]" />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
