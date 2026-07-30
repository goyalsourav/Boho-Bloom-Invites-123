import { useState } from "react";

export function Opener({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{
        transition: "opacity 700ms ease, transform 700ms ease",
        opacity: opening ? 0 : 1,
        transform: opening ? "scale(1.06)" : "none",
        transitionDelay: opening ? "700ms" : "0ms",
      }}
    >
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open the invitation"
        className="group relative flex w-full max-w-md cursor-pointer flex-col items-center justify-center overflow-hidden arch-frame px-8 py-20 text-center focus:outline-none"
        style={{
          background: "color-mix(in oklab, var(--ivory) 72%, transparent)",
          backdropFilter: "blur(10px)",
          border: "1px solid color-mix(in oklab, var(--ivory) 88%, var(--cocoa) 10%)",
          boxShadow: "var(--shadow-lift)",
          minHeight: "72vh",
        }}
      >
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-ivory"
          style={{
            animation: opening ? "veil-open-left 1.2s cubic-bezier(0.7,0,0.2,1) forwards" : undefined,
            opacity: opening ? 1 : 0,
          }}
        />
        <span
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-ivory"
          style={{
            animation: opening ? "veil-open-right 1.2s cubic-bezier(0.7,0,0.2,1) forwards" : undefined,
            opacity: opening ? 1 : 0,
          }}
        />

        <p className="eyebrow">Ananya &amp; Rohan</p>
        <h1 className="mt-8 font-serif text-6xl leading-[1.05] text-cocoa italic sm:text-7xl">
          You&apos;re
          <br />
          Invited
        </h1>
        <span className="mt-10 text-terracotta">&#9825;</span>
        <span className="mt-8 text-xs tracking-[0.35em] text-muted-foreground uppercase">
          Tap to Open
        </span>
        <span className="mt-6 block text-lg text-terracotta transition-transform duration-500 group-hover:translate-y-1">
          &#8595;
        </span>
      </button>
    </div>
  );
}
