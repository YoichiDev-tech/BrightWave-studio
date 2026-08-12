interface ScreenshotProps {
  src?: string;
  label: string;
}

export default function Screenshot({ src, label }: ScreenshotProps) {
  return (
    <div className="mt-6">
      {src ? (
        <img
          src={src}
          alt={label}
          className="rounded-xl border border-paper/20 shadow-lg"
        />
      ) : (
        <div className="h-48 rounded-xl bg-paper/10 border border-paper/20 flex items-center justify-center text-paper/40">
          {label}
        </div>
      )}
    </div>
  );
}