import { Heart, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dein Coach</h3>
            <p className="text-background/70 mb-4 max-w-md">
              Personal Training in Augsburg – empathisch, individuell und auf deine Ziele ausgerichtet.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <MapPin size={16} />
              <span>Augsburg & Umgebung</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#zielgruppe" className="text-background/70 hover:text-background transition-colors">
                  Für wen?
                </a>
              </li>
              <li>
                <a href="#ansatz" className="text-background/70 hover:text-background transition-colors">
                  Mein Ansatz
                </a>
              </li>
              <li>
                <a href="#ueber-mich" className="text-background/70 hover:text-background transition-colors">
                  Über mich
                </a>
              </li>
              <li>
                <a href="#preise" className="text-background/70 hover:text-background transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/70 hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Dein Coach. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Mit <Heart size={14} className="text-destructive" /> erstellt in Augsburg
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
