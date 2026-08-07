interface IllustrationProps {
  className?: string;
}

/** $38 — hand-tied bouquet wrapped in kraft paper */
export function SundayBouquet({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Hand-tied Sunday Bouquet">
      <g transform="translate(100,120)">
        {/* wrap */}
        <path d="M-46 60 L46 60 L28 -10 L-28 -10 Z" fill="#F4DCC0" stroke="#3A1220" strokeWidth="2" />
        <path d="M-10 60 L10 60 L4 20 L-4 20 Z" fill="#E7C7A0" opacity="0.6" />

        {/* stems */}
        <line x1="-4" y1="-10" x2="-14" y2="-60" stroke="#3A7A57" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="-10" x2="10" y2="-64" stroke="#3A7A57" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="-10" x2="0" y2="-70" stroke="#3A7A57" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="-8" x2="26" y2="-52" stroke="#3A7A57" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-12" y1="-8" x2="-26" y2="-50" stroke="#3A7A57" strokeWidth="2.5" strokeLinecap="round" />

        {/* leaves */}
        <path d="M-14 -34 C-24 -34 -28 -24 -22 -18 C-14 -22 -12 -30 -14 -34 Z" fill="#4E9873" />
        <path d="M14 -30 C24 -30 28 -20 22 -14 C14 -18 12 -26 14 -30 Z" fill="#4E9873" />

        {/* blooms */}
        {[
          { x: -14, y: -60, r: 13, fill: "#FF6FA8" },
          { x: 10, y: -64, r: 12, fill: "#FFD23F" },
          { x: 0, y: -70, r: 14, fill: "#FF8FB8" },
          { x: 26, y: -52, r: 11, fill: "#F0567F" },
          { x: -26, y: -50, r: 11, fill: "#FFCF6E" },
        ].map((b, i) => (
          <g key={i}>
            {Array.from({ length: 6 }).map((_, p) => (
              <circle
                key={p}
                cx={b.x + b.r * 0.55 * Math.cos((p * Math.PI) / 3)}
                cy={b.y + b.r * 0.55 * Math.sin((p * Math.PI) / 3)}
                r={b.r * 0.5}
                fill={b.fill}
                opacity="0.92"
              />
            ))}
            <circle cx={b.x} cy={b.y} r={b.r * 0.4} fill="#3A1220" opacity="0.55" />
          </g>
        ))}

        {/* twine */}
        <path d="M-22 -6 L22 -6" stroke="#3A1220" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

/** $22 — mason jar with citrus slices and herb sprigs */
export function CitrusHerbJar({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Citrus & Herb Jar">
      <g transform="translate(100,110)">
        {/* jar */}
        <path d="M-38 -20 L38 -20 L32 66 C32 76 20 82 0 82 C-20 82 -32 76 -32 66 Z" fill="#FFF6E0" stroke="#3A1220" strokeWidth="2.2" />
        <rect x="-30" y="10" width="60" height="10" fill="#FFD23F" opacity="0.35" />
        <rect x="-42" y="-32" width="84" height="16" rx="4" fill="#3A1220" />
        <rect x="-40" y="-24" width="80" height="4" fill="#FFF6E0" opacity="0.5" />

        {/* citrus slices */}
        <g transform="translate(-10,26)">
          <circle r="16" fill="#FFD23F" stroke="#3A1220" strokeWidth="1.6" />
          <circle r="10" fill="#FFE98A" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={10 * Math.cos((i * Math.PI) / 4)}
              y2={10 * Math.sin((i * Math.PI) / 4)}
              stroke="#3A1220"
              strokeWidth="0.8"
              opacity="0.4"
            />
          ))}
        </g>
        <g transform="translate(16,44) rotate(20)">
          <circle r="13" fill="#FFC845" stroke="#3A1220" strokeWidth="1.4" />
          <circle r="8" fill="#FFE07A" />
        </g>

        {/* herb sprigs poking out top */}
        <path d="M-14 -32 C-20 -50 -12 -60 -18 -74" fill="none" stroke="#3A7A57" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 -32 C10 -48 4 -58 10 -72" fill="none" stroke="#3A7A57" strokeWidth="2.4" strokeLinecap="round" />
        {[[-18, -74], [-15, -62], [-21, -56], [10, -72], [7, -60], [13, -54]].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="5" ry="2.4" fill="#4E9873" transform={`rotate(${(i % 2 === 0 ? -30 : 30)} ${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

/** $28 — bundle of dried flowers tied with ribbon */
export function DriedBloomBundle({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Dried Bloom Bundle">
      <g transform="translate(100,130)">
        {/* stems fanning out */}
        {[-30, -18, -6, 6, 18, 30].map((angle, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={Math.sin((angle * Math.PI) / 180) * 70}
            y2={-Math.cos((angle * Math.PI) / 180) * 70}
            stroke="#B08A5C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}

        {/* dried pampas / bunny tails */}
        {[
          { a: -30, fill: "#E4C79A" },
          { a: -18, fill: "#D9A45C" },
          { a: -6, fill: "#8FD3C0" },
          { a: 6, fill: "#E4C79A" },
          { a: 18, fill: "#FFD23F" },
          { a: 30, fill: "#D9A45C" },
        ].map((s, i) => {
          const x = Math.sin((s.a * Math.PI) / 180) * 70;
          const y = -Math.cos((s.a * Math.PI) / 180) * 70;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="9"
              ry="16"
              fill={s.fill}
              transform={`rotate(${s.a} ${x} ${y})`}
              opacity="0.9"
            />
          );
        })}

        {/* ribbon tie */}
        <path d="M-16 4 L16 4 L20 20 L-20 20 Z" fill="#FF6FA8" stroke="#3A1220" strokeWidth="1.6" />
        <path d="M-16 4 L-30 -6 L-24 8 Z" fill="#FF6FA8" stroke="#3A1220" strokeWidth="1.4" />
        <path d="M16 4 L30 -6 L24 8 Z" fill="#FF6FA8" stroke="#3A1220" strokeWidth="1.4" />
      </g>
    </svg>
  );
}