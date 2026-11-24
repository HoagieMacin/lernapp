// ===== Thema: Die Zelle (Biologie, Klasse 8) =====
// Aufbau wie bei themen/lineare-funktionen.js (dort ist alles genau erklärt).
// ID-Vorsilbe: "zel-"  (zel-ue-… = Übungen, zel-t-… = Abschlusstest)
// Wichtig für die Inhalte: Mitochondrien haben Pflanzen- UND Tierzellen.
// Pflanzenzellen haben eine GROSSE Vakuole (Tierzellen höchstens kleine).
// Chloroplasten gibt es nur in grünen Pflanzenteilen.

THEMEN.push({
  id: "die-zelle",
  titel: "Die Zelle",
  fach: "Biologie",

  // ===== Einführung: eine Seite pro Eintrag =====
  einfuehrung: [
    // Seite 1
    `<h2>Das Lichtmikroskop</h2>
     <p>Zellen sind so klein, dass man sie nur mit einem
        <strong>Mikroskop</strong> sehen kann.</p>
     <p>• <strong>Okular</strong> → die Linse, durch die du schaust<br>
        • <strong>Objektiv</strong> → die Linse dicht über dem Präparat<br>
        • <strong>Objekttisch</strong> → darauf liegt das Präparat<br>
        • <strong>Blende</strong> → regelt, wie viel Licht durchkommt<br>
        • <strong>Grob- und Feintrieb</strong> → damit stellst du scharf</p>
     <p class="formel">Vergrößerung = Okular × Objektiv</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Okular 10-fach und Objektiv 40-fach → 10 × 40 = 400-fache Vergrößerung</p>`,

    // Seite 2
    `<h2>Richtig mikroskopieren</h2>
     <p>1. Das Präparat liegt auf einem <strong>Objektträger</strong> und ist mit einem
        <strong>Deckgläschen</strong> abgedeckt.</p>
     <p>2. Beginne immer mit der <strong>kleinsten Vergrößerung</strong>.</p>
     <p>3. Stelle erst mit dem Grobtrieb, dann mit dem Feintrieb scharf.</p>
     <p>4. Erst danach wechselst du zu einem stärkeren Objektiv.</p>
     <p class="beispiel"><strong>Tipp</strong><br>
        Das Objektiv darf das Deckgläschen nie berühren. Und wundere dich nicht,
        im Mikroskop steht das Bild auf dem Kopf.</p>`,

    // Seite 3 – Vergleichstabelle
    `<h2>Pflanzen- und Tierzelle</h2>
     <table class="wertetabelle" style="font-size: 14px;">
       <tr><th></th><th>Pflanzenzelle</th><th>Tierzelle</th></tr>
       <tr><td>Zellkern</td><td>✓</td><td>✓</td></tr>
       <tr><td>Zellmembran</td><td>✓</td><td>✓</td></tr>
       <tr><td>Zellplasma</td><td>✓</td><td>✓</td></tr>
       <tr><td>Mitochondrien</td><td>✓</td><td>✓</td></tr>
       <tr><td>Zellwand</td><td>✓</td><td>–</td></tr>
       <tr><td>Vakuole</td><td>✓ groß</td><td>höchstens klein</td></tr>
       <tr><td>Chloroplasten</td><td>✓ in grünen Teilen</td><td>–</td></tr>
     </table>
     <p class="beispiel"><strong>Merke</strong><br>
        Zellwand, große Vakuole und Chloroplasten gibt es nur bei Pflanzen.
        Chloroplasten aber nur in grünen Teilen, z. B. im Blatt, nicht in der
        Wurzel.</p>`,

    // Seite 4
    `<h2>Die Zellorganellen</h2>
     <p>• <strong>Zellkern</strong> → Steuerzentrale, enthält die Erbinformation<br>
        • <strong>Zellmembran</strong> → dünne Hülle, regelt, was hinein- und
          hinausgeht<br>
        • <strong>Zellplasma</strong> → füllt die Zelle, hier laufen viele
          Lebensvorgänge ab<br>
        • <strong>Mitochondrien</strong> → „Kraftwerke“, gewinnen Energie aus
          Nährstoffen<br>
        • <strong>Zellwand</strong> → feste Hülle, gibt Halt und Form<br>
        • <strong>Vakuole</strong> → speichert Zellsaft und hält die Zelle prall<br>
        • <strong>Chloroplasten</strong> → enthalten grünes Chlorophyll, hier findet
          die Fotosynthese statt</p>`,

    // Seite 5
    `<h2>Ernährung und Wachstum</h2>
     <p><strong>Autotroph</strong> (sich selbst ernährend) → Pflanzen stellen ihre
        Nährstoffe mit Licht selbst her, durch Fotosynthese in den
        Chloroplasten.</p>
     <p><strong>Heterotroph</strong> (sich von anderen ernährend) → Tiere, Menschen
        und Pilze müssen Nährstoffe mit der Nahrung aufnehmen.</p>
     <p><strong>Zellteilung</strong> → Aus einer Zelle werden zwei. Zuerst teilt sich
        der Zellkern, dann die ganze Zelle. Die neuen Zellen wachsen danach heran.
        So wächst ein Lebewesen.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Deine Haut erneuert sich ständig durch Zellteilung.</p>`,

    // Seite 6
    `<h2>Einzeller und Vielzeller</h2>
     <p><strong>Einzeller</strong> bestehen aus nur einer Zelle. Diese eine Zelle
        erledigt alles selbst, also Nahrung aufnehmen, sich bewegen und sich
        vermehren. Beispiele sind das Pantoffeltierchen und die Amöbe.</p>
     <p><strong>Vielzeller</strong> bestehen aus vielen Zellen mit verschiedenen
        Aufgaben. Gleiche Zellen bilden ein <strong>Gewebe</strong>, Gewebe bilden
        <strong>Organe</strong>, und alle Organe zusammen den
        <strong>Organismus</strong>.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Der Mensch besteht aus rund 30 Billionen Zellen.</p>
     <p>Klasse, jetzt kennst du die Zelle! Auf zu den Übungen.</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "zel-ue-001",
      frage: "Durch welches Teil des Mikroskops schaust du hindurch?",
      antworten: ["Okular", "Objektiv", "Blende", "Objekttisch"],
      richtig: 0,
      erklaerung: "Das Okular ist die Linse am oberen Ende, an die du dein Auge hältst."
    },
    {
      id: "zel-ue-002",
      frage: "Okular 10-fach, Objektiv 10-fach. Wie stark ist die Vergrößerung insgesamt?",
      antworten: ["100-fach", "20-fach", "10-fach", "1000-fach"],
      richtig: 0,
      erklaerung: "Man multipliziert → 10 × 10 = 100-fach."
    },
    {
      id: "zel-ue-003",
      frage: "Welches Zellorganell ist die Steuerzentrale der Zelle?",
      antworten: ["Zellkern", "Vakuole", "Zellwand", "Zellmembran"],
      richtig: 0,
      erklaerung: "Der Zellkern enthält die Erbinformation und steuert die Zelle."
    },
    {
      id: "zel-ue-004",
      frage: "Was gibt der Pflanzenzelle eine feste Form?",
      antworten: ["Zellwand", "Zellplasma", "Zellkern", "Mitochondrium"],
      richtig: 0,
      erklaerung: "Die feste Zellwand gibt Halt und Form. Die prall gefüllte Vakuole hilft dabei mit."
    },
    {
      id: "zel-ue-005",
      frage: "Wo findet in der Pflanzenzelle die Fotosynthese statt?",
      antworten: ["In den Chloroplasten", "Im Zellkern", "In der Zellmembran", "In der Vakuole"],
      richtig: 0,
      erklaerung: "Die Chloroplasten enthalten den grünen Farbstoff Chlorophyll. Damit nutzen sie das Licht."
    },
    {
      id: "zel-ue-006",
      frage: "Welche Bestandteile haben Pflanzen- UND Tierzellen?",
      antworten: [
        "Zellkern, Zellmembran, Zellplasma und Mitochondrien",
        "Zellwand und Chloroplasten",
        "Chloroplasten und Mitochondrien",
        "Eine große Vakuole und eine Zellwand"
      ],
      richtig: 0,
      erklaerung: "Diese vier Teile haben beide Zelltypen. Auch Pflanzenzellen brauchen Mitochondrien, um Energie zu gewinnen."
    },
    {
      id: "zel-ue-007",
      frage: "Wie ernähren sich Pflanzen?",
      antworten: [
        "Autotroph – sie stellen ihre Nährstoffe selbst her",
        "Heterotroph – sie fressen andere Lebewesen",
        "Sie brauchen keine Nährstoffe",
        "Sie nehmen fertigen Zucker aus dem Boden auf"
      ],
      richtig: 0,
      erklaerung: "Mit der Energie des Lichts stellen sie aus Wasser und Kohlenstoffdioxid Traubenzucker her."
    },
    {
      id: "zel-ue-008",
      frage: "Was ist ein Pantoffeltierchen?",
      antworten: ["Ein Einzeller", "Ein Vielzeller", "Ein Zellorganell", "Ein Teil des Mikroskops"],
      richtig: 0,
      erklaerung: "Das Pantoffeltierchen besteht aus nur einer Zelle. Es lebt z. B. in Teichen."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "zel-t-001",
      frage: "Mit welcher Vergrößerung beginnst du beim Mikroskopieren?",
      antworten: ["Mit der kleinsten", "Mit der größten", "Das ist egal", "Mit einer mittleren"],
      richtig: 0,
      erklaerung: "Mit der kleinsten Vergrößerung findest du das Präparat am leichtesten und kannst gut scharf stellen."
    },
    {
      id: "zel-t-002",
      frage: "Okular 10-fach, Objektiv 40-fach. Wie stark ist die Vergrößerung insgesamt?",
      antworten: ["400-fach", "50-fach", "40-fach", "4000-fach"],
      richtig: 0,
      erklaerung: "Man multipliziert → 10 × 40 = 400-fach."
    },
    {
      id: "zel-t-003",
      frage: "Wozu dient die Blende am Mikroskop?",
      antworten: [
        "Sie regelt die Lichtmenge",
        "Sie stellt das Bild scharf",
        "Sie vergrößert das Bild",
        "Sie hält das Präparat fest"
      ],
      richtig: 0,
      erklaerung: "Mit der Blende stellst du ein, wie viel Licht durch das Präparat fällt. Ist das Bild zu hell oder zu dunkel, drehst du an der Blende, bis du alles gut erkennst."
    },
    {
      id: "zel-t-004",
      frage: "Welche Aufgabe hat die Zellmembran?",
      antworten: [
        "Sie regelt, welche Stoffe in die Zelle hinein- und hinausgelangen",
        "Sie betreibt Fotosynthese",
        "Sie enthält die Erbinformation",
        "Sie speichert den Zellsaft"
      ],
      richtig: 0,
      erklaerung: "Die Zellmembran ist eine dünne Hülle um jede Zelle. Sie lässt nur bestimmte Stoffe durch."
    },
    {
      id: "zel-t-005",
      frage: "Welche Organellen gewinnen in Pflanzen- und Tierzellen Energie aus Nährstoffen?",
      antworten: ["Mitochondrien", "Chloroplasten", "Vakuolen", "Zellwände"],
      richtig: 0,
      erklaerung: "Die Mitochondrien sind die „Kraftwerke“ der Zelle. Es gibt sie in Pflanzen- und Tierzellen."
    },
    {
      id: "zel-t-006",
      frage: "Welche Aussage zur Vakuole stimmt?",
      antworten: [
        "Pflanzenzellen haben eine große Vakuole, Tierzellen höchstens kleine",
        "Nur Tierzellen haben eine große Vakuole",
        "Die Vakuole ist die Steuerzentrale der Zelle",
        "Die Vakuole betreibt Fotosynthese"
      ],
      richtig: 0,
      erklaerung: "Die große Vakuole speichert Zellsaft und hält die Pflanzenzelle prall."
    },
    {
      id: "zel-t-007",
      frage: "Warum ist die Zwiebelhaut unter dem Mikroskop nicht grün?",
      antworten: [
        "Die Zwiebelschuppen liegen im Inneren der Zwiebel und bekommen kein Licht, deshalb haben sie keine Chloroplasten",
        "Die Zellen haben keinen Zellkern, der grünen Farbstoff bilden könnte",
        "Ohne Zellwand läuft der grüne Farbstoff aus den Zellen heraus",
        "Es sind Tierzellen, und Tierzellen sind nie grün"
      ],
      richtig: 0,
      erklaerung: "Chloroplasten gibt es nur in grünen Pflanzenteilen, die Licht bekommen."
    },
    {
      id: "zel-t-008",
      frage: "Was speichert die Vakuole?",
      antworten: ["Zellsaft", "Die Erbinformation", "Licht", "Chlorophyll"],
      richtig: 0,
      erklaerung: "Zellsaft ist Wasser mit gelösten Stoffen. Er hält die Pflanzenzelle prall."
    },
    {
      id: "zel-t-009",
      frage: "Wie ernähren sich Menschen und Tiere?",
      antworten: [
        "Heterotroph – sie nehmen Nährstoffe mit der Nahrung auf",
        "Autotroph – sie stellen Nährstoffe mit Licht her",
        "Sie brauchen nur Wasser",
        "Sie nehmen Nährstoffe nur aus der Luft auf"
      ],
      richtig: 0,
      erklaerung: "Menschen und Tiere haben keine Chloroplasten. Sie müssen Nährstoffe essen."
    },
    {
      id: "zel-t-010",
      frage: "Was passiert bei der Zellteilung?",
      antworten: [
        "Aus einer Zelle entstehen zwei neue Zellen",
        "Zwei Zellen verschmelzen zu einer",
        "Die Zelle löst sich auf",
        "Die Zelle verliert ihren Zellkern"
      ],
      richtig: 0,
      erklaerung: "Zuerst teilt sich der Zellkern, dann die ganze Zelle. So wachsen Lebewesen."
    },
    {
      id: "zel-t-011",
      frage: "Welche Reihenfolge ist richtig, vom Kleinen zum Großen?",
      antworten: [
        "Zelle → Gewebe → Organ → Organismus",
        "Organ → Zelle → Gewebe → Organismus",
        "Gewebe → Zelle → Organismus → Organ",
        "Zelle → Organ → Gewebe → Organismus"
      ],
      richtig: 0,
      erklaerung: "Viele gleiche Zellen bilden ein Gewebe, z. B. Muskelgewebe. Verschiedene Gewebe bilden ein Organ, z. B. das Herz. Alle Organe zusammen ergeben den Organismus, zum Beispiel dich."
    },
    {
      id: "zel-t-012",
      frage: "Wie kann ein Einzeller allein überleben?",
      antworten: [
        "Seine eine Zelle erledigt alle Lebensaufgaben selbst",
        "Er hat viele verschiedene Organe",
        "Er braucht keine Nahrung",
        "Er lebt immer im Körper eines Menschen"
      ],
      richtig: 0,
      erklaerung: "Die eine Zelle nimmt Nahrung auf, bewegt sich und vermehrt sich, alles ganz allein."
    }
  ]
});
