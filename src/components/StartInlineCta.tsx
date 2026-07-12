// src/components/StartInlineCta.tsx
// Zwischen-CTA für /start: gleicher Text, gleiches Ziel wie Hero- und Schluss-CTA,
// aber ohne eigene Überschrift/Absatz — damit CallToAction.tsx (mit Headline)
// nicht mehrfach auf einer Seite dupliziert werden muss (drei identische
// Headlines hintereinander würden dem "eine Seite, ein CTA"-Prinzip schaden).
// Neu gebaut, weil keine bestehende Komponente einen reinen Button-Block ohne
// Section-Headline anbietet.

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StartInlineCtaProps {
  ctaHref: string;
  ctaLabel: string;
  ctaTarget?: "_self" | "_blank";
}

const StartInlineCta = ({ ctaHref, ctaLabel, ctaTarget = "_self" }: StartInlineCtaProps) => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-3 py-4">
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
  );
};

export default StartInlineCta;
