import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const shots = [
  { src: g2, caption: "Under the pampas arch", rotate: "-3deg", span: "sm:col-span-7", ratio: "aspect-[4/3] object-cover" },
  { src: g1, caption: "Golden hour, Goa", rotate: "2.5deg", span: "sm:col-span-5 sm:mt-14", ratio: "aspect-[3/4] object-cover" },
  { src: g4, caption: "The two of us", rotate: "3deg", span: "sm:col-span-7 sm:-mt-10", ratio: "aspect-[4/3] object-cover" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Moments" title="Our Gallery" />

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
        {shots.map((shot, index) => (
          <Reveal key={shot.caption} delay={index * 110} className={shot.span}>
            <figure
              className="animate-float-slow relative rounded-sm bg-ivory p-3 pb-12 shadow-[var(--shadow-soft)] transition-transform duration-700 hover:!rotate-0 hover:scale-[1.02]"
              style={{ transform: `rotate(${shot.rotate})`, animationDelay: `${index * 1.2}s` }}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-sand/70 opacity-80" />
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className={`w-full rounded-sm ${shot.ratio}`}
              />
              <figcaption className="absolute right-0 bottom-3 left-0 text-center font-serif text-lg text-cocoa italic">
                {shot.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
