interface ScoreGaugeProps {
  label: string;
  score: number; // 0-100
  size?: number;
}

function colorForScore(score: number): string {
  if (score >= 80) return "#7CD98A"; // healthy green, distinct from the amber/coral brand gradient
  if (score >= 55) return "#FFB84D"; // amber — matches brand
  return "#FF7A59"; // coral — matches brand, reads as "needs attention"
}

export default function ScoreGauge({ label, score, size = 96 }: ScoreGaugeProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(score)));
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  const color = colorForScore(clamped);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-ink-line" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-paper">
          {clamped}
        </div>
      </div>
      <span className="text-center font-mono text-[11px] uppercase tracking-wide text-ink-soft">{label}</span>
    </div>
  );
}