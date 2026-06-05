import Header from "@/components/Header";
import DotNav from "@/components/DotNav";
import HeroQuote from "@/components/HeroQuote";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TargetAudience from "@/components/TargetAudience";
import CoachingApproach from "@/components/CoachingApproach";
import CoachHub from "@/components/CoachHub";
import AboutMe from "@/components/AboutMe";
import OutdoorTraining from "@/components/OutdoorTraining";
import OutdoorQuote from "@/components/OutdoorQuote";
import Pricing from "@/components/Pricing";

import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
  title="Personal Trainer Augsburg | Jakob Neumann Training"
  description="Personal Training & Gruppenkurse in Augsburg mit Jakob Neumann. Individuell, draußen und wirkungsvoll. Jetzt kostenloses Erstgespräch vereinbaren."
  canonical="https://www.jakob-neumann.net/"
/>
      <Header />
      <DotNav />
      <main>
        <Hero />
        <HeroQuote />
        <Philosophy />
        <TargetAudience />
        <AboutMe />
        <CoachingApproach />
        <CoachHub />
        {/* <OutdoorTraining /> */}
        {/* <OutdoorQuote /> */}
        <Pricing />
        
        <CallToAction />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
