import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface CakeAndCandlesProps {
  onWishMade?: () => void;
}

export const CakeAndCandles: React.FC<CakeAndCandlesProps> = ({ onWishMade }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleMakeWish = () => {
    if (candlesBlown || isBlowing) return;
    setIsBlowing(true);

    // Short blowing interaction delay
    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);

      // Trigger Confetti & Gold Sparkles
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F4C7CF', '#D98C9B', '#D8B778', '#FFF8F0', '#DAD5F2'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#D8B778', '#F4C7CF', '#542839'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#D8B778', '#F4C7CF', '#542839'],
        });
      }, 350);

      if (onWishMade) onWishMade();
    }, 600);
  };

  const handleCelebrateAgain = () => {
    setCandlesBlown(false);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center select-none py-8">
      {/* SVG Handcrafted Birthday Cake */}
      <div className="relative w-[280px] sm:w-[360px] max-w-[calc(100vw-32px)] h-[280px] sm:h-[320px] flex items-center justify-center">
        {/* Glow behind cake */}
        <div
          className={`absolute inset-0 rounded-full bg-[#D8B778]/15 blur-3xl transition-opacity duration-1000 ${
            candlesBlown ? 'opacity-30' : 'opacity-100 animate-pulse'
          }`}
        />

        <svg
          viewBox="0 0 400 360"
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cake Stand */}
          <ellipse cx="200" cy="335" rx="140" ry="16" fill="#D8B778" opacity="0.3" />
          <ellipse cx="200" cy="330" rx="130" ry="14" fill="#542839" />
          <path d="M185 330 L188 350 L212 350 L215 330 Z" fill="#D8B778" opacity="0.6" />
          <ellipse cx="200" cy="350" rx="45" ry="6" fill="#D8B778" />

          {/* Tier 1 (Bottom Tier) */}
          <path
            d="M80 250 C80 235 320 235 320 250 L320 310 C320 325 80 325 80 310 Z"
            fill="#FFF8F0"
          />
          {/* Frosting layer bottom */}
          <ellipse cx="200" cy="250" rx="120" ry="14" fill="#F4C7CF" />
          {/* Drips bottom tier */}
          <path
            d="M80 250 Q100 270 120 250 Q140 275 160 250 Q180 280 200 250 Q220 275 240 250 Q260 280 280 250 Q300 270 320 250"
            fill="none"
            stroke="#D98C9B"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Decorative pearls */}
          <circle cx="110" cy="290" r="3.5" fill="#D8B778" />
          <circle cx="150" cy="295" r="3.5" fill="#D8B778" />
          <circle cx="200" cy="298" r="3.5" fill="#D8B778" />
          <circle cx="250" cy="295" r="3.5" fill="#D8B778" />
          <circle cx="290" cy="290" r="3.5" fill="#D8B778" />

          {/* Tier 2 (Top Tier) */}
          <path
            d="M120 180 C120 168 280 168 280 180 L280 240 C280 252 120 252 120 240 Z"
            fill="#FFF8F0"
          />
          <ellipse cx="200" cy="180" rx="80" ry="12" fill="#F4C7CF" />
          {/* Drips top tier */}
          <path
            d="M120 180 Q140 200 160 180 Q180 205 200 180 Q220 205 240 180 Q260 200 280 180"
            fill="none"
            stroke="#D98C9B"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Sugar Pearls top */}
          <circle cx="145" cy="220" r="3" fill="#D8B778" />
          <circle cx="180" cy="224" r="3" fill="#D8B778" />
          <circle cx="200" cy="225" r="3" fill="#D8B778" />
          <circle cx="220" cy="224" r="3" fill="#D8B778" />
          <circle cx="255" cy="220" r="3" fill="#D8B778" />

          {/* Candles */}
          {/* Left Candle */}
          <rect x="156" y="130" width="8" height="42" rx="3" fill="#DAD5F2" />
          <path d="M158 135 L162 140" stroke="#FFF8F0" strokeWidth="1.5" />
          <line x1="160" y1="130" x2="160" y2="122" stroke="#542839" strokeWidth="1.5" />

          {/* Center Candle */}
          <rect x="196" y="120" width="8" height="52" rx="3" fill="#F4C7CF" />
          <path d="M198 128 L202 133" stroke="#FFF8F0" strokeWidth="1.5" />
          <line x1="200" y1="120" x2="200" y2="112" stroke="#542839" strokeWidth="1.5" />

          {/* Right Candle */}
          <rect x="236" y="130" width="8" height="42" rx="3" fill="#DAD5F2" />
          <path d="M238 135 L242 140" stroke="#FFF8F0" strokeWidth="1.5" />
          <line x1="240" y1="130" x2="240" y2="122" stroke="#542839" strokeWidth="1.5" />

          {/* Candle Flames (Flickering SVG or Extinguished Smoke) */}
          {!candlesBlown ? (
            <g className="animate-flicker">
              {/* Left Flame */}
              <ellipse cx="160" cy="115" rx="5" ry="9" fill="#D8B778" />
              <ellipse cx="160" cy="116" rx="2.5" ry="5.5" fill="#FFF8F0" />
              <circle cx="160" cy="115" r="14" fill="#D8B778" opacity="0.3" filter="blur(3px)" />

              {/* Center Main Flame */}
              <ellipse cx="200" cy="105" rx="6" ry="11" fill="#D8B778" />
              <ellipse cx="200" cy="106" rx="3" ry="7" fill="#FFF8F0" />
              <circle cx="200" cy="105" r="18" fill="#D8B778" opacity="0.35" filter="blur(4px)" />

              {/* Right Flame */}
              <ellipse cx="240" cy="115" rx="5" ry="9" fill="#D8B778" />
              <ellipse cx="240" cy="116" rx="2.5" ry="5.5" fill="#FFF8F0" />
              <circle cx="240" cy="115" r="14" fill="#D8B778" opacity="0.3" filter="blur(3px)" />
            </g>
          ) : (
            /* Smoke puffs after blowing */
            <g className="animate-fadeIn opacity-70">
              <path
                d="M160 120 Q155 105 165 95 Q158 85 162 75"
                stroke="#DAD5F2"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M200 110 Q195 95 205 85 Q196 70 202 55"
                stroke="#DAD5F2"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M240 120 Q245 105 235 95 Q242 85 238 75"
                stroke="#DAD5F2"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Interactive Controls & Birthday Wish */}
      <div className="mt-6 flex flex-col items-center max-w-md w-full px-4">
        {!candlesBlown ? (
          <button
            type="button"
            onClick={handleMakeWish}
            disabled={isBlowing}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D98C9B] via-[#D8B778] to-[#F4C7CF] text-[#17172F] font-serif-romantic text-lg font-bold tracking-wide shadow-[0_10px_25px_rgba(216,183,120,0.35)] hover:shadow-[0_15px_35px_rgba(216,183,120,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-[#542839] group-hover:rotate-45 transition-transform" />
            <span>{isBlowing ? 'Blowing candle...' : 'Make a wish with me ✨'}</span>
            <Heart className="w-4 h-4 text-[#542839] fill-[#542839]" />
          </button>
        ) : (
          <div className="flex flex-col items-center animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8B778]/15 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your wish has been carried to the stars ✨</span>
            </div>

            <button
              type="button"
              onClick={handleCelebrateAgain}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F0] border border-white/20 text-xs tracking-wider uppercase transition-all duration-200 hover:scale-105"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#D8B778]" />
              <span>Celebrate again</span>
            </button>
          </div>
        )}
      </div>

      {/* Birthday Reveal Card */}
      {candlesBlown && (
        <div className="mt-8 max-w-2xl w-full mx-auto px-6 py-8 rounded-2xl bg-gradient-to-b from-[#2D1B36]/90 to-[#17172F]/95 border border-[#D8B778]/40 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <p className="font-serif-romantic text-2xl sm:text-3xl font-semibold text-[#D8B778] tracking-wide mb-4">
            Happy Birthday, {siteConfig.herName}! ❤️
          </p>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#FFF8F0]/90 whitespace-pre-line text-left sm:text-center">
            {siteConfig.birthdayMessage}
          </p>

          <div className="mt-6 pt-4 border-t border-[#D8B778]/20 flex items-center justify-between text-xs text-[#DAD5F2]/70 font-serif-romantic italic">
            <span>Special Birthday Surprise</span>
            <span>With all my love, {siteConfig.myName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
