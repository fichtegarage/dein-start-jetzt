import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Für wen ist das Training geeignet?",
    questions: [
      {
        q: "Muss ich vorher schon Sport gemacht haben?",
        a: "Nein. Mein Ansatz ist genau für Menschen gemacht, die neu einsteigen oder nach einer langen Pause wieder anfangen wollen. Kein Leistungsdruck, kein Vergleich. Aber: auch wenn du schon länger Sport machst und das Gefühl hast, zu stagnieren kann ich dich unterstützen, das nächste Level zu erreichen.",
      },
      {
        q: "Ich habe eine Verletzung oder chronische Beschwerden. Kann ich trotzdem trainieren?",
        a: "In vielen Fällen ja – das klären wir im Erstgespräch. Ich bin kein Arzt und ersetze keine medizinische Behandlung, aber ich baue dein Training so auf, dass bestehende Beschwerden berücksichtigt werden. Relevante ärztliche Empfehlungen kannst du gerne mitbringen.",
      },
    ],
  },
  {
    title: "Wie läuft das Training ab?",
    questions: [
      {
        q: "Was passiert im kostenlosen Erstgespräch?",
        a: "Erstgespräch und Probetraining sind ein Termin. Wir sprechen über deine Ziele, deine Geschichte, deinen Kalender - und gehen anschließend gemeinsam in Bewegung. Du lernst, wie ich coache, ich sehe, wie du dich bewegst. 60-75 Minuten, kostenlos, unverbindlich.",
      },
      {
        q: "Wo findet das Training statt?",
        a: "Alle Sessions finden im JohnReed Augsburg statt. Du brauchst eine Mitgliedschaft.",
      },
      {
        q: "Wie oft pro Woche sollte ich trainieren?",
        a: "Für spürbaren Fortschritt empfehle ich zwei bis drei Einheiten pro Woche. Das lässt sich meist realistisch in einen normalen Alltag integrieren. Aber: Alles ist besser als kein Training. Auch mit einem Training pro Woche erzielt man Fortschritte.",
      },
    ],
  },
  {
    title: "Erwartungen & Ergebnisse",
    questions: [
      {
        q: "Wann sehe ich erste Ergebnisse?",
        a: "Das hängt davon ab, was du als Ergebnis definierst. Direkt nach dem Training fühlen die meisten direkt mehr Energie und einen klareren Kopf. Sichtbare körperliche Veränderungen brauchen Zeit – realistisch sind 6 – 10 Wochen bei regelmäßigem Training. Echte, langfristige Stabilität entsteht über Monate. Ich verspreche dir keine Wunder aber einen Plan, der hält.",
      },
      {
        q: "Muss ich gleichzeitig eine Diät machen?",
        a: "Nein. Ernährungsberatung ist nicht Teil meiner Pakete - dafür gibt es Spezialisten. Ich fokussiere mich auf das, was ich am besten kann: dich bei deinem Training zu begleiten.",
      },
      {
        q: "Was ist, wenn ich mal eine Einheit verpasse?",
        a: "Du sagst mir Bescheid. Bei rechtzeitiger Absage (mindestens 24 h vorher) buchen wir die Session um. Bei kurzfristiger Absage oder Nichterscheinen verfällt die einzelne Session. Bei längerer Krankheit pausieren wir deine Laufzeit – ab zwei Wochen mit Attest. Andere Pausen – geplante wie Urlaube oder Kuren – halten wir vorab gemeinsam schriftlich fest. Sessions, die am Ende deiner Laufzeit übrig sind, verfallen nicht – du bekommst eine Gutschrift, die du innerhalb von 12 Monaten auf ein Folgepaket anrechnen kannst. Das Assessment ist davon ausgenommen.",
      },
      {
        q: "Ich habe es schon öfters versucht und immer wieder aufgehört. Warum soll es diesmal anders sein?",
        a: "Das liegt meistens nicht an Willensstärke – sondern am falschen Plan oder unrealistischen Erwartungen. Gemeinsam schauen wir, was dich früher gestoppt hat, und bauen das Training so auf, dass genau diese Punkte berücksichtigt werden. Routine entsteht nicht durch Motivation, sondern durch einen Plan, der zu deinem echten Leben passt.",
      },
    ],
  },
  {
    title: "Pakete, Preise & Ablauf",
    questions: [
      {
        q: "Was ist der Unterschied zwischen den drei Paketen?",
        a: "Die Leistungen sind in allen drei Paketen identisch: Assessment, Trainingsplan in der App, automatische Progression. Unterschiedlich sind nur Session-Anzahl und Laufzeit: Starter (5 Sessions, 3 Monate) zum Kennenlernen, Transformation (10 Sessions, 6 Monate) als Sweet Spot für echte Gewohnheiten, Intensiv (20 Sessions, 12 Monate) für nachhaltige Veränderung.",
      },
      {
        q: "Wie bin ich vertraglich gebunden?",
        a: "Du schließt mit mir einen schriftlichen Vertrag über das gewählte Paket ab – mit einer festen Laufzeit (3, 6 oder 12 Monate). Es gibt kein Abo und nichts, was sich automatisch verlängert. Eine ordentliche Kündigung mitten in der Laufzeit ist nicht vorgesehen, eine außerordentliche aus wichtigem Grund (z. B. längere Erkrankung) ist beidseitig möglich. Sessions, die am Ende der Laufzeit übrig sind, verfallen nicht – sie werden als Gutschrift auf ein Folgepaket angerechnet, 12 Monate gültig.",
      },
      {
        q: "Kann ich auch Einzeleinheiten buchen?",
        a: "Aktuell arbeite ich ausschließlich mit Paketen. Der Grund: nachhaltige Ergebnisse entstehen nicht in einer Einheit – Pakete geben mir die Möglichkeit, dich wirklich zu begleiten.",
      },
      {
        q: "Wie bezahle ich?",
        a: "Per Banküberweisung nach dem Erstgespräch und vor der ersten Einheit. Du erhältst eine Rechnung.",
      },
      {
        q: "Kann ich nach dem Starter-Paket zu einem größeren Paket wechseln?",
        a: "Wenn dein Paket ausläuft, entscheidest du frei neu und kannst direkt ein größeres wählen. Und schon während deiner Laufzeit kannst du jederzeit zusätzliche Sessions zubuchen – zum regulären anteiligen Preis.",
      },
      {
        q: "Was, wenn ich innerhalb meiner Laufzeit mehr Sessions brauche?",
        a: "Du kannst innerhalb deiner Paketlaufzeit jederzeit zusätzliche Sessions zubuchen. Der Preis pro Zusatz-Session entspricht dem regulären anteiligen Paketpreis – bei Transformation also 89 € pro Zusatz-Session, auch dann, wenn du dein Paket über eine Aktion vergünstigt bekommen hast. Sag mir einfach Bescheid.",
      },
    ],
  },
  {
    title: "Über Jakob & den Ansatz",
    questions: [
      {
        q: "Du bist neu als Personal Trainer – warum sollte ich gerade dir vertrauen?",
        a: "Das ist eine faire Frage. Ich fange als Personal Trainer neu an – und das sage ich offen. Was ich mitbringe: 20 Jahre eigene Trainingserfahrung, eine fundierte Ausbildung (Trainer B-Lizenz, Personal-Trainer-Lizenz, Functional-Trainer-Lizenz) und echte Motivation, dir zu helfen. Weil ich noch am Anfang stehe, bekommst du etwas, was nicht alle etablierten Trainer bieten: volle Aufmerksamkeit, maximales Engagement und faire Einstiegspreise.",
      },
      {
        q: "Welche Qualifikationen hast du?",
        a: "Ich halte eine Trainer B-Lizenz, eine Personal-Trainer-Lizenz und eine Functional-Trainer-Lizenz und meine Erfahrung als Coach für Gruppensportkurse. Dazu kommen 20 Jahre eigene Sport- und Trainingserfahrung mit allen Hochs und Tiefs, die dazugehören. Ich weiß, wie es sich anfühlt, keine Lust zu haben. Und ich weiß, was einen trotzdem weitertreibt.",
      },
      {
        q: "Was unterscheidet dich von anderen Personal Trainern?",
        a: "Ich arbeite nicht nur an deinem Körper, sondern auch daran, wie du dich in ihm fühlst. Das Ergebnis soll nicht nur ein fitterer Körper sein, sondern mehr Selbstvertrauen: in der Haltung, in der Ausstrahlung, im Alltag.",
      },
      {
        q: "Wie erreiche ich dich am schnellsten?",
        a: "Über das Kontaktformular auf dieser Seite oder per E-Mail. Ich melde mich innerhalb von 24 Stunden.",
      },
    ],
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding">
      <div
        ref={ref}
        className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles, was du vor dem Start wissen solltest.
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border overflow-hidden">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`cat-${catIdx}-q-${qIdx}`}
                      className="border-border last:border-b-0 px-6"
                    >
                      <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            Noch eine Frage? Schreib mir einfach – ich freue mich von dir zu hören.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
