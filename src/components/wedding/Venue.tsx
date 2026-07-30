import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Candolim+Beach+Goa+India";

export function Venue() {
  return (
    <section id="venue" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Where"
        title="The Venue"
        subtitle="Villa Amara, Candolim Beach, Goa — where the palms meet the tide."
      />

      <Reveal className="mt-14">
        <div className="glass-card overflow-hidden rounded-3xl p-3">
          <div className="relative overflow-hidden rounded-[1.25rem]">
            <iframe
              title="Map showing Villa Amara, Candolim Beach, Goa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.75%2C15.49%2C73.79%2C15.53&layer=mapnik"
              className="h-[320px] w-full grayscale-[35%] sepia-[25%] sm:h-[420px]"
              loading="lazy"
            />
            <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <span className="animate-float-slow block h-9 w-9 rounded-full rounded-br-none bg-terracotta rotate-45 shadow-[var(--shadow-soft)]" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 px-4 py-8 text-center">
            <p className="font-serif text-2xl text-cocoa italic">Villa Amara</p>
            <p className="text-sm text-muted-foreground">Candolim Beach Road, Goa 403515, India</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3 text-xs tracking-[0.25em] text-primary-foreground uppercase transition-all duration-500 hover:opacity-90 hover:shadow-[var(--shadow-lift)]"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
