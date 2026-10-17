import React from 'react';
import { Camera, Heart, Sparkles } from 'lucide-react';

interface MissingPhotoFallbackProps {
  id: string;
  caption?: string;
  category?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const MissingPhotoFallback: React.FC<MissingPhotoFallbackProps> = ({
  id,
  caption,
  category = 'Our Memories',
  className = '',
  aspectRatio = 'square',
}) => {
  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'landscape'
      ? 'aspect-[16/10]'
      : 'aspect-square';

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-md bg-gradient-to-br from-[#2D1B36] via-[#1E1735] to-[#121124] border border-[#D8B778]/25 flex flex-col items-center justify-center p-4 text-center select-none shadow-inner group ${className}`}
    >
      {/* Delicate starry & glow particles */}
      <div className="absolute inset-0 bg-[radial-gradient(#D98C9B_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#D8B778]/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-[#D98C9B]/10 blur-2xl pointer-events-none" />

      {/* Center Icon badge */}
      <div className="relative mb-3 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#FFF8F0]/5 border border-[#D8B778]/40 flex items-center justify-center shadow-md backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
          <Camera className="w-6 h-6 text-[#F4C7CF]" />
          <Heart className="w-3.5 h-3.5 text-[#D8B778] absolute -top-1 -right-1 fill-[#D8B778]" />
        </div>
      </div>

      {/* Memory label */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF8F0]/10 border border-[#D8B778]/30 text-[10px] tracking-wider uppercase text-[#D8B778] font-medium mb-1">
        <Sparkles className="w-3 h-3" />
        <span>{category}</span>
      </div>

      <p className="font-serif-romantic text-base text-[#FFF8F0] tracking-wide font-medium">
        {id.replace('-', ' ').toUpperCase()}
      </p>

      <p className="font-script-romantic text-sm text-[#F4C7CF]/80 mt-1 max-w-[200px] line-clamp-2">
        {caption || 'Place your photograph here'}
      </p>

      {/* Path hint on hover */}
      <div className="mt-2 text-[10px] text-[#DAD5F2]/50 font-mono tracking-tight bg-black/20 px-2 py-0.5 rounded border border-white/5">
        public/images/memories/{id}.jpg
      </div>
    </div>
  );
};
