import { Award, Dumbbell, Users } from "lucide-react";
import coachImage from "@/assets/coach-hero.jpg";

const AboutMe = () => {
  const credentials = [
    {
      icon: Award,
      title: "Trainer B-Lizenz",
      description: "Fundierte Ausbildung in Trainingslehre und Sportmedizin",
    },
    {
      icon: Dumbbell,
      title: "Personal-Trainer-Lizenz",
      description: "Spezialisiert auf individuelle Betreuung und Coaching",
    },
    {
      icon: Users,
      title: "10+ Jahre aktiver Sportler",
      description: "Eigene Erfahrung in verschiedenen Sportarten",
    },
  ];

  return (
    <section id="ueber-mich" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-2xl" />
              <img
                src={coachImage}
                alt="Personal Trainer Augsburg"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-soft-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Über <span className="text-gradient">mich</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ich bin nicht der typische Fitness-Guru, der dich zu Höchstleistungen pusht. Ich bin jemand, der genau weiß, wie schwer es sein kann, den ersten Schritt zu machen – und dranzubleiben.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Als langjähriger Sportler habe ich selbst erlebt, welche Höhen und Tiefen der Weg mit sich bringt. Diese Erfahrung bringe ich in mein Coaching ein: Verständnis statt Verurteilung, Motivation statt Druck.
            </p>

            <div className="space-y-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
