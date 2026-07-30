import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const story = [
  { year: "2019", title: "A Monsoon Meeting", text: "A crowded Bombay bookshop, one last copy of the same novel, and a conversation that lasted until closing time." },
  { year: "2021", title: "First Journey", text: "Two backpacks, a coastal road and a promise to always find the quietest beach in every town." },
  { year: "2024", title: "The Question", text: "Barefoot at sunrise, with dried palms in her hair, he asked — and she was already saying yes." },
  { year: "2027", title: "Forever Begins", text: "Now, surrounded by everyone we love, we begin the chapter we have been writing all along." },
];

export function LoveStory() {
  return (
    <section id="story" className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="How It Began" title="Our Love Story" />

      <div className="relative mt-16">
        <span className="absolute top-2 bottom-2 left-[9px] w-px bg-border sm:left-1/2" />
        {story.map((item, index) => (
          <Reveal key={item.year} delay={index * 90}>
            <div
              className={`relative mb-12 pl-10 sm:w-1/2 sm:pl-0 ${
                index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <span
                className={`absolute top-2 left-0 h-[19px] w-[19px] rounded-full border border-border bg-ivory sm:left-auto ${
                  index % 2 === 0 ? "sm:-right-[10px]" : "sm:-left-[9px]"
                }`}
              />
              <p className="eyebrow">{item.year}</p>
              <h3 className="mt-3 font-serif text-2xl text-cocoa italic">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
