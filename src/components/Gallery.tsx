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

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  { src: "/images/gallery/galerie-1.jpg", alt: "Jakob Neumann beim Personal Training in Augsburg", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-2.jpg", alt: "Trainingseinheit im Fitnessstudio", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-3.jpg", alt: "Konzentrierte Übungsausführung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-4.jpg", alt: "Coaching und Technikkorrektur", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-5.jpg", alt: "Krafttraining mit Freihanteln", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-6.jpg", alt: "Aufwärmen vor dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-7.jpg", alt: "Individuelle Trainingsbetreuung", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-8.jpg", alt: "Funktionelles Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-9.jpg", alt: "Training im JohnReed Augsburg", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-10.jpg", alt: "Motivation und Struktur im Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-11.jpg", alt: "Beweglichkeits- und Mobility-Übung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-12.jpg", alt: "Jakob Neumann im Gespräch mit Klient:in", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-13.jpg", alt: "Trainingsmoment im Studio", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-14.jpg", alt: "Gemeinsames Aufwärmen", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-15.jpg", alt: "Kraftübung mit Langhantel", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-16.jpg", alt: "Fokus bei der Übungsausführung", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-17.jpg", alt: "Training in der Kleingruppe", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-18.jpg", alt: "Nachbesprechung nach dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-19.jpg", alt: "Technikanpassung während der Übung", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-20.jpg", alt: "Trainingsequipment im Studio", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-21.jpg", alt: "Ausdauertraining", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-22.jpg", alt: "Dehnübung nach dem Training", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-23.jpg", alt: "Gemeinsames Training", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-24.jpg", alt: "Coaching-Moment", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-25.jpg", alt: "Krafttraining an Geräten", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-26.jpg", alt: "Konzentration vor dem Satz", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-27.jpg", alt: "Abschluss einer Trainingseinheit", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-28.jpg", alt: "Personal Training Session", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-29.jpg", alt: "Individuelles Athletiktraining", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-30.jpg", alt: "Trainingsalltag im Studio", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-31.jpg", alt: "Bewegungsanalyse", aspectRatio: "3 / 2" },
  { src: "/images/gallery/galerie-32.jpg", alt: "Zielgerichtetes Training", aspectRatio: "2 / 3" },
  { src: "/images/gallery/galerie-33.jpg", alt: "Trainingseinheit mit Jakob Neumann", aspectRatio: "3 / 2" },  // … weitere Bilder hier ergänzen
];
// ──────────────────────────────────────────────────────────────────────

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

        {/* Pinterest-Style Masonry: native CSS-Columns, kein Scroll-Jacking.
            Kachelhöhen entsprechen dem echten Bildverhältnis — kein Zuschneiden. */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${image.alt} – vergrößern`}
              className="group block w-full break-inside-avoid mb-4 md:mb-5 rounded-2xl overflow-hidden bg-secondary card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? "eager" : "lazy"}
                style={{ aspectRatio: image.aspectRatio ?? "3 / 2" }}
                className="w-full h-full object-cover block transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
            </button>
          ))}
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
