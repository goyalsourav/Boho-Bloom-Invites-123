import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import bg from "@/assets/bg-boho.jpg";
import { Opener } from "@/components/wedding/Opener";
import { Hero } from "@/components/wedding/Hero";
import { Events } from "@/components/wedding/Events";
import { Gallery } from "@/components/wedding/Gallery";
import { LoveStory } from "@/components/wedding/LoveStory";
import { Schedule } from "@/components/wedding/Schedule";
import { Venue } from "@/components/wedding/Venue";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Footer } from "@/components/wedding/Footer";

const title = "Ananya & Rohan — Boho Indian Wedding in Goa";
const description =
  "Join Ananya and Rohan for three days of Haldi, Mehendi and seaside celebration in Goa, 10–12 May 2027. Events, schedule, venue and RSVP.";

export const Route = createFileRoute("/")({
  component: Invitation,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const links = [
  ["Events", "#events"],
  ["Story", "#story"],
  ["Gallery", "#gallery"],
  ["Schedule", "#schedule"],
  ["Venue", "#venue"],
  ["RSVP", "#rsvp"],
];

function Invitation() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div aria-hidden className="fixed inset-0 -z-10 bg-ivory/35" />

      {!opened && <Opener onOpen={() => setOpened(true)} />}

      <main
        className="transition-opacity duration-1000"
        style={{ opacity: opened ? 1 : 0 }}
        aria-hidden={!opened}
      >
        <nav className="sticky top-0 z-30 hidden justify-center gap-8 border-b border-border/50 bg-ivory/60 py-4 backdrop-blur-md md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.68rem] tracking-[0.28em] text-cocoa/80 uppercase transition-colors hover:text-terracotta"
            >
              {label}
            </a>
          ))}
        </nav>

        <Hero />
        <Events />
        <LoveStory />
        <Gallery />
        <Schedule />
        <Venue />
        <Rsvp />
        <Footer />
      </main>
    </div>
  );
}
