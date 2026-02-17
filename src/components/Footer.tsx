const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jakob Neumann Training. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex gap-8">
            <a href="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
