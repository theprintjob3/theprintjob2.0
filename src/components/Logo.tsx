import React from 'react';

interface LogoProps {
  variant?: 'mark' | 'full';
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size }) => {
  if (variant === 'mark') {
    // Beautiful exact logo mark scaled into a tight bounding box for the Nav Header and garment mockup
    return (
      <svg
        width={size || 40}
        height={size || 40}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background dark container for professional rendering */}
        <rect width="100%" height="100%" rx="16" fill="#000000" />
        
        {/* Simplified high-contrast representation of the converging bars */}
        <path d="M12 8 L28 8 L38 52 L22 52 Z" fill="#D0232A" /> {/* Red bar slant */}
        <path d="M30 8 L46 8 L54 52 L38 52 Z" fill="#FCEB24" /> {/* Yellow bar slant */}
        <path d="M68 8 L52 8 L44 52 L60 52 Z" fill="#F1A5B4" /> {/* Pastel Pink slant */}

        {/* Diagonal main title banner */}
        <g transform="rotate(-15 50 54)">
          <rect x="5" y="44" width="90" height="18" rx="2" fill="#4C4D58" stroke="#000000" strokeWidth="1" />
          <text
            x="50"
            y="56"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="950"
            fontSize="8"
            fill="#FFFFFF"
            textAnchor="middle"
            letterSpacing="-0.2"
          >
            THE PRINT JOB
          </text>
        </g>
      </svg>
    );
  }

  // Full, high-fidelity exact replica logo of "The Print Job" matching the user's attachment precisely
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size ? `${size}px` : '100%', maxWidth: '100%' }}>
      <svg
        viewBox="0 0 520 520"
        className="w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: '#000000', borderRadius: '32px', overflow: 'hidden', padding: '16px' }}
      >
        <g id="The_Print_Job_Fidelity_Logo">
          
          {/* 1. Behind Spectrum Ribbons (thin green, orange, cyan, and white diagonal stripes) */}
          <g opacity="0.95">
            {/* Parallel lines running from bottom-left to top-right behind the main bars */}
            <line x1="100" y1="280" x2="380" y2="40" stroke="#009E4F" strokeWidth="5.5" />
            <line x1="110" y1="292" x2="390" y2="52" stroke="#FF6600" strokeWidth="5.5" />
            <line x1="120" y1="304" x2="400" y2="64" stroke="#00B0F0" strokeWidth="5.5" />
            <line x1="130" y1="316" x2="410" y2="76" stroke="#EDEDED" strokeWidth="5.5" />
          </g>

          {/* 2. Three Main Slanted Parallel & Converging Bars (Top Section) */}
          <g>
            {/* Red Bar - slants down and to the right */}
            <path d="M12 10 L102 10 L250 320 L160 320 Z" fill="#D0232A" />
            
            {/* Yellow Bar - parallel to red, slants down and to the right */}
            <path d="M100 10 L212 10 L345 320 L233 320 Z" fill="#FCEB24" />
            
            {/* Pastel Pink Bar - slants down and to the LEFT, forming the asymmetrical V shape */}
            <path d="M332 10 L242 10 L130 320 L220 320 Z" fill="#F0ACB9" />
          </g>

          {/* 3. Bottom Left Continuation Elements (underneath the grey banner) */}
          <g>
            {/* Lower green shape pointing down/left */}
            <path d="M90 355 L115 355 L108 440 L83 440 Z" fill="#009E4F" />
            
            {/* Lower Orange hook shape (bold chunky component continuing yellow bar depth) */}
            <path d="M110 380 L230 495 L118 495 L110 405 Z" fill="#F8841F" />
            
            {/* Lower Red block slanted next to orange hook */}
            <path d="M195 345 L242 305 L215 410 L168 410 Z" fill="#D0232A" />
          </g>

          {/* 4. Bottom Right Diagonal Stripes Group (Running bottom-left to top-right) */}
          <g>
            <line x1="240" y1="415" x2="390" y2="305" stroke="#F3008C" strokeWidth="6.5" opacity="0.95" />
            <line x1="250" y1="427" x2="400" y2="317" stroke="#7C3AED" strokeWidth="6.5" opacity="0.95" />
            <line x1="260" y1="439" x2="410" y2="329" stroke="#F8841F" strokeWidth="6.5" opacity="0.95" />
            <line x1="270" y1="451" x2="420" y2="341" stroke="#EDEDED" strokeWidth="6.5" opacity="0.95" />
            <line x1="280" y1="463" x2="430" y2="353" stroke="#00B0F0" strokeWidth="6.5" opacity="0.95" />
          </g>

          {/* 5. Main Title Grey Plate & Underlying Magenta Wedge */}
          {/* Rotated counter-clockwise (~-17 degrees) to point upwards from left-to-right */}
          <g transform="rotate(-17 260 260)">
            {/* Sharp Magenta High-Contrast Wedge poking out to the right */}
            <polygon points="280,240 495,220 320,285" fill="#F3008C" />
            
            {/* Central Dark Charcoal Plate */}
            <rect
              x="20"
              y="180"
              width="415"
              height="65"
              fill="#424550"
              stroke="#000000"
              strokeWidth="4"
              rx="6"
            />
            {/* Sleek bold white logo letters */}
            <text
              x="227"
              y="228"
              fontFamily="Inter, system-ui, -apple-system, sans-serif"
              fontWeight="950"
              fontSize="45"
              fill="#FFFFFF"
              letterSpacing="-0.3"
              textAnchor="middle"
            >
              The Print Job
            </text>
          </g>

          {/* 6. Tagline Cursive Ribbon (Tilted slightly upwards at secondary angle ~-11 deg) */}
          <g transform="rotate(-11 280 300)">
            {/* Lavender-white custom pointed ribbon */}
            <polygon
              points="195,315 480,315 480,370 215,370 195,342"
              fill="#D9DBF1"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Cursive italic calligraphy typography for the tagline */}
            <text
              x="345"
              y="353"
              fontFamily="Playfair Display, Georgia, Times New Roman, serif"
              fontStyle="italic"
              fontWeight="900"
              fontSize="24"
              fill="#030712"
              textAnchor="middle"
            >
              Customize Your Vision
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};
