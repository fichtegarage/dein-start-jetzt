import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TargetAudience from "@/components/TargetAudience";
import CoachingApproach from "@/components/CoachingApproach";
import AboutMe from "@/components/AboutMe";
import OutdoorTraining from "@/components/OutdoorTraining";
import Pricing from "@/components/Pricing";

import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <TargetAudience />
        <CoachingApproach />
        <AboutMe />
        <OutdoorTraining />
        <Pricing />
        
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
