import React, { useState, useRef, useEffect } from 'react';
import type { SongConfig } from '../data/siteConfig';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

interface FloatingMusicPlayerProps {
  playlist?: readonly SongConfig[] | SongConfig[];
  autoStartTrigger?: boolean;
}

export const FloatingMusicPlayer: React.FC<FloatingMusicPlayerProps> = ({
  playlist = [],
  autoStartTrigger,
}) => {
  const safeList = playlist && playlist.length > 0 ? playlist : [
    {
      id: 'default-radhimaa',
      title: 'Radhimaa',
      artist: 'Sai Abhyankkar',
      localAudioSrc: '/audio/radhimaa.mp3',
    },
    {
      id: 'default-singari',
      title: 'Singari',
      artist: 'Sai Abhyankkar',
      localAudioSrc: '/audio/singari.mp3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = safeList[currentIndex] || safeList[0];

  // Toggle playback
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio playback error:', err);
        });
    }
  };

  // Auto start when user explicitly clicks "Step into our story"
  useEffect(() => {
    if (autoStartTrigger && !isPlaying) {
      togglePlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStartTrigger]);

  // When changing songs, reload and play if was already playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.load();
      audio.play().catch((err) => console.warn('Song change play error:', err));
    }
  }, [currentIndex]);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % safeList.length;
    setCurrentIndex(nextIdx);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + safeList.length) % safeList.length;
    setCurrentIndex(prevIdx);
    setCurrentTime(0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      {/* HTML5 Audio element */}
      {currentSong.localAudioSrc && (
        <audio
          ref={audioRef}
          src={currentSong.localAudioSrc}
          preload="auto"
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
              setDuration(audioRef.current.duration || 0);
            }
          }}
          onEnded={handleNext}
        />
      )}

      {/* Floating Widget Container */}
      <div className="fixed bottom-4 left-4 z-40 select-none">
        {/* Collapsed Pill */}
        {!isExpanded ? (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label="Open Soundtrack Player"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#17172F]/90 hover:bg-[#281430] border border-[#D8B778]/40 shadow-[0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-md text-[#FFF8F0] transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            {/* Visualizer bars or music icon */}
            <div className="flex items-center gap-0.5 h-4 w-4">
              {isPlaying ? (
                <>
                  <span className="w-1 bg-[#F4C7CF] h-3 animate-pulse rounded-full" />
                  <span className="w-1 bg-[#D8B778] h-4 animate-bounce rounded-full" />
                  <span className="w-1 bg-[#D98C9B] h-2 animate-pulse rounded-full" />
                </>
              ) : (
                <Music className="w-4 h-4 text-[#D8B778] group-hover:rotate-12 transition-transform" />
              )}
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif-romantic text-xs text-[#D8B778] tracking-wider leading-none">
                {isPlaying ? 'NOW PLAYING' : 'OUR SOUNDTRACK'}
              </span>
              <span className="text-xs text-[#FFF8F0] font-medium tracking-wide max-w-[130px] truncate leading-tight mt-0.5">
                {currentSong.title}
              </span>
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-1 rounded-full bg-[#D98C9B]/30 hover:bg-[#D98C9B] text-[#FFF8F0] transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </div>
          </button>
        ) : (
          /* Expanded Player Card */
          <div className="w-[300px] sm:w-[340px] max-w-[calc(100vw-32px)] p-4 rounded-2xl bg-[#17172F]/95 border border-[#D8B778]/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl text-[#FFF8F0] animate-fadeIn">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-[#D8B778]" />
                <span className="font-serif-romantic text-sm text-[#D8B778] tracking-widest uppercase">
                  Our Soundtrack
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Collapse player"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Song Info */}
            <div className="py-3 flex items-center justify-between">
              <div className="overflow-hidden pr-2">
                <h4 className="font-serif-romantic text-lg font-semibold text-[#FFF8F0] tracking-wide truncate">
                  {currentSong.title}
                </h4>
                <p className="text-xs text-[#F4C7CF]/80 font-sans truncate">
                  {currentSong.artist}
                </p>
              </div>

              {/* Streaming external link */}
              {currentSong.streamingUrl && (
                <a
                  href={currentSong.streamingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 rounded bg-[#D98C9B]/20 hover:bg-[#D98C9B]/40 text-[#F4C7CF] text-[11px] border border-[#D98C9B]/30 transition-colors flex-shrink-0"
                  title="Listen on official platform"
                >
                  <span>Listen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Progress bar */}
            {duration > 0 && (
              <div className="py-1">
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D98C9B] h-full transition-all duration-200"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/50 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            )}

            {/* Playback Controls */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => {
                    const newVol = parseFloat(e.target.value);
                    setVolume(newVol);
                    if (audioRef.current) audioRef.current.volume = newVol;
                  }}
                  className="w-16 accent-[#D98C9B] h-1 bg-white/20 rounded cursor-pointer"
                  aria-label="Volume slider"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous song"
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-3 rounded-full bg-[#D98C9B] hover:bg-[#F4C7CF] text-[#17172F] transition-all transform hover:scale-105 shadow-md font-bold"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next song"
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
