import { Check } from "lucide-react";

const CoachingApproach = () => {
  const approaches = [
    {
      title: "Empathisch & auf Augenhöhe",
      description: "Ich verstehe, dass jeder Mensch anders ist. Kein Drill, kein Druck – nur Unterstützung, die zu dir passt.",
    },
    {
      title: "Ganzheitlich denken",
      description: "Körper und Geist gehören zusammen. Wir arbeiten an beiden Ebenen, damit du dich rundum besser fühlst.",
    },
    {
      title: "Realistische Ziele",
      description: "Keine überzogenen Versprechen. Stattdessen: Ziele, die du wirklich erreichen kannst – Schritt für Schritt.",
    },
    {
      title: "Langfristige Routinen",
      description: "Mein Ziel ist, dass du irgendwann selbstständig dranbleibst. Ich gebe dir die Werkzeuge dafür.",
    },
  ];

  return (
    <section id="ansatz" className="section-padding section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mein Ansatz als <span className="text-gradient">Coach</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Training ist für mich mehr als nur körperliche Übungen. Es geht darum, dich zu stärken – mental und physisch. Mein Coaching basiert auf Vertrauen, Respekt und dem Glauben an dein Potenzial.
            </p>

            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={approach.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{approach.title}</h3>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-2xl p-8 md:p-10 border border-border shadow-soft">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                „Jeder verdient es, sich in seinem Körper wohlzufühlen. Meine Aufgabe ist es, dir dabei zu helfen, diesen Weg zu finden."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">Dein Coach</p>
                  <p className="text-sm text-muted-foreground">Personal Trainer, Augsburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingApproach;
