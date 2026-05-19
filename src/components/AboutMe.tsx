import { useState } from "react";
import jakobFoto from "@/assets/jakob-foto.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const certificateMap: Record<string, string> = {
  "Trainer B-Lizenz": "/certificates/trainer-b-lizenz.pdf",
  "Personal-Trainer-Lizenz": "/certificates/personal-trainer-lizenz.pdf",
  "Functional Trainer Lizenz": "/certificates/functional-trainer-lizenz.pdf",
};

const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);
  const [openCert, setOpenCert] = useState<string | null>(null);
  const credentials = [
    "Trainer B-Lizenz",
    "Personal-Trainer-Lizenz",
    "Functional Trainer Lizenz",
    "20+ Jahre aktiver Sportler",
  ];

  return (
    <section id="ueber-mich" className="section-padding section-alt">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <img src={jakobFoto} alt="Jakob Neumann" className="w-48 md:w-64 rounded-2xl object-cover" />
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight">Jakob Neumann</p>
              <p className="text-lg text-muted-foreground font-medium mt-1">Stronger Every Day</p>
              <p className="text-sm text-muted-foreground mt-1">Personal Training</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-6">
              Über mich
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-6">
              <p>Ich bin Jakob, aktiver Sportler, Coach für Gruppenkurse und Personal Trainer.</p>
              <p>Meine Arbeit als Coach in <strong>Indoor-Cycling-Kursen</strong> hat mir gezeigt, wie viel möglich wird, wenn Menschen die richtige Unterstützung bekommen. Wenn jemand merkt, dass noch mehr in ihm oder ihr steckt, als er oder sie gedacht hat.</p>
              <p>Das ist meinen Motivation, Unterstützung als Personal Trainer anzubieten. Weil <strong>persönliche Begleitung</strong> oft der entscheidende Unterschied ist zwischen „Ich sollte mal wieder anfangen" und „Ich bleibe wirklich dran".</p>
              <p>Mein Ziel im Training ist dein persönlicher Sweet Spot: genug <strong>Herausforderung</strong>, um stärker zu werden und genug <strong>Struktur</strong>, damit du langfristig dranbleibst.</p>
            </div>

            {expanded && (
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-6 animate-in fade-in duration-500">
                <p>Mein eigener Weg im Sport hatte viele Phasen. Zeiten mit konsistentem Training, viel Energie und klaren Zielen. Aber auch Phasen, in denen Motivation gefehlt hat oder andere Dinge im Leben wichtiger waren.</p>
                <p>Diese Erfahrung hilft mir heute als Trainer. Denn ich weiß, dass <strong>Fortschritt selten linear</strong> verläuft.</p>
                <p>Viele Menschen denken, dass sie <strong>mehr Disziplin</strong> brauchen. Dass sie öfter oder härter trainieren müssen.</p>
                <p>In Wirklichkeit geht es darum, ein Training zu finden, das langfristig funktioniert.</p>
                <p>Oft fehlt einfach jemand, der sie begleitet. Der ehrlich Feedback gibt. Und der dafür sorgt, dass <strong>aus guten Vorsätzen echte Gewohnheiten</strong> werden.</p>
                <p>Genau diese Rolle übernehme ich im Personal Training.</p>
                <p>Mir geht es nicht darum, jemanden kurzfristig an seine Grenzen zu bringen. Mir geht es darum, Menschen dabei zu helfen, wieder <strong>Vertrauen in ihre eigene Stärke</strong> zu entwickeln. Schritt für Schritt.</p>
                <p>Denn die größte Veränderung passiert nicht in einer einzelnen Trainingseinheit. Sie passiert dann, wenn Bewegung wieder ein fester Teil des eigenen Lebens wird.</p>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary font-medium hover:underline underline-offset-4 transition-colors mb-8 block"
            >
              {expanded ? "Weniger anzeigen" : "Weiterlesen"}
            </button>

            <div className="flex flex-wrap gap-3">
              {credentials.map((credential) => {
                const hasCert = credential in certificateMap;
                return hasCert ? (
                  <button
                    key={credential}
                    onClick={() => setOpenCert(credential)}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-secondary/70 transition-colors cursor-pointer"
                  >
                    {credential}
                  </button>
                ) : (
                  <span key={credential} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                    {credential}
                  </span>
                );
              })}
            </div>

            <Dialog open={!!openCert} onOpenChange={() => setOpenCert(null)}>
              <DialogContent className="max-w-3xl h-[90vh] flex flex-col p-4 gap-2">
                <DialogHeader className="shrink-0">
                  <DialogTitle>{openCert}</DialogTitle>
                </DialogHeader>
                {openCert && (
                  <iframe
                    src={`${certificateMap[openCert]}#page=1&view=FitH`}
                    className="w-full flex-1 rounded-md border-0"
                    title={openCert}
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
