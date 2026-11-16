// src/components/Process.tsx
// Ablauf-Block (Startseite): konkrete 4-Schritte-Methodik, verdichtet aus der Produktmappe.
// Brand Guide V1.1: Du-Form, kein Ausrufezeichen, Nachtblau #1B3A5C als einziger Akzent,
// Icon-Stroke 1.5, rounded-2xl, Karten auf Surface Weiß.

import { MessageCircle, ClipboardCheck, Smartphone, Dumbbell } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Erstgespräch + Probetraining",
    description:
      "Wir sprechen über deine Ziele, deine Geschichte, deinen Kalender – und gehen gemeinsam in Bewegung.",
    label: "60–75 Min · kostenlos · unverbindlich",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Eine eigene Einheit: Wir messen, wo du stehst, und legen gemeinsame Ziele fest.",
    label: "in jedem Paket dabei",
  },
  {
    number: 3,
    icon: Smartphone,
    title: "Trainingsplan in der App",
    description:
      "Auf Basis deines Assessments baue ich deinen Plan – jederzeit auf deinem Handy.",
    label: "wächst mit dir",
  },
  {
    number: 4,
    icon: Dumbbell,
    title: "Gecoachte Sessions + App-Training",
    description:
      "Beides parallel, im JohnReed Augsburg. Wie du es über den Monat verteilst, entscheidest du.",
    label: "du bist die Konstante",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ablauf" className="section-padding section-alt">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            So arbeite ich mit dir
          </h2>
          <p className="text-lg text-muted-foreground">
            Kein Geheimrezept, kein Bootcamp. Eine ruhige, klare Abfolge – damit du weißt, was als
            Nächstes kommt.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto list-none p-0">
          {steps.map(({ number, icon: Icon, title, description, label }) => (
            <li
              key={number}
              className="flex flex-col p-8 rounded-2xl bg-card border border-border card-hover cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#1B3A5C1A" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "#1B3A5C" }}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span
                  className="text-sm font-semibold tabular-nums"
                  style={{ color: "#1B3A5C" }}
                  aria-hidden="true"
                >
                  {String(number).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#0F1A2E", letterSpacing: "-0.018em" }}
              >
                {title}
              </h3>
              <p
                className="leading-relaxed mb-5"
                style={{ color: "#3A4459", fontSize: "15px", letterSpacing: "-0.005em" }}
              >
                {description}
              </p>
              <p className="mt-auto text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
