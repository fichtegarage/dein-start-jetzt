// src/components/Gallery.tsx
// Pinterest-Style Masonry-Galerie — Brand Guide V1.1
// Bilder liegen in public/images/gallery/ — Jakob trägt hier nur Dateinamen +
// Alt-Texte (+ optional aspectRatio) ein.
//
// Motion-Hinweis: Brand Guide schließt Parallax/Marquee/Bounce aus. Der
// gewünschte "man scrollt immer weiter, um das nächste Bild ganz zu sehen"-
// Effekt entsteht hier daher NICHT über Scroll-Jacking, sondern rein durch
// echten Dokumentfluss: unterschiedlich hohe Spalten sorgen dafür, dass am
// Viewport-Rand immer ein Bild angeschnitten ist, während normal weiter-
// gescrollt wird — kein JS-Trick, keine Scroll-Hijacks, brand-konform.

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface GalleryImage {
  src: string;
  alt: string;
  // Reserviert Platz vor dem Laden (verhindert Layout-Shift) und bestimmt
  // die Kachelhöhe im Masonry-Raster. Format: "Breite / Höhe", z. B. "3 / 4".
  // Optional — Jakob kann hier das tatsächliche Seitenverhältnis des Fotos
  // eintragen, sobald die finalen Maße feststehen. Ohne Angabe: 3 / 4.
  aspectRatio?: string;
}

// ─── Bild-Array (Platzhalter, 27 Fotos) ──────────────────────────────────
// Jakob: Dateien nach public/images/gallery/ hochladen (Namenskonvention
// galerie-01.webp … galerie-27.webp), hier src-Pfad + kurzen, beschreibenden
// Alt-Text eintragen. aspectRatio optional anpassen, wenn das reale Foto
// deutlich abweicht (z. B. Hochformat "3 / 4", Querformat "4 / 3", "16 / 9",
// Quadrat "1 / 1"). Reihenfolge im Array = Lesefluss oben-links → unten-rechts
// (bei Masonry: erst Spalte für Spalte). Liste ist beliebig erweiterbar,
// einfach weitere Zeilen nach demselben Muster ergänzen.
const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/galerie-01.webp", alt: "Jakob Neumann beim Personal Training in Augsburg", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-02.webp", alt: "Trainingseinheit im Fitnessstudio", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-03.webp", alt: "Konzentrierte Übungsausführung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-04.webp", alt: "Coaching und Technikkorrektur", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-05.webp", alt: "Krafttraining mit Freihanteln", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-06.webp", alt: "Aufwärmen vor dem Training", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-07.webp", alt: "Individuelle Trainingsbetreuung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-08.webp", alt: "Funktionelles Training", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-09.webp", alt: "Training im JohnReed Augsburg", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-10.webp", alt: "Motivation und Struktur im Training", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-11.webp", alt: "Beweglichkeits- und Mobility-Übung", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-12.webp", alt: "Jakob Neumann im Gespräch mit Klient:in", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-13.webp", alt: "Trainingsmoment im Studio", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-14.webp", alt: "Gemeinsames Aufwärmen", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-15.webp", alt: "Kraftübung mit Langhantel", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-16.webp", alt: "Fokus bei der Übungsausführung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-17.webp", alt: "Training in der Kleingruppe", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-18.webp", alt: "Nachbesprechung nach dem Training", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-19.webp", alt: "Technikanpassung während der Übung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-20.webp", alt: "Trainingsequipment im Studio", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-21.webp", alt: "Ausdauertraining", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-22.webp", alt: "Dehnübung nach dem Training", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-23.webp", alt: "Gemeinsames Training", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-24.webp", alt: "Coaching-Moment", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-25.webp", alt: "Krafttraining an Geräten", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-26.webp", alt: "Konzentration vor dem Satz", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-27.webp", alt: "Abschluss einer Trainingseinheit", aspectRatio: "16 / 9" },
  // … weitere Bilder hier ergänzen
];
// ──────────────────────────────────────────────────────────────────────

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

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
            Unterschiedliche Bildhöhen sorgen dafür, dass beim normalen
            Scrollen immer ein Bild am Viewport-Rand angeschnitten ist. */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="break-inside-avoid mb-4 md:mb-5 rounded-2xl overflow-hidden bg-secondary card-hover"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? "eager" : "lazy"}
                style={{ aspectRatio: image.aspectRatio ?? "3 / 4" }}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
