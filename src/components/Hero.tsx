import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-hero.jpg";
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
  return <section className="relative min-h-[100svh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20">
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
              Du bist <span className="text-sky-600">stärker</span> als deine stärkste Ausrede.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up max-w-md mx-auto lg:mx-0" style={{
            animationDelay: "0.2s"
          }}>
              Für Körper und Mindset. Gemeinsam bauen wir Routinen auf, die zu dir passen und dich jeden Tag stärker machen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <Button onClick={scrollToContact} size="lg" className="h-12 px-8 text-[15px] font-medium rounded-full group">
                Beratungsgespräch buchen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button onClick={scrollToContent} variant="ghost" size="lg" className="h-12 px-8 text-[15px] font-medium text-muted-foreground hover:text-foreground">
                Mehr erfahren
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-blur-in">
            <div className="relative">
              <img src={coachImage} alt="Dein Personal Trainer in Augsburg" className="w-72 h-72 md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[560px] object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;