interface ScreenshotProps {
  src?: string;
  label: string;
}

export default function Screenshot({ src, label }: ScreenshotProps) {
  return (
    <div className="mt-6 h-48 rounded-xl bg-paper/10 border border-paper/20 flex items-center justify-center text-paper/40 overflow-hidden">
      {src ? (
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover rounded-xl"
        />
      ) : (
        label
      )}
    </div>
  );
}