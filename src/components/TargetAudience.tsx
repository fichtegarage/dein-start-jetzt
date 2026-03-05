import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const TargetAudience = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const audiences = [{
    title: "Du startest neu",
    description: "Du hast lange keinen Sport gemacht und weißt nicht, wo du anfangen sollst? Ich begleite dich Schritt für Schritt."
  }, {
    title: "Mehr Konstanz",
    description: "Du hast schon öfter begonnen und wieder aufgehört? Gemeinsam finden wir heraus, was dich dranbleiben lässt."
  }, {
    title: "Mehr Motivation",
    description: "Dir fehlt der Antrieb und die Energie? Ich helfe dir, deine innere Motivation zu entdecken und zu stärken."
  }, {
    title: "Mehr Selbstwertgefühl",
    description: "Du möchtest dich in deinem Körper wohler und stärker fühlen? Aus unserer gemeinsamen Reise gehst du nicht nur stärker raus. Du gehst selbstbewusster raus."
  }];
  return <section id="zielgruppe" className="section-padding rounded-sm">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">Passt mein Training zu dir?</h2>
          <p className="text-lg text-muted-foreground">
            Erkennst du dich hier wieder? Dann bist du genau richtig.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {audiences.map((item, index) => <div key={item.title} className="group p-8 md:p-10 rounded-2xl transition-all duration-500 text-primary-foreground bg-accent hover:shadow-soft-lg hover:-translate-y-1 hover:bg-accent/80 cursor-default" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
              <p className="leading-relaxed text-secondary-foreground">{item.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TargetAudience;