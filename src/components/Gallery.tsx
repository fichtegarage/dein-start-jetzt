// src/components/Gallery.tsx
// Pinterest-Style Masonry-Galerie — Brand Guide V1.1
// Bilder liegen in public/images/gallery/ (aktuell: galerie-1.jpg … galerie-33.jpg,
// so wie von Jakob hochgeladen — ohne führende Null, als .jpg).
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
  aspectRatio?: string;
}

// ─── Bild-Array (33 Fotos, an Jakobs tatsächliche Dateinamen angepasst) ──
// Weitere Bilder ergänzen: gleiche Zeile kopieren, Dateiname + Alt-Text anpassen.
const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/galerie-1.jpg", alt: "Jakob Neumann beim Personal Training in Augsburg", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-2.jpg", alt: "Trainingseinheit im Fitnessstudio", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-3.jpg", alt: "Konzentrierte Übungsausführung", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-4.jpg", alt: "Coaching und Technikkorrektur", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-5.jpg", alt: "Krafttraining mit Freihanteln", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-6.jpg", alt: "Aufwärmen vor dem Training", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-7.jpg", alt: "Individuelle Trainingsbetreuung", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-8.jpg", alt: "Funktionelles Training", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-9.jpg", alt: "Training im JohnReed Augsburg", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-10.jpg", alt: "Motivation und Struktur im Training", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-11.jpg", alt: "Beweglichkeits- und Mobility-Übung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-12.jpg", alt: "Jakob Neumann im Gespräch mit Klient:in", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-13.jpg", alt: "Trainingsmoment im Studio", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-14.jpg", alt: "Gemeinsames Aufwärmen", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-15.jpg", alt: "Kraftübung mit Langhantel", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-16.jpg", alt: "Fokus bei der Übungsausführung", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-17.jpg", alt: "Training in der Kleingruppe", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-18.jpg", alt: "Nachbesprechung nach dem Training", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-19.jpg", alt: "Technikanpassung während der Übung", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-20.jpg", alt: "Trainingsequipment im Studio", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-21.jpg", alt: "Ausdauertraining", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-22.jpg", alt: "Dehnübung nach dem Training", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-23.jpg", alt: "Gemeinsames Training", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-24.jpg", alt: "Coaching-Moment", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-25.jpg", alt: "Krafttraining an Geräten", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-26.jpg", alt: "Konzentration vor dem Satz", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-27.jpg", alt: "Abschluss einer Trainingseinheit", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-28.jpg", alt: "Personal Training Session", aspectRatio: "1 / 1" },
  { src: "/images/gallery/galerie-29.jpg", alt: "Individuelles Athletiktraining", aspectRatio: "4 / 5" },
  { src: "/images/gallery/galerie-30.jpg", alt: "Trainingsalltag im Studio", aspectRatio: "16 / 9" },
  { src: "/images/gallery/galerie-31.jpg", alt: "Bewegungsanalyse", aspectRatio: "3 / 4" },
  { src: "/images/gallery/galerie-32.jpg", alt: "Zielgerichtetes Training", aspectRatio: "4 / 3" },
  { src: "/images/gallery/galerie-33.jpg", alt: "Trainingseinheit mit Jakob Neumann", aspectRatio: "1 / 1" },
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
