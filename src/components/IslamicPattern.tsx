import React from 'react';

interface IslamicPatternProps {
  variant?: 'light' | 'dark' | 'subtle';
  opacity?: number;
  patternType?: 'star8' | 'girih' | 'arabesque';
  className?: string;
  size?: number;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({
  variant = 'light',
  opacity,
  className = '',
  size,
}) => {
  // Ensure the uploaded pattern /public/site_background.jpeg is prominent and crisp:
  const resolvedOpacity =
    opacity !== undefined
      ? opacity
      : variant === 'dark'
      ? 0.35
      : 0.85;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        opacity: resolvedOpacity,
        backgroundImage: `url('/WhatsApp%20Image%202026-09-25%20at%2010.20.39%20PM.jpeg')`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        backgroundSize: size ? `${size}px auto` : '366px 178px',
        filter: variant === 'dark' ? 'invert(1) brightness(1.6)' : 'none',
      }}
      aria-hidden="true"
    />
  );
};

