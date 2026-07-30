import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "w-full rounded-2xl border border-border bg-ivory/70 px-5 py-3.5 text-sm text-cocoa outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-terracotta";

export function Rsvp() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="rsvp" className="mx-auto max-w-2xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Kindly Reply"
        title="RSVP"
        subtitle="Please let us know by 1 April 2027 so we can save you a seat by the sea."
      />

      <Reveal className="mt-14">
        <div className="glass-card rounded-3xl px-6 py-10 sm:px-12">
          {sent ? (
            <div className="py-10 text-center">
              <p className="text-2xl text-terracotta">&#9825;</p>
              <h3 className="mt-4 font-serif text-3xl text-cocoa italic">Thank you</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Your response has been noted. We cannot wait to celebrate with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="eyebrow">Full Name</label>
                <input id="name" name="name" required placeholder="Your name" className={`mt-2 ${fieldClass}`} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="eyebrow">Phone</label>
                  <input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" className={`mt-2 ${fieldClass}`} />
                </div>
                <div>
                  <label htmlFor="guests" className="eyebrow">Guests</label>
                  <input id="guests" name="guests" type="number" min={1} max={10} defaultValue={2} className={`mt-2 ${fieldClass}`} />
                </div>
              </div>
              <div>
                <label htmlFor="attendance" className="eyebrow">Attendance</label>
                <select id="attendance" name="attendance" className={`mt-2 ${fieldClass}`} defaultValue="yes">
                  <option value="yes">Joyfully accepts</option>
                  <option value="no">Regretfully declines</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="eyebrow">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="A note for the couple" className={`mt-2 resize-none ${fieldClass}`} />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-terracotta px-8 py-4 text-xs tracking-[0.3em] text-primary-foreground uppercase transition-all duration-500 hover:opacity-90 hover:shadow-[var(--shadow-lift)]"
              >
                Send Response
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
