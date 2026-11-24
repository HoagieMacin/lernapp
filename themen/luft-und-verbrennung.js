// ===== Thema: Luft und Verbrennung (Chemie, Klasse 8) =====
// Aufbau wie bei themen/lineare-funktionen.js (dort ist alles genau erklärt).
// ID-Vorsilbe: "luft-"  (luft-ue-… = Übungen, luft-t-… = Abschlusstest)
// Reaktionen werden als Wortgleichungen geschrieben (ohne Formeln).

THEMEN.push({
  id: "luft-und-verbrennung",
  titel: "Luft und Verbrennung",
  fach: "Chemie",

  // ===== Einführung: eine Seite pro Eintrag =====
  einfuehrung: [
    // Seite 1
    `<h2>Woraus besteht Luft?</h2>
     <p>Luft ist ein <strong>Gemisch</strong> aus verschiedenen Gasen.</p>
     <table class="wertetabelle">
       <tr><th>Gas</th><th>Anteil</th></tr>
       <tr><td>Stickstoff</td><td>ca. 78 %</td></tr>
       <tr><td>Sauerstoff</td><td>ca. 21 %</td></tr>
       <tr><td>Edelgase (vor allem Argon)</td><td>ca. 1 %</td></tr>
       <tr><td>Kohlenstoffdioxid</td><td>ca. 0,04 %</td></tr>
     </table>
     <p class="beispiel"><strong>Beispiel</strong><br>
        In 100 Litern Luft stecken etwa 78 Liter Stickstoff und 21 Liter
        Sauerstoff.</p>`,

    // Seite 2
    `<h2>Sauerstoff und Stickstoff</h2>
     <p><strong>Sauerstoff</strong> ist farblos und geruchlos. Er
        <strong>fördert die Verbrennung</strong>, brennt aber selbst nicht. Wir
        brauchen ihn zum Atmen.</p>
     <p><strong>Stickstoff</strong> ist auch farblos und geruchlos. Er
        <strong>erstickt Flammen</strong> und reagiert kaum mit anderen Stoffen.</p>
     <p><strong>Glimmspanprobe</strong> → Ein glühender Holzspan ohne Flamme wird in
        ein Gas gehalten. Flammt er hell auf, ist <strong>Sauerstoff</strong>
        nachgewiesen.</p>`,

    // Seite 3
    `<h2>Was ist eine Verbrennung?</h2>
     <p>Eine Verbrennung ist eine <strong>chemische Reaktion</strong> eines Stoffes
        mit <strong>Sauerstoff</strong>. Man nennt sie <strong>Oxidation</strong>.
        Dabei entstehen neue Stoffe, die <strong>Oxide</strong>.</p>
     <p>Für ein Feuer braucht man drei Dinge:<br>
        • einen brennbaren Stoff<br>
        • Sauerstoff<br>
        • die Zündtemperatur (genug Hitze)</p>
     <p>Fehlt eines davon, geht das Feuer aus.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Ein Deckel auf einer brennenden Pfanne nimmt dem Feuer den Sauerstoff.</p>`,

    // Seite 4
    `<h2>Oxide und Wortgleichungen</h2>
     <p>Eine <strong>Wortgleichung</strong> zeigt, was reagiert und was entsteht.
        Der Pfeil bedeutet „reagieren zu“.</p>
     <p><strong>Metalloxide</strong> entstehen aus Metallen.<br>
        Magnesium + Sauerstoff → Magnesiumoxid<br>
        Eisen + Sauerstoff → Eisenoxid</p>
     <p><strong>Nichtmetalloxide</strong> entstehen aus Nichtmetallen.<br>
        Kohlenstoff + Sauerstoff → Kohlenstoffdioxid<br>
        Schwefel + Sauerstoff → Schwefeldioxid</p>
     <p class="beispiel"><strong>Merke</strong><br>
        Links stehen die Ausgangsstoffe, rechts die Reaktionsprodukte.</p>`,

    // Seite 5
    `<h2>Erhaltung der Masse</h2>
     <p>Bei einer chemischen Reaktion geht <strong>keine Masse verloren</strong>, und
        es kommt keine hinzu. Die Ausgangsstoffe wiegen zusammen genauso viel wie die
        Reaktionsprodukte.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Verbrennt man Eisenwolle auf einer Waage, wird sie schwerer. Sie hat
        Sauerstoff aus der Luft aufgenommen. Eisen und Sauerstoff zusammen wiegen
        genauso viel wie das entstandene Eisenoxid.</p>
     <p><strong>Exotherm</strong> heißt eine Reaktion, bei der Energie frei wird, z. B.
        als Wärme oder Licht. Jede Verbrennung ist exotherm.</p>`,

    // Seite 6
    `<h2>Luftschadstoffe</h2>
     <p>• <strong>Kohlenstoffmonooxid</strong> → sehr giftig, unsichtbar und
          geruchlos. Es entsteht, wenn zu wenig Sauerstoff zum Verbrennen da ist.<br>
        • <strong>Schwefeldioxid</strong> → entsteht beim Verbrennen von Kohle und
          Öl und führt zu <strong>saurem Regen</strong>.<br>
        • <strong>Stickstoffoxide</strong> → entstehen z. B. in Automotoren.<br>
        • <strong>Feinstaub</strong> → winzige Teilchen, z. B. aus Abgasen.</p>
     <p>Kohlenstoffdioxid ist nicht giftig, verstärkt aber den Treibhauseffekt.</p>
     <p>Prima, das war alles! Jetzt kannst du üben.</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "luft-ue-001",
      frage: "Welches Gas hat den größten Anteil an der Luft?",
      antworten: ["Stickstoff", "Sauerstoff", "Kohlenstoffdioxid", "Argon"],
      richtig: 0,
      erklaerung: "Stickstoff macht etwa 78 % der Luft aus, Sauerstoff nur etwa 21 %."
    },
    {
      id: "luft-ue-002",
      frage: "Wie viel Prozent der Luft sind ungefähr Sauerstoff?",
      antworten: ["21 %", "78 %", "1 %", "50 %"],
      richtig: 0,
      erklaerung: "Etwa ein Fünftel der Luft ist Sauerstoff, also rund 21 %."
    },
    {
      id: "luft-ue-003",
      frage: "Mit welcher Probe weist man Sauerstoff nach?",
      antworten: ["Glimmspanprobe", "Kalkwasserprobe", "Knallgasprobe", "Geruchsprobe"],
      richtig: 0,
      erklaerung: "Die Glimmspanprobe zeigt Sauerstoff an. Mit Kalkwasser weist man Kohlenstoffdioxid nach, mit der Knallgasprobe Wasserstoff."
    },
    {
      id: "luft-ue-004",
      frage: "Was passiert bei der Glimmspanprobe, wenn Sauerstoff da ist?",
      antworten: [
        "Der glimmende Span flammt hell auf",
        "Der Span erlischt sofort",
        "Es knallt laut",
        "Der Span färbt sich blau"
      ],
      richtig: 0,
      erklaerung: "Sauerstoff fördert die Verbrennung. Deshalb flammt der glühende Span wieder auf."
    },
    {
      id: "luft-ue-005",
      frage: "Welche drei Dinge braucht ein Feuer?",
      antworten: [
        "Brennbaren Stoff, Sauerstoff und Zündtemperatur",
        "Wasser, Sauerstoff und Licht",
        "Stickstoff, Holz und Wind",
        "Kohlenstoffdioxid, Wärme und Wasser"
      ],
      richtig: 0,
      erklaerung: "Nur wenn alle drei zusammenkommen, brennt etwas. Fehlt eines, geht das Feuer aus."
    },
    {
      id: "luft-ue-006",
      frage: "Wie nennt man die chemische Reaktion eines Stoffes mit Sauerstoff?",
      antworten: ["Oxidation", "Destillation", "Filtration", "Verdunstung"],
      richtig: 0,
      erklaerung: "Eine Reaktion mit Sauerstoff heißt Oxidation. Dabei entsteht ein Oxid."
    },
    {
      id: "luft-ue-007",
      frage: "Welches Reaktionsprodukt fehlt? Magnesium + Sauerstoff → ___",
      antworten: ["Magnesiumoxid", "Kohlenstoffdioxid", "Stickstoff", "Wasser"],
      richtig: 0,
      erklaerung: "Magnesium ist ein Metall. Mit Sauerstoff entsteht das Metalloxid Magnesiumoxid, ein weißes Pulver."
    },
    {
      id: "luft-ue-008",
      frage: "Was bedeutet exotherm?",
      antworten: [
        "Bei der Reaktion wird Energie frei, z. B. Wärme",
        "Die Reaktion braucht ständig Wärme von außen",
        "Die Reaktion läuft nur bei Kälte ab",
        "Bei der Reaktion entsteht kein neuer Stoff"
      ],
      richtig: 0,
      erklaerung: "Exotherme Reaktionen geben Energie ab, z. B. als Wärme oder Licht. Jede Verbrennung ist exotherm."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "luft-t-001",
      frage: "Welche Eigenschaft hat Stickstoff?",
      antworten: [
        "Er erstickt Flammen",
        "Er fördert die Verbrennung",
        "Er riecht stark",
        "Er ist ein Metall"
      ],
      richtig: 0,
      erklaerung: "Stickstoff reagiert kaum und erstickt Flammen. Er ist farblos und geruchlos."
    },
    {
      id: "luft-t-002",
      frage: "Welche Aussage über Sauerstoff stimmt?",
      antworten: [
        "Er fördert die Verbrennung, brennt aber selbst nicht",
        "Er brennt selbst mit heller Flamme",
        "Er ist grün",
        "Er macht 78 % der Luft aus"
      ],
      richtig: 0,
      erklaerung: "Sauerstoff lässt andere Stoffe besser brennen, brennt aber selbst nicht. Er macht etwa 21 % der Luft aus."
    },
    {
      id: "luft-t-003",
      frage: "Wie viel Kohlenstoffdioxid enthält die Luft ungefähr?",
      antworten: ["0,04 %", "4 %", "21 %", "40 %"],
      richtig: 0,
      erklaerung: "Nur etwa 0,04 % der Luft sind Kohlenstoffdioxid. Trotzdem ist es wichtig für Pflanzen und das Klima."
    },
    {
      id: "luft-t-004",
      frage: "Zu welcher Stoffgruppe gehört Argon?",
      antworten: ["Edelgase", "Metalle", "Oxide", "Säuren"],
      richtig: 0,
      erklaerung: "Argon ist ein Edelgas. Edelgase reagieren fast gar nicht mit anderen Stoffen."
    },
    {
      id: "luft-t-005",
      frage: "Was ist eine Verbrennung?",
      antworten: [
        "Eine chemische Reaktion eines Stoffes mit Sauerstoff",
        "Ein Stoff schmilzt, ohne sich zu verändern",
        "Ein Stoff löst sich in Wasser",
        "Ein Gas wird abgekühlt"
      ],
      richtig: 0,
      erklaerung: "Bei einer Verbrennung reagiert ein Stoff mit Sauerstoff, und es entsteht ein neuer Stoff, ein Oxid."
    },
    {
      id: "luft-t-006",
      frage: "Warum erlischt eine Kerze unter einem umgestülpten Glas?",
      antworten: [
        "Der Sauerstoff im Glas wird knapp, und es kommt keine frische Luft nach",
        "Das kalte Glas kühlt die Flamme so stark ab, dass sie ausgeht",
        "Unter dem Glas staut sich zu viel Licht, das die Flamme erstickt",
        "Das Wachs schmilzt schneller und überflutet den Docht"
      ],
      richtig: 0,
      erklaerung: "Eine Flamme braucht genug Sauerstoff. Wird er unter dem Glas knapp, geht die Kerze aus."
    },
    {
      id: "luft-t-007",
      frage: "Ist Kohlenstoffdioxid ein Metalloxid oder ein Nichtmetalloxid?",
      antworten: ["Ein Nichtmetalloxid", "Ein Metalloxid", "Ein Edelgas", "Gar kein Oxid"],
      richtig: 0,
      erklaerung: "Kohlenstoff ist ein Nichtmetall. Deshalb ist Kohlenstoffdioxid ein Nichtmetalloxid."
    },
    {
      id: "luft-t-008",
      frage: "Welches Reaktionsprodukt fehlt? Schwefel + Sauerstoff → ___",
      antworten: ["Schwefeldioxid", "Eisenoxid", "Kohlenstoffdioxid", "Stickstoff"],
      richtig: 0,
      erklaerung: "Schwefel reagiert mit Sauerstoff zu Schwefeldioxid, einem Nichtmetalloxid."
    },
    {
      id: "luft-t-009",
      frage: "Eisenwolle wird offen an der Luft auf einer Waage verbrannt. Was zeigt die Waage danach an?",
      antworten: ["Mehr als vorher", "Weniger als vorher", "Genau null", "Genau dasselbe wie vorher"],
      richtig: 0,
      erklaerung: "Das Eisen hat Sauerstoff aus der Luft aufgenommen. Eisen und Sauerstoff zusammen wiegen so viel wie das Eisenoxid."
    },
    {
      id: "luft-t-010",
      frage: "Was besagt das Gesetz von der Erhaltung der Masse?",
      antworten: [
        "Bei einer chemischen Reaktion bleibt die Gesamtmasse gleich",
        "Bei jeder Reaktion geht Masse verloren",
        "Gase haben keine Masse",
        "Nur Metalle haben eine Masse"
      ],
      richtig: 0,
      erklaerung: "Die Ausgangsstoffe wiegen zusammen genauso viel wie die Reaktionsprodukte."
    },
    {
      id: "luft-t-011",
      frage: "Welcher Luftschadstoff ist mitverantwortlich für sauren Regen?",
      antworten: ["Schwefeldioxid", "Sauerstoff", "Helium", "Argon"],
      richtig: 0,
      erklaerung: "Schwefeldioxid bildet mit Wasser in der Luft Säure. Die fällt als saurer Regen herunter."
    },
    {
      id: "luft-t-012",
      frage: "Warum ist Kohlenstoffmonooxid so gefährlich?",
      antworten: [
        "Es ist giftig, und man kann es weder sehen noch riechen",
        "Es ist sauer und ätzend",
        "Es lässt Pflanzen zu schnell wachsen",
        "Es ist ein Edelgas"
      ],
      richtig: 0,
      erklaerung: "Kohlenstoffmonooxid ist sehr giftig und unbemerkt. Deshalb gibt es Warnmelder dafür."
    }
  ]
});
