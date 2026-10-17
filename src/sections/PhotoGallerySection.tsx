import React, { useState } from 'react';
import {
  galleryPhotos,
  galleryCategories,
  type GalleryCategory,
  type GalleryPhoto,
} from '../data/gallery';
import { PolaroidCard } from '../components/PolaroidCard';
import { Camera, Heart } from 'lucide-react';

interface PhotoGallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto, index: number) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({ onPhotoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');

  const filteredPhotos =
    selectedCategory === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto z-10 select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D8B778]/10 border border-[#D8B778]/30 text-xs text-[#D8B778] tracking-widest uppercase font-serif-romantic mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Album of Memories ❤️</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-5xl font-normal text-[#FFF8F0] tracking-tight">
          Our Album of Memories
        </h2>
        <p className="font-script-romantic text-lg sm:text-xl text-[#F4C7CF] mt-2 max-w-lg mx-auto">
          A collection of all our precious dates, endless hugs, and sweet moments. Click any photo to open our memories album.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-serif-romantic tracking-wider uppercase transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#D98C9B] to-[#D8B778] text-[#17172F] font-bold shadow-lg scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Main Responsive Scrapbook Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-start">
        {filteredPhotos.map((photo, index) => {
          const globalIndex = galleryPhotos.findIndex((p) => p.id === photo.id);
          return (
            <div key={photo.id} className="w-full flex justify-center">
              <PolaroidCard
                photo={photo}
                onClick={() => onPhotoClick(photo, globalIndex >= 0 ? globalIndex : index)}
              />
            </div>
          );
        })}
      </div>

      {/* Sweet Counter Footer */}
      <div className="mt-16 text-center">
        <p className="font-script-romantic text-xl text-[#F4C7CF] flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 fill-[#F4C7CF]" />
          <span>{galleryPhotos.length} cherished photographs and a lifetime still ahead</span>
          <Heart className="w-4 h-4 fill-[#F4C7CF]" />
        </p>
      </div>
    </section>
  );
};
