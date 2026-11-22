// ===== Thema: Lineare Funktionen (Mathematik, Klasse 8) =====
//
// So ist eine Themen-Datei aufgebaut:
//   id          – fester Name des Themas (nie ändern)
//   titel, fach – werden auf dem Startbildschirm angezeigt
//   einfuehrung – Liste von kurzen Seiten (HTML-Text). Jede Seite muss
//                 ohne Scrollen auf das iPhone passen, also lieber kurz halten.
//   uebungen    – Übungsfragen (ohne Punkte)
//   test        – Fragen für den Abschlusstest (daraus werden 10 gezogen)
//
// Jede Frage ist aufgebaut wie in fragen.js:
//   id         – feste ID, ändert sich nie und wird nie wiederverwendet
//   frage      – der Fragetext
//   antworten  – vier Antwortmöglichkeiten (die App mischt die Reihenfolge)
//   richtig    – Nummer der richtigen Antwort (Zählung beginnt bei 0!)
//   erklaerung – wird nach dem Antworten angezeigt
//
// Ein neues Thema anlegen: diese Datei kopieren, umbenennen, Inhalte
// austauschen (neue IDs!) und in index.html eine <script>-Zeile ergänzen.

THEMEN.push({
  id: "lineare-funktionen",
  titel: "Lineare Funktionen",
  fach: "Mathematik",

  // ===== Einführung: eine Seite pro Eintrag =====
  // Die Texte stehen in `Backticks`, damit sie über mehrere Zeilen gehen dürfen.
  einfuehrung: [
    // Seite 1
    `<h2>Was ist eine lineare Funktion?</h2>
     <p>Eine Funktion ordnet jedem x-Wert genau einen y-Wert zu.
        Bei einer <strong>linearen</strong> Funktion ist der Graph immer eine
        <strong>gerade Linie</strong>.</p>
     <p class="formel">y = mx + n</p>
     <p class="beispiel"><strong>Beispiel</strong><br>Ein Handyvertrag kostet 5 € im Monat plus 2 € pro Gigabyte.
        Für x Gigabyte zahlst du y = 2x + 5 Euro.
        Bei 3 GB sind das 2 · 3 + 5 = 11 €.</p>`,

    // Seite 2
    `<h2>Die Steigung m</h2>
     <p>Die Zahl <strong>vor dem x</strong> heißt Steigung. Sie sagt dir, wie steil die Gerade ist.
        Gehst du 1 Kästchen nach rechts, geht die Gerade m Kästchen nach oben.</p>
     <p>m positiv → die Gerade <strong>steigt</strong>.<br>
        m negativ → die Gerade <strong>fällt</strong>.<br>
        m = 0 → die Gerade ist <strong>waagerecht</strong>.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>y = 3x + 1<br>
        Die Steigung ist m = 3 → 1 nach rechts, 3 nach oben.</p>`,

    // Seite 3
    `<h2>Der y-Achsenabschnitt n</h2>
     <p>Die Zahl <strong>ohne x</strong> heißt y-Achsenabschnitt. Dort schneidet
        die Gerade die y-Achse, im Punkt <strong>(0 | n)</strong>.</p>
     <p>Warum? Auf der y-Achse ist x = 0. Dann fällt mx weg und es bleibt y = n.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>y = 2x + 4 schneidet die y-Achse bei (0 | 4).<br>
        Bei y = 2x ist n = 0. Die Gerade geht durch den Ursprung (0 | 0).</p>`,

    // Seite 4 – mit einer kleinen Zeichnung (SVG = Grafik direkt im Code)
    `<h2>Das Steigungsdreieck</h2>
     <p>Mit einem Steigungsdreieck kannst du m am Graphen ablesen.</p>
     <p class="formel">m = hoch : rechts</p>
     <svg class="skizze" viewBox="0 0 180 150" role="img"
          aria-label="Gerade y = 0,5x + 1 mit Steigungsdreieck: 2 nach rechts, 1 nach oben">
       <!-- Kästchen-Gitter -->
       <path class="gitter" d="M48 0V150M72 0V150M96 0V150M120 0V150M144 0V150M168 0V150M0 108H180M0 84H180M0 60H180M0 36H180M0 12H180"/>
       <!-- x-Achse und y-Achse -->
       <path class="achse" d="M0 132H180M24 150V0"/>
       <text x="172" y="146">x</text>
       <text x="29" y="10">y</text>
       <!-- Die Gerade y = 0,5x + 1 -->
       <line class="gerade" x1="0" y1="120" x2="180" y2="30"/>
       <!-- Das Steigungsdreieck: 2 nach rechts, 1 nach oben -->
       <path class="dreieck" d="M72 84H120V60"/>
       <text x="96" y="99" text-anchor="middle">2 nach rechts</text>
       <text x="125" y="76">1 hoch</text>
     </svg>
     <p class="beispiel">Hier ist m = 1 : 2 = ½. Die Gerade heißt y&nbsp;=&nbsp;½x&nbsp;+&nbsp;1.</p>`,
    // Hinweis: &nbsp; ist ein Leerzeichen, an dem nicht umgebrochen wird.

    // Seite 5
    `<h2>Die Wertetabelle</h2>
     <p>Setze für x verschiedene Zahlen ein und rechne y aus.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>y = 2x + 1<br>
        Für x = 2 → y = 2 · 2 + 1 = 5</p>
     <table class="wertetabelle">
       <tr><th>x</th><td>−1</td><td>0</td><td>1</td><td>2</td></tr>
       <tr><th>y</th><td>−1</td><td>1</td><td>3</td><td>5</td></tr>
     </table>
     <p><strong>Tipp</strong> → Geht x immer um 1 weiter, wächst y jedes Mal um m (hier um 2).</p>`,

    // Seite 6
    `<h2>Die Nullstelle</h2>
     <p>Die Nullstelle ist die Stelle, an der die Gerade die
        <strong>x-Achse</strong> schneidet. Dort ist <strong>y = 0</strong>.</p>
     <p>Setze also y = 0 und löse die Gleichung nach x auf.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>y = 2x − 4<br>
        0 = 2x − 4 &nbsp;| + 4<br>
        4 = 2x &nbsp;| : 2<br>
        x = 2 → Die Nullstelle liegt bei (2 | 0).</p>
     <p>Jetzt weißt du alles Wichtige. Probier es in den Übungen aus.
        Dort darfst du so oft danebenliegen, wie du willst!</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "lf-ue-001",
      frage: "Welche Zahl ist bei y = 4x + 3 die Steigung m?",
      antworten: ["4", "3", "7", "x"],
      richtig: 0,
      erklaerung: "Die Steigung ist die Zahl vor dem x, hier also 4. Die 3 ist der y-Achsenabschnitt n."
    },
    {
      id: "lf-ue-002",
      frage: "Welcher y-Achsenabschnitt n gehört zu y = −2x + 5?",
      antworten: ["−2", "5", "2", "−5"],
      richtig: 1,
      erklaerung: "n ist die Zahl ohne x, hier 5. Die Gerade schneidet die y-Achse bei (0 | 5)."
    },
    {
      id: "lf-ue-003",
      frage: "Steigt oder fällt die Gerade y = −3x + 1?",
      antworten: ["Sie steigt", "Sie fällt", "Sie ist waagerecht", "Das kann man nicht sagen"],
      richtig: 1,
      erklaerung: "m = −3 ist negativ, deshalb fällt die Gerade → 1 nach rechts, 3 nach unten."
    },
    {
      id: "lf-ue-004",
      frage: "Berechne y für x = 3 bei y = 2x + 1.",
      antworten: ["6", "7", "5", "9"],
      richtig: 1,
      erklaerung: "Einsetzen → y = 2 · 3 + 1 = 6 + 1 = 7."
    },
    {
      id: "lf-ue-005",
      frage: "Ein Steigungsdreieck geht 1 nach rechts und 3 nach oben. Wie groß ist m?",
      antworten: ["3", "⅓", "−3", "4"],
      richtig: 0,
      erklaerung: "m = hoch : rechts = 3 : 1 = 3."
    },
    {
      id: "lf-ue-006",
      frage: "Welcher Punkt liegt auf der Geraden y = x + 2?",
      antworten: ["(1 | 3)", "(3 | 1)", "(2 | 2)", "(0 | 1)"],
      richtig: 0,
      erklaerung: "Probe mit x = 1 → y = 1 + 2 = 3. Also liegt (1 | 3) auf der Geraden."
    },
    {
      id: "lf-ue-007",
      frage: "Wo liegt die Nullstelle von y = 2x − 6?",
      antworten: ["x = 3", "x = −3", "x = 6", "x = −6"],
      richtig: 0,
      erklaerung: "y = 0 setzen → 0 = 2x − 6. Auf beiden Seiten + 6 → 6 = 2x. Durch 2 teilen → x = 3."
    },
    {
      id: "lf-ue-008",
      frage: "In einer Wertetabelle steht x = 0 → y = 1, x = 1 → y = 3, x = 2 → y = 5. Welche Funktion ist das?",
      antworten: ["y = 2x + 1", "y = x + 1", "y = 3x", "y = 2x + 3"],
      richtig: 0,
      erklaerung: "Bei x = 0 ist y = 1, also n = 1. Pro Schritt wächst y um 2, also m = 2."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "lf-t-001",
      frage: "Welche Steigung hat y = −5x + 2?",
      antworten: ["−5", "2", "5", "−2"],
      richtig: 0,
      erklaerung: "Die Zahl vor dem x ist die Steigung, also m = −5."
    },
    {
      id: "lf-t-002",
      frage: "Wo schneidet y = 3x − 4 die y-Achse?",
      antworten: ["(0 | −4)", "(0 | 3)", "(−4 | 0)", "(3 | 0)"],
      richtig: 0,
      erklaerung: "n = −4, also schneidet die Gerade die y-Achse bei (0 | −4)."
    },
    {
      id: "lf-t-003",
      frage: "Welche Gerade geht durch den Ursprung (0 | 0)?",
      antworten: ["y = 4x", "y = x + 4", "y = 4", "y = −x + 1"],
      richtig: 0,
      erklaerung: "Bei y = 4x ist n = 0. Für x = 0 ist dann auch y = 0."
    },
    {
      id: "lf-t-004",
      frage: "Welche Funktion hat eine waagerechte Gerade als Graphen?",
      antworten: ["y = 3", "y = 3x", "y = x + 3", "y = −3x"],
      richtig: 0,
      erklaerung: "Bei y = 3 ist m = 0. Für jedes x ist y = 3, die Gerade ist waagerecht."
    },
    {
      id: "lf-t-005",
      frage: "Ein Steigungsdreieck geht 2 nach rechts und 4 nach oben. Wie groß ist m?",
      antworten: ["2", "4", "½", "6"],
      richtig: 0,
      erklaerung: "m = hoch : rechts = 4 : 2 = 2."
    },
    {
      id: "lf-t-006",
      frage: "Ein Steigungsdreieck geht 4 nach rechts und 2 nach unten. Wie groß ist m?",
      antworten: ["−½", "½", "−2", "2"],
      richtig: 0,
      erklaerung: "Nach unten heißt negativ, also m = −2 : 4 = −½."
    },
    {
      id: "lf-t-007",
      frage: "Berechne y für x = −2 bei y = 3x + 1.",
      antworten: ["−5", "7", "−7", "5"],
      richtig: 0,
      erklaerung: "y = 3 · (−2) + 1 = −6 + 1 = −5."
    },
    {
      id: "lf-t-008",
      frage: "Wo liegt die Nullstelle von y = 3x − 9?",
      antworten: ["x = 3", "x = −3", "x = 9", "x = 6"],
      richtig: 0,
      erklaerung: "y = 0 setzen → 0 = 3x − 9. Auf beiden Seiten + 9 → 9 = 3x. Durch 3 teilen → x = 3."
    },
    {
      id: "lf-t-009",
      frage: "Wo liegt die Nullstelle von y = −2x + 8?",
      antworten: ["x = 4", "x = −4", "x = 8", "x = −8"],
      richtig: 0,
      erklaerung: "y = 0 setzen → 0 = −2x + 8. Auf beiden Seiten + 2x → 2x = 8. Durch 2 teilen → x = 4."
    },
    {
      id: "lf-t-010",
      frage: "Welcher Punkt liegt auf der Geraden y = 2x − 1?",
      antworten: ["(3 | 5)", "(5 | 3)", "(0 | 1)", "(2 | 4)"],
      richtig: 0,
      erklaerung: "Probe mit x = 3 → y = 2 · 3 − 1 = 5. Also liegt (3 | 5) auf der Geraden."
    },
    {
      id: "lf-t-011",
      frage: "In einer Wertetabelle steht x = 0 → y = 4, x = 1 → y = 3, x = 2 → y = 2. Welche Funktion ist das?",
      antworten: ["y = −x + 4", "y = x + 4", "y = −4x + 1", "y = 4x − 1"],
      richtig: 0,
      erklaerung: "Bei x = 0 ist y = 4, also n = 4. Pro Schritt wird y um 1 kleiner, also m = −1."
    },
    {
      id: "lf-t-012",
      frage: "Ein Taxi kostet 4 € Grundgebühr und 2 € pro Kilometer. Welche Funktion beschreibt den Preis y für x Kilometer?",
      antworten: ["y = 2x + 4", "y = 4x + 2", "y = 6x", "y = 2x − 4"],
      richtig: 0,
      erklaerung: "Pro Kilometer kommen 2 € dazu (m = 2), die 4 € zahlt man immer (n = 4)."
    }
  ]
});
