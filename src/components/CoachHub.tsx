// src/components/CoachHub.tsx
// Brand Guide V1.1: trust-badge entfernt → Nachtblau #1B3A5C
// Icon-Stroke 1.5 im Fließtext (Brand Guide)

import { Smartphone, ClipboardList, TrendingUp, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CoachHub = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Smartphone,
      title: "Trainingsplan auf deine Ziele zugeschnitten",
      description:
        "KI-unterstützt erstellt, von mir kuratiert. Basis sind dein Assessment, deine Ziele, dein Alltag.",
    },
    {
      icon: ClipboardList,
      title: "Workout-Logging mit dir im Training",
      description:
        "Du loggst Sätze, Gewichte und Wiederholungen direkt während des Trainings. Keine Notizzettel, kein Rätsel beim nächsten Mal. Ich sehe, wie du dich entwickelst.",
    },
    {
      icon: TrendingUp,
      title: "Automatische Progression",
      description:
        "Du wirst Woche für Woche stärker, ohne dass du planen musst. Die App passt Gewichte und Wiederholungen für dich an.",
    },
    {
      icon: Activity,
      title: "Warm-up und Cool-down inklusive",
      description:
        "Passend zur jeweiligen Einheit. Du startest vorbereitet, du gehst aufgeräumt nach Hause.",
    },
  ];

  return (
    <section id="coach-hub" className="section-padding section-alt">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-[13px] font-medium tracking-[0.06em] uppercase mb-3" style={{ color: "#3A4459" }}>
              Coach Hub · mein USP
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
              Du trainierst nicht nur, wenn ich da bin.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Du trainierst kontinuierlich, angeleitet durch eine App, die ich selbst entwickelt habe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 rounded-xl card-hover cursor-default"
              >
                {/* Icon-Container: Nachtblau-Hintergrund statt trust-badge */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#1B3A5C1A" /* Nachtblau 10% */ }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: "#1B3A5C" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1.5">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-14 p-8 md:p-10 bg-card rounded-3xl border border-border">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center max-w-2xl mx-auto">
              „Trainieren passiert nicht nur in den 60 Minuten, in denen ich neben dir stehe. Es passiert auch und besonders dazwischen. Und genau dort begleitet dich die App."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachHub;
