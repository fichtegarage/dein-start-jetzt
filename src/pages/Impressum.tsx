const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container py-6">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Jakob Neumann <span className="text-muted-foreground font-normal">Training</span>
          </a>
        </div>
      </header>

      <main className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-10">Impressum</h1>

        <section className="space-y-6 text-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Jakob Neumann</p>
            <p>Personal Training</p>
          </div>

          <div>
            <p>Milchberg 8</p>
            <p>86150 Augsburg</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
            <p>Telefon: 015154823993</p>
            <p>E-Mail: jakob.neumann@posteo.de</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>103/254/81388</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Jakob Neumann</p>
            <p>Anschrift wie oben</p>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jakob Neumann Training. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
