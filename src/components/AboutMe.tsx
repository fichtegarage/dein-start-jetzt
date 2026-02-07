import coachImage from "@/assets/coach-hero.jpg";

const AboutMe = () => {
  const credentials = [
    "Trainer B-Lizenz",
    "Personal-Trainer-Lizenz",
    "10+ Jahre aktiver Sportler",
  ];

  return (
    <section id="ueber-mich" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={coachImage}
              alt="Personal Trainer Augsburg"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-6">
              Über mich
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ich bin nicht der typische Fitness-Guru. Ich bin jemand, der genau weiß, wie schwer es sein kann, den ersten Schritt zu machen – und dranzubleiben.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Als langjähriger Sportler habe ich selbst erlebt, welche Höhen und Tiefen der Weg mit sich bringt. Diese Erfahrung bringe ich in mein Coaching ein: Verständnis statt Verurteilung, Motivation statt Druck.
            </p>

            <div className="flex flex-wrap gap-3">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
