// src/components/Testimonials.tsx
//
// Sektion mappt über das testimonials-Array aus src/data/testimonials.ts.
// Design: Mitternacht (#0F1A2E) Hintergrund, Warm-Creme (#F4F2ED) Text,
// Kobalt (#1A47D9) Akzent — konsistent mit der übrigen Seite.
// Fonts: Inter (Body), Lora (Serif-Akzent bei Überschrift).
// Icons: Lucide, strokeWidth 1.5.
//
// ERWEITERBARKEIT: Weiteres Testimonial = Eintrag in src/data/testimonials.ts
// + Foto in public/testimonials/. Keine Änderung hier nötig.
//
// Carousel-Bereitschaft: Grid-Markup bleibt rein strukturell; ein Carousel-
// Wrapper kann später um die .testimonials-grid-div gelegt werden.

import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

// ---------------------------------------------------------------------------
// Sub-Komponente: einzelne Testimonial-Card
// ---------------------------------------------------------------------------
interface TestimonialCardProps {
  name: string;
  photo: string;
  quote: string;
  context?: string;
}

function TestimonialCard({ name, photo, quote, context }: TestimonialCardProps) {
  return (
    <article className="
      relative flex flex-col gap-5
      bg-[#0F1A2E]/60 border border-white/10
      rounded-2xl p-8
      backdrop-blur-sm
      transition-all duration-300 hover:border-white/20 hover:bg-[#0F1A2E]/80
    ">
      {/* Quote-Icon oben links */}
      <Quote
        className="text-[#1A47D9] shrink-0"
        size={28}
        strokeWidth={1.5}
        aria-hidden
      />

      {/* Zitat-Text */}
      <blockquote className="flex-1">
        <p className="text-[#F4F2ED]/90 text-base leading-relaxed font-light italic">
          {quote}
        </p>
      </blockquote>

      {/* Trennlinie */}
      <div className="h-px bg-white/10" />

      {/* Foto + Name + Kontext */}
      <footer className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="
            w-12 h-12 rounded-full object-cover
            ring-2 ring-[#1A47D9]/40
          "
          loading="lazy"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-0.5">
          <span className="text-[#F4F2ED] font-semibold text-sm tracking-wide">
            {name}
          </span>
          {context && (
            <span className="text-[#F4F2ED]/50 text-xs uppercase tracking-wider">
              {context}
            </span>
          )}
        </div>
      </footer>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Sektion
// ---------------------------------------------------------------------------
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#0F1A2E] py-24 px-4 overflow-hidden"
    >
      {/* Hintergrund-Akzent (subtiler Lichtfühl passend zum Hero) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1A47D9]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Überschrift */}
        <div className="text-center mb-14">
          <p className="text-[#1A47D9] text-sm font-medium uppercase tracking-[0.15em] mb-3">
            Stimmen aus dem Training
          </p>
          <h2 className="font-['Lora',serif] text-3xl md:text-4xl font-semibold text-[#F4F2ED] leading-tight">
            Das sagen meine Kundinnen &amp; Kunden
          </h2>
          <p className="mt-4 text-[#F4F2ED]/60 text-base max-w-xl mx-auto">
            Echte Ergebnisse. Echte Menschen.
          </p>
        </div>

        {/* Responsives Grid
            – 1 Spalte auf Mobile, 2 Spalten ab md
            – bricht automatisch um, falls mehr Einträge kommen
            – Carousel-Wrapper kann hier eingesetzt werden  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              photo={t.photo}
              quote={t.quote}
              context={t.context}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
