interface LoafSpreadProps {
  className?: string;
}

/** Line-art illustration of fresh loaves on a board, warm morning light. */
export default function LoafSpread({ className = "" }: LoafSpreadProps) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label="Fresh loaves cooling on a wooden board in morning light">
      <defs>
        <linearGradient id="loaf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E7C9" />
          <stop offset="100%" stopColor="#E7DFCE" />
        </linearGradient>
        <linearGradient id="loaf-sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3C77B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F3C77B" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="480" height="320" fill="url(#loaf-sky)" />
      <circle cx="380" cy="60" r="130" fill="url(#loaf-sun)" />

      {/* window mullion suggestion */}
      <line x1="0" y1="150" x2="480" y2="150" stroke="#2B2416" strokeOpacity="0.08" strokeWidth="2" />

      {/* wooden board */}
      <path d="M20 235 L460 235 L440 300 L40 300 Z" fill="#C7A26B" stroke="#2B2416" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="60" y1="248" x2="420" y2="248" stroke="#2B2416" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="55" y1="265" x2="425" y2="265" stroke="#2B2416" strokeOpacity="0.12" strokeWidth="1" />

      {/* loaf 1 — round country sourdough */}
      <g transform="translate(120,205)">
        <ellipse cx="0" cy="42" rx="62" ry="14" fill="#2B2416" opacity="0.08" />
        <path
          d="M-58 10 C-58 -34 -32 -52 0 -52 C32 -52 58 -34 58 10 C58 34 32 44 0 44 C-32 44 -58 34 -58 10 Z"
          fill="#D9A85C"
          stroke="#2B2416"
          strokeWidth="2"
        />
        <path d="M-30 -30 C-14 -20 14 -20 30 -30" fill="none" stroke="#2B2416" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-38 -8 C-16 4 16 4 38 -8" fill="none" stroke="#2B2416" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M-30 16 C-12 24 12 24 30 16" fill="none" stroke="#2B2416" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* loaf 2 — long seeded rye */}
      <g transform="translate(255,225)">
        <ellipse cx="0" cy="30" rx="78" ry="12" fill="#2B2416" opacity="0.08" />
        <path
          d="M-74 6 C-74 -22 -50 -30 0 -30 C50 -30 74 -22 74 6 C74 26 50 32 0 32 C-50 32 -74 26 -74 6 Z"
          fill="#8A5A32"
          stroke="#2B2416"
          strokeWidth="2"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M${-52 + i * 26} -16 C${-52 + i * 26 + 10} -22 ${-52 + i * 26 + 10} 6 ${-52 + i * 26} 12`}
            fill="none"
            stroke="#2B2416"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        ))}
        {/* seeds */}
        {[[-40, -4], [-18, -10], [4, -2], [26, -8], [46, 0]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" fill="#2B2416" opacity="0.5" />
        ))}
      </g>

      {/* loaf 3 — small roll, back layer */}
      <g transform="translate(370,210)">
        <ellipse cx="0" cy="26" rx="34" ry="9" fill="#2B2416" opacity="0.08" />
        <circle cx="0" cy="0" r="30" fill="#E3B876" stroke="#2B2416" strokeWidth="1.6" />
        <path d="M-16 -6 C-6 2 6 2 16 -6" fill="none" stroke="#2B2416" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* steam */}
      <path d="M120 150 C110 130 130 118 118 100" fill="none" stroke="#2B2416" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
      <path d="M260 148 C252 128 270 116 260 96" fill="none" stroke="#2B2416" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}