import type React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  singleLine?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = 'h-12',
  variant = 'dark',
  showText = true,
  singleLine = false,
}) => {
  const iconColorBlue = '#3BB9FF'; // Bright sky blue
  const iconColorGold = '#C5A021'; // Professional gold
  const textColor = variant === 'light' ? '#FFFFFF' : '#C5A021';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* SVG Icon recreated with original balanced scale */}
      <svg
        viewBox="0 0 300 120"
        className="h-full w-auto drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gold Chart Bars */}
        <rect x="160" y="90" width="18" height="20" fill={iconColorGold} />
        <rect x="190" y="75" width="18" height="35" fill={iconColorGold} />
        <rect x="220" y="60" width="18" height="50" fill={iconColorGold} />
        <rect x="250" y="45" width="18" height="65" fill={iconColorGold} />

        {/* The Orbiting Gold Ring and Sphere */}
        <path
          d="M80 95 C 100 50, 220 40, 235 80"
          stroke={iconColorGold}
          strokeWidth="3"
          fill="none"
        />
        <circle cx="210" cy="70" r="12" fill={iconColorBlue} />

        {/* The Main Blue Upward Arrow */}
        <path
          d="M40 115 L 245 55 L 235 70 L 270 35 L 220 50 L 230 65 Z"
          fill={iconColorBlue}
        />
      </svg>

      {showText && (
        <div
          className={`flex ${singleLine ? 'flex-row items-baseline gap-2' : 'flex-col justify-center'} leading-none`}
        >
          <span
            className="font-bold text-lg md:text-xl tracking-tight uppercase whitespace-nowrap"
            style={{
              color: textColor,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            HBRZ Global Purity Trading
          </span>
          <span
            className={`font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase whitespace-nowrap ${singleLine ? '' : 'mt-1'}`}
            style={{ color: textColor, opacity: 0.85 }}
          >
            {singleLine && <span className="mr-1">&</span>}
            {!singleLine && '&'} Consulting Services Ltd
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
