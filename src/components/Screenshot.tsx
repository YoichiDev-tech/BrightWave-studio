interface ScreenshotProps {
  label: string;
}

export default function Screenshot({ label }: ScreenshotProps) {
  return (
    <div className="mt-6 h-48 rounded-xl bg-paper/10 border border-paper/20 flex items-center justify-center text-paper/40">
      {label}
    </div>
  );
}