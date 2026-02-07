import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Einsteiger",
      price: "249",
      description: "4 Wochen • 4 Sessions",
      features: [
        "4 Personal Training Sessions",
        "Individueller Trainingsplan",
        "WhatsApp-Support",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "449",
      description: "8 Wochen • 8 Sessions",
      features: [
        "8 Personal Training Sessions",
        "Angepasster Trainingsplan",
        "Fortschrittstracking",
        "Ernährungsempfehlungen",
      ],
      popular: true,
    },
    {
      name: "Intensiv",
      price: "799",
      description: "12 Wochen • 12 Sessions",
      features: [
        "12 Personal Training Sessions",
        "Umfassender Trainingsplan",
        "Wöchentliche Check-ins",
        "Individuelle Ernährungsberatung",
        "2 Bonus Check-up Sessions",
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
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Pakete & Preise
          </h2>
          <p className="text-lg text-muted-foreground">
            Wähle das Paket, das am besten zu deinen Zielen passt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-500 ${
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
                onClick={scrollToContact}
                variant={pkg.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Anfragen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
