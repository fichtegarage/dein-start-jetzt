// src/components/Gallery.tsx
// Pinterest-Style Masonry-Galerie mit Lightbox — Brand Guide V1.1
// Bilder liegen in public/images/gallery/galerie-1.jpg … galerie-33.jpg.
//
// Seitenverhältnisse (aspectRatio) sind aus den echten Bildmaßen ermittelt —
// dadurch kein unschönes Zuschneiden mehr, die Kacheln passen exakt zum Foto.
//
// Motion-Hinweis: Brand Guide schließt Parallax/Marquee/Bounce aus. Der
// Scroll-Effekt entsteht rein durch unterschiedlich hohe Masonry-Spalten
// (echter Dokumentfluss, kein Scroll-Jacking). Die Lightbox verwendet nur
// dezente Opacity/Scale-Übergänge mit der Brand-Easing-Kurve, kein Bounce.
//
// Einklappen: Die Galerie startet als Teaser (eine Bildreihe) und lässt sich
// über „Mehr anzeigen" / „Weniger anzeigen" aufklappen. Alle 33 Bilder bleiben
// im Array und im DOM — der Teaser blendet nur per CSS aus. Dadurch bleiben die
// Indizes der Lightbox in beiden Zuständen identisch.

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  // Reales Seitenverhältnis "Breite / Höhe" — reserviert Platz vor dem Laden
  // (kein Layout-Shift) und verhindert unpassendes Zuschneiden.
  aspectRatio?: string;
}

// ─── Bild-Array (33 Fotos, Seitenverhältnisse aus den Originaldateien) ───
// Weitere Bilder ergänzen: gleiche Zeile kopieren, Dateiname + Alt-Text
// anpassen; aspectRatio im Format "Breite / Höhe" des jeweiligen Originalfotos.
const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/galerie-1.webp", alt: "Jakob Neumann beim Personal Training in Augsburg", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-2.webp", alt: "Trainingseinheit im Fitnessstudio", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-3.webp", alt: "Konzentrierte Übungsausführung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-4.webp", alt: "Coaching und Technikkorrektur", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-5.webp", alt: "Krafttraining mit Freihanteln", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-6.webp", alt: "Aufwärmen vor dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-7.webp", alt: "Individuelle Trainingsbetreuung", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-8.webp", alt: "Funktionelles Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-9.webp", alt: "Training im JohnReed Augsburg", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-10.webp", alt: "Motivation und Struktur im Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-11.webp", alt: "Beweglichkeits- und Mobility-Übung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-12.webp", alt: "Jakob Neumann im Gespräch mit Klient:in", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-13.webp", alt: "Trainingsmoment im Studio", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-14.webp", alt: "Gemeinsames Aufwärmen", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-15.webp", alt: "Kraftübung mit Langhantel", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-16.webp", alt: "Fokus bei der Übungsausführung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-17.webp", alt: "Training in der Kleingruppe", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-18.webp", alt: "Nachbesprechung nach dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-19.webp", alt: "Technikanpassung während der Übung", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-20.webp", alt: "Trainingsequipment im Studio", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-21.webp", alt: "Ausdauertraining", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-22.webp", alt: "Dehnübung nach dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-23.webp", alt: "Gemeinsames Training", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-24.webp", alt: "Coaching-Moment", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-25.webp", alt: "Krafttraining an Geräten", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-26.webp", alt: "Konzentration vor dem Satz", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-27.webp", alt: "Abschluss einer Trainingseinheit", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-28.webp", alt: "Personal Training Session", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-29.webp", alt: "Individuelles Athletiktraining", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-30.webp", alt: "Trainingsalltag im Studio", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-31.webp", alt: "Bewegungsanalyse", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-32.webp", alt: "Zielgerichtetes Training", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-33.webp", alt: "Trainingseinheit mit Jakob Neumann", aspectRatio: "3 / 2" },  // … weitere Bilder hier ergänzen
];
// ──────────────────────────────────────────────────────────────────────

// ─── Teaser im eingeklappten Zustand ─────────────────────────────────────
// Sichtbare Bilder je Breakpoint (Spaltenzahl aus `columns-2 sm:columns-3 lg:columns-4`):
//   < 640 px   (2 Spalten): 4 Bilder → 2 × 2
//   640–1023 px (3 Spalten): 3 Bilder → 1 Reihe
//   ≥ 1024 px  (4 Spalten): 4 Bilder → 1 Reihe
// Die Anzahl muss ein Vielfaches der Spaltenzahl sein — sonst verteilt
// CSS-Columns die Kacheln ungleichmäßig und lässt die letzte Spalte leer.
// Die Klassen stehen als vollständige Strings da, damit Tailwind sie findet.
const TEASER_EAGER_COUNT = 4;

const teaserClass = (index: number): string => {
  if (index <= 2) return "block"; // in jedem Breakpoint Teil des Teasers
  if (index === 3) return "block sm:max-lg:hidden"; // nur bei 3 Spalten ausgeblendet
  return "hidden"; // nur im aufgeklappten Zustand sichtbar
};
// ──────────────────────────────────────────────────────────────────────

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const collapseRequested = useRef(false);
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleExpanded = () => {
    collapseRequested.current = expanded; // true, wenn gerade eingeklappt wird
    setExpanded(!expanded);
  };

  // Nach dem Einklappen schrumpft die Seite um mehrere tausend Pixel. Liegt der
  // Sektionsanfang dann über dem Viewport, springen wir dorthin zurück — sonst
  // landet man irgendwo weiter unten (Preise/FAQ). `scroll-margin-top` der
  // Sektion (index.css) hält den Abstand zum Header. Sofortiger Sprung statt
  // Animation, damit nichts durch den Inhalt darunter „rauscht".
  useEffect(() => {
    if (expanded || !collapseRequested.current) return;
    collapseRequested.current = false;
    const section = sectionRef.current;
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    }
  }, [expanded]);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((prev) =>
        prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const showNext = useCallback(
    () =>
      setOpenIndex((prev) =>
        prev === null ? null : (prev + 1) % galleryImages.length
      ),
    []
  );

  // Tastatursteuerung + Scroll-Sperre, solange die Lightbox offen ist
  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  const activeImage = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section ref={sectionRef} id="galerie" className="section-padding">
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

        {/* Pinterest-Style Masonry: native CSS-Columns, kein Scroll-Jacking.
            Kachelhöhen entsprechen dem echten Bildverhältnis — kein Zuschneiden. */}
        <div
          id="galerie-bilder"
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-5"
        >
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${image.alt} – vergrößern`}
              className={`group ${
                expanded ? "block" : teaserClass(index)
              } w-full break-inside-avoid mb-4 md:mb-5 rounded-2xl overflow-hidden bg-secondary card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < TEASER_EAGER_COUNT ? "eager" : "lazy"}
                style={{ aspectRatio: image.aspectRatio ?? "3 / 2" }}
                className="w-full h-full object-cover block transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>

        {/* Umschalter: Teaser ↔ alle Bilder. Bleibt dasselbe Element, daher
            behält die Tastatur-Fokussierung beim Umschalten ihre Position. */}
        <div className="flex justify-center mt-2 md:mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-controls="galerie-bilder"
          >
            {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
            {expanded ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F1A2E]/92 p-4 md:p-8 animate-in fade-in duration-300"
        >
          {/* Schließen */}
          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            <X size={22} strokeWidth={2} />
          </button>

          {/* Zurück */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            <ChevronLeft size={26} strokeWidth={2} />
          </button>

          {/* Weiter */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Nächstes Bild"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            <ChevronRight size={26} strokeWidth={2} />
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-xl md:rounded-2xl object-contain animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
