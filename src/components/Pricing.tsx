import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Einsteiger-Paket",
      price: "249",
      duration: "4 Wochen",
      sessions: "4 Sessions",
      description: "Perfekt für den Start ins Training",
      features: [
        "4 Personal Training Sessions (je 60 Min.)",
        "Individueller Trainingsplan",
        "Einführung in Grundübungen",
        "WhatsApp-Support",
      ],
      popular: false,
    },
    {
      name: "Standard-Paket",
      price: "449",
      duration: "8 Wochen",
      sessions: "8 Sessions",
      description: "Für nachhaltige Fortschritte",
      features: [
        "8 Personal Training Sessions (je 60 Min.)",
        "Angepasster Trainingsplan",
        "Fortschrittstracking",
        "Ernährungsempfehlungen",
        "WhatsApp-Support",
      ],
      popular: true,
    },
    {
      name: "Intensiv-Paket",
      price: "799",
      duration: "12 Wochen",
      sessions: "12 Sessions",
      description: "Vollständige Transformation",
      features: [
        "12 Personal Training Sessions (je 60 Min.)",
        "Umfassender Trainingsplan",
        "Wöchentliches Fortschritts-Check-in",
        "Individuelle Ernährungsberatung",
        "Unbegrenzter WhatsApp-Support",
        "Bonus: 2 zusätzliche Check-up Sessions",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="preise" className="section-padding section-alt">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparente <span className="text-gradient">Preise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wähle das Paket, das am besten zu deinen Zielen passt. Alle Preise verstehen sich inkl. MwSt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-6 md:p-8 border ${
                pkg.popular
                  ? "border-primary shadow-soft-lg ring-2 ring-primary/20"
                  : "border-border shadow-soft"
              } card-hover`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Beliebt
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold">{pkg.price}€</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {pkg.sessions} • {pkg.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                variant={pkg.popular ? "default" : "outline"}
                className="w-full"
              >
                Jetzt anfragen
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Nicht sicher, welches Paket für dich passt? Buche ein kostenloses Beratungsgespräch!
        </p>
      </div>
    </section>
  );
};

export default Pricing;
