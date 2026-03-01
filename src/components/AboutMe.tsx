import coachImage from "@/assets/coach-hero.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation();
  const credentials = [
  "Trainer B-Lizenz",
  "Personal-Trainer-Lizenz",
  "10+ Jahre aktiver Sportler"];


  return (
    <section id="ueber-mich" className="section-padding">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={coachImage}
              alt="Personal Trainer Augsburg"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl" />

          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-6">
              Über mich
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Stärker zu werden bedeutet nicht nur mehr Gewicht zu bewegen oder dicke Muskeln aufzubauen. Stärker heißt, innerlich stabil zu sein. Selbstvertrauen zu entwickeln. Aufrecht durchs Leben zu gehen. Sich im eigenen Körper wohlzufühlen. Innere Stärke bleibt dabei nicht unsichtbar. Man sieht sie. In der Haltung. In der Ausstrahlung. In der Art, wie man einen Raum betrittst. Und wenn Muskeln dazukommen, umso besser.




            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ich treibe seit 20 Jahren Sport und kenne die Höhen und Tiefen, die Phasen, in denen man sich kaum zurückhalten kann und die, in denen man sich aufraffen muss. Aber es gibt eine Konstante: Sport, Bewegung hat mir immer gut getan. Diese Erkenntnis möchte ich weitergeben. Sport kann ein Selbstzweck sein, Sport kann aber auch einfach ein Mittel sein, besser durch's Leben zu gehen.                                                                                                                                                  
            </p>

            <div className="flex flex-wrap gap-3">
              {credentials.map((credential) => <span key={credential} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">

                  {credential}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutMe;