import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Start" },
  { id: "philosophie", label: "Philosophie" },
  { id: "zielgruppe", label: "Zielgruppe" },
  { id: "ueber-mich", label: "Über mich" },
  { id: "ansatz", label: "Ansatz" },
  { id: "outdoor", label: "Outdoor" },
  { id: "preise", label: "Preise" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
];

const DotNav = () => {
  const [activeId, setActiveId] = useState("hero");
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Show after scrolling past first 200px
    setVisible(window.scrollY > 200);

    const offsets = sections
      .map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, top: el.getBoundingClientRect().top };
      })
      .filter(Boolean) as { id: string; top: number }[];

    // Find the section closest to viewport top (with offset)
    const threshold = window.innerHeight * 0.35;
    let current = offsets[0]?.id || "hero";
    for (const { id, top } of offsets) {
      if (top <= threshold) current = id;
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 transition-opacity duration-500",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Seitennavigation"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center justify-end"
          aria-label={label}
          aria-current={activeId === id ? "true" : undefined}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground/90 px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            {label}
          </span>
          {/* Dot */}
          <span
            className={cn(
              "block rounded-full transition-all duration-300",
              activeId === id
                ? "w-2.5 h-2.5 bg-foreground scale-110"
                : "w-2 h-2 bg-foreground/25 hover:bg-foreground/50"
            )}
          />
        </button>
      ))}
    </nav>
  );
};

export default DotNav;
