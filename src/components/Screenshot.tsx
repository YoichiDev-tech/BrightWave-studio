interface ScreenshotProps {
  src?: string;
  label: string;
}

export default function Screenshot({ src, label }: ScreenshotProps) {
  if(src) {
    return (
      <img 
        src={src}
        alt={label || "Screenshot"}
        className="mt-6 rounded-xl border border-paper/20 shadow-lg"
      />
    );
  }
  return (
    <div className="mt-6 h-48 rounded-xl bg-paper/10 border border-paper/20 flex items-center justify-center text-paper/40">
      {label}
    </div>
  );
}