import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const schedule = [
  { day: "Day One — 10 May", items: [["10:00 AM", "Haldi", "Sunlit Courtyard"], ["04:00 PM", "Mehendi", "Garden Pavilion"]] },
  { day: "Day Two — 11 May", items: [["11:00 AM", "Pool Party", "Palm Deck"], ["07:00 PM", "Cocktail Party", "The Driftwood Bar"]] },
  { day: "Day Three — 12 May", items: [["10:00 AM", "Mayra", "Ancestral Home"], ["07:00 PM", "Reception", "Grand Ballroom"]] },
];

export function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Plan Your Days" title="The Schedule" />

      <div className="mt-14 space-y-8">
        {schedule.map((group, groupIndex) => (
          <Reveal key={group.day} delay={groupIndex * 100}>
            <div className="glass-card rounded-3xl px-6 py-8 sm:px-10">
              <p className="eyebrow">{group.day}</p>
              <div className="mt-6 space-y-6">
                {group.items.map(([time, name, place]) => (
                  <div
                    key={name}
                    className="flex flex-col gap-1 border-b border-border/70 pb-5 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="w-28 shrink-0 text-xs tracking-[0.2em] text-terracotta uppercase">
                      {time}
                    </span>
                    <span className="flex-1 font-serif text-2xl text-cocoa italic">{name}</span>
                    <span className="text-sm text-muted-foreground">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
