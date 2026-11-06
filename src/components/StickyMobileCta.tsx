// src/components/StickyMobileCta.tsx
// Sticky-Leiste mit Primär-CTA am unteren Viewport-Rand (nur Startseite, nur Mobil/Tablet).
//
// Sichtbarkeit:
// - erst, nachdem der Hero (#hero) nach oben aus dem Viewport gescrollt ist
//   (keine Dopplung mit dem Hero-CTA above the fold)
// - nicht, solange der Kontaktbereich (#kontakt) oder der Footer im Viewport ist
//   (keine Dopplung am Seitenende, Footer-Links bleiben frei)
// - ab lg (1024 px) nie: dort ist der Header-CTA dauerhaft sichtbar
//
// Ziel: gleiche URL und Zielmechanik wie alle Primär-CTAs (src=website, neuer Tab).
// Brand V1.1: Pill-Button (Mitternacht auf Creme), dezenter Rand und Schatten, keine neuen Farben.

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUCHUNG_URL_WEBSITE } from "@/lib/booking";

const StickyMobileCta = () => {
  const [heroPassed, setHeroPassed] = useState(false);
  const [endInView, setEndInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const hero = document.getElementById("hero");
    const kontakt = document.getElementById("kontakt");
    const footer = document.querySelector("footer");

    // Hero gilt als „weggescrollt", wenn er nicht mehr sichtbar ist
    // UND oberhalb des Viewports liegt (nicht erst beim Laden unterhalb).
    const heroObserver = hero
      ? new IntersectionObserver(([entry]) => {
          setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
        })
      : null;
    heroObserver?.observe(hero!);

    // Kontaktbereich und Footer: Leiste ausblenden, solange einer von beiden im Viewport ist.
    const inView = new Map<Element, boolean>();
    const endObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => inView.set(entry.target, entry.isIntersecting));
      setEndInView(Array.from(inView.values()).some(Boolean));
    });
    if (kontakt) endObserver.observe(kontakt);
    if (footer) endObserver.observe(footer);

    return () => {
      heroObserver?.disconnect();
      endObserver.disconnect();
    };
  }, []);

  const visible = heroPassed && !endInView;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "border-t border-border bg-background/95 backdrop-blur-xl",
        "shadow-[0_-4px_16px_hsl(0_0%_0%/0.06)]",
        "transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "invisible opacity-0 translate-y-full",
      )}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <div className="container pt-3">
        <Button asChild size="lg" className="w-full min-h-12">
          <a href={BUCHUNG_URL_WEBSITE} target="_blank" rel="noopener noreferrer">
            Erstgespräch buchen
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCta;
