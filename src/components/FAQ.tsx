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
        a: "Nein. Mein Ansatz ist genau für Menschen gemacht, die neu einsteigen oder nach einer langen Pause wieder anfangen wollen. Kein Leistungsdruck, kein Vergleich. Nur ein Plan, der zu deinem aktuellen Stand passt.",
      },
      {
        q: "Ich habe eine Verletzung oder chronische Beschwerden. Kann ich trotzdem trainieren?",
        a: "In vielen Fällen ja – das klären wir im kostenlosen Erstgespräch. Ich bin kein Arzt und ersetze keine medizinische Behandlung, aber ich baue dein Training so auf, dass bestehende Beschwerden berücksichtigt werden. Relevante ärztliche Empfehlungen kannst du gerne mitbringen.",
      },
    ],
  },
  {
    title: "Wie läuft das Training ab?",
    questions: [
      {
        q: "Was passiert im kostenlosen Erstgespräch?",
        a: "Das Erstgespräch ist ein echtes Gespräch – kein Verkaufspitch. Wir reden darüber, wo du gerade stehst, was dich bisher aufgehalten hat, und was du dir wünschst. Ich erkläre dir, wie ich arbeite, und du entscheidest danach in Ruhe und ohne Druck, ob es passt. Ca. 30–45 Minuten, völlig unverbindlich.",
      },
      {
        q: "Wo findet das Training statt?",
        a: "Je nach deiner Präferenz trainieren wir im JohnReed Augsburg (Mitgliedschaft erforderlich) oder im Freien – Parks, Seen, Wiesen rund um Augsburg. Was besser zu dir passt, finden wir im Erstgespräch heraus.",
      },
      {
        q: "Wie oft pro Woche sollte ich trainieren?",
        a: "Für spürbaren Fortschritt empfehle ich 2–3 Einheiten pro Woche. Das lässt sich realistisch in einen normalen Alltag integrieren. Aber: Alles ist besser als kein Training. Auch mit einem Training pro Woche erzielt man Fortschritte.",
      },
      {
        q: "Was brauche ich für das Outdoor-Training?",
        a: "Nur bequeme Sportkleidung, Turnschuhe und eine Wasserflasche. Widerstandsbänder, Kettlebells und Matten bringe ich mit. Du musst nichts kaufen.",
      },
    ],
  },
  {
    title: "Erwartungen & Ergebnisse",
    questions: [
      {
        q: "Wann sehe ich erste Ergebnisse?",
        a: "Das hängt davon ab, was du als Ergebnis definierst. Mehr Energie und einen klareren Kopf nach dem Training kommen oft früh. Sichtbare körperliche Veränderungen brauchen Zeit – realistisch sind 6–10 Wochen bei regelmäßigem Training. Echte, langfristige Stabilität entsteht über Monate. Ich verspreche dir keine Wunder – aber einen Plan, der hält.",
      },
      {
        q: "Muss ich gleichzeitig eine Diät machen?",
        a: "Nein. Im Transformation-Paket ist ein Ernährungsleitfaden enthalten – aber keine Diät. Es geht um alltagstaugliche Gewohnheiten, keine Verbote, kein Kalorienzählen.",
      },
      {
        q: "Was ist, wenn ich mal eine Einheit verpasse?",
        a: "Das ist kein Problem. Einheiten können im Rahmen der Paketlaufzeit nachgeholt werden. Ich bitte nur um möglichst 24 Stunden Vorlauf bei Absagen.",
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
        a: "Das Starter-Paket (470 €, 5 Einheiten) ist ideal zum Kennenlernen: du lernst meine Arbeitsweise kennen und entwickelst erste Routinen. Das Transformation-Paket (890 €, 10 Einheiten – 89 € pro Einheit) geht tiefer: mit monatlichem Check-in, Ernährungsleitfaden und Fortschrittsmessung. Das Intensiv-Paket (1.700 €, 20 Einheiten – 85 € pro Einheit) bietet maximale Begleitung inklusive WhatsApp-Support zwischen den Einheiten.",
      },
      {
        q: "Gibt es einen Vertrag oder eine Kündigungsfrist?",
        a: "Nein. Du kaufst ein Paket – kein Abo, kein Vertrag, keine Kündigungsfrist.",
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
        a: "Ja, das ist jederzeit möglich.",
      },
    ],
  },
  {
    title: "Über Jakob & den Ansatz",
    questions: [
      {
        q: "Du bist neu als Personal Trainer – warum sollte ich gerade dir vertrauen?",
        a: "Das ist eine faire Frage. Ich fange als Personal Trainer neu an – und das sage ich offen. Was ich mitbringe: 20 Jahre eigene Trainingserfahrung, eine fundierte Ausbildung (Trainer B-Lizenz, Personal-Trainer-Lizenz) und echte Motivation, dir zu helfen. Weil ich noch am Anfang stehe, bekommst du etwas, was nicht alle etablierten Trainer bieten: volle Aufmerksamkeit, maximales Engagement und faire Einstiegspreise.",
      },
      {
        q: "Welche Qualifikationen hast du?",
        a: "Ich halte eine Trainer B-Lizenz sowie eine Personal-Trainer-Lizenz. Dazu kommen 20 Jahre eigene Sport- und Trainingserfahrung mit allen Hochs und Tiefs, die dazugehören. Ich weiß, wie es sich anfühlt, keine Lust zu haben. Und ich weiß, was einen trotzdem weitertreibt.",
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
    <section id="faq" className="section-padding section-alt">
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
