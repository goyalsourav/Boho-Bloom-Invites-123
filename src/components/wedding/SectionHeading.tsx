import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 font-serif text-4xl text-cocoa sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-14 bg-border" />
        <span className="text-terracotta text-sm">&#9825;</span>
        <span className="h-px w-14 bg-border" />
      </div>
      {subtitle ? (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
