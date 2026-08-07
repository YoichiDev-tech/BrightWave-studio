interface IconProps {
  className?: string;
}

const STROKE = "#3A1220";

export function IconFlowerStem({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Single flower stem">
      <line x1="40" y1="30" x2="40" y2="68" stroke="#3A7A57" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 50 C30 50 26 60 32 64" fill="none" stroke="#3A7A57" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 6 }).map((_, i) => (
        <circle
          key={i}
          cx={40 + 8 * Math.cos((i * Math.PI) / 3)}
          cy={20 + 8 * Math.sin((i * Math.PI) / 3)}
          r="7"
          fill="#FF6FA8"
          opacity="0.9"
        />
      ))}
      <circle cx="40" cy="20" r="5" fill={STROKE} opacity="0.6" />
    </svg>
  );
}

export function IconLeafSprig({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Leaf sprig">
      <path d="M40 68 C40 40 40 24 40 12" fill="none" stroke="#3A7A57" strokeWidth="2.2" strokeLinecap="round" />
      {[18, 30, 42, 54].map((y, i) => (
        <g key={i}>
          <path d={`M40 ${y} C${52} ${y - 6} ${58} ${y + 4} ${40} ${y + 10}`} fill="#4E9873" />
          <path d={`M40 ${y} C${28} ${y - 6} ${22} ${y + 4} ${40} ${y + 10}`} fill="#5FAF87" />
        </g>
      ))}
    </svg>
  );
}

export function IconRibbonBow({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Ribbon bow">
      <path d="M40 40 L14 24 L18 42 Z" fill="#FFD23F" stroke={STROKE} strokeWidth="1.6" />
      <path d="M40 40 L66 24 L62 42 Z" fill="#FFD23F" stroke={STROKE} strokeWidth="1.6" />
      <circle cx="40" cy="40" r="6" fill="#FF6FA8" stroke={STROKE} strokeWidth="1.4" />
      <path d="M36 45 L28 62" stroke="#FFD23F" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 45 L52 62" stroke="#FFD23F" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconWateringCan({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Watering can">
      <path d="M20 34 L52 34 L50 58 C50 62 44 64 36 64 C28 64 22 62 22 58 Z" fill="#8FD3C0" stroke={STROKE} strokeWidth="2" />
      <path d="M52 38 L66 30 L64 24 L50 30" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <circle cx="66" cy="27" r="4" fill="none" stroke={STROKE} strokeWidth="1.6" />
      <path d="M28 34 L26 22 L44 22 L42 34" fill="none" stroke={STROKE} strokeWidth="2" />
      <path d="M6 20 C10 16 12 22 8 26" fill="none" stroke="#3A7A57" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBee({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Bee">
      <ellipse cx="40" cy="42" rx="16" ry="12" fill="#FFD23F" stroke={STROKE} strokeWidth="1.8" />
      <path d="M28 36 L52 36 M27 42 L53 42 M28 48 L52 48" stroke={STROKE} strokeWidth="2.2" />
      <ellipse cx="28" cy="30" rx="9" ry="7" fill="#FFEFB0" opacity="0.8" transform="rotate(-20 28 30)" />
      <ellipse cx="52" cy="30" rx="9" ry="7" fill="#FFEFB0" opacity="0.8" transform="rotate(20 52 30)" />
      <circle cx="40" cy="28" r="6" fill="#3A1220" />
      <line x1="36" y1="22" x2="33" y2="17" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="44" y1="22" x2="47" y2="17" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPottedPlant({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label="Potted plant">
      <path d="M26 50 L54 50 L50 68 L30 68 Z" fill="#F0567F" stroke={STROKE} strokeWidth="2" />
      <line x1="40" y1="50" x2="40" y2="30" stroke="#3A7A57" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 40 C30 34 26 20 34 14 C38 24 38 32 40 40 Z" fill="#4E9873" />
      <path d="M40 36 C50 30 54 16 46 10 C42 20 42 28 40 36 Z" fill="#5FAF87" />
      <path d="M40 44 C32 42 24 44 24 52" fill="none" stroke="#3A7A57" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}