import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jakobFoto from "@/assets/jakob-foto.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToContent = () => {
    document.getElementById("zielgruppe")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="relative min-h-[100svh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <p className="text-sm font-medium text-muted-foreground mb-4 animate-fade-in tracking-wide">
              Personal Training & Gruppenkurse in Augsburg
            </p>
            
            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              Du bist <span className="text-foreground">stärker</span> als deine stärkste Ausrede.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up max-w-md mx-auto lg:mx-0" style={{
            animationDelay: "0.2s"
          }}>Gemeinsam bauen wir Routinen auf, die zu dir passen und dich stark machen. Jeden Tag ein bisschen mehr.

          </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <Button onClick={scrollToContact} size="lg" className="h-12 px-8 text-[15px] font-medium rounded-full group">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-blur-in">
            <div className="flex flex-col items-center gap-6">
              <img src={jakobFoto} alt="Jakob Neumann" className="w-48 md:w-64 lg:w-80 rounded-2xl object-cover" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">Jakob Neumann</p>
                <p className="text-lg md:text-xl text-muted-foreground font-medium mt-1">Stronger Every Day</p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">Personal Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
