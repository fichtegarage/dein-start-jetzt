import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const OutdoorQuote = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto p-8 md:p-10 bg-card rounded-3xl border border-border">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center max-w-2xl mx-auto">
            „Training, das sich gut anfühlt. Drinnen und draußen."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default OutdoorQuote;
