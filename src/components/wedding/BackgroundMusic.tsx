import { useEffect, useRef, useState } from "react";

export function BackgroundMusic({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (active) {
      audioRef.current?.play().catch(() => {});
    }
  }, [active]);

  const toggleMuted = () => {
    setMuted((prev) => !prev);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop muted={muted} />
      {active && (
        <button
          type="button"
          onClick={toggleMuted}
          aria-label={muted ? "Unmute background music" : "Mute background music"}
          className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/70 text-cocoa shadow-[var(--shadow-soft)] backdrop-blur-md transition-transform hover:scale-105"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}
    </>
  );
}
