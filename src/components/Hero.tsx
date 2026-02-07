import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContent = () => {
    document.getElementById("zielgruppe")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MapPin size={16} />
              <span>Personal Training in Augsburg</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Finde deine Stärke.{" "}
              <span className="text-gradient">Entdecke dein Potenzial.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Du verdienst einen Neuanfang – ohne Druck, ohne Perfektion. Gemeinsam bauen wir Routinen auf, die zu dir passen und dein Selbstwertgefühl stärken.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button onClick={scrollToContact} size="lg" className="text-base px-8">
                Kostenloses Beratungsgespräch buchen
              </Button>
              <Button onClick={scrollToContent} variant="outline" size="lg" className="text-base">
                Mehr erfahren
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-trust-badge" />
                <span>Trainer B-Lizenz</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-trust-badge" />
                <span>Personal-Trainer-Lizenz</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-trust-badge" />
                <span>10+ Jahre aktiver Sportler</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={coachImage}
                alt="Dein Personal Trainer in Augsburg"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[500px] object-cover rounded-2xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden md:block"
          aria-label="Nach unten scrollen"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
