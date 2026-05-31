import { Check, Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [duoOpen, setDuoOpen] = useState(false);

  const soloPackages = [
  {
    name: "Starter",
    price: "470",
    pricePerSession: "94",
    description: "5 Trainings-Sessions à 60 Min. • gültig 3 Monate",
    features: [
      "Assessment inkludiert (eigene Einheit)",
      "Trainingsplan in der App",
      "Indoor oder Outdoor pro Session frei",
      "Automatische Progression",
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
      "Indoor oder Outdoor pro Session frei",
      "Automatische Progression",
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
      "Indoor oder Outdoor pro Session frei",
      "Automatische Progression",
    ],
    popular: false,
    note: "Für nachhaltige Veränderung",
  },
];
  const duoPackages = [
    {
      name: "Starter",
      priceTotal: "345",
      pricePerSession: "69",
      sessions: "5",
      description: "5 Einheiten à 60 Min. • gültig 3 Monate",
      features: [
        "Persönliches Erstgespräch & Zielsetzung",
        "5 gemeinsame Trainingseinheiten im JohnReed Augsburg",
        "Individuelle Pläne für beide Personen",
        "Fortschrittsdokumentation",
      ],
      popular: false,
    },
    {
      name: "Transformation",
      priceTotal: "650",
      pricePerSession: "65",
      sessions: "10",
      description: "10 Einheiten à 60 Min. • gültig 6 Monate",
      features: [
        "Alles aus Duo Starter",
        "Monatlicher Check-in-Call (15 Min.)",
        "Angepasster Ernährungsleitfaden",
        "Fortschrittsfotos & Messung",
      ],
      popular: true,
    },
    {
      name: "Intensiv",
      priceTotal: "1.240",
      pricePerSession: "62",
      sessions: "20",
      description: "20 Einheiten à 60 Min. • gültig 12 Monate",
      features: [
        "Alles aus Duo Transformation",
        "WhatsApp-Support zwischen den Einheiten",
        "Priorisierte Terminbuchung",
        "Eine Gratis-Einheit bei Weiterempfehlung",
      ],
      popular: false,
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
            Drei Pakete. Eine Methode. Das Assessment ist in jedem Paket enthalten und zählt nicht als Trainings-Session. Indoor und Outdoor sind gleichwertig - du entscheidest pro Session frei.
          </p>
        </div>

        {/* ── Einzeltraining Pakete ── */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {soloPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 cursor-default ${
                pkg.popular
                  ? "ring-2 ring-foreground scale-[1.02]"
                  : "border border-border hover:border-foreground/20"
              }`}
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
  <p className="text-sm text-trust-badge mt-2 font-medium">{pkg.note}</p>
)}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-trust-badge mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollToContact(pkg.name)}
                variant={pkg.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Paket {pkg.name} anfragen
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-3 whitespace-nowrap">
                Kein Vertrag. Kein Risiko. Einfach ein Gespräch.
              </p>
            </div>
          ))}
        </div>

        {/* ── Duo-Training Accordion ── */}
        <div className="max-w-5xl mx-auto mt-10">
          <button
            onClick={() => setDuoOpen(!duoOpen)}
            className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl border transition-all duration-300 text-left group ${
              duoOpen
                ? "border-foreground/20 bg-card"
                : "border-border hover:border-foreground/20 bg-card/50 hover:bg-card"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-foreground/60" />
              </div>
              <div>
                <p className="font-medium text-sm md:text-base">
                  Ihr wollt zu zweit mehr erreichen?
                </p>
                <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">
                  Personal Training für Paare, Freunde und alle, die gemeinsam stärker werden wollen.
                </p>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                duoOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Duo content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              duoOpen ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            {/* Duo intro */}
            <div className="mb-8 px-1">
              <p className="text-muted-foreground max-w-xl">
                Ihr trainiert gemeinsam – ich betreue euch individuell. Jede Person
                bekommt ihr eigenes Programm, ihre eigene Last, ihr eigenes Tempo.{" "}
                <span className="font-medium text-foreground">
                  Die Preise gelten je Person.
                </span>
              </p>
            </div>

            {/* Duo cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {duoPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 cursor-default ${
                    pkg.popular
                      ? "ring-2 ring-foreground scale-[1.02]"
                      : "border border-border hover:border-foreground/20"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                      Empfohlen
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold">{pkg.name}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        Duo
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-semibold">{pkg.priceTotal}€</span>
                      <span className="text-sm text-muted-foreground">/ Person</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.pricePerSession}€ je Session
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-trust-badge mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => scrollToContact(`Duo ${pkg.name}`)}
                    variant={pkg.popular ? "default" : "outline"}
                    className="w-full rounded-full"
                  >
                    Duo {pkg.name} anfragen
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    Kein Vertrag. Kein Risiko. Einfach ein Gespräch.
                  </p>
                </div>
              ))}
            </div>

            {/* Duo closing note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              Noch unsicher welches Paket passt?{" "}
              <button
                onClick={() => scrollToContact("Duo-Training")}
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Schreibt mir einfach.
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
