import React from 'react';

interface BubuDuduProps {
  variant?: 'cuddle' | 'birthday' | 'holding-heart' | 'peeking' | 'sticker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BubuDudu: React.FC<BubuDuduProps> = ({
  variant = 'cuddle',
  className = '',
  size = 'md',
}) => {
  const sizeClass =
    size === 'sm'
      ? 'w-12 h-12'
      : size === 'md'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : size === 'lg'
      ? 'w-36 h-36 sm:w-44 sm:h-44'
      : 'w-48 h-48 sm:w-60 sm:h-60';

  if (variant === 'birthday') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClass} ${className}`}>
        <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-lg" fill="none">
          {/* Confetti & sparkles around them */}
          <circle cx="25" cy="40" r="3" fill="#D8B778" opacity="0.8" />
          <circle cx="175" cy="35" r="3" fill="#F4C7CF" opacity="0.8" />
          <path d="M100 15 L102 20 L107 20 L103 23 L105 28 L100 25 L95 28 L97 23 L93 20 L98 20 Z" fill="#D8B778" />

          {/* DUDU (Brown Bear) on Right */}
          <g transform="translate(95, 45)">
            {/* Ears */}
            <circle cx="22" cy="18" r="14" fill="#8B5A2B" />
            <circle cx="22" cy="18" r="8" fill="#D2996E" />
            <circle cx="78" cy="18" r="14" fill="#8B5A2B" />
            <circle cx="78" cy="18" r="8" fill="#D2996E" />

            {/* Body */}
            <ellipse cx="50" cy="85" rx="35" ry="32" fill="#8B5A2B" />
            <ellipse cx="50" cy="88" rx="24" ry="22" fill="#D2996E" />

            {/* Head */}
            <circle cx="50" cy="48" r="38" fill="#8B5A2B" />
            {/* Snout */}
            <ellipse cx="50" cy="56" rx="16" ry="12" fill="#D2996E" />
            <ellipse cx="50" cy="52" rx="6" ry="4" fill="#3D2314" />
            <path d="M50 56 Q50 62 50 63 M46 62 Q50 66 54 62" stroke="#3D2314" strokeWidth="2" strokeLinecap="round" />

            {/* Eyes */}
            <circle cx="36" cy="42" r="4.5" fill="#2B1810" />
            <circle cx="38" cy="40" r="1.5" fill="#FFF" />
            <circle cx="64" cy="42" r="4.5" fill="#2B1810" />
            <circle cx="66" cy="40" r="1.5" fill="#FFF" />

            {/* Rosy Cheeks */}
            <circle cx="28" cy="52" r="6" fill="#D98C9B" opacity="0.6" />
            <circle cx="72" cy="52" r="6" fill="#D98C9B" opacity="0.6" />

            {/* Birthday Party Hat for Dudu */}
            <polygon points="50,2 35,30 65,30" fill="#D8B778" />
            <circle cx="50" cy="2" r="4" fill="#D98C9B" />
            <line x1="38" y1="22" x2="62" y2="22" stroke="#FFF8F0" strokeWidth="2" />
          </g>

          {/* BUBU (White Panda/Bear) on Left */}
          <g transform="translate(15, 45)">
            {/* Ears */}
            <circle cx="22" cy="18" r="14" fill="#2B262D" />
            <circle cx="22" cy="18" r="7" fill="#F4C7CF" />
            <circle cx="78" cy="18" r="14" fill="#2B262D" />
            <circle cx="78" cy="18" r="7" fill="#F4C7CF" />

            {/* Body */}
            <ellipse cx="50" cy="85" rx="35" ry="32" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />
            {/* Arms hugging */}
            <ellipse cx="65" cy="82" rx="14" ry="10" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1" transform="rotate(-15 65 82)" />

            {/* Head */}
            <circle cx="50" cy="48" r="38" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />

            {/* Snout */}
            <ellipse cx="50" cy="56" rx="14" ry="10" fill="#FFF" />
            <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#2B262D" />
            <path d="M50 55 Q50 60 50 61 M47 60 Q50 63 53 60" stroke="#2B262D" strokeWidth="1.8" strokeLinecap="round" />

            {/* Eyes */}
            <circle cx="36" cy="42" r="4.5" fill="#2B262D" />
            <circle cx="38" cy="40" r="1.5" fill="#FFF" />
            <circle cx="64" cy="42" r="4.5" fill="#2B262D" />
            <circle cx="66" cy="40" r="1.5" fill="#FFF" />

            {/* Pink Blushing Cheeks */}
            <circle cx="28" cy="52" r="7" fill="#F4C7CF" opacity="0.8" />
            <circle cx="72" cy="52" r="7" fill="#F4C7CF" opacity="0.8" />

            {/* Birthday Party Hat for Bubu */}
            <polygon points="50,2 35,30 65,30" fill="#D98C9B" />
            <circle cx="50" cy="2" r="4" fill="#D8B778" />
            <line x1="38" y1="20" x2="62" y2="20" stroke="#FFF8F0" strokeWidth="2" />
          </g>

          {/* Floating Heart between them */}
          <g className="animate-bounce" style={{ transformOrigin: '100px 30px' }}>
            <path
              d="M100 35 C100 25 88 20 88 32 C88 42 100 50 100 50 C100 50 112 42 112 32 C112 20 100 25 100 35 Z"
              fill="#D98C9B"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'holding-heart') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClass} ${className}`}>
        <svg viewBox="0 0 180 140" className="w-full h-full drop-shadow-md" fill="none">
          {/* BUBU on Left */}
          <g transform="translate(15, 25)">
            <circle cx="20" cy="18" r="12" fill="#2B262D" />
            <circle cx="20" cy="18" r="6" fill="#F4C7CF" />
            <circle cx="60" cy="18" r="12" fill="#2B262D" />
            <circle cx="40" cy="45" r="32" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />
            <ellipse cx="40" cy="75" rx="26" ry="24" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />
            <circle cx="30" cy="40" r="3.5" fill="#2B262D" />
            <circle cx="31" cy="39" r="1" fill="#FFF" />
            <circle cx="50" cy="40" r="3.5" fill="#2B262D" />
            <circle cx="51" cy="39" r="1" fill="#FFF" />
            <ellipse cx="40" cy="48" rx="4" ry="3" fill="#2B262D" />
            <circle cx="24" cy="48" r="5" fill="#F4C7CF" opacity="0.8" />
            <circle cx="56" cy="48" r="5" fill="#F4C7CF" opacity="0.8" />
          </g>

          {/* DUDU on Right */}
          <g transform="translate(85, 25)">
            <circle cx="20" cy="18" r="12" fill="#8B5A2B" />
            <circle cx="20" cy="18" r="6" fill="#D2996E" />
            <circle cx="60" cy="18" r="12" fill="#8B5A2B" />
            <circle cx="60" cy="18" r="6" fill="#D2996E" />
            <circle cx="40" cy="45" r="32" fill="#8B5A2B" />
            <ellipse cx="40" cy="75" rx="26" ry="24" fill="#8B5A2B" />
            <ellipse cx="40" cy="78" rx="18" ry="16" fill="#D2996E" />
            <circle cx="30" cy="40" r="3.5" fill="#2B1810" />
            <circle cx="31" cy="39" r="1" fill="#FFF" />
            <circle cx="50" cy="40" r="3.5" fill="#2B1810" />
            <circle cx="51" cy="39" r="1" fill="#FFF" />
            <ellipse cx="40" cy="48" rx="12" ry="9" fill="#D2996E" />
            <ellipse cx="40" cy="45" rx="4.5" ry="3" fill="#3D2314" />
            <circle cx="24" cy="48" r="5" fill="#D98C9B" opacity="0.6" />
            <circle cx="56" cy="48" r="5" fill="#D98C9B" opacity="0.6" />
          </g>

          {/* Big Shared Heart in Middle */}
          <g className="animate-pulse">
            <path
              d="M90 55 C90 38 70 30 70 50 C70 65 90 80 90 80 C90 80 110 65 110 50 C110 30 90 38 90 55 Z"
              fill="#D98C9B"
              stroke="#FFF8F0"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Default 'cuddle' variant
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeClass} ${className}`}>
      <svg viewBox="0 0 170 130" className="w-full h-full drop-shadow-md" fill="none">
        {/* DUDU (Brown Bear behind/cuddling) */}
        <g transform="translate(55, 15)">
          <circle cx="18" cy="18" r="13" fill="#8B5A2B" />
          <circle cx="18" cy="18" r="7" fill="#D2996E" />
          <circle cx="68" cy="18" r="13" fill="#8B5A2B" />
          <circle cx="68" cy="18" r="7" fill="#D2996E" />
          <circle cx="43" cy="45" r="34" fill="#8B5A2B" />
          <ellipse cx="43" cy="78" rx="28" ry="26" fill="#8B5A2B" />
          <circle cx="34" cy="40" r="3.5" fill="#2B1810" />
          <circle cx="54" cy="40" r="3.5" fill="#2B1810" />
          <ellipse cx="44" cy="48" rx="12" ry="8" fill="#D2996E" />
          <ellipse cx="44" cy="46" rx="4" ry="2.5" fill="#3D2314" />
          <circle cx="27" cy="49" r="5" fill="#D98C9B" opacity="0.5" />
          <circle cx="61" cy="49" r="5" fill="#D98C9B" opacity="0.5" />
        </g>

        {/* BUBU (White Panda hugging in front) */}
        <g transform="translate(25, 25)">
          <circle cx="16" cy="14" r="12" fill="#2B262D" />
          <circle cx="16" cy="14" r="6" fill="#F4C7CF" />
          <circle cx="60" cy="14" r="12" fill="#2B262D" />
          <circle cx="60" cy="14" r="6" fill="#F4C7CF" />
          <circle cx="38" cy="40" r="30" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />
          <ellipse cx="38" cy="70" rx="24" ry="22" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1.5" />

          {/* Happy squinty curved eyes */}
          <path d="M26 38 Q30 34 34 38" stroke="#2B262D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M44 38 Q48 34 52 38" stroke="#2B262D" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Little nose & smile */}
          <ellipse cx="39" cy="45" rx="3.5" ry="2.5" fill="#2B262D" />
          <path d="M36 49 Q39 52 42 49" stroke="#2B262D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Big Blush */}
          <circle cx="24" cy="46" r="6" fill="#F4C7CF" opacity="0.85" />
          <circle cx="54" cy="46" r="6" fill="#F4C7CF" opacity="0.85" />

          {/* Arm cuddling Dudu */}
          <ellipse cx="56" cy="62" rx="14" ry="8" fill="#FFFDF9" stroke="#E6E0D8" strokeWidth="1" transform="rotate(-25 56 62)" />
        </g>

        {/* Floating Heart above */}
        <g className="animate-float">
          <path
            d="M85 18 C85 10 74 6 74 15 C74 22 85 28 85 28 C85 28 96 22 96 15 C96 6 85 10 85 18 Z"
            fill="#D98C9B"
          />
        </g>
      </svg>
    </div>
  );
};
