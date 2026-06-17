// src/components/Pricing.tsx
// Brand Guide V1.1: trust-badge entfernt → Nachtblau #1B3A5C
// Check-Icon strokeWidth 1.5 (Fließtext), note-Texte Nachtblau
// NEU-248: Kein-Vertrag-Copy gepatcht, Duo-Block entfernt

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  const soloPackages = [
    {
      name: "Starter",
      price: "470",
      pricePerSession: "94",
      description: "5 Trainings-Sessions à 60 Min. • gültig 3 Monate",
      features: [
        "Assessment inkludiert (eigene Einheit)",
        "Trainingsplan in der App",
        "Sessions im JohnReed Augsburg",
        "Automatische Progression",
        "Zubuchung möglich (regulärer anteiliger Preis)",
      ],
      popular: false,
    },
    {
      name: "Transformation",
      price: "890",
      pricePerSession: "89",
      description: "10 Trainings-Sessions à 60 Min. • gültig 6 Monate",
      features: [
        "Assessment inkludiert (eigene Einheit)",
        "Trainingsplan in der App",
        "Sessions im JohnReed Augsburg",
        "Automatische Progression",
        "Zubuchung möglich (regulärer anteiliger Preis)",
      ],
      popular: true,
      note: "Sweet Spot für echte Gewohnheiten",
    },
    {
      name: "Intensiv",
      price: "1.700",
      pricePerSession: "85",
      description: "20 Trainings-Sessions à 60 Min. • gültig 12 Monate",
      features: [
        "Assessment inkludiert (eigene Einheit)",
        "Trainingsplan in der App",
        "Sessions im JohnReed Augsburg",
        "Automatische Progression",
        "Zubuchung möglich (regulärer anteiliger Preis)",
      ],
      popular: false,
      note: "Für nachhaltige Veränderung",
    },
  ];

  const scrollToContact = (packageName: string) => {
    const message = `Hallo Jakob, ich interessiere mich für das Paket ${packageName} und freue mich, wenn du mich kontaktierst. Viele Grüße`;
    window.dispatchEvent(new CustomEvent("prefill-contact", { detail: { message } }));
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="preise" className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Pakete & Preise
          </h2>
          <p className="text-lg text-muted-foreground">
            Drei Pakete. Eine Methode. Das Assessment ist in jedem Paket enthalten und zählt nicht als Trainings-Session. Alle Sessions finden im JohnReed Augsburg statt – du brauchst eine eigene Mitgliedschaft.
          </p>
        </div>

        {/* ── Einzeltraining Pakete ── */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {soloPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-px cursor-default ${
                pkg.popular
                  ? "ring-2 ring-foreground scale-[1.02]"
                  : "border border-border hover:border-foreground/20"
              }`}
              style={{
                boxShadow: "0 1px 3px 0 hsl(216 51% 12% / 0.06)",
              }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                  Empfohlen
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-semibold">{pkg.price}€</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.pricePerSession}€ je Session
                </p>
                {pkg.note && (
                  /* note: Nachtblau statt trust-badge */
                  <p className="text-sm mt-2 font-medium" style={{ color: "#1B3A5C" }}>
                    {pkg.note}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#1B3A5C" }}
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollToContact(pkg.name)}
                variant={pkg.popular ? "default" : "outline"}
                className="w-full"
              >
                Paket {pkg.name} anfragen
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-3 whitespace-nowrap">
                Kostenloses Erstgespräch. Du entscheidest danach.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
