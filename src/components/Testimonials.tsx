const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna M.",
      role: "Kundin seit 6 Monaten",
      content: "Nach vielen gescheiterten Versuchen habe ich endlich jemanden gefunden, der mich versteht. Ich fühle mich so viel besser!",
    },
    {
      name: "Thomas K.",
      role: "Kunde seit 3 Monaten",
      content: "Die empathische Art und die individuellen Pläne haben mich überzeugt. Absolut empfehlenswert!",
    },
    {
      name: "Sandra L.",
      role: "Kundin seit 1 Jahr",
      content: "Endlich ein Coach, der auf den ganzen Menschen schaut. Mein Selbstbewusstsein ist so viel stärker geworden.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
            Was Kunden sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-secondary rounded-2xl"
            >
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          * Beispiel-Testimonials zur Illustration
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
