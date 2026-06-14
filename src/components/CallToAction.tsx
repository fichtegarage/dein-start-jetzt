import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BUCHUNG_URL = "https://buchung.jakob-neumann.net/erstgespraech?src=website";

const CallToAction = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">Bereit, stärker zu werden?

          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">Lass uns in einem kostenlosen Gespräch herausfinden, was am besten zu dir passt.

          </p>

          <Button asChild size="lg" className="h-12 px-8 text-[15px] font-medium rounded-full group">
            <a href={BUCHUNG_URL} target="_blank" rel="noopener noreferrer">
              Gespräch buchen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
