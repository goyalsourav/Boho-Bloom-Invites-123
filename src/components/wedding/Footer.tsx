import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-5 pt-10 pb-16 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass-card rounded-3xl px-6 py-14 text-center">
          <p className="font-serif text-3xl leading-snug text-cocoa italic sm:text-4xl">
            We can&apos;t wait to celebrate with you
          </p>
          <p className="mt-6 text-terracotta">&#9825;</p>
          <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Ananya &amp; Rohan &middot; 12 May 2027 &middot; Goa
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
