import couple from "@/assets/couple-hero.png";
import { Countdown } from "./Countdown";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <img
            src={couple}
            alt="Illustrated portrait of Ananya and Rohan in boho Indian wedding attire"
            width={912}
            height={1200}
            className="animate-float-slow mx-auto w-full max-w-xs drop-shadow-[0_25px_45px_rgba(120,90,60,0.18)] lg:max-w-md"
          />
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="glass-card arch-frame px-6 py-14 text-center sm:px-12">
            <p className="eyebrow">The Wedding Of</p>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-cocoa italic sm:text-6xl">
              Ananya
              <span className="my-2 block text-2xl text-terracotta not-italic">&#9825;</span>
              Rohan
            </h1>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Together is a beautiful place to be.
            </p>
            <p className="mt-3 text-xs tracking-[0.3em] text-cocoa uppercase">
              12 May 2027 &middot; Goa, India
            </p>

            <div className="mt-10">
              <Countdown />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
