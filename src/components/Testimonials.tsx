// src/components/Testimonials.tsx
//
// Brand Guidelines V1.1 konform:
// - Schrift: Inter durchgehend (keine Lora), Tracking per Guidelines
// - Farben: Mitternacht #0F1A2E, Warm Creme #F4F2ED, Sand #ECEAE4
//   Ink-Skala: #0F1A2E / #1F2A40 / #3A4459, Rule #C5BFB2
// - Eckradius: 24px für Quote-Block (laut Brand Guide "QUOTE")
// - Kein Lora, kein Anführungszeichen-Ornament als Pseudo-Icon
// - Eyebrow: 13px / 500 / +6% tracking (CAPS)
// - H2: 30px / 600 / -2.5% tracking
// - Body: 15px / 400 / -0.5% tracking
// - Keine Ausrufezeichen, keine Emoji

import { testimonials } from "@/data/testimonials";

interface TestimonialCardProps {
  name: string;
  photo: string;
  quote: string;
  context?: string;
}

function TestimonialCard({ name, photo, quote, context }: TestimonialCardProps) {
  return (
    <article className="flex flex-col items-center gap-6">

      {/* Foto — groß, rund */}
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
        style={{ outline: "1px solid #C5BFB2", outlineOffset: "3px" }}
        loading="lazy"
        width={128}
        height={128}
      />

      {/* Zitat-Block — Radius 24px laut Brand Guide */}
      <blockquote
        className="w-full bg-white rounded-3xl px-8 py-7"
        style={{ border: "1px solid #E2DFD8" }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "-0.005em",
            lineHeight: "1.7",
            color: "#1F2A40",
          }}
        >
          „{quote}"
        </p>
      </blockquote>

      {/* Name + Kontext */}
      <footer className="flex flex-col items-center gap-1">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.005em",
            color: "#0F1A2E",
          }}
        >
          {name}
        </span>
        {context && (
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#3A4459",
            }}
          >
            {context}
          </span>
        )}
      </footer>

    </article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#F4F2ED" }}
      className="py-[80px] md:py-[104px] px-6"
    >
      <div className="max-w-[1120px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#1A47D9",
            }}
          >
            Stimmen
          </p>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(24px, 4vw, 30px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              color: "#0F1A2E",
            }}
          >
            Was Menschen sagen,{" "}
            <br className="hidden md:block" />
            mit denen ich arbeite.
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              letterSpacing: "-0.005em",
              lineHeight: 1.7,
              color: "#3A4459",
            }}
          >
            Keine bezahlten Bewertungen. Zwei Menschen, mit denen ich
            trainiere - in ihren eigenen Worten.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
          style={{ maxWidth: "768px", margin: "0 auto" }}
        >
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
