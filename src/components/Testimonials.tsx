import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna M.",
      role: "Kundin seit 6 Monaten",
      content: "Nach vielen gescheiterten Versuchen habe ich endlich jemanden gefunden, der mich versteht. Das Training ist fordernd, aber nie überfordernd. Ich fühle mich so viel besser!",
      rating: 5,
    },
    {
      name: "Thomas K.",
      role: "Kunde seit 3 Monaten",
      content: "Ich war skeptisch, ob Personal Training etwas für mich ist. Aber die empathische Art und die individuellen Pläne haben mich überzeugt. Absolut empfehlenswert!",
      rating: 5,
    },
    {
      name: "Sandra L.",
      role: "Kundin seit 1 Jahr",
      content: "Endlich ein Coach, der nicht nur auf Muskeln schaut, sondern auf den ganzen Menschen. Mein Selbstbewusstsein ist so viel stärker geworden.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Das sagen meine <span className="text-gradient">Kunden</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte Erfahrungen von Menschen, die den ersten Schritt gewagt haben.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft card-hover"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          * Dies sind Beispiel-Testimonials zur Illustration. Echte Kundenstimmen werden hier eingefügt.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
