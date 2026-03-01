import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const CoachingApproach = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const approaches = [{
    title: "Empathisch & auf Augenhöhe",
    description: "Kein Drill, kein Druck, sondern ein Training, das zu dir und deinem Leben passt."
  }, {
    title: "Ganzheitliche Stärke",
    description: "Mehr Energie, mehr Belastbarkeit: Wir trainieren nicht nur Muskeln, sondern Haltung."
  }, {
    title: "Stärke mit Substanz",
    description: "Wir bauen Kraft systematisch auf. Mit klarer Progression, sauberer Technik und ausreichend Regeneration."
  }, {
    title: "Langfristige Routinen",
    description: "Ich gebe dir die Werkzeuge, damit du selbstständig dranbleibst."
  }];
  return <section id="ansatz" className="section-padding section-alt">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5 font-sans">
              Mein Ansatz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">Training ist kein Wettkampf gegen dich selbst. Es ist ein Prozess.

          </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {approaches.map((approach) => <div key={approach.title} className="flex gap-4 p-5 rounded-xl transition-all duration-300 hover:bg-card hover:shadow-soft hover:-translate-y-0.5 cursor-default">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trust-badge/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-trust-badge" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1.5">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                </div>
              </div>)}
          </div>

          <div className="mt-16 md:mt-20 p-8 md:p-12 bg-card rounded-3xl border border-border">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center max-w-2xl mx-auto">
              "Der erste Schritt zu einer fitteren Zukunft ist kein Workout. Sondern ein Gespräch."                  
            </blockquote>
          </div>
        </div>
      </div>
    </section>;};export default CoachingApproach;