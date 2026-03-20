import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  const soloPackages = [
    {
      name: "Starter",
      price: "470",
      pricePerSession: "94",
      description: "5 Einheiten à 60 Min. • gültig 3 Monate",
      features: [
        "Persönliches Erstgespräch & Zielsetzung",
        "5 individuelle 1:1-Trainingseinheiten im JohnReed Augsburg",
        "Trainingsplan passend zu deinen Zielen",
        "Fortschrittsdokumentation",
      ],
      popular: false,
    },
    {
      name: "Transformation",
      price: "890",
      pricePerSession: "89",
      description: "10 Einheiten à 60 Min. • gültig 6 Monate",
      features: [
        "Alles aus Paket Starter",
        "Monatlicher Check-in-Call (15 Min.)",
        "Angepasster Ernährungsleitfaden",
        "Fortschrittsfotos & Messung",
      ],
      popular: true,
    },
    {
      name: "Intensiv",
      price: "1.700",
      pricePerSession: "85",
      description: "20 Einheiten à 60 Min. • gültig 12 Monate",
      features: [
        "Alles aus Paket Transformation",
        "WhatsApp-Support zwischen den Einheiten",
        "Priorisierte Terminbuchung",
        "Eine Gratis-Einheit bei Weiterempfehlung",
      ],
      popular: false,
    },
  ];

  const duoPackages = [
    {
      name: "Duo Starter",
      pricePerPerson: "69",
      totalPerPerson: "345",
      sessions: "5",
      popular: false,
    },
    {
      name: "Duo Transformation",
      pricePerPerson: "65",
      totalPerPerson: "650",
      sessions: "10",
      popular: true,
    },
    {
      name: "Duo Intensiv",
      pricePerPerson: "62",
      totalPerPerson: "1.240",
      sessions: "20",
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
            Wähle das Paket, das am besten zu deinen Zielen passt.
          </p>
        </div>

        {/* ── 1:1 Pakete ── */}
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

        {/* ── Duo-Training ── */}
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Duo Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-foreground/8 border border-border">
              <Users className="w-4 h-4 text-foreground/70" />
            </div>
            <h3 className="text-2xl font-semibold">Duo-Training</h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Ihr trainiert gemeinsam – ich betreue euch individuell. Für Freunde, Paare
            und alle, die zusammen mehr erreichen wollen.{" "}
            <span className="font-medium text-foreground">Jede Person zahlt separat.</span>
          </p>

          {/* Duo Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {duoPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-2xl p-7 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 cursor-default ${
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

                <div className="mb-5">
                  <h4 className="text-lg font-semibold mb-1">{pkg.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {pkg.sessions} Einheiten à 60 Min.
                  </p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold">{pkg.pricePerPerson}€</span>
                    <span className="text-sm text-muted-foreground">/ Person & Session</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pkg.totalPerPerson}€ je Person gesamt
                  </p>
                </div>

                <ul className="space-y-2 mb-7">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-trust-badge mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Alles aus dem {pkg.name.replace("Duo ", "")} Einzelpaket
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-trust-badge mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Individuelle Betreuung für jede Person
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-trust-badge mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Angepasste Last & Intensität pro Person
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={() => scrollToContact(pkg.name)}
                  variant={pkg.popular ? "default" : "outline"}
                  className="w-full rounded-full"
                >
                  {pkg.name} anfragen
                </Button>
                <p className="text-[11px] text-muted-foreground text-center mt-3">
                  Kein Vertrag. Kein Risiko. Einfach ein Gespräch.
                </p>
              </div>
            ))}
          </div>

          {/* Duo note */}
          <p className="text-xs text-muted-foreground text-center mt-5">
            Ihr seid zu zweit, aber noch unentschlossen welches Paket?{" "}
            <button
              onClick={() => scrollToContact("Duo-Training")}
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Schreibt mir einfach.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
