interface OvenSceneProps {
  className?: string;
}

/** Line-art illustration of a bread oven, pre-dawn light. */
export default function OvenScene({ className = "" }: OvenSceneProps) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label="The bakery's oven glowing before dawn">
      <defs>
        <linearGradient id="oven-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B2416" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E7DFCE" />
        </linearGradient>
        <radialGradient id="oven-glow" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#E9995C" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E9995C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="320" fill="url(#oven-sky)" />

      {/* oven body */}
      <rect x="90" y="70" width="300" height="200" rx="14" fill="#EFE6D3" stroke="#2B2416" strokeWidth="2" />
      <rect x="106" y="86" width="268" height="150" rx="8" fill="#2B2416" opacity="0.06" />

      {/* oven door / mouth */}
      <circle cx="240" cy="160" r="76" fill="url(#oven-glow)" />
      <circle cx="240" cy="160" r="72" fill="#3A2B18" stroke="#2B2416" strokeWidth="2" />
      <circle cx="240" cy="160" r="58" fill="#E9995C" opacity="0.55" />
      <circle cx="240" cy="160" r="72" fill="none" stroke="#2B2416" strokeWidth="2" />

      {/* loaves inside the glow */}
      <ellipse cx="215" cy="178" rx="26" ry="15" fill="#B97B3F" stroke="#2B2416" strokeWidth="1.4" />
      <ellipse cx="262" cy="172" rx="24" ry="14" fill="#C68A47" stroke="#2B2416" strokeWidth="1.4" />

      {/* control panel */}
      <circle cx="130" cy="100" r="9" fill="none" stroke="#2B2416" strokeWidth="1.6" />
      <line x1="130" y1="100" x2="130" y2="93" stroke="#2B2416" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="158" cy="100" r="9" fill="none" stroke="#2B2416" strokeWidth="1.6" />
      <line x1="158" y1="100" x2="164" y2="95" stroke="#2B2416" strokeWidth="1.6" strokeLinecap="round" />

      {/* legs */}
      <line x1="120" y1="270" x2="120" y2="292" stroke="#2B2416" strokeWidth="3" strokeLinecap="round" />
      <line x1="360" y1="270" x2="360" y2="292" stroke="#2B2416" strokeWidth="3" strokeLinecap="round" />

      {/* steam curls rising */}
      <path d="M200 60 C190 40 210 28 198 8" fill="none" stroke="#2B2416" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      <path d="M280 58 C270 38 292 26 280 6" fill="none" stroke="#2B2416" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />

      {/* floor line */}
      <line x1="0" y1="296" x2="480" y2="296" stroke="#2B2416" strokeOpacity="0.15" strokeWidth="1.5" />
    </svg>
  );
}