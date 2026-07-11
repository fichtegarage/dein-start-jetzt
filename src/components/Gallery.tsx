// src/components/Gallery.tsx
// Bento-Grid Fotogalerie — Brand Guide V1.1
// Bilder liegen in public/images/gallery/ — Jakob trägt hier nur Dateinamen + Alt-Texte ein.
// span steuert die Kachelgröße im Bento-Raster:
//   "default" = 1×1 · "wide" = 2×1 · "tall" = 1×2 · "large" = 2×2

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type GallerySpan = "default" | "wide" | "tall" | "large";

interface GalleryImage {
  src: string;
  alt: string;
  span?: GallerySpan;
}

// ─── Bild-Array (Platzhalter) ────────────────────────────────────────────
// Jakob: Dateien nach public/images/gallery/ hochladen (Namenskonvention
// galerie-01.webp, galerie-02.webp, …), hier den src-Pfad + einen kurzen,
// beschreibenden Alt-Text eintragen. span nach Belieben anpassen, damit
// das Raster ausgewogen wirkt (nicht zu viele "large"/"wide" hintereinander,
// als Faustregel auf ca. 4–6 "normale" Kacheln eine große/breite/hohe).
//
// Die Liste ist beliebig erweiterbar — es müssen nicht genau 12 sein.
// Einfach weitere Zeilen nach demselben Muster ergänzen:
//   { src: "/images/gallery/galerie-19.webp", alt: "…" },
// Reihenfolge im Array = Reihenfolge im Raster (von links oben nach rechts unten).
const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/galerie-01.webp", alt: "Jakob Neumann beim Personal Training in Augsburg", span: "large" },
  { src: "/images/gallery/galerie-02.webp", alt: "Trainingseinheit im Fitnessstudio" },
  { src: "/images/gallery/galerie-03.webp", alt: "Konzentrierte Übungsausführung", span: "tall" },
  { src: "/images/gallery/galerie-04.webp", alt: "Coaching und Technikkorrektur", span: "wide" },
  { src: "/images/gallery/galerie-05.webp", alt: "Krafttraining mit Freihanteln" },
  { src: "/images/gallery/galerie-06.webp", alt: "Aufwärmen vor dem Training" },
  { src: "/images/gallery/galerie-07.webp", alt: "Individuelle Trainingsbetreuung", span: "tall" },
  { src: "/images/gallery/galerie-08.webp", alt: "Funktionelles Training" },
  { src: "/images/gallery/galerie-09.webp", alt: "Training im JohnReed Augsburg", span: "wide" },
  { src: "/images/gallery/galerie-10.webp", alt: "Motivation und Struktur im Training" },
  { src: "/images/gallery/galerie-11.webp", alt: "Beweglichkeits- und Mobility-Übung" },
  { src: "/images/gallery/galerie-12.webp", alt: "Jakob Neumann im Gespräch mit Klient:in" },
  { src: "/images/gallery/galerie-13.webp", alt: "Trainingsmoment im Studio", span: "tall" },
  { src: "/images/gallery/galerie-14.webp", alt: "Gemeinsames Aufwärmen" },
  { src: "/images/gallery/galerie-15.webp", alt: "Kraftübung mit Langhantel", span: "wide" },
  { src: "/images/gallery/galerie-16.webp", alt: "Fokus bei der Übungsausführung" },
  { src: "/images/gallery/galerie-17.webp", alt: "Training in der Kleingruppe" },
  { src: "/images/gallery/galerie-18.webp", alt: "Nachbesprechung nach dem Training" },
  // … weitere Bilder hier ergänzen
];
// ──────────────────────────────────────────────────────────────────────

const spanClasses: Record<GallerySpan, string> = {
  default: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-2 row-span-2",
};

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="galerie" className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-4">
            Eindrücke aus dem Training
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Echte Momente statt Hochglanz.
          </p>
        </div>

        {/* Bento-Grid mit Teaser-Anschnitt: collapsed zeigt ~1,5 Reihen,
            zweite Reihe ragt angeschnitten hervor (kein Gradient-Fade) */}
        <div
          className={`overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            expanded
              ? "max-h-[3000px]"
              : "max-h-[210px] sm:max-h-[260px] lg:max-h-[320px]"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[200px] gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`card-hover overflow-hidden rounded-2xl lg:rounded-3xl bg-secondary ${
                  spanClasses[image.span ?? "default"]
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <Button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls="galerie-grid"
            size="lg"
            className="rounded-full group"
          >
            {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
