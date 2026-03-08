import { MapPin, Sun, Dumbbell } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { type LucideIcon } from "lucide-react";

const OutdoorTraining = () => {
  const { ref, isVisible } = useScrollAnimation();

  const bullets: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: MapPin, title: "Flexible Locations", description: "Parks, Seen, wo du dich wohlfühlst" },
    { icon: Sun, title: "Kein Gym nötig", description: "nur du, dein Körper und ein Plan" },
    { icon: Dumbbell, title: "Volles Training, volle Wirkung", description: "auch ohne Maschinen" },
  ];

  return (
    <section id="outdoor" className="section-padding section-alt">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-4">
            Training ohne vier Wände
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Weil Stärke nicht an der Gymtür beginnt.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nicht alle fühlen sich zwischen Spiegeln und Hanteln wohl. Und das ist völlig okay.
            Manchmal braucht es frische Luft, offene Weiten und das Gefühl, draußen etwas zu
            leisten. Outdoor-Sessions in Augsburg: flexibel, effektiv und ohne Mitgliedsbeitrag.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {bullets.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border text-center transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 cursor-default"
            >
              <item.icon className="mx-auto mb-4 text-primary" size={28} strokeWidth={1.5} />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutdoorTraining;
