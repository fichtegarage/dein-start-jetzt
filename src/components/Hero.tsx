// src/components/Hero.tsx
// Brand Guide V1.1 konform:
// - Hintergrund: flaches Warm Creme (bg-background) — kein Gradient
// - Keine --hero-gradient-*-Referenz mehr (Tokens in Phase 2 aus index.css entfernt)
// - CTA scrollt zu #kontakt — Funktion unverändert (Scope-Guard)
// - Icon: ArrowRight, Stroke 2 (via Button-Basis-Klasse)
// - Tracking/Typo: Brand Guide Skala

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jakobFoto from "@/assets/jakob-foto.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContent = () => {
    document.getElementById("zielgruppe")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 bg-background"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <p
              className="text-[13px] font-medium mb-4 animate-fade-in tracking-[0.06em] uppercase"
              style={{ color: "#3A4459" }}
            >
              Personal Training &amp; Gruppenkurse in Augsburg
            </p>

            <h1
              className="text-[2.75rem] md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s", letterSpacing: "-0.035em" }}
            >
              Du bist stärker als deine stärkste Ausrede.
            </h1>

            <p
              className="text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up max-w-md mx-auto lg:mx-0"
              style={{ animationDelay: "0.2s", color: "#3A4459", letterSpacing: "-0.008em" }}
            >
              Gemeinsam bauen wir Routinen auf, die zu dir passen und dich stark
              machen. Jeden Tag ein bisschen mehr.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group"
              >
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-blur-in">
            <div className="flex flex-col items-center gap-6">
              <img
                src={jakobFoto}
                alt="Jakob Neumann"
                className="w-48 md:w-64 lg:w-80 rounded-2xl object-cover"
              />
              <div className="text-center">
                <p
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Jakob Neumann
                </p>
                <p className="text-lg md:text-xl mt-1" style={{ color: "#3A4459" }}>
                  Stronger Every Day
                </p>
                <p className="text-sm md:text-base mt-1" style={{ color: "#3A4459" }}>
                  Personal Training
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
