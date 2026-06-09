import SEOHead from "@/components/SEOHead";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Datenschutz | Jakob Neumann Training"
        description="Datenschutzerklärung von Jakob Neumann Training, Personal Trainer in Augsburg."
        canonical="https://www.jakob-neumann.net/datenschutz"
        noIndex={true}
      />

      <header className="border-b border-border">
        <div className="container py-6">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Jakob Neumann <span className="text-muted-foreground font-normal">Training</span>
          </a>
        </div>
      </header>

      <main className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Website jakob-neumann.net · Stand: 9. Juni 2026 · Version 3
        </p>

        <section className="space-y-10 text-foreground leading-relaxed">

          <div>
            <h2 className="text-lg font-semibold mb-2">1. Allgemeine Hinweise</h2>
            <p>Der Schutz deiner persönlichen Daten ist mir wichtig. Ich behandle deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Diese Datenschutzerklärung informiert dich darüber, welche Daten beim Besuch dieser Website erhoben werden und wofür sie verwendet werden.</p>
            <p className="mt-2">Diese Erklärung gilt für die Marketing-Website <strong>jakob-neumann.net</strong>. Für die separate Trainings- und Buchungs-App „Coach Hub" (erreichbar unter <strong>buchung.jakob-neumann.net</strong>) gilt eine <strong>eigene Datenschutzerklärung</strong>, die dort abrufbar ist.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Jakob Neumann<br />
              Milchberg 8<br />
              86150 Augsburg<br />
              E-Mail: hallo@jakob-neumann.net<br />
              Telefon: 0155 67251650
            </p>
            <p className="mt-2">Ein Datenschutzbeauftragter ist gesetzlich nicht zu bestellen.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
            <p>Beim Aufrufen dieser Website werden automatisch Informationen durch den Hosting-Anbieter (siehe Ziffer 8) erfasst. Diese sogenannten Server-Logfiles umfassen:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Name der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer)</li>
              <li>verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="mt-2">Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen und ihre Stabilität und Sicherheit zu gewährleisten.</p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und störungsfreien Betrieb der Website.</p>
            <p className="mt-2">Die Server-Logfiles werden nach 14 Tagen gelöscht oder anonymisiert.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Kontaktformular</h2>
            <p>Wenn du mir über das Kontaktformular eine Nachricht sendest, werden folgende Daten verarbeitet:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Inhalt deiner Nachricht</li>
              <li>Datum und Uhrzeit des Absendens</li>
            </ul>
            <p className="mt-2">Diese Daten werden ausschließlich verwendet, um deine Anfrage zu bearbeiten und zu beantworten.</p>
            <p className="mt-2"><strong>Speicherung und Versand:</strong> Die über das Formular übermittelten Daten werden in einer Datenbank gespeichert (Anbieter: Supabase, siehe Ziffer 8) und zusätzlich zur Benachrichtigung als E-Mail an mich versandt. Der Versand der Benachrichtigung erfolgt über den Dienstleister Resend; der Empfang in meinem Postfach unter der Domain jakob-neumann.net läuft über das E-Mail-Routing von Cloudflare (beide siehe Ziffer 8). Dabei erfolgt eine Übermittlung in die USA (siehe Ziffer 9).</p>
            <p className="mt-2">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage auf eine mögliche Zusammenarbeit oder Vertragsanbahnung abzielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).</p>
            <p className="mt-2">Deine Daten werden ohne deine Einwilligung nicht zu anderen Zwecken weitergegeben. Sie werden gelöscht, sobald deine Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen, spätestens jedoch 6 Monate nach dem letzten Kontakt. Entsteht aus deiner Anfrage ein Geschäftsvorgang, gelten die gesetzlichen steuer- und handelsrechtlichen Aufbewahrungsfristen.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Veröffentlichung von Kundinnen- und Kunden-Stimmen (Testimonials)</h2>
            <p>Auf dieser Website veröffentliche ich vereinzelt Stimmen von Kundinnen und Kunden (Testimonials), um Interessierten einen Eindruck von der Zusammenarbeit zu geben und Trainingsergebnisse darzustellen. Dabei werden je nach Person folgende Daten veröffentlicht: Vorname, Alter, das Zitat beziehungsweise der Erfahrungsbericht sowie gegebenenfalls ein Foto.</p>
            <p className="mt-2">Diese Veröffentlichung erfolgt ausschließlich auf Grundlage der ausdrücklichen Einwilligung der betroffenen Person (Art. 6 Abs. 1 lit. a DSGVO). Eine Stimme wird erst veröffentlicht, nachdem die jeweilige Person schriftlich eingewilligt hat.</p>
            <p className="mt-2">Eine Weitergabe dieser Daten an Dritte findet über das technische Hosting der Website hinaus (siehe Ziffer 8) nicht statt. Da es sich um Inhalte auf einer öffentlich zugänglichen Website handelt, sind die veröffentlichten Angaben für Besucherinnen und Besucher der Website sichtbar.</p>
            <p className="mt-2">Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, etwa per E-Mail an hallo@jakob-neumann.net. Nach deinem Widerruf entferne ich deine Stimme zeitnah von der Website. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Veröffentlichung bleibt davon unberührt.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Keine Terminbuchung auf dieser Website – Hinweis zur App „Coach Hub"</h2>
            <p>Auf dieser Website findet <strong>keine Terminbuchung</strong> statt, und es ist <strong>kein externes Buchungstool</strong> eingebunden. Beratungsgespräche und Training werden über die separate App „Coach Hub" unter <strong>buchung.jakob-neumann.net</strong> organisiert. Diese Website verlinkt lediglich dorthin.</p>
            <p className="mt-2">„Coach Hub" ist eine eigenständige Anwendung mit einer <strong>eigenen Datenschutzerklärung</strong> [Link: Datenschutzerklärung Coach Hub]; ihre Datenverarbeitung ist nicht Gegenstand dieser Erklärung. Sobald du dem Link folgst, verlässt du diese Website.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. SSL-/TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an „https://" in der Adresszeile deines Browsers.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Hosting und eingesetzte Dienstleister (Auftragsverarbeiter)</h2>
            <p>Zum Betrieb dieser Website setze ich folgende Dienstleister ein, mit denen jeweils ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht:</p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) – Hosting und Auslieferung der Website. Inhalte werden zur Beschleunigung über ein Content-Delivery-Netzwerk mit europäischen Edge-Standorten ausgeliefert; Vercel ist ein US-Unternehmen (siehe Ziffer 9).</li>
              <li><strong>Supabase</strong> (Supabase Pte. Ltd., 65 Chulia Street #38-02/03, OCBC Centre, Singapur 049513) – Datenbank für die Speicherung von Kontaktformular-Anfragen. Die Daten werden in der EU-Region eu-west-1 (Irland) gehostet; die Verarbeitung der Formulardaten findet damit innerhalb der EU statt. Es handelt sich um ein von der App „Coach Hub" getrenntes Projekt.</li>
              <li><strong>Resend (Plus Five Five, Inc.)</strong> – Versand der Kontaktformular-Benachrichtigungen per E-Mail (transaktionaler E-Mail-Dienst, USA; siehe Ziffer 9).</li>
              <li><strong>Cloudflare, Inc.</strong> (101 Townsend Street, San Francisco, CA 94107, USA) – Domain-Name-System (DNS) und E-Mail-Routing. Cloudflare betreibt die Nameserver der Domain (Auflösung von jakob-neumann.net zu IP-Adressen) und empfängt eingehende E-Mails an Adressen der Domain, die anschließend an mein E-Mail-Postfach weitergeleitet werden. Dabei verarbeitet Cloudflare insbesondere die IP-Adresse der anfragenden Person sowie bei eingehenden E-Mails Absenderadressen, Header und Inhalte temporär. Cloudflare ist ein US-Unternehmen (siehe Ziffer 9).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">9. Datenübermittlung in Drittländer (USA)</h2>
            <p>Bei der Nutzung von Vercel (Hosting), Resend (E-Mail-Versand) und Cloudflare (DNS und E-Mail-Routing) kann es zu einer Verarbeitung personenbezogener Daten in den USA kommen.</p>
            <p className="mt-2">Für die USA besteht seit dem 10. Juli 2023 ein Angemessenheitsbeschluss der Europäischen Kommission auf Grundlage des EU-US Data Privacy Framework (DPF). Vercel, Resend und Cloudflare sind unter dem EU-US Data Privacy Framework zertifiziert. Die Übermittlung erfolgt daher auf Grundlage von Art. 45 Abs. 1 DSGVO in Verbindung mit dem Angemessenheitsbeschluss; ein angemessenes Datenschutzniveau gilt damit als gewährleistet.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">10. Schriftarten (Webfonts)</h2>
            <p>Die auf dieser Website verwendeten Schriftarten werden lokal vom Server der Website geladen. Eine Verbindung zu Servern Dritter (z. B. Google Fonts) findet dabei nicht statt; es werden hierbei keine personenbezogenen Daten an Dritte übermittelt.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">11. Cookies und Reichweitenmessung</h2>
            <p>Auf dieser Website werden ausschließlich technisch notwendige Cookies bzw. vergleichbare Technologien eingesetzt, die für den ordnungsgemäßen Betrieb der Seite erforderlich sind. Hierfür ist nach § 25 Abs. 2 TDDDG keine Einwilligung erforderlich.</p>
            <p className="mt-2">Es findet keine Web-Analyse und kein Tracking statt. Es werden keine Analyse- oder Marketing-Dienste eingesetzt; ein Cookie-Banner ist daher nicht erforderlich.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">12. Speicherdauer</h2>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Die konkreten Fristen sind bei den jeweiligen Verarbeitungen oben angegeben. Danach werden die Daten gelöscht.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">13. Keine automatisierte Entscheidungsfindung</h2>
            <p>Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne des Art. 22 DSGVO findet auf dieser Website nicht statt.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">14. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-2">Soweit eine Verarbeitung auf einer Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).</p>
            <p className="mt-2"><strong>Beschwerderecht:</strong> Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen Datenschutzrecht verstößt, hast du das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Die für mich zuständige Aufsichtsbehörde ist:</p>
            <p className="mt-2">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">15. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung hat den oben genannten Stand. Durch die Weiterentwicklung der Website oder geänderte gesetzliche Vorgaben kann es notwendig werden, sie anzupassen. Die jeweils aktuelle Fassung ist auf dieser Website abrufbar.</p>
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
