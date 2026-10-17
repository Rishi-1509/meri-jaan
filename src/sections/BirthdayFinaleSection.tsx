import React, { useState } from 'react';
import { CakeAndCandles } from '../components/CakeAndCandles';
import { siteConfig } from '../data/siteConfig';
import { galleryPhotos, type GalleryPhoto } from '../data/gallery';
import { MissingPhotoFallback } from '../components/MissingPhotoFallback';
import { Sparkles, Heart } from 'lucide-react';
import { BubuDudu } from '../components/BubuDudu';

interface BirthdayFinaleSectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const BirthdayFinaleSection: React.FC<BirthdayFinaleSectionProps> = ({ onPhotoClick }) => {
  const [wishMade, setWishMade] = useState(false);
  const [collageImgErrors, setCollageImgErrors] = useState<Record<string, boolean>>({});

  // 4 highlight photos for the finale collage
  const finalePhotos = galleryPhotos.slice(0, 4);

  const handleCollageError = (id: string) => {
    setCollageImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="birthday" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10 select-none">
      {/* Cinematic Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#542839]/50 via-[#D98C9B]/25 to-[#D8B778]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-8">
        {/* Bubu and Dudu Birthday Party Hat Mascot */}
        <div className="flex justify-center mb-4">
          <BubuDudu variant="birthday" size="lg" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/15 border border-[#D8B778]/40 text-xs sm:text-sm text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#D8B778]" />
          <span>The Birthday Celebration ✨</span>
        </div>

        <h2 className="font-serif-romantic text-4xl sm:text-6xl font-normal text-[#FFF8F0] tracking-tight mb-2">
          Happy Birthday, <span className="font-serif italic font-semibold text-[#F4C7CF]">{siteConfig.herName}</span> ❤️
        </h2>

        {siteConfig.birthdayDate && (
          <p className="font-serif-romantic text-base sm:text-lg text-[#D8B778] italic">
            Celebrating the most special day • {siteConfig.birthdayDate}
          </p>
        )}
      </div>

      {/* Interactive Cake and Candle Scene */}
      <CakeAndCandles onWishMade={() => setWishMade(true)} />

      {/* Memory Collage Highlight Revealed After Blowing Candles */}
      {wishMade && (
        <div className="mt-16 animate-fadeIn">
          <div className="text-center mb-8">
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-[#D8B778] font-medium tracking-wide">
              A Collage of Our Sweetest Days
            </h3>
            <p className="font-script-romantic text-lg text-[#F4C7CF] mt-1">
              Just a few of the thousands of smiles you’ve gifted me.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {finalePhotos.map((photo, idx) => (
              <div
                key={`finale-${photo.id}`}
                onClick={() => onPhotoClick(photo)}
                style={{ transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})` }}
                className="group relative cursor-pointer bg-[#FFF8F0] p-2.5 rounded-sm shadow-xl border border-[#D98C9B]/30 hover:scale-105 hover:rotate-0 transition-all duration-300"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#2D1B36] rounded-xs">
                  {!collageImgErrors[photo.id] ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      onError={() => handleCollageError(photo.id)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <MissingPhotoFallback
                      id={photo.id}
                      caption={photo.caption}
                      category={photo.category}
                      aspectRatio="square"
                    />
                  )}
                </div>
                <p className="font-script-romantic text-sm text-[#542839] truncate mt-2 text-center">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-serif-romantic text-sm text-[#DAD5F2]/80 flex items-center justify-center gap-1.5">
              <Heart className="w-4 h-4 text-[#D98C9B] fill-[#D98C9B]" />
              <span>Here is to making endless more memories together this year</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
