import React, { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';

export interface Track {
  id: string;
  title: string;
  koreanTitle: string;
  artist: string;
  src: string;
  durationLabel: string;
}

export const MAIN_TRACKS: Track[] = [
  {
    id: 'track-1',
    title: 'Lachimolala Café Groove',
    koreanTitle: '라치몰라 카페 그루브',
    artist: 'Upbeat Seoul Coffee Chill',
    src: '/audio/cafe-groove.mp3',
    durationLabel: '0:18',
  },
  {
    id: 'track-2',
    title: 'Spring Day Boba Lo-Fi',
    koreanTitle: '봄날 버블티 로파이',
    artist: 'Official Café Ambient Loop',
    src: '/audio/kpop-cafe-vibe.mp3',
    durationLabel: '0:25',
  },
];

export const TRACKS = MAIN_TRACKS;

export const SPLASH_TRACK: Track = {
  id: 'track-splash',
  title: 'Doorway to Lachimolala (Intro)',
  koreanTitle: '라치몰라로 가는 문',
  artist: 'Atmospheric Café Chimes & Rhodes',
  src: '/audio/splash-intro.mp3',
  durationLabel: '0:14',
};

interface MusicContextType {
  activeSource: 'splash' | 'main';
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  currentTrackIndex: number;
  currentTrack: Track;
  error: string | null;
  playSplashMusic: () => Promise<boolean>;
  transitionToMainMusic: () => Promise<boolean>;
  playMusic: () => Promise<boolean>;
  pauseMusic: () => void;
  togglePlay: () => Promise<void>;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  seek: (seconds: number) => void;
  switchTrack: (index: number) => Promise<boolean>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const splashAudioRef = useRef<HTMLAudioElement | null>(null);
  const mainAudioRef = useRef<HTMLAudioElement | null>(null);

  const [activeSource, setActiveSource] = useState<'splash' | 'main'>('splash');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(18);
  const [volume, setVolumeState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('lachimolala_player_vol');
      return saved !== null ? Math.max(0, Math.min(1, parseFloat(saved))) : 0.7;
    } catch {
      return 0.7;
    }
  });
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentTrack = MAIN_TRACKS[currentTrackIndex] || MAIN_TRACKS[0];

  // Sync volume to active elements
  useEffect(() => {
    const effectiveVol = isMuted ? 0 : volume;
    if (activeSource === 'splash' && splashAudioRef.current) {
      splashAudioRef.current.volume = effectiveVol;
      splashAudioRef.current.muted = isMuted;
    } else if (activeSource === 'main' && mainAudioRef.current) {
      mainAudioRef.current.volume = effectiveVol;
      mainAudioRef.current.muted = isMuted;
    }
    try {
      localStorage.setItem('lachimolala_player_vol', volume.toString());
    } catch {
      // ignore
    }
  }, [volume, isMuted, activeSource]);

  // Main Audio event listeners
  useEffect(() => {
    const audio = mainAudioRef.current;
    if (!audio) return;

    const handlePlaying = () => {
      if (activeSource === 'main') {
        setIsPlaying(true);
        setIsLoading(false);
        setError(null);
      }
    };

    const handlePause = () => {
      if (activeSource === 'main') {
        setIsPlaying(false);
        setIsLoading(false);
      }
    };

    const handleEnded = () => {
      if (activeSource === 'main') {
        audio.currentTime = 0;
        audio.play().catch(() => setIsPlaying(false));
      }
    };

    const handleTimeUpdate = () => {
      if (activeSource === 'main') {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    const handleError = () => {
      if (activeSource === 'main') {
        console.error('Main audio playback error:', audio.error);
        setIsPlaying(false);
        setIsLoading(false);
        setError('Audio playback error');
      }
    };

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('play', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('play', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
    };
  }, [activeSource]);

  // Splash Audio event listeners
  useEffect(() => {
    const audio = splashAudioRef.current;
    if (!audio) return;

    const handlePlaying = () => {
      if (activeSource === 'splash') {
        setIsPlaying(true);
        setIsLoading(false);
        setError(null);
      }
    };

    const handlePause = () => {
      if (activeSource === 'splash') {
        setIsPlaying(false);
        setIsLoading(false);
      }
    };

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('play', handlePlaying);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('play', handlePlaying);
      audio.removeEventListener('pause', handlePause);
    };
  }, [activeSource]);

  /**
   * DIRECT USER GESTURE: Play Splash Entrance Track (Soft, dreamy, atmospheric)
   */
  const playSplashMusic = useCallback(async (): Promise<boolean> => {
    const audio = splashAudioRef.current;
    if (!audio) {
      setError('Splash audio element not found');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      setActiveSource('splash');
      audio.currentTime = 0;
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;

      await audio.play();

      setIsPlaying(true);
      setIsLoading(false);
      return true;
    } catch (err: unknown) {
      console.error('Splash music playback failed:', err);
      setIsPlaying(false);
      setIsLoading(false);
      setError('Click to enable audio playback');
      return false;
    }
  }, [volume, isMuted]);

  /**
   * SMOOTH CROSSFADE:
   * Splash track fades out (400-800ms)
   * Main website café track fades in (600-1200ms)
   */
  const transitionToMainMusic = useCallback(async (): Promise<boolean> => {
    const splashAudio = splashAudioRef.current;
    const mainAudio = mainAudioRef.current;
    const targetVol = isMuted ? 0 : volume;

    setActiveSource('main');

    if (!mainAudio) return false;

    // If splash audio was NOT playing, start main audio directly with a smooth fade-in
    if (!splashAudio || splashAudio.paused) {
      try {
        mainAudio.currentTime = 0;
        mainAudio.volume = 0;
        mainAudio.muted = isMuted;
        await mainAudio.play();
        setIsPlaying(true);

        const fadeStartTime = performance.now();
        const fadeInDuration = 800;
        const fadeStep = (now: number) => {
          const elapsed = now - fadeStartTime;
          const mainProgress = Math.min(1, elapsed / fadeInDuration);
          mainAudio.volume = Math.min(targetVol, targetVol * mainProgress);
          if (elapsed < fadeInDuration) {
            requestAnimationFrame(fadeStep);
          } else {
            mainAudio.volume = targetVol;
          }
        };
        requestAnimationFrame(fadeStep);
        return true;
      } catch (err) {
        console.warn('Direct main audio start failed:', err);
        return false;
      }
    }

    try {
      // 1. Prepare main audio starting silently
      mainAudio.currentTime = 0;
      mainAudio.volume = 0;
      mainAudio.muted = isMuted;
      await mainAudio.play();
      setIsPlaying(true);

      // 2. Smoothly crossfade: fade out splash over 600ms, fade in main over 900ms
      const fadeStartTime = performance.now();
      const fadeOutDuration = 600;
      const fadeInDuration = 900;
      const initialSplashVol = splashAudio.volume;

      const fadeStep = (now: number) => {
        const elapsed = now - fadeStartTime;

        // Fade out splash
        if (splashAudio && !splashAudio.paused) {
          const splashProgress = Math.min(1, elapsed / fadeOutDuration);
          splashAudio.volume = Math.max(0, initialSplashVol * (1 - splashProgress));
          if (splashProgress >= 1) {
            splashAudio.pause();
            splashAudio.currentTime = 0;
          }
        }

        // Fade in main
        if (mainAudio) {
          const mainProgress = Math.min(1, elapsed / fadeInDuration);
          mainAudio.volume = Math.min(targetVol, targetVol * mainProgress);
        }

        if (elapsed < Math.max(fadeOutDuration, fadeInDuration)) {
          requestAnimationFrame(fadeStep);
        } else {
          if (mainAudio) mainAudio.volume = targetVol;
          if (splashAudio) splashAudio.pause();
        }
      };

      requestAnimationFrame(fadeStep);
      return true;
    } catch (err) {
      console.warn('Crossfade to main audio failed:', err);
      if (splashAudio) {
        splashAudio.pause();
      }
      return false;
    }
  }, [volume, isMuted]);

  /**
   * Direct Play / Pause for the Main Website Audio
   */
  const playMusic = useCallback(async (): Promise<boolean> => {
    const audio = mainAudioRef.current;
    if (!audio) return false;

    try {
      setIsLoading(true);
      setError(null);
      setActiveSource('main');
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;

      await audio.play();

      setIsPlaying(true);
      setIsLoading(false);
      return true;
    } catch (err: unknown) {
      console.error('Main audio playback failed:', err);
      setIsPlaying(false);
      setIsLoading(false);
      setError('Audio playback failed');
      return false;
    }
  }, [volume, isMuted]);

  const pauseMusic = useCallback(() => {
    if (activeSource === 'splash' && splashAudioRef.current) {
      splashAudioRef.current.pause();
    } else if (mainAudioRef.current) {
      mainAudioRef.current.pause();
    }
    setIsPlaying(false);
    setIsLoading(false);
  }, [activeSource]);

  const togglePlay = useCallback(async () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      await playMusic();
    }
  }, [isPlaying, pauseMusic, playMusic]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
    if (activeSource === 'main' && mainAudioRef.current) {
      mainAudioRef.current.volume = clamped;
    } else if (activeSource === 'splash' && splashAudioRef.current) {
      splashAudioRef.current.volume = clamped;
    }
  }, [isMuted, activeSource]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      const effective = next ? 0 : volume;
      if (mainAudioRef.current) {
        mainAudioRef.current.muted = next;
        mainAudioRef.current.volume = effective;
      }
      if (splashAudioRef.current) {
        splashAudioRef.current.muted = next;
        splashAudioRef.current.volume = effective;
      }
      return next;
    });
  }, [volume]);

  const seek = useCallback((seconds: number) => {
    if (mainAudioRef.current) {
      mainAudioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
    }
  }, []);

  const switchTrack = useCallback(async (index: number): Promise<boolean> => {
    const audio = mainAudioRef.current;
    if (!audio || !MAIN_TRACKS[index]) return false;

    setCurrentTrackIndex(index);
    setCurrentTime(0);
    audio.src = MAIN_TRACKS[index].src;
    audio.load();

    try {
      setIsLoading(true);
      await audio.play();
      setIsPlaying(true);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.warn('Switch track play failed:', err);
      setIsPlaying(false);
      setIsLoading(false);
      return false;
    }
  }, []);

  return (
    <MusicContext.Provider
      value={{
        activeSource,
        isPlaying,
        isLoading,
        volume,
        isMuted,
        currentTime,
        duration,
        currentTrackIndex,
        currentTrack,
        error,
        playSplashMusic,
        transitionToMainMusic,
        playMusic,
        pauseMusic,
        togglePlay,
        setVolume,
        toggleMute,
        seek,
        switchTrack,
      }}
    >
      {/* 1. Dedicated Persistent Splash Audio Element (Track 1) */}
      <audio
        ref={splashAudioRef}
        src={SPLASH_TRACK.src}
        preload="auto"
        loop
        playsInline
        className="hidden"
      >
        <source src="/audio/splash-intro.mp3" type="audio/mpeg" />
        <source src="/audio/splash-intro.wav" type="audio/wav" />
      </audio>

      {/* 2. Dedicated Persistent Main Website Café Audio Element (Track 2) */}
      <audio
        ref={mainAudioRef}
        src={currentTrack.src}
        preload="auto"
        loop
        playsInline
        className="hidden"
      >
        <source src="/audio/cafe-groove.mp3" type="audio/mpeg" />
        <source src="/audio/cafe-groove.wav" type="audio/wav" />
      </audio>

      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
