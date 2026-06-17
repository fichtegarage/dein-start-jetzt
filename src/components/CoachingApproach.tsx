// src/components/CoachingApproach.tsx
// Brand Guide V1.1: trust-badge entfernt → Nachtblau #1B3A5C
// Icon-Stroke 1.5 im Fließtext

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CoachingApproach = () => {
  const { ref, isVisible } = useScrollAnimation();

  const approaches = [
    {
      title: "Empathisch und planvoll",
      description: "Wir schauen, wo du stehst und wohin du willst. Dann machen wir uns auf den Weg.",
    },
    {
      title: "Ganzheitlich denken",
      description:
        "Mehr Energie. Mehr Belastbarkeit. Wir trainieren nicht nur Muskeln sondern Haltung und Mindset.",
    },
    {
      title: "Aufbauen, nicht aufpumpen",
      description:
        "Wir trainieren nicht für den Spiegelmoment, sondern für langfristige Stärke. Fokus auf saubere Technik, durchdachte Progression und echte Belastbarkeit.",
    },
    {
      title: "Langfristige Routinen",
      description:
        "Motivation kommt und geht. Routine bleibt. Im Coaching schauen wir gemeinsam darauf, was dich dranbleiben lässt – auch an Tagen, an denen die Energie kleiner ist.",
    },
  ];

  return (
    <section id="ansatz" className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
              Mein Ansatz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Es ist ein Prozess, in dem du Schritt für Schritt mit deinem Körper vertrauter wirst.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className="flex gap-4 p-5 rounded-xl card-hover cursor-default"
              >
                {/* Check-Icon: Nachtblau statt trust-badge */}
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#1B3A5C1A" }}
                >
                  <Check
                    className="w-3.5 h-3.5"
                    style={{ color: "#1B3A5C" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1.5">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-14 p-8 md:p-10 bg-card rounded-3xl border border-border">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center max-w-2xl mx-auto">
              „Die meisten Trainer formen deinen Körper. Ich arbeite mit dir außerdem daran, wie du dich in ihm fühlst."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingApproach;
