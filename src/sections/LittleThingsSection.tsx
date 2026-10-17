import React, { useState } from 'react';
import { complimentCards } from '../data/compliments';
import { Sparkles, Heart, Sun, Coffee, Compass, Star, HelpCircle } from 'lucide-react';

export const LittleThingsSection: React.FC = () => {
  const [openedCards, setOpenedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setOpenedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#F4C7CF]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#D98C9B] fill-[#D98C9B]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#D8B778]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#D8B778]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#DAD5F2]" />;
      case 'Star':
        return <Star className="w-5 h-5 text-[#D8B778] fill-[#D8B778]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F4C7CF]" />;
    }
  };

  return (
    <section id="little-things" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <Heart className="w-3.5 h-3.5 fill-[#D8B778]" />
          <span>Hidden Notes For You</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          It's the little things about you...
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2 max-w-md mx-auto">
          Tap each note to unfold a personal message I treasure.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complimentCards.map((card) => {
          const isOpen = Boolean(openedCards[card.id]);

          return (
            <div
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className="group cursor-pointer perspective-1000 min-h-[220px]"
            >
              <div
                className={`relative w-full h-full rounded-2xl transition-all duration-500 transform-gpu p-6 flex flex-col justify-between border shadow-lg ${
                  isOpen
                    ? 'bg-[#FFF8F0] text-[#542839] border-[#D98C9B]/50 scale-[1.02] shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
                    : 'bg-[#17172F]/90 text-[#FFF8F0] border-[#D8B778]/30 hover:border-[#D8B778]/60 hover:bg-[#281430]/90 backdrop-blur-md'
                }`}
              >
                {/* Top Bar with Icon and Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-current/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                      {renderIcon(card.iconName)}
                    </div>
                    <span
                      className={`text-xs font-serif-romantic tracking-widest uppercase font-semibold ${
                        isOpen ? 'text-[#D98C9B]' : 'text-[#D8B778]'
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono opacity-60">
                    {isOpen ? 'Tap to fold' : 'Tap to open'}
                  </span>
                </div>

                {/* Content Area */}
                <div className="py-4">
                  {!isOpen ? (
                    <div>
                      <p className="font-serif-romantic text-xl font-medium tracking-wide leading-snug">
                        {card.prompt}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-[#D8B778] font-script-romantic text-base">
                        <HelpCircle className="w-4 h-4 text-[#D8B778]" />
                        <span>Click to reveal note</span>
                      </div>
                    </div>
                  ) : (
                    <div className="animate-fadeIn">
                      <p className="font-script-romantic text-xl leading-relaxed text-[#542839]">
                        {card.revealedMessage}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-2 border-t border-current/10 flex items-center justify-between text-[11px] opacity-75 font-serif-romantic italic">
                  <span>Forever in my heart</span>
                  <Heart className={`w-3.5 h-3.5 ${isOpen ? 'fill-[#D98C9B] text-[#D98C9B]' : 'text-[#D8B778]'}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
