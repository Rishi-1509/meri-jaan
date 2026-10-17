import React, { useState } from 'react';
import { quizQuestions } from '../data/quiz';
import { Gamepad2, Sparkles, CheckCircle2, RotateCcw, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [showReaction, setShowReaction] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (showReaction) return;
    setSelectedOptionIdx(idx);
    setShowReaction(true);
  };

  const handleNextQuestion = () => {
    setSelectedOptionIdx(null);
    setShowReaction(false);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F4C7CF', '#D98C9B', '#D8B778', '#FFF8F0'],
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionIdx(null);
    setShowReaction(false);
    setIsCompleted(false);
  };

  const handleSkip = () => {
    setIsCompleted(true);
  };

  return (
    <section id="game" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>Our Little Game</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          How Well Do You Know Us?
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2">
          No wrong answers, just fond memories and laughs.
        </p>
      </div>

      {/* Main Game Container */}
      <div className="bg-[#17172F]/95 rounded-2xl border border-[#D8B778]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D98C9B]/10 rounded-full blur-3xl pointer-events-none" />

        {!isCompleted ? (
          <div>
            {/* Progress Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs font-serif-romantic text-[#D8B778] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
              </div>
              <button
                type="button"
                onClick={handleSkip}
                className="text-xs text-[#DAD5F2]/50 hover:text-white transition-colors underline font-sans"
              >
                Skip game
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-8">
              <div
                className="bg-gradient-to-r from-[#D98C9B] to-[#D8B778] h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-[#FFF8F0] font-medium tracking-wide mb-8 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="flex flex-col gap-3.5 mb-8">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOptionIdx === idx;

                return (
                  <button
                    key={`opt-${idx}`}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#D98C9B]/30 to-[#D8B778]/30 border-[#D8B778] shadow-md scale-[1.01]'
                        : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#D8B778]/40'
                    }`}
                  >
                    <span className="font-sans text-sm sm:text-base text-[#FFF8F0]/90 font-medium pr-4">
                      {option.text}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'border-[#D8B778] bg-[#D8B778] text-[#17172F]'
                          : 'border-white/20 group-hover:border-white/40'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reaction Feedback Card */}
            {showReaction && selectedOptionIdx !== null && (
              <div className="p-4 rounded-xl bg-[#FFF8F0] text-[#542839] border border-[#D98C9B]/50 mb-8 animate-fadeIn flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-script-romantic text-xl leading-snug">
                  {currentQ.options[selectedOptionIdx].reaction}
                </p>
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#542839] hover:bg-[#D98C9B] text-[#FFF8F0] text-xs font-serif-romantic tracking-widest uppercase transition-all shadow-md self-end sm:self-auto flex-shrink-0"
                >
                  <span>{currentIndex < quizQuestions.length - 1 ? 'Next Memory' : 'See Results'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Game Completed Card */
          <div className="py-8 text-center flex flex-col items-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D98C9B] to-[#D8B778] flex items-center justify-center mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-[#17172F] fill-[#17172F]" />
            </div>

            <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#D8B778] font-medium tracking-wide mb-3">
              You Passed With 100% Love! ❤️
            </h3>

            <p className="font-sans text-base text-[#FFF8F0]/85 max-w-md mx-auto mb-8 leading-relaxed">
              Every silly debate, late-night laugh, and shared milestone only proves one thing: you and I make the absolute greatest team.
            </p>

            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F0] border border-white/20 text-xs tracking-wider uppercase transition-all hover:scale-105"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#D8B778]" />
              <span>Play Quiz Again</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
