import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-alt">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Bereit für deinen Neuanfang?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Lass uns in einem kostenlosen Beratungsgespräch herausfinden, wie ich dich am besten unterstützen kann.
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
