import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-05-12T10:00:00+05:30").getTime();

function diff() {
  const total = Math.max(0, WEDDING_DATE - Date.now());
  return {
    Days: Math.floor(total / 86400000),
    Hours: Math.floor((total / 3600000) % 24),
    Minutes: Math.floor((total / 60000) % 60),
    Seconds: Math.floor((total / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(() => diff());

  useEffect(() => {
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="glass-card rounded-2xl px-2 py-4 text-center sm:px-4 sm:py-5"
        >
          <div
            key={value}
            className="animate-in fade-in slide-in-from-bottom-1 font-serif text-2xl text-cocoa duration-500 sm:text-4xl"
          >
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.65rem]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
