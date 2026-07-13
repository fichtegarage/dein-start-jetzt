// src/pages/Start.tsx
// Dedizierte Landing-Page für kalten Google-Ads-Traffic.
// Prinzip: eine Seite, ein CTA. Kein Header/DotNav/Kontaktformular.
// Alle CTA-Punkte führen auf denselben Buchungs-Deep-Link (Zero-Friction-Handoff,
// gleicher Tab, src=start + UTM/gclid-Durchreichung via useStartBookingUrl()).

import SEOHead from "@/components/SEOHead";
import StartHero from "@/components/StartHero";
import StartInlineCta from "@/components/StartInlineCta";
import CoachingApproach from "@/components/CoachingApproach";
import CoachHub from "@/components/CoachHub";
import { Testimonials } from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useStartBookingUrl } from "@/hooks/use-start-booking-url";

const CTA_LABEL = "Kostenloses Erstgespräch buchen";
const CTA_MICROCOPY = "Dauert zwei Minuten. Kostenlos. Du siehst sofort freie Termine.";

// Teilmenge der kaufentscheidenden FAQ-Fragen (datengetrieben, siehe FAQ.tsx `id`-Felder).
const START_FAQ_IDS = [
  "wen-sport",
  "wen-verletzung",
  "ablauf-erstgespraech",
  "ablauf-ort",
  "erwartung-ergebnisse",
  "erwartung-frueher-aufgehoert",
  "pakete-vertrag",
  "pakete-bezahlung",
  "jakob-neu",
];

const Start = () => {
  const bookingUrl = useStartBookingUrl();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kostenloses Erstgespräch | Jakob Neumann Training"
        description="Personal Training in Augsburg. Vereinbare dein kostenloses, unverbindliches Erstgespräch – 60–75 Minuten, direkt online buchbar."
        canonical="https://www.jakob-neumann.net/start"
        noIndex={true}
      />
      <main>
        <StartHero ctaHref={bookingUrl} ctaLabel={CTA_LABEL} ctaTarget="_self" />

        <CoachingApproach compact />

        <CoachHub />

        <StartInlineCta ctaHref={bookingUrl} ctaLabel={CTA_LABEL} ctaTarget="_self" />

        <Testimonials />

        <StartInlineCta ctaHref={bookingUrl} ctaLabel={CTA_LABEL} ctaTarget="_self" />

        <Pricing compact ctaHref={bookingUrl} ctaTarget="_self" />

        <FAQ includeIds={START_FAQ_IDS} hideFooterNote />

        <CallToAction
          ctaHref={bookingUrl}
          ctaTarget="_self"
          ctaLabel={CTA_LABEL}
          microcopy={CTA_MICROCOPY}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Start;
