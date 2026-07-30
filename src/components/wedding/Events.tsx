import haldi from "@/assets/event-haldi.jpg";
import mehendi from "@/assets/event-mehendi.jpg";
import pool from "@/assets/event-pool.jpg";
import cocktail from "@/assets/event-cocktail.jpg";
import mayra from "@/assets/event-mayra.jpg";
import reception from "@/assets/event-reception.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const events = [
  { name: "Haldi", image: haldi, date: "10 May 2027", time: "10:00 AM Onwards", venue: "Sunlit Courtyard, Villa Amara" },
  { name: "Mehendi", image: mehendi, date: "10 May 2027", time: "04:00 PM Onwards", venue: "Garden Pavilion, Villa Amara" },
  { name: "Pool Party", image: pool, date: "11 May 2027", time: "11:00 AM Onwards", venue: "Palm Deck, Amara Resort" },
  { name: "Cocktail Party", image: cocktail, date: "11 May 2027", time: "07:00 PM Onwards", venue: "The Driftwood Bar" },
  { name: "Mayra", image: mayra, date: "12 May 2027", time: "10:00 AM Onwards", venue: "Ancestral Home, Panaji" },
  { name: "Reception", image: reception, date: "12 May 2027", time: "07:00 PM Onwards", venue: "Grand Ballroom, Amara Resort" },
];

export function Events() {
  return (
    <section id="events" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Our Celebrations"
        title="Wedding Events"
        subtitle="Three days of colour, ceremony and salt air — we would love to have you at every moment."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {events.map((event, index) => (
          <Reveal key={event.name} delay={index * 90}>
            <article className="glass-card group h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
              <div className="overflow-hidden bg-ivory">
                <img
                  src={event.image}
                  alt={`Illustration of the couple at their ${event.name} ceremony`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-6 py-7 text-center">
                <h3 className="font-serif text-3xl text-cocoa italic">{event.name}</h3>
                <div className="mx-auto mt-4 h-px w-10 bg-border" />
                <p className="mt-4 text-sm text-muted-foreground">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.time}</p>
                <p className="mt-2 text-xs tracking-[0.16em] text-cocoa/80 uppercase">
                  {event.venue}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
