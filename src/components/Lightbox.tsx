import React, { useEffect, useState, useCallback, useRef } from 'react';
import type { GalleryPhoto } from '../data/gallery';
import { MissingPhotoFallback } from './MissingPhotoFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [imgError, setImgError] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activePhoto = currentIndex !== null ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null || photos.length === 0) return;
    setImgError(false);
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null || photos.length === 0) return;
    setImgError(false);
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, handlePrev, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (currentIndex === null || !activePhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 select-none animate-fadeIn"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[#FFF8F0] z-20">
        <div className="flex items-center gap-3">
          <span className="font-serif-romantic text-lg sm:text-xl text-[#D8B778] tracking-widest uppercase">
            Memory {currentIndex + 1} of {photos.length}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#D98C9B]/20 border border-[#D98C9B]/40 text-xs text-[#F4C7CF]">
            {activePhoto.category}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8F0] transition-colors border border-white/20 focus:outline-none"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous photograph"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-[#D98C9B]/80 text-white transition-all border border-white/10 z-20 backdrop-blur-md hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next photograph"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-[#D98C9B]/80 text-white transition-all border border-white/10 z-20 backdrop-blur-md hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Content Modal */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[65vh] w-auto overflow-hidden rounded-xl shadow-2xl border border-[#D8B778]/30 bg-[#17172F]">
          {!imgError ? (
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              onError={() => setImgError(true)}
              className="max-h-[78vh] w-auto max-w-full object-contain mx-auto transition-opacity duration-300"
            />
          ) : (
            <div className="w-[340px] sm:w-[480px]">
              <MissingPhotoFallback
                id={activePhoto.id}
                category={activePhoto.category}
                aspectRatio="portrait"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
