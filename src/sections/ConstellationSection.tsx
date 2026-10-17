import React, { useState } from 'react';
import {
  constellationStars,
  constellationLines,
  type ConstellationStar,
} from '../data/constellation';
import { galleryPhotos, type GalleryPhoto } from '../data/gallery';
import { PolaroidCard } from '../components/PolaroidCard';
import { Sparkles, Star, X } from 'lucide-react';

interface ConstellationSectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const ConstellationSection: React.FC<ConstellationSectionProps> = ({ onPhotoClick }) => {
  const [selectedStar, setSelectedStar] = useState<ConstellationStar | null>(null);

  // Find memory for active star
  const activeMemory = selectedStar
    ? galleryPhotos.find((p) => p.id === selectedStar.memoryId)
    : null;

  return (
    <section id="constellation" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <Star className="w-3.5 h-3.5 fill-[#D8B778]" />
          <span>Written in the Stars</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          Our Constellation of Memories
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2 max-w-md mx-auto">
          Every star connects a memory that lights up our universe. Tap a star to inspect it.
        </p>
      </div>

      {/* Desktop / Tablet Interactive Celestial Canvas */}
      <div className="hidden md:block relative w-full h-[520px] rounded-3xl bg-gradient-to-b from-[#1E1735]/80 via-[#17172F]/90 to-[#121124] border border-[#D8B778]/30 shadow-2xl backdrop-blur-xl overflow-hidden p-6">
        {/* Constellation SVG Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {constellationLines.map((line, idx) => {
            const starFrom = constellationStars.find((s) => s.id === line.from);
            const starTo = constellationStars.find((s) => s.id === line.to);
            if (!starFrom || !starTo) return null;

            return (
              <line
                key={`line-${idx}`}
                x1={`${starFrom.x}%`}
                y1={`${starFrom.y}%`}
                x2={`${starTo.x}%`}
                y2={`${starTo.y}%`}
                stroke="rgba(216, 183, 120, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            );
          })}
        </svg>

        {/* Constellation Star Nodes */}
        {constellationStars.map((star) => {
          const isSelected = selectedStar?.id === star.id;
          const sizePx = star.size === 'lg' ? 24 : star.size === 'md' ? 18 : 14;

          return (
            <div
              key={star.id}
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              onClick={() => setSelectedStar(star)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
            >
              {/* Pulsing Aura */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'scale-150 bg-[#D98C9B]/50 blur-sm'
                    : 'bg-[#D8B778]/20 group-hover:scale-125'
                }`}
              />

              {/* Star Core Icon */}
              <div
                style={{ width: `${sizePx}px`, height: `${sizePx}px` }}
                className={`rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isSelected
                    ? 'bg-[#FFF8F0] shadow-[0_0_15px_#FFF8F0] scale-125'
                    : 'bg-[#D8B778] group-hover:scale-110 shadow-[0_0_10px_#D8B778]'
                }`}
              >
                <Sparkles className="w-2.5 h-2.5 text-[#17172F]" />
              </div>

              {/* Tooltip Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded bg-[#17172F]/90 border border-[#D8B778]/30 text-[11px] font-serif-romantic text-[#FFF8F0] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md backdrop-blur-sm">
                {star.name}
              </div>
            </div>
          );
        })}

        {/* Selected Memory Overlay Modal within Constellation Box */}
        {selectedStar && activeMemory && (
          <div className="absolute bottom-6 right-6 z-30 max-w-xs w-full bg-[#17172F]/95 rounded-2xl border border-[#D8B778]/40 p-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
              <span className="font-serif-romantic text-xs text-[#D8B778] uppercase tracking-wider">
                {selectedStar.name}
              </span>
              <button
                type="button"
                onClick={() => setSelectedStar(null)}
                aria-label="Close star details"
                className="p-1 rounded-full text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className="cursor-pointer group"
              onClick={() => onPhotoClick(activeMemory)}
            >
              <PolaroidCard photo={activeMemory} showTape={false} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile-Friendly Starry Memories Grid (Clean & Accessible on phones) */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {constellationStars.map((star) => {
          const mem = galleryPhotos.find((p) => p.id === star.memoryId);
          if (!mem) return null;

          return (
            <div
              key={`mobile-star-${star.id}`}
              onClick={() => onPhotoClick(mem)}
              className="p-4 rounded-xl bg-[#17172F]/90 border border-[#D8B778]/30 flex items-center gap-3 cursor-pointer hover:border-[#D8B778] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#D8B778]/15 border border-[#D8B778]/30 flex items-center justify-center flex-shrink-0 text-[#D8B778]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="font-serif-romantic text-sm font-semibold text-[#FFF8F0] truncate">
                  {star.name}
                </p>
                <p className="text-xs text-[#F4C7CF]/80 font-sans truncate">
                  {mem.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
