interface BrandReelProps {
  className?: string;
}

/**
 * Short looping brand motion reel, generated from the BrightWave logo
 * Muted, autoplaying, and decorative — safe for all browsers via
 * mp4 + webm fallback, with a static poster frame if video can't load
 */
export default function BrandReel({ className = "" }: BrandReelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-ink-line bg-ink-2/60 backdrop-blur-sm ${className}`}
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/brightwave-loop-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/brightwave-loop.webm" type="video/webm" />
        <source src="/videos/brightwave-loop.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
      />
    </div>
  );
}