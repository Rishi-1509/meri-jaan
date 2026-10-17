import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { RotateCcw, BookOpen, Camera, Sparkles } from 'lucide-react';
import { BubuDudu } from '../components/BubuDudu';

interface FinalLoveNoteSectionProps {
  onReliveStory: () => void;
  onReadLetter: () => void;
  onVisitMemories: () => void;
}

export const FinalLoveNoteSection: React.FC<FinalLoveNoteSectionProps> = ({
  onReliveStory,
  onReadLetter,
  onVisitMemories,
}) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto z-10 text-center select-none">
      {/* Soft Romantic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-[#542839]/40 via-[#D98C9B]/20 to-[#D8B778]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Gentle Floating Bubu & Dudu Holding Heart */}
      <div className="relative inline-flex flex-col items-center justify-center mb-8 animate-float">
        <BubuDudu variant="holding-heart" size="lg" />
        <span className="font-script-romantic text-base text-[#F4C7CF] mt-1">Bubu & Dudu Forever ❤️</span>
      </div>

      {/* Closing Poetic Reflections */}
      <div className="max-w-2xl mx-auto">
        <p className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl text-[#FFF8F0] font-normal leading-relaxed tracking-wide mb-6">
          “Of all the little moments life could have given me, I'm grateful for the ones that became our memories.”
        </p>

        <p className="font-serif-romantic text-lg sm:text-xl text-[#D8B778] italic font-light mb-8">
          “And this is just one more page in a story that still has room to grow.”
        </p>

        {/* Final Birthday Greeting & Signature */}
        <div className="my-8 py-6 border-y border-[#D8B778]/20">
          <h3 className="font-serif-romantic text-3xl sm:text-5xl text-[#F4C7CF] font-medium tracking-tight mb-3">
            Happy Birthday, {siteConfig.herName}. ❤️
          </h3>

          <div className="flex flex-col items-center mt-4">
            <span className="font-serif italic text-sm text-[#DAD5F2]/70">With all my love,</span>
            <span className="font-calligraphy text-4xl sm:text-5xl text-[#D8B778] font-bold mt-1">
              {siteConfig.myName}
            </span>
          </div>
        </div>

        {/* Replay and Navigation Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            type="button"
            onClick={onReliveStory}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D98C9B] to-[#D8B778] text-[#17172F] text-xs font-serif-romantic font-bold tracking-widest uppercase shadow-md hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Relive our story</span>
          </button>

          <button
            type="button"
            onClick={onReadLetter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F0] border border-white/20 text-xs font-serif-romantic tracking-widest uppercase transition-all hover:scale-105"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#D8B778]" />
            <span>Read the letter again</span>
          </button>

          <button
            type="button"
            onClick={onVisitMemories}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F0] border border-white/20 text-xs font-serif-romantic tracking-widest uppercase transition-all hover:scale-105"
          >
            <Camera className="w-3.5 h-3.5 text-[#F4C7CF]" />
            <span>Visit our memories</span>
          </button>
        </div>

        {/* Discreet Footer Trademark */}
        <div className="mt-16 text-center text-xs text-[#DAD5F2]/40 font-mono flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#D8B778]" />
          <span>Built with love by {siteConfig.myName} for {siteConfig.herName}</span>
        </div>
      </div>
    </section>
  );
};
