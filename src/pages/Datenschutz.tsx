const Datenschutz = () => {
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
        <h1 className="text-3xl font-bold mb-10">Datenschutzerklärung</h1>

        <section className="space-y-10 text-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Allgemeine Hinweise</h2>
            <p>Der Schutz deiner persönlichen Daten ist mir wichtig. Ich behandle deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).</p>
            <p className="mt-2">Diese Datenschutzerklärung informiert dich darüber, welche Daten auf dieser Website erhoben und wofür sie verwendet werden.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">Jakob Neumann</p>
            <p>Milchberg 8</p>
            <p>86150 Augsburg</p>
            <p>E-Mail: jakob.neumann@posteo.de</p>
            <p>Telefon: 0155 67251650</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
            <p>Beim Aufrufen dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst. Diese sogenannten Server-Logfiles umfassen:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Name der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="mt-2">Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen und die Stabilität sowie Sicherheit zu gewährleisten.</p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Ein berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb der Website.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Kontaktformular</h2>
            <p>Wenn du mir über das Kontaktformular eine Nachricht sendest, werden folgende Daten verarbeitet:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht</li>
            </ul>
            <p className="mt-2">Diese Daten werden ausschließlich verwendet, um deine Anfrage zu bearbeiten.</p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage auf eine mögliche Zusammenarbeit abzielt, sowie Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen Anfragen.</p>
            <p className="mt-2">Die Daten werden nicht ohne deine Zustimmung weitergegeben.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Nutzung des Buchungstools</h2>
            <p>Für die Vereinbarung von Beratungsgesprächen wird ein externes Buchungstool verwendet. Wenn du einen Termin buchst, werden folgende Daten verarbeitet:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>ggf. Telefonnummer</li>
              <li>gewählter Termin</li>
            </ul>
            <p className="mt-2">Die Verarbeitung erfolgt zum Zweck der Terminorganisation und Durchführung des Beratungsgesprächs.</p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p className="mt-2">Je nach eingesetztem Anbieter werden die Daten auf Servern des jeweiligen Dienstleisters gespeichert. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>
            <p className="mt-2">Weitere Informationen zur Datenverarbeitung durch den jeweiligen Anbieter findest du in dessen Datenschutzerklärung.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Hosting</h2>
            <p>Diese Website wird bei einem externen Dienstleister gehostet. Die im Rahmen der Nutzung dieser Website erfassten Daten werden auf den Servern des Hosting-Anbieters gespeichert.</p>
            <p className="mt-2">Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. Speicherdauer</h2>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-2">Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen Datenschutzrecht verstößt, hast du das Recht, dich bei einer Aufsichtsbehörde zu beschweren.</p>
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

export default Datenschutz;
