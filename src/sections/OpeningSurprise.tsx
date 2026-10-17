import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ArrowDown, Heart } from 'lucide-react';
import { BubuDudu } from '../components/BubuDudu';

interface OpeningSurpriseProps {
  onEnter: () => void;
  onSkip: () => void;
}

export const OpeningSurprise: React.FC<OpeningSurpriseProps> = ({ onEnter, onSkip }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden z-10 py-12">
      {/* Cinematic Ambient Glow Behind Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#542839]/40 via-[#D98C9B]/20 to-[#D8B778]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Sparkle Elements */}
      <div className="absolute top-1/4 left-1/4 text-[#D8B778]/40 animate-pulse pointer-events-none">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-[#F4C7CF]/30 animate-pulse pointer-events-none delay-500">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-[#D8B778]/40 animate-pulse pointer-events-none delay-1000">
        <Heart className="w-4 h-4 fill-[#D8B778]/20" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        {/* Adorable Bubu & Dudu Cuddle Mascot */}
        <div className="mb-4 animate-float">
          <BubuDudu variant="cuddle" size="lg" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#D8B778]/30 text-[11px] font-script-romantic text-[#F4C7CF] mt-2 backdrop-blur-sm">
            <span>Bubu & Dudu's World</span>
            <Heart className="w-3 h-3 fill-[#F4C7CF]" />
          </div>
        </div>

        {/* Soft Monogram / Date pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF8F0]/10 border border-[#D8B778]/30 text-xs sm:text-sm text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-6 shadow-sm backdrop-blur-sm animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Private Digital World • For Her</span>
        </div>

        {/* Cinematic Headline Sequence */}
        <h1 className="font-serif-romantic text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FFF8F0] mb-3 leading-tight animate-fadeIn">
          Hey, <span className="font-serif italic font-semibold text-[#F4C7CF]">{siteConfig.herName}</span>... ❤️
        </h1>

        <p className="font-serif-romantic text-xl sm:text-2xl md:text-3xl text-[#D8B778] tracking-wide mb-4 font-light italic animate-fadeIn delay-150">
          “I made a little something for you.”
        </p>

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#FFF8F0]/80 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-fadeIn delay-300">
          {siteConfig.heroSubheading}
        </p>

        {/* Enter Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fadeIn delay-500">
          <button
            type="button"
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#D98C9B] via-[#D8B778] to-[#F4C7CF] text-[#17172F] font-serif-romantic text-lg sm:text-xl font-bold tracking-wider shadow-[0_10px_30px_rgba(216,183,120,0.35)] hover:shadow-[0_15px_40px_rgba(216,183,120,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-[#542839] group-hover:rotate-45 transition-transform" />
            <span>Step into our story ✨</span>
            <ArrowDown className="w-4 h-4 text-[#542839] group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Discreet Skip Intro */}
        <button
          type="button"
          onClick={onSkip}
          className="mt-6 text-xs text-[#DAD5F2]/50 hover:text-[#FFF8F0] tracking-wider uppercase underline underline-offset-4 transition-colors font-sans"
        >
          Skip intro & view everything
        </button>
      </div>
    </section>
  );
};
