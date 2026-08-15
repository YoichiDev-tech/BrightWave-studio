interface ScreenshotProps {
  src?: string;
  label: string;
}

export default function Screenshot({ src, label }: ScreenshotProps) {
  return (

      {src ? (
        <img
          src={src}
          alt={label}
      )}
    </div>
  );
}