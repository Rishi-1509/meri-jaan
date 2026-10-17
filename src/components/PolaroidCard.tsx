import React, { useState } from 'react';
import type { GalleryPhoto } from '../data/gallery';
import { MissingPhotoFallback } from './MissingPhotoFallback';
import { MapPin, Calendar, Heart } from 'lucide-react';

interface PolaroidCardProps {
  photo: GalleryPhoto;
  onClick?: () => void;
  showTape?: boolean;
  priority?: boolean;
  showCaption?: boolean;
  showMetadata?: boolean;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  photo,
  onClick,
  showTape = true,
  showCaption = false,
  showMetadata = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imgSrc, setImgSrc] = useState(photo.src);

  const handleImageError = () => {
    if (imgSrc.startsWith('/images/memories/')) {
      setImgSrc(imgSrc.replace('/images/memories/', '/memories/'));
    } else if (imgSrc.startsWith('/memories/')) {
      setImgSrc(imgSrc.replace('/memories/', '/images/memories/'));
    } else {
      setHasError(true);
    }
  };

  // Dynamic tilt for scrapbook aesthetic
  const rotation = photo.rotation ?? 0;

  return (
    <div
      onClick={onClick}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      className="group relative cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:rotate-0 hover:z-20 w-full"
    >
      {/* Washi tape sticker */}
      {showTape && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#F4C7CF]/60 backdrop-blur-[1px] border border-white/20 shadow-sm z-10 rotate-[-1.5deg] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
          style={{
            clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
          }}
        />
      )}

      {/* Polaroid frame */}
      <div className={`bg-[#FFF8F0] p-3 rounded-sm shadow-[0_10px_25px_-5px_rgba(0,0,0,0.35),0_4px_10px_-2px_rgba(0,0,0,0.2)] border border-[#D98C9B]/30 flex flex-col ${showCaption || showMetadata ? 'pb-4' : 'pb-6'}`}>
        {/* Image wrapper */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#2D1B36] rounded-sm">
          {!hasError ? (
            <img
              src={imgSrc}
              alt={photo.alt}
              loading="lazy"
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <MissingPhotoFallback
              id={photo.id}
              caption={photo.caption}
              category={photo.category}
              aspectRatio="square"
            />
          )}

          {/* Quick like heart interaction */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label="Favorite memory"
            className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
              isLiked
                ? 'bg-[#542839] text-[#F4C7CF] scale-110'
                : 'bg-black/30 text-white/70 hover:text-white hover:scale-105'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isLiked ? 'fill-[#F4C7CF]' : ''}`}
            />
          </button>
        </div>

        {/* Optional Polaroid Caption & Metadata (hidden by default) */}
        {(showCaption || showMetadata) && (
          <div className="pt-3 px-1 flex flex-col justify-between min-h-[50px]">
            {showCaption && (
              <p className="font-script-romantic text-lg leading-tight text-[#542839] tracking-wide line-clamp-2">
                {photo.caption}
              </p>
            )}

            {showMetadata && (
              <div className="flex items-center justify-between text-[11px] text-[#542839]/65 pt-2 border-t border-[#542839]/10 font-sans mt-2">
                {photo.date ? (
                  <span className="inline-flex items-center gap-1 font-serif-romantic text-xs italic">
                    <Calendar className="w-3 h-3 text-[#D98C9B]" />
                    {photo.date}
                  </span>
                ) : (
                  <span className="font-serif-romantic text-xs italic text-[#D98C9B]">
                    {photo.category}
                  </span>
                )}

                {photo.location && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#542839]/60">
                    <MapPin className="w-2.5 h-2.5" />
                    {photo.location}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
