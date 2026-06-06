// src/data/testimonials.ts
//
// ╔══════════════════════════════════════════════════════════════════╗
// ║  ERWEITERBARKEIT                                                 ║
// ║  Ein weiteres Testimonial hinzufügen:                           ║
// ║  1. Neues Objekt ans Ende des Arrays anhängen                   ║
// ║  2. Foto unter public/testimonials/<name>.webp ablegen          ║
// ║  → Keine Komponenten-Änderung nötig.                           ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ⚠️  DATENSCHUTZ-VORAUSSETZUNG: Für jeden Eintrag muss eine
// schriftliche Einwilligung für Foto + Name + Zitat + Veröffentlichung
// auf jakob-neumann.net vorliegen (DSGVO + Recht am eigenen Bild).

export interface Testimonial {
  id: string;
  /** Anzeigename, z. B. "Tamina M." */
  name: string;
  /** Pfad relativ zu public/, z. B. "/testimonials/tamina.webp" */
  photo: string;
  /** Zitat-Text */
  quote: string;
  /** Optional: Kontext wie "Trainiert seit 2025" oder Trainingsziel */
  context?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Tamina",
    photo: "/testimonials/tamina.webp",
    quote:
      "Früher bin ich im Fitnessstudio meist direkt aufs Laufband gegangen und habe freie Gewichte eher gemieden, weil ich mich dabei einfach unsicher gefühlt habe. Dank Jakobs Unterstützung weiß ich heute genau, worauf es bei den Übungen ankommt, und fühle mich beim Training deutlich selbstbewusster. Schon nach wenigen Wochen habe ich große Fortschritte bemerkt, die nur mit seiner persönlichen und sehr individualisierten Betreuung möglich waren.",
    context: "Ziel: Kraft & Technik",
  },
  {
    id: "testimonial-2",
    // ↓ TODO: Name anpassen sobald Stefan Einwilligung gegeben hat
    name: "Stefan",
    // ↓ TODO: Foto ablegen sobald Stefan sein Foto liefert
    photo: "/testimonials/stefan.webp",
    quote:
      "Das Training mit Jakob macht Spaß und bringt gleichzeitig spürbare Fortschritte. Durch seine Erfahrung, seinen Humor und seinen Blick für individuelle Potenziale entwickelt er gezielte Trainingspläne, die dabei helfen, persönliche Ziele erfolgreich zu erreichen.",
    context: "Ziel: Muskelaufbau",
  },

  // ── Weiteres Testimonial hinzufügen: hier anhängen ──────────────────
  // {
  //   id: "testimonial-3",
  //   name: "...",
  //   photo: "/testimonials/....webp",
  //   quote: "...",
  //   context: "...",
  // },
];
