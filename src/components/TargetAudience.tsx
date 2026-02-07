const TargetAudience = () => {
  const audiences = [
    {
      title: "Du startest neu",
      description: "Du hast lange keinen Sport gemacht und weißt nicht, wo du anfangen sollst? Ich begleite dich Schritt für Schritt.",
    },
    {
      title: "Mehrere Anläufe gescheitert",
      description: "Du hast es schon oft versucht, aber nie durchgehalten? Gemeinsam finden wir heraus, was wirklich zu dir passt.",
    },
    {
      title: "Motivation fehlt",
      description: "Dir fehlt der Antrieb und die Energie? Ich helfe dir, deine innere Motivation zu entdecken und nachhaltig zu stärken.",
    },
    {
      title: "Mehr Selbstwertgefühl",
      description: "Du möchtest dich in deinem Körper wohler fühlen? Das ist genau mein Ansatz.",
    },
  ];

  return (
    <section id="zielgruppe" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Ist das Training für dich?
          </h2>
          <p className="text-lg text-muted-foreground">
            Erkennst du dich hier wieder? Dann bist du genau richtig.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 md:p-10 bg-secondary rounded-2xl transition-all duration-500 hover:bg-secondary/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
