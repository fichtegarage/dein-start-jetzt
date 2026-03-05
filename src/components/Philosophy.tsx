import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
        }>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-8 text-center">
            Stärker werden, sich stärker fühlen.
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
            <p>
              Fitnessversprechen gibt es genug. Sixpack-Pläne, Kalorienzähler,
              Vorher-Nachher-Bilder. Was die meisten dabei vergessen: Der eigene
              Körper sollte nicht als Baustelle wahrgenommen werden, sondern als
              Verbündeter.
            </p>
            <p>
              Ich trainiere nicht nur deinen Körper. Ich arbeite daran, wie du
              dich in ihm bewegst, wie du über ihn sprichst – und was du dir
              selbst zutraust. Fortschritt, den du siehst, ist schön.
              Fortschritt, den du fühlst, verändert alles.
            </p>
          </div>

          <div className="mt-16 md:mt-20 p-8 md:p-12 bg-card rounded-3xl border border-border">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center max-w-2xl mx-auto">„Das Ziel ist nicht der perfekte Körper. Das Ziel bist du – mit mehr Vertrauen in dich selbst."


            </blockquote>
          </div>
        </div>
      </div>
    </section>);

};

export default Philosophy;