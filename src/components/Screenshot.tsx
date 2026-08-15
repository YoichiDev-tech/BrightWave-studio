interface ScreenshotProps {
  src?: string;
  label: string;

}

export default function Screenshot({ src, label }: ScreenshotProps) {
  return (
    <figure className="mt-8">
      <img
        src={src}
        alt={label || "Screenshot"}
        className="rounded-lg border border-paper/10 shadow-lg"
      />
      {label && (
        <figcaption className="mt-2 text-sm text-paper/60">
          {label}
        </figcaption>
      )}
    </figure>
  );
}