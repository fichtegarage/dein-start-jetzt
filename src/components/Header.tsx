import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Für wen",
    href: "#zielgruppe"
  }, {
    label: "Ansatz",
    href: "#ansatz"
  }, {
    label: "Über mich",
    href: "#ueber-mich"
  }, {
    label: "Preise",
    href: "#preise"
  }];
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="text-lg font-semibold tracking-tight">Jakob Neumann</a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
                {item.label}
              </a>)}
          </nav>

          {/* Desktop CTA */}
          <Button onClick={scrollToContact} className="hidden lg:inline-flex h-9 px-5 text-[13px] font-medium rounded-full">
            Kontakt
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 -mr-2 text-foreground" aria-label="Menü öffnen">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-6 animate-fade-in absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-soft-lg">
            <div className="container flex flex-col gap-1">
              {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-base font-medium text-foreground hover:text-muted-foreground rounded-xl transition-colors">
                  {item.label}
                </a>)}
              <div className="pt-4 px-4">
                <Button onClick={scrollToContact} className="w-full rounded-full">
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;