// src/components/StartHero.tsx
// Eigener, schlanker Hero für Google-Ads-Landing /start.
// Bewusst NICHT Hero.tsx wiederverwendet — Copy dort ist auf die Hauptseite
// gemünzt und Hero.tsx scrollt intern zu #kontakt/#zielgruppe (auf /start nicht vorhanden).
// Bild: gleiches Foto wie auf der Startseite (jakob-foto.jpg) — Platzhalterbild ersetzt.
// Ein Satz, eine Headline, EIN CTA + Erwartungs-Mikrocopy direkt am Button.

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jakobFoto from "@/assets/jakob-foto.jpg";

interface StartHeroProps {
  ctaHref: string;
  ctaLabel: string;
  ctaTarget?: "_self" | "_blank";
}

const StartHero = ({ ctaHref, ctaLabel, ctaTarget = "_self" }: StartHeroProps) => {
  return (
    <section
      id="start-hero"
      className="relative pt-16 pb-16 md:pt-24 md:pb-20 bg-background"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <p
              className="text-[13px] font-medium mb-4 tracking-[0.06em] uppercase"
              style={{ color: "#3A4459" }}
            >
              Personal Training in Augsburg
            </p>

            <h1
              className="text-[2.5rem] md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6"
              style={{ letterSpacing: "-0.035em" }}
            >
              Ein Gespräch. Ein Probetraining. Ein klarer nächster Schritt.
            </h1>

            <p
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ color: "#3A4459", letterSpacing: "-0.008em" }}
            >
              Wir sprechen über deine Ziele und trainieren direkt gemeinsam eine Einheit. Kostenlos, unverbindlich, 60–75 Minuten.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Button asChild size="lg" className="h-12 px-8 text-[15px] font-medium rounded-full group">
                <a
                  href={ctaHref}
                  target={ctaTarget}
                  rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {ctaLabel}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </Button>
              <p className="text-[13px]" style={{ color: "#3A4459" }}>
                Dauert zwei Minuten. Kostenlos. Du siehst sofort freie Termine.
              </p>
            </div>
          </div>

          {/* Bild */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={jakobFoto}
              alt="Jakob Neumann, Personal Trainer in Augsburg"
              className="w-full max-w-md rounded-2xl object-cover"
              width={1440}
              height={1920}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartHero;
