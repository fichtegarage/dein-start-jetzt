import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Maximale Versuche, das Zielelement zu finden (React rendert asynchron;
// beim Kaltstart existiert der Anker-Abschnitt beim ersten Versuch oft noch nicht).
const MAX_ATTEMPTS = 30;

/**
 * Scrollt beim Laden/Wechsel einer URL mit Hash (#preise, #galerie, …) zum
 * passenden Element. Wird zusätzlich zu den bestehenden Menü-Klicks benötigt,
 * weil der native Browser-Sprung beim direkten Öffnen einer Hash-URL bereits
 * VOR dem React-Rendering ausgeführt wird und deshalb ins Leere läuft.
 * Der Offset unter dem Sticky-Header kommt einheitlich aus der CSS-Regel
 * `section[id] { scroll-margin-top }` in index.css — Menü-Klicks, Deeplinks
 * und diese Komponente landen dadurch konsistent an derselben Stelle.
 */
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;
    let rafId: number;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < MAX_ATTEMPTS) {
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hash]);

  return null;
};

export default ScrollToHash;
