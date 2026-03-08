import Header from "@/components/Header";
import DotNav from "@/components/DotNav";
import HeroQuote from "@/components/HeroQuote";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TargetAudience from "@/components/TargetAudience";
import CoachingApproach from "@/components/CoachingApproach";
import AboutMe from "@/components/AboutMe";
import OutdoorTraining from "@/components/OutdoorTraining";
import Pricing from "@/components/Pricing";

import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <DotNav />
      <main>
        <Hero />
        <Philosophy />
        <TargetAudience />
        <AboutMe />
        <CoachingApproach />
        <OutdoorTraining />
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
