import React from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1, Camera, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useMusic, TRACKS } from '../context/MusicContext';

export const KpopVibes: React.FC = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    currentTrackIndex,
    currentTrack,
    error: audioError,
    togglePlay,
    setVolume,
    toggleMute,
    seek,
    switchTrack,
  } = useMusic();

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const selectTrack = (index: number) => {
    switchTrack(index);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  return (
    <section id="kpop-vibes" className="py-20 sm:py-28 bg-[#18120E] text-white relative overflow-hidden">

      {/* Ambient Neon Atmosphere Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kpink/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-klavender/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-kpink mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHENNAI’S IMMERSIVE K-POP SPOT</span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight flex items-center justify-center gap-3">
            <span>K-Pop Vibes & Sound</span>
            <Heart className="w-8 h-8 text-kpink fill-kpink animate-pulse" />
          </h2>

          <p className="mt-3 text-base sm:text-lg text-cream-200/80 font-normal leading-relaxed">
            Good Food • Good Music • Good People • 7 Days a Week.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Scrapbook Photo Collage (7 cols) */}
          <div className="lg:col-span-7 relative grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: Photocard Grid Wall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative polaroid-frame p-3 rounded-2xl bg-white text-espresso-900 rotate-[-1.5deg] shadow-polaroid"
            >
              <div className="absolute -top-3 left-6 washi-tape-pink w-16 h-5 rotate-[2deg] opacity-90 rounded-xs" />
              
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-espresso-800">
                <img
                  src="/images/vibe-wall.jpg"
                  alt="K-Pop photocard wall with neon sign"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 pb-1 flex items-center justify-between">
                <div>
                  <span className="font-hand font-bold text-lg text-espresso-900 block leading-tight">
                    Photocard Wall Corner ♡
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-kpink font-bold">
                    K-POP MEMORIES
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Actual Café Neon Nights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative polaroid-frame p-3 rounded-2xl bg-white text-espresso-900 rotate-[2deg] shadow-polaroid sm:mt-8"
            >
              <div className="absolute -top-3 right-6 washi-tape-yellow w-16 h-5 rotate-[-2deg] opacity-90 rounded-xs" />
              
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-espresso-800">
                <img
                  src="/images/vibe-neon.webp"
                  alt="Actual Lachimolala Café Neon Ambience at Night"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 pb-1 flex items-center justify-between">
                <div>
                  <span className="font-hand font-bold text-lg text-espresso-900 block leading-tight">
                    Purple Neon Nights ✨
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-klavender font-bold">
                    CHENNAI NIGHT VIBES
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            {/* Badges Strip */}
            <div className="sm:col-span-2 flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-pink-200 flex items-center gap-1.5">
                <span>💜</span> ARMY & Fan Friendly
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-purple-200 flex items-center gap-1.5">
                <span>📸</span> 100% Photogenic
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-200 flex items-center gap-1.5">
                <span>🍜</span> Comfort Korean Food
              </span>
            </div>

          </div>

          {/* Right Column: REAL WORKING K-POP MUSIC PLAYER (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#241B15] to-[#1A120D] border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative">
            
            {/* Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-kpink text-lg font-bold">♫</span>
                <span className="font-bold text-xs uppercase tracking-widest text-white/90">
                  K-POP CAFÉ PLAYER
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-kpink font-semibold">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-white/40'}`} />
                <span>{isPlaying ? 'Audible Playing' : 'Click to Play'}</span>
              </div>
            </div>

            {/* Album Visual Artwork with Spinning Record Effect */}
            <div className="bg-[#18110C] rounded-2xl p-4 border border-white/10 flex items-center gap-4 mb-5 shadow-inner">
              {/* Spinning Disc / Artwork */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-espresso-800 flex-shrink-0 shadow-lg border border-white/20 flex items-center justify-center">
                <img
                  src="/images/specialty-boba.jpg"
                  alt="Track cover"
                  className={`w-full h-full object-cover ${isPlaying ? 'animate-spin-slow' : ''}`}
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/80 border-2 border-espresso-900" />
                </div>
              </div>

              {/* Title & Korean Subtitle */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base text-white truncate">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-[#FFA0B8] font-korean mt-0.5">
                  {currentTrack.koreanTitle}
                </p>
                <p className="text-[11px] text-white/50 mt-0.5">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Error or Notice Banner if present */}
            {audioError && (
              <div className="mb-3 px-3 py-1.5 rounded-lg bg-pink-900/40 border border-pink-500/30 text-xs text-pink-200 text-center">
                {audioError}
              </div>
            )}

            {/* Animated Equalizer Bars */}
            <div
              className="flex items-end justify-center gap-1.5 h-10 mb-4 px-2 select-none"
              aria-hidden="true"
            >
              {[45, 80, 60, 95, 70, 85, 50, 100, 65, 45, 90, 75, 40].map((h, i) => (
                <span
                  key={i}
                  style={{
                    height: isPlaying ? `${h}%` : '15%',
                    transition: isPlaying ? 'height 0.2s ease-in-out' : 'height 0.4s ease'
                  }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-kpink to-klavender shadow-glow-pink"
                />
              ))}
            </div>

            {/* Progress Scrubber Bar */}
            <div className="space-y-1.5 mb-5">
              <input
                type="range"
                min="0"
                max={duration || 25}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                aria-label="Audio progress scrubber"
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF537A] focus:outline-none"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Main Audio Controls (Play, Volume, Mute) */}
            <div className="flex items-center justify-between gap-4 pt-2 pb-4">
              
              {/* Big Primary Play/Pause Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                className="flex items-center justify-center gap-2 bg-[#FF537A] hover:bg-[#FF3E69] text-white font-bold px-6 py-3.5 rounded-full shadow-lg shadow-pink-600/35 active:scale-95 transition-all min-h-[48px] min-w-[140px]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 fill-current" />
                    <span className="text-sm">Pause Beat</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                    <span className="text-sm">Play the Vibe</span>
                  </>
                )}
              </button>

              {/* Volume Slider & Mute Toggle */}
              <div className="flex items-center gap-2.5 bg-black/30 px-3.5 py-2.5 rounded-full border border-white/10">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                  className="text-white/80 hover:text-kpink transition-colors p-1"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume level"
                  className="w-18 sm:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF537A]"
                />
              </div>

            </div>

            {/* Playlist Track Selectors */}
            <div className="space-y-2 pt-3 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block">
                Café Playlist Selection
              </span>
              {TRACKS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => selectTrack(idx)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors min-h-[44px] ${
                    currentTrackIndex === idx
                      ? 'bg-white/15 text-white font-semibold border border-white/20'
                      : 'hover:bg-white/5 text-white/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-kpink text-xs">0{idx + 1}</span>
                    <span>{t.title}</span>
                  </div>
                  <span className="font-mono text-white/50 text-[11px]">{t.durationLabel}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <p className="font-hand text-base text-kpink-200">
                "좋은 음악, 좋은 커피, 좋은 하루 ♡"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
