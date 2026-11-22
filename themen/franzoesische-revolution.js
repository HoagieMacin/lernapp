// ===== Thema: Französische Revolution (Geschichte, Klasse 8) =====
// Aufbau wie bei themen/lineare-funktionen.js (dort ist alles genau erklärt).
// ID-Vorsilbe: "fr-"  (fr-ue-… = Übungen, fr-t-… = Abschlusstest)

THEMEN.push({
  id: "franzoesische-revolution",
  titel: "Französische Revolution",
  fach: "Geschichte",

  // ===== Einführung: eine Seite pro Eintrag =====
  einfuehrung: [
    // Seite 1 – mit einer kleinen "Pyramide" aus drei Kästchen
    `<h2>Die Ständegesellschaft</h2>
     <p>Frankreich um 1780: König Ludwig XVI. regiert allein. Die Menschen gehören
        zu drei <strong>Ständen</strong>.</p>
     <div class="pyramide">
       <div style="width: 60%">1. Stand: Geistliche (Klerus)<br>ca. 0,5 %</div>
       <div style="width: 78%">2. Stand: Adel<br>ca. 1,5 %</div>
       <div style="width: 98%">3. Stand: Bauern, Handwerker, Bürger<br>ca. 98 %</div>
     </div>
     <p>Der 1. und 2. Stand hatten viele <strong>Vorrechte (Privilegien)</strong>
        und zahlten kaum Steuern. Die Steuern trug fast allein der 3. Stand.</p>`,

    // Seite 2
    `<h2>Warum kam es zur Revolution?</h2>
     <p>Viele Probleme kamen zusammen.</p>
     <p>💰 Der Staat war hoch <strong>verschuldet</strong>, durch Kriege und den teuren
        Hof in Versailles.</p>
     <p>🌾 Nach einer <strong>Missernte</strong> 1788 wurde Brot so teuer, dass viele
        Menschen hungerten.</p>
     <p>⚖️ Der 3. Stand fand es <strong>ungerecht</strong>, dass er fast alle Steuern
        zahlte, aber nichts mitbestimmen durfte.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Ein Arbeiter in Paris musste 1789 oft mehr als die Hälfte seines Lohns
        allein für Brot ausgeben.</p>`,

    // Seite 3
    `<h2>Die Aufklärung</h2>
     <p>Im 18. Jahrhundert verbreitete sich eine neue Denkweise, die
        <strong>Aufklärung</strong>. Ihre Idee war, dass Menschen ihren eigenen
        Verstand benutzen, statt alles einfach zu glauben.</p>
     <p>• Alle Menschen sind von Natur aus <strong>frei und gleich</strong>.<br>
        • <strong>Montesquieu</strong> wollte die Macht im Staat teilen: Gesetze machen,
          regieren und richten (<strong>Gewaltenteilung</strong>).<br>
        • <strong>Rousseau</strong> meinte, das Volk soll selbst bestimmen
          (<strong>Volkssouveränität</strong>).</p>
     <p class="beispiel">Der Philosoph Immanuel Kant sagte:
        „Habe Mut, dich deines eigenen Verstandes zu bedienen!“</p>`,

    // Seite 4
    `<h2>Generalstände und Ballhausschwur</h2>
     <p>Weil er Geld brauchte, rief Ludwig XVI. im Mai 1789 die
        <strong>Generalstände</strong> ein, eine Versammlung aller drei Stände.</p>
     <p>Jeder Stand sollte nur <strong>eine Stimme</strong> haben. So hätten Klerus und
        Adel den 3. Stand immer mit 2 gegen 1 überstimmt.</p>
     <p>Deshalb erklärte sich der 3. Stand zur <strong>Nationalversammlung</strong>.
        Als man ihn aussperrte, traf er sich in einer Ballspielhalle und schwor am
        20. Juni 1789, erst auseinanderzugehen, wenn Frankreich eine
        <strong>Verfassung</strong> hat. Das ist der <strong>Ballhausschwur</strong>.</p>`,

    // Seite 5
    `<h2>Bastille und Menschenrechte</h2>
     <p>Am <strong>14. Juli 1789</strong> stürmten Pariser Bürger die
        <strong>Bastille</strong>, ein Gefängnis und Zeichen für die Macht des Königs.
        Der 14. Juli ist bis heute Frankreichs Nationalfeiertag.</p>
     <p>Im August 1789 schaffte die Nationalversammlung die Vorrechte von Adel und
        Klerus ab und beschloss die <strong>Erklärung der Menschen- und
        Bürgerrechte</strong>.</p>
     <p class="beispiel"><strong>Artikel 1</strong><br>
        „Die Menschen werden frei und gleich an Rechten geboren und bleiben es.“</p>
     <p>Der Leitspruch der Revolution lautete
        <strong>Freiheit, Gleichheit, Brüderlichkeit</strong>.</p>`,

    // Seite 6
    `<h2>Die Jakobinerherrschaft</h2>
     <p>1792 wurde Frankreich eine <strong>Republik</strong>. 1793 wurde
        Ludwig XVI. hingerichtet.</p>
     <p>Dann übernahmen die radikalen <strong>Jakobiner</strong> unter
        <strong>Maximilien Robespierre</strong> die Macht. Wer als Feind der
        Revolution galt, wurde verhaftet. Tausende wurden mit der Guillotine
        hingerichtet. Diese Zeit (1793–1794) heißt <strong>Schreckensherrschaft</strong>.
        1794 wurde Robespierre selbst gestürzt.</p>
     <p class="beispiel">Die Revolution brachte wichtige Ideen wie Menschenrechte und
        Gleichheit. Sie zeigt aber auch, wie gefährlich es ist, wenn andere Meinungen
        nicht mehr erlaubt sind.</p>
     <p>Gut gemacht! Jetzt bist du bereit für die Übungen.</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "fr-ue-001",
      frage: "Wie viele Stände gab es in Frankreich vor der Revolution?",
      antworten: ["Drei", "Zwei", "Vier", "Fünf"],
      richtig: 0,
      erklaerung: "Es gab drei Stände: Geistliche (Klerus), Adel und den dritten Stand."
    },
    {
      id: "fr-ue-002",
      frage: "Wer gehörte zum ersten Stand?",
      antworten: ["Die Geistlichen (Klerus)", "Der Adel", "Die Bauern", "Die Handwerker"],
      richtig: 0,
      erklaerung: "Der erste Stand waren die Geistlichen, also Priester, Bischöfe und Mönche."
    },
    {
      id: "fr-ue-003",
      frage: "Welcher Stand zahlte fast alle Steuern?",
      antworten: ["Der dritte Stand", "Der erste Stand", "Der zweite Stand", "Alle Stände gleich viel"],
      richtig: 0,
      erklaerung: "Klerus und Adel hatten Vorrechte und zahlten kaum Steuern. Die Last trug der dritte Stand."
    },
    {
      id: "fr-ue-004",
      frage: "Was forderten die Denker der Aufklärung?",
      antworten: [
        "Menschen sollen ihren eigenen Verstand benutzen",
        "Der König soll allein regieren",
        "Nur der Adel soll mitbestimmen",
        "Die Kirche soll die Gesetze machen"
      ],
      richtig: 0,
      erklaerung: "Die Aufklärung setzte auf Vernunft und darauf, dass alle Menschen frei und gleich sind."
    },
    {
      id: "fr-ue-005",
      frage: "Warum brauchte Ludwig XVI. 1789 dringend Geld?",
      antworten: [
        "Der Staat war hoch verschuldet",
        "Er wollte die Steuern für alle senken",
        "Die Bauern verlangten mehr Lohn",
        "Er wollte Kolonien in Amerika kaufen"
      ],
      richtig: 0,
      erklaerung: "Kriege und der teure Hof in Versailles hatten riesige Schulden verursacht."
    },
    {
      id: "fr-ue-006",
      frage: "Was schworen die Abgeordneten beim Ballhausschwur?",
      antworten: [
        "Erst auseinanderzugehen, wenn Frankreich eine Verfassung hat",
        "Dem König immer treu zu bleiben",
        "Die Bastille zu stürmen",
        "Alle Adligen aus Frankreich zu vertreiben"
      ],
      richtig: 0,
      erklaerung: "Am 20. Juni 1789 schworen sie, zusammenzubleiben, bis es eine Verfassung gibt."
    },
    {
      id: "fr-ue-007",
      frage: "Was war die Bastille?",
      antworten: ["Ein Gefängnis in Paris", "Das Schloss des Königs", "Eine große Kirche", "Das Parlament"],
      richtig: 0,
      erklaerung: "Die Bastille war ein Gefängnis und galt als Zeichen für die Macht des Königs."
    },
    {
      id: "fr-ue-008",
      frage: "Wer führte die Jakobiner während der Schreckensherrschaft an?",
      antworten: ["Maximilien Robespierre", "Ludwig XVI.", "Napoleon Bonaparte", "Montesquieu"],
      richtig: 0,
      erklaerung: "Robespierre war der Anführer der Jakobiner. 1794 wurde er selbst gestürzt."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "fr-t-001",
      frage: "Welcher Stand machte etwa 98 % der Bevölkerung aus?",
      antworten: ["Der dritte Stand", "Der Adel", "Der Klerus", "Die Königsfamilie"],
      richtig: 0,
      erklaerung: "Bauern, Handwerker und Bürger bildeten den dritten Stand, also fast das ganze Volk."
    },
    {
      id: "fr-t-002",
      frage: "Was versteht man unter Privilegien?",
      antworten: [
        "Vorrechte, z. B. kaum Steuern zahlen zu müssen",
        "Besonders hohe Steuern",
        "Strafen für Bauern",
        "Wahlen für alle Menschen"
      ],
      richtig: 0,
      erklaerung: "Privilegien sind Vorrechte. Klerus und Adel mussten z. B. kaum Steuern zahlen."
    },
    {
      id: "fr-t-003",
      frage: "Welcher Denker forderte die Gewaltenteilung?",
      antworten: ["Montesquieu", "Robespierre", "Ludwig XIV.", "Martin Luther"],
      richtig: 0,
      erklaerung: "Montesquieu wollte Gesetzgebung, Regierung und Rechtsprechung voneinander trennen."
    },
    {
      id: "fr-t-004",
      frage: "Warum war die Abstimmung nach Ständen für den dritten Stand ungerecht?",
      antworten: [
        "Klerus und Adel konnten ihn immer überstimmen",
        "Er durfte gar nicht abstimmen",
        "Er hatte doppelt so viele Stimmen",
        "Nur der König durfte die Stimmen zählen"
      ],
      richtig: 0,
      erklaerung: "Jeder Stand hatte eine Stimme. So stand es 2 gegen 1, obwohl der dritte Stand fast alle Menschen vertrat."
    },
    {
      id: "fr-t-005",
      frage: "Wozu erklärte sich der dritte Stand im Juni 1789?",
      antworten: ["Zur Nationalversammlung", "Zum vierten Stand", "Zur Regierung des Königs", "Zum Adel"],
      richtig: 0,
      erklaerung: "Der dritte Stand erklärte, er vertrete die ganze Nation, und nannte sich Nationalversammlung."
    },
    {
      id: "fr-t-006",
      frage: "An welchem Tag stürmten Pariser Bürger die Bastille?",
      antworten: ["14. Juli 1789", "1. Mai 1789", "24. Dezember 1789", "14. Juli 1799"],
      richtig: 0,
      erklaerung: "Am 14. Juli 1789. Dieser Tag ist heute der französische Nationalfeiertag."
    },
    {
      id: "fr-t-007",
      frage: "Was steht im ersten Artikel der Erklärung der Menschen- und Bürgerrechte?",
      antworten: [
        "Die Menschen werden frei und gleich an Rechten geboren",
        "Der König hat immer recht",
        "Nur Adlige haben Rechte",
        "Die Kirche bestimmt die Gesetze"
      ],
      richtig: 0,
      erklaerung: "Artikel 1 sagt, dass alle Menschen frei und gleich an Rechten geboren werden."
    },
    {
      id: "fr-t-008",
      frage: "Welcher Leitspruch stammt aus der Französischen Revolution?",
      antworten: [
        "Freiheit, Gleichheit, Brüderlichkeit",
        "Einigkeit und Recht und Freiheit",
        "Ordnung und Gehorsam",
        "Ein König, ein Gesetz, ein Glaube"
      ],
      richtig: 0,
      erklaerung: "„Freiheit, Gleichheit, Brüderlichkeit“ ist bis heute der Wahlspruch Frankreichs. „Einigkeit und Recht und Freiheit“ stammt aus der deutschen Nationalhymne."
    },
    {
      id: "fr-t-009",
      frage: "Was geschah 1793 mit König Ludwig XVI.?",
      antworten: ["Er wurde hingerichtet", "Er wurde Kaiser", "Er floh nach Amerika", "Er wurde Präsident der Republik"],
      richtig: 0,
      erklaerung: "Nachdem Frankreich 1792 Republik geworden war, wurde der König 1793 hingerichtet."
    },
    {
      id: "fr-t-010",
      frage: "Wie nennt man die Zeit der Jakobinerherrschaft 1793–1794 auch?",
      antworten: ["Schreckensherrschaft", "Goldenes Zeitalter", "Ständegesellschaft", "Aufklärung"],
      richtig: 0,
      erklaerung: "Weil Tausende als angebliche Feinde hingerichtet wurden, heißt sie Schreckensherrschaft."
    },
    {
      id: "fr-t-011",
      frage: "Warum hungerten 1788/89 viele Menschen in Frankreich?",
      antworten: [
        "Nach einer Missernte stieg der Brotpreis stark",
        "Der König verbot das Brotbacken",
        "Alle Bauern waren im Krieg",
        "Frankreich verkaufte sein ganzes Getreide"
      ],
      richtig: 0,
      erklaerung: "Die Missernte 1788 machte Brot sehr teuer. Das verstärkte die Wut im Volk."
    },
    {
      id: "fr-t-012",
      frage: "Was meinte Rousseau mit Volkssouveränität?",
      antworten: [
        "Das Volk soll selbst über den Staat bestimmen",
        "Der König bekommt seine Macht von Gott",
        "Nur Gelehrte sollen regieren",
        "Jeder Stand regiert sich selbst"
      ],
      richtig: 0,
      erklaerung: "Souverän heißt „der Herrscher“. Bei der Volkssouveränität geht alle Macht vom Volk aus."
    }
  ]
});
