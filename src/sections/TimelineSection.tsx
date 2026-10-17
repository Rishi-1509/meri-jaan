import React, { useState } from 'react';
import { timelineChapters } from '../data/timeline';
import { galleryPhotos, type GalleryPhoto } from '../data/gallery';
import { PolaroidCard } from '../components/PolaroidCard';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Bookmark,
} from 'lucide-react';

interface TimelineSectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onPhotoClick }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Filter out empty chapters if any
  const availableChapters = timelineChapters.filter(
    (ch) => ch.title.trim().length > 0 && ch.description.trim().length > 0
  );

  const currentChapter = availableChapters[activeChapterIndex] || availableChapters[0];

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev > 0 ? prev - 1 : availableChapters.length - 1));
  };

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev < availableChapters.length - 1 ? prev + 1 : 0));
  };

  // Find photos corresponding to this chapter
  const chapterPhotos = (currentChapter.photoIds || [])
    .map((id) => galleryPhotos.find((p) => p.id === id))
    .filter((p): p is GalleryPhoto => Boolean(p));

  return (
    <section id="story" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Our Relationship Scrapbook</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          The Pages of Our Story
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2 max-w-md mx-auto">
          Every chapter with you is a memory I never want to forget.
        </p>
      </div>

      {/* Chapter Indicator Bar */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto py-2 no-scrollbar">
        {availableChapters.map((chapter, idx) => (
          <button
            key={chapter.id}
            type="button"
            onClick={() => setActiveChapterIndex(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-serif-romantic tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
              idx === activeChapterIndex
                ? 'bg-gradient-to-r from-[#D98C9B] to-[#D8B778] text-[#17172F] font-bold shadow-md scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/60 border border-white/5'
            }`}
          >
            <Bookmark className="w-3 h-3" />
            <span>Ch. {chapter.chapterNumber}</span>
          </button>
        ))}
      </div>

      {/* Main Scrapbook Page Container */}
      <div className="relative bg-[#FFF8F0] text-[#17172F] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-4 border-[#D98C9B]/30 paper-texture overflow-hidden">
        {/* Decorative corner bookmarks */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#542839] transform rotate-45 translate-x-8 -translate-y-8 pointer-events-none shadow-md" />
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#D8B778] transform rotate-45 -translate-x-6 translate-y-6 pointer-events-none opacity-40" />

        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#542839]/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-serif-romantic font-semibold tracking-widest text-[#D98C9B] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER {currentChapter.chapterNumber} • {currentChapter.tag || 'MEMORY'}</span>
            </div>
            <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#542839] font-medium tracking-tight">
              {currentChapter.title}
            </h3>
            <p className="font-serif italic text-base text-[#542839]/70 mt-0.5">
              {currentChapter.subtitle}
            </p>
          </div>

          {currentChapter.date && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#542839]/10 text-xs font-serif-romantic text-[#542839] font-medium border border-[#542839]/20 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-[#D98C9B]" />
              <span>{currentChapter.date}</span>
            </div>
          )}
        </div>

        {/* Content Body: Narrative + Scrapbook Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Narrative Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#542839]/90 font-normal">
              {currentChapter.description}
            </p>

            {currentChapter.quote && (
              <blockquote className="mt-6 pl-4 border-l-2 border-[#D98C9B] font-serif-romantic text-lg sm:text-xl italic text-[#542839] bg-[#F4C7CF]/20 py-2 pr-3 rounded-r">
                {currentChapter.quote}
              </blockquote>
            )}
          </div>

          {/* Photos for this chapter */}
          <div className="lg:col-span-6 flex items-center justify-center">
            {chapterPhotos.length > 0 ? (
              <div
                className={`grid gap-4 w-full max-w-md ${
                  chapterPhotos.length === 1
                    ? 'grid-cols-1'
                    : 'grid-cols-2'
                }`}
              >
                {chapterPhotos.map((photo) => (
                  <div key={photo.id} className="w-full">
                    <PolaroidCard photo={photo} onClick={() => onPhotoClick(photo)} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full max-w-sm">
                <PolaroidCard
                  photo={{
                    id: `memory-${currentChapter.chapterNumber}`,
                    src: `/images/memories/memory-${currentChapter.chapterNumber}.jpg`,
                    caption: `Memories from Chapter ${currentChapter.chapterNumber}`,
                    category: 'Our Beginning',
                    alt: currentChapter.title,
                    rotation: -1,
                  }}
                  onClick={() =>
                    onPhotoClick({
                      id: `memory-${currentChapter.chapterNumber}`,
                      src: `/images/memories/memory-${currentChapter.chapterNumber}.jpg`,
                      caption: currentChapter.description,
                      category: 'Our Beginning',
                      alt: currentChapter.title,
                    })
                  }
                />
              </div>
            )}
          </div>
        </div>

        {/* Chapter Navigation Footer */}
        <div className="mt-10 pt-6 border-t border-[#542839]/15 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous chapter"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#542839]/10 hover:bg-[#542839]/20 text-[#542839] font-serif-romantic text-sm font-semibold transition-all hover:-translate-x-0.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Chapter</span>
          </button>

          <span className="font-serif-romantic text-xs sm:text-sm text-[#542839]/60">
            Page {activeChapterIndex + 1} of {availableChapters.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next chapter"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#542839] hover:bg-[#D98C9B] text-[#FFF8F0] font-serif-romantic text-sm font-semibold transition-all hover:translate-x-0.5 shadow-md"
          >
            <span>Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
