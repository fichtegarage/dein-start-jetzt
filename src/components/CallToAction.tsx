import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CallToAction = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Bereit, jeden Tag stärker zu werden?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Ob 1:1 oder in der Gruppe – lass uns in einem kostenlosen Gespräch herausfinden, was am besten zu dir passt.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="h-12 px-8 text-[15px] font-medium rounded-full group"
          >
            Gespräch buchen
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
