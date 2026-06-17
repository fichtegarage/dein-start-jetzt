// src/components/TargetAudience.tsx
// Brand Guide V1.1: Karten auf Creme = Surface Weiß (#FFFFFF) mit Ink-Text
// Kein dunkler Kartenhintergrund — bg-accent (Nachtblau) war falsch hier
// Hover: card-hover (–1px + Soft Shadow, Brand Motion)

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TargetAudience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const audiences = [
    {
      title: "Du startest neu",
      description:
        "Du hast lange keinen Sport gemacht und weißt nicht, wo du anfangen sollst? Ich begleite dich Schritt für Schritt.",
    },
    {
      title: "Mehr Durchhaltevermögen",
      description:
        "Du hast schon öfter begonnen und wieder aufgehört? Gemeinsam finden wir heraus, was dich dranbleiben lässt.",
    },
    {
      title: "Mehr Motivation",
      description:
        "Dir fehlt der Antrieb und die Energie? Ich helfe dir, deine innere Motivation zu entdecken und zu stärken.",
    },
    {
      title: "Mehr Selbstwertgefühl",
      description:
        "Du möchtest dich in deinem Körper wohler und stärker fühlen? Im Coaching arbeiten wir gemeinsam an Kraft und Selbstvertrauen – beides hängt enger zusammen, als die meisten denken.",
    },
  ];

  return (
    <section id="zielgruppe" className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Passt mein Training zu dir?
          </h2>
          <p className="text-lg text-muted-foreground">
            Erkennst du dich hier wieder? Dann bist du genau richtig.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="p-8 md:p-10 rounded-2xl bg-card border border-border card-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* H3: Ink 1 Mitternacht — Brand Guide Card Title 20/600/–1.8% */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#0F1A2E", letterSpacing: "-0.018em" }}
              >
                {item.title}
              </h3>
              {/* Body: Ink 3 — lesbar auf weißer Karte */}
              <p
                className="leading-relaxed"
                style={{ color: "#3A4459", fontSize: "15px", letterSpacing: "-0.005em" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
