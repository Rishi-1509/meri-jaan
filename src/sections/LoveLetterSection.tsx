import React, { useState } from 'react';
import { loveLetterData } from '../data/loveLetter';
import { Mail, Heart, Sparkles, Eye, BookOpen, Feather, Key } from 'lucide-react';
import { BubuDudu } from '../components/BubuDudu';

export const LoveLetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedParagraphs, setRevealedParagraphs] = useState<number>(1);
  const [selectedHintId, setSelectedHintId] = useState<string | null>(null);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  const handleReadInstantly = () => {
    setIsOpen(true);
    setRevealedParagraphs(loveLetterData.paragraphs.length);
  };

  const handleNextParagraph = () => {
    if (revealedParagraphs < loveLetterData.paragraphs.length) {
      setRevealedParagraphs((prev) => prev + 1);
    }
  };

  const handleToggleHint = (id: string) => {
    setSelectedHintId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <Feather className="w-3.5 h-3.5" />
          <span>Private Words For Her 19th Birthday</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          A Letter For Your Heart
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2">
          {loveLetterData.teaserPrompt}
        </p>
      </div>

      {/* Sealed Envelope State */}
      {!isOpen ? (
        <div className="flex flex-col items-center">
          <div
            onClick={handleOpenEnvelope}
            className="group relative w-[320px] sm:w-[420px] max-w-[calc(100vw-40px)] h-[220px] sm:h-[260px] bg-[#FFF8F0] rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-2 border-[#D98C9B]/40 cursor-pointer overflow-hidden p-6 flex flex-col justify-between transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 paper-texture"
          >
            {/* Envelope Flap Lines */}
            <div className="absolute inset-0 border-t-[110px] sm:border-t-[130px] border-t-[#F4C7CF]/30 border-l-[160px] sm:border-l-[210px] border-l-transparent border-r-[160px] sm:border-r-[210px] border-r-transparent pointer-events-none" />

            {/* Vintage Stamp */}
            <div className="absolute top-4 right-4 w-12 h-14 border-2 border-dashed border-[#542839]/40 bg-[#FFF8F0] flex flex-col items-center justify-center p-1 rounded-sm shadow-sm rotate-2">
              <Sparkles className="w-4 h-4 text-[#D8B778]" />
              <span className="text-[8px] font-mono uppercase tracking-tighter text-[#542839]/60 mt-1">19TH B'DAY</span>
            </div>

            {/* Recipient Handwritten Label */}
            <div className="relative z-10 pt-10">
              <span className="text-xs font-serif-romantic tracking-widest text-[#542839]/60 uppercase">To My Meri Jaan:</span>
              <p className="font-calligraphy text-2xl sm:text-3xl text-[#542839] tracking-wide mt-1">
                Apeksha (Bubu)
              </p>
            </div>

            {/* Wax Seal Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 rounded-full bg-[#542839] border-2 border-[#D8B778]/60 shadow-[0_4px_12px_rgba(84,40,57,0.7)] flex flex-col items-center justify-center text-[#FFF8F0] group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-[#F4C7CF] text-[#F4C7CF]" />
                <span className="text-[9px] font-serif-romantic tracking-widest uppercase mt-0.5">
                  {loveLetterData.sealInitials || 'R & A'}
                </span>
              </div>
            </div>

            {/* Envelope Bottom Bar */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-serif-romantic text-[#542839]/60">
              <span>Sealed with love</span>
              <span>Tap wax seal to open</span>
            </div>
          </div>

          {/* Quick Read Button */}
          <button
            type="button"
            onClick={handleReadInstantly}
            className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#DAD5F2]/70 hover:text-white transition-colors underline font-sans"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Read instantly (skip animation)</span>
          </button>
        </div>
      ) : (
        /* Unfolded Letter Parchment */
        <div className="relative bg-[#FFF8F0] text-[#542839] rounded-2xl p-6 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-4 border-[#D98C9B]/30 paper-texture animate-fadeIn">
          {/* Decorative Bubu & Dudu in Letter Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#542839]/15 mb-6">
            <span className="text-xs font-serif-romantic tracking-widest uppercase text-[#D98C9B]">
              A Birthday Love Letter • 19 Years of Sunshine
            </span>
            <BubuDudu variant="cuddle" size="sm" className="w-10 h-10" />
          </div>

          {/* Letter Salutation */}
          <h3 className="font-calligraphy text-2xl sm:text-4xl text-[#542839] mb-8 font-semibold leading-tight">
            {loveLetterData.salutation}
          </h3>

          {/* Paragraphs with Smooth Fade */}
          <div className="flex flex-col gap-6 font-serif-romantic text-lg sm:text-xl leading-relaxed text-[#542839]/90 tracking-wide">
            {loveLetterData.paragraphs.slice(0, revealedParagraphs).map((para, idx) => (
              <p key={`para-${idx}`} className="animate-fadeIn">
                {para}
              </p>
            ))}
          </div>

          {/* Read More Paragraphs Control */}
          {revealedParagraphs < loveLetterData.paragraphs.length && (
            <div className="mt-8 pt-4 border-t border-[#542839]/15 flex items-center justify-between">
              <span className="text-xs font-serif-romantic text-[#542839]/60 italic">
                Page {revealedParagraphs} of {loveLetterData.paragraphs.length}
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReadInstantly}
                  className="text-xs text-[#542839]/60 hover:text-[#542839] underline font-sans"
                >
                  Show full letter
                </button>
                <button
                  type="button"
                  onClick={handleNextParagraph}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#542839] text-[#FFF8F0] text-xs font-serif-romantic tracking-wider uppercase shadow-md hover:bg-[#D98C9B] transition-colors"
                >
                  <span>Continue reading</span>
                  <BookOpen className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* HINT WORDS SECTION (Revealed when all paragraphs read) */}
          {revealedParagraphs >= loveLetterData.paragraphs.length && (
            <div className="mt-12 pt-8 border-t-2 border-dashed border-[#542839]/20 animate-fadeIn">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-4 h-4 text-[#D8B778]" />
                <h4 className="font-serif-romantic text-lg sm:text-xl font-semibold text-[#542839] tracking-wide">
                  {loveLetterData.hintWordsIntro}
                </h4>
              </div>
              <p className="text-xs font-sans text-[#542839]/70 mb-5">
                Each of these words has a private memory attached that only you and I understand. Tap to light up the memory:
              </p>

              {/* Interactive Hint Pills Grid */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {loveLetterData.hintWords.map((item) => {
                  const isSelected = selectedHintId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleHint(item.id)}
                      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-serif-romantic tracking-wide transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#542839] text-[#FFF8F0] border-[#D8B778] scale-105 shadow-md'
                          : 'bg-white/60 hover:bg-[#F4C7CF]/30 text-[#542839] border-[#D98C9B]/40 hover:border-[#542839]'
                      }`}
                    >
                      <span>{item.emoji}</span>
                      <span className="font-medium lowercase">{item.word}</span>
                      {isSelected && (
                        <Heart className="w-3 h-3 text-[#F4C7CF] fill-[#F4C7CF] animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedHintId && (
                <div className="mt-4 p-3 rounded-xl bg-[#F4C7CF]/30 border border-[#D98C9B]/40 text-center animate-fadeIn">
                  <p className="font-script-romantic text-lg text-[#542839]">
                    ✨ A private memory etched deep in our hearts... Only Bubu & Dudu know the full story behind this! ❤️
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Signature Block (When all revealed) */}
          {revealedParagraphs >= loveLetterData.paragraphs.length && (
            <div className="mt-12 pt-8 border-t border-[#542839]/20 flex flex-col items-end text-right animate-fadeIn">
              <p className="font-serif italic text-base text-[#542839]/70">
                {loveLetterData.signatureSignOff}
              </p>
              <p className="font-calligraphy text-3xl sm:text-4xl text-[#542839] font-bold mt-1">
                {loveLetterData.signatureName}
              </p>

              {loveLetterData.postScript && (
                <div className="mt-6 p-4 rounded-xl bg-[#F4C7CF]/20 border border-[#D98C9B]/30 max-w-lg self-start text-left">
                  <p className="text-sm sm:text-base font-script-romantic text-[#542839] font-medium leading-relaxed">
                    {loveLetterData.postScript}
                  </p>
                </div>
              )}

              {/* Close / Fold Back Letter */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#542839]/60 hover:text-[#542839] underline self-center font-sans"
              >
                <Mail className="w-3 h-3" />
                <span>Fold letter back into envelope</span>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
