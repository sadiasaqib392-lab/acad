import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
  isFooter?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark',
  showText = true,
  className = '',
  isFooter = false,
}) => {
  const isLight = variant === 'light';

  // Responsive emblem sizes
  const iconSizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none text-left ${className}`}>
      {/* Golden Quran & Crescent Emblem */}
      <div className={`relative ${iconSizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="qeaEmblemGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA820A" />
            </linearGradient>
            <radialGradient id="qeaEmblemGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Soft Glow */}
          <circle cx="50" cy="50" r="46" fill="url(#qeaEmblemGlow)" />

          {/* Outer Decorative Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#qeaEmblemGold)"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />
          <circle cx="50" cy="50" r="41" stroke="url(#qeaEmblemGold)" strokeWidth="0.8" opacity="0.6" />

          {/* Crescent Moon Arch */}
          <path
            d="M 50 14 A 32 32 0 1 0 74 72 A 28 28 0 1 1 50 14 Z"
            fill="url(#qeaEmblemGold)"
          />

          {/* 8-pointed Islamic Star at Top-Right */}
          <g transform="translate(68, 26) scale(0.18)" fill="url(#qeaEmblemGold)">
            <path d="M 0,-40 L 11,-11 L 40,0 L 11,11 L 0,40 L -11,11 L -40,0 L -11,-11 Z" />
          </g>

          {/* Open Quran on Rehal (Stand) at Center */}
          {/* Left Page */}
          <path
            d="M 50 56 C 42 50, 30 48, 22 52 C 20 52, 20 68, 22 68 C 30 64, 42 66, 50 72 Z"
            fill="url(#qeaEmblemGold)"
          />
          {/* Right Page */}
          <path
            d="M 50 56 C 58 50, 70 48, 78 52 C 80 52, 80 68, 78 68 C 70 64, 58 66, 50 72 Z"
            fill="url(#qeaEmblemGold)"
          />
          {/* Rehal Base */}
          <path
            d="M 32 71 L 46 83 L 50 81 L 54 83 L 68 71 L 64 68 L 50 77 L 36 68 Z"
            fill="url(#qeaEmblemGold)"
          />
        </svg>
      </div>

      {/* Typography:
          Line 1: Quran Education
          Line 2: Online Islamic Academy
      */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif font-extrabold tracking-wide leading-tight ${
              isFooter
                ? 'text-sm sm:text-base font-bold text-white'
                : size === 'sm'
                ? 'text-xs sm:text-sm text-[#072C1E]'
                : size === 'lg'
                ? 'text-base sm:text-lg text-[#072C1E]'
                : 'text-sm sm:text-base md:text-[17px] text-[#072C1E]'
            } ${isLight ? '!text-white' : ''}`}
          >
            Quran Education
          </span>

          <span
            className={`tracking-wider uppercase font-medium leading-tight ${
              isFooter
                ? 'text-[10px] text-emerald-200/80 font-normal mt-0.5'
                : 'text-[10px] sm:text-[11px] font-semibold text-[#0A3826] mt-0.5'
            } ${isLight ? '!text-emerald-300' : ''}`}
          >
            Online Islamic Academy
          </span>
        </div>
      )}
    </div>
  );
};
