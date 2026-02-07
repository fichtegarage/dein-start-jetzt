import { Heart, Target, Sparkles, Shield } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Heart,
      title: "Du startest neu?",
      description: "Du hast lange keinen Sport gemacht und weißt nicht, wo du anfangen sollst? Ich begleite dich Schritt für Schritt – ohne Überforderung.",
    },
    {
      icon: Target,
      title: "Mehrere Anläufe gescheitert?",
      description: "Du hast es schon oft versucht, aber nie durchgehalten? Gemeinsam finden wir heraus, was wirklich zu dir passt.",
    },
    {
      icon: Sparkles,
      title: "Motivation fehlt?",
      description: "Dir fehlt der Antrieb und die Energie? Ich helfe dir, deine innere Motivation zu entdecken und nachhaltig zu stärken.",
    },
    {
      icon: Shield,
      title: "Mehr Selbstwertgefühl?",
      description: "Du möchtest dich in deinem Körper wohler fühlen und neues Selbstvertrauen gewinnen? Das ist genau mein Ansatz.",
    },
  ];

  return (
    <section id="zielgruppe" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ist das Training <span className="text-gradient">für dich</span> geeignet?
          </h2>
          <p className="text-lg text-muted-foreground">
            Erkennst du dich hier wieder? Dann bist du genau richtig bei mir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
