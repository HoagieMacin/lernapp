// ===== Thema: Industrialisierung (Geschichte, Klasse 8) =====
// Aufbau wie bei themen/lineare-funktionen.js (dort ist alles genau erklärt).
// ID-Vorsilbe: "ind-"  (ind-ue-… = Übungen, ind-t-… = Abschlusstest)

THEMEN.push({
  id: "industrialisierung",
  titel: "Industrialisierung",
  fach: "Geschichte",

  // ===== Einführung: eine Seite pro Eintrag =====
  einfuehrung: [
    // Seite 1
    `<h2>Was ist Industrialisierung?</h2>
     <p>Früher stellten Menschen fast alles <strong>von Hand</strong> her, in kleinen
        Werkstätten oder zu Hause.</p>
     <p>Ab etwa 1760 begann in <strong>England</strong> eine große Veränderung.
        <strong>Maschinen</strong> übernahmen die Arbeit, und es entstanden
        <strong>Fabriken</strong>. Das nennt man <strong>Industrialisierung</strong>.</p>
     <p>In Deutschland begann sie später, etwa ab 1835.</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        Eine Spinnmaschine konnte so viel Garn herstellen wie viele Menschen
        zusammen mit dem Spinnrad.</p>`,

    // Seite 2
    `<h2>Dampfmaschine und Fabriken</h2>
     <p><strong>James Watt</strong> verbesserte um 1769 die
        <strong>Dampfmaschine</strong> entscheidend. Sie verbrennt Kohle, erhitzt
        Wasser, und der Dampf treibt Maschinen an.</p>
     <p>Fabriken mussten nun nicht mehr an Flüssen mit Wasserrädern stehen. Sie
        konnten fast überall gebaut werden.</p>
     <p>In der Fabrik machte jeder Arbeiter nur einen kleinen Arbeitsschritt
        (<strong>Arbeitsteilung</strong>). So entstanden viel mehr Waren, und sie
        wurden billiger.</p>`,

    // Seite 3
    `<h2>Die Eisenbahn</h2>
     <p>Die Dampflok brachte Menschen und Waren viel schneller ans Ziel als
        Pferdekutschen.</p>
     <p>1835 fuhr die erste deutsche Eisenbahn, der <strong>„Adler“</strong>, von
        <strong>Nürnberg nach Fürth</strong>.</p>
     <p>Für Schienen, Loks und Brücken brauchte man viel <strong>Kohle, Eisen und
        Stahl</strong>. Deshalb wuchsen Bergbau und Stahlindustrie, z. B. im
        Ruhrgebiet.</p>
     <p class="beispiel">Die Eisenbahn wurde so zum <strong>Motor der
        Industrialisierung</strong> in Deutschland.</p>`,

    // Seite 4
    `<h2>Das Leben der Arbeiter</h2>
     <p>Viele Menschen zogen vom Land in die Städte, um in Fabriken Arbeit zu
        finden. Das nennt man <strong>Landflucht</strong>. Die Städte wuchsen
        sehr schnell.</p>
     <p>• oft <strong>14 bis 16 Stunden</strong> Arbeit am Tag, sechs Tage die Woche<br>
        • niedrige Löhne, keine Hilfe bei Krankheit oder Unfall<br>
        • enge, feuchte Wohnungen<br>
        • <strong>Kinderarbeit</strong> in Fabriken und Bergwerken</p>
     <p class="beispiel"><strong>Beispiel</strong><br>
        In Preußen wurde 1839 Fabrikarbeit für Kinder unter 9 Jahren verboten.
        Das war ein erster kleiner Schritt.</p>`,

    // Seite 5
    `<h2>Die Soziale Frage</h2>
     <p>Die Not der Arbeiter nannte man die <strong>Soziale Frage</strong>.
        Verschiedene Gruppen suchten nach Lösungen.</p>
     <p>• <strong>Staat</strong> → Bismarck führte Kranken-, Unfall- und
          Rentenversicherung ein (1883–1889).<br>
        • <strong>Arbeiterbewegung</strong> → Arbeiter gründeten Gewerkschaften und
          Parteien und kämpften für mehr Lohn und kürzere Arbeitszeiten.<br>
        • <strong>Kirchen</strong> → z. B. Adolph Kolping und Johann Hinrich Wichern
          halfen Gesellen und armen Kindern.<br>
        • <strong>Unternehmer</strong> → z. B. Alfred Krupp baute Werkswohnungen für
          seine Arbeiter.</p>`,

    // Seite 6
    `<h2>Folgen für die Umwelt</h2>
     <p>Fabriken und Dampfmaschinen verbrannten riesige Mengen
        <strong>Kohle</strong>. Rauch und Ruß verschmutzten die Luft, und in
        Industriestädten war der Himmel oft grau.</p>
     <p>Fabriken leiteten ihr <strong>Abwasser</strong> ungefiltert in die Flüsse.
        Für Kohle und Erz wurden ganze Landschaften umgegraben.</p>
     <p class="beispiel">Damals dachte kaum jemand an Umweltschutz. Heute gibt es
        Gesetze, die Luft und Wasser schützen.</p>
     <p>Super, jetzt kennst du die wichtigsten Seiten der Industrialisierung!</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "ind-ue-001",
      frage: "In welchem Land begann die Industrialisierung?",
      antworten: ["England", "Deutschland", "Frankreich", "Italien"],
      richtig: 0,
      erklaerung: "Sie begann um 1760 in England. Deutschland folgte erst etwa ab 1835."
    },
    {
      id: "ind-ue-002",
      frage: "Welche Maschine trieb ab dem Ende des 18. Jahrhunderts viele Fabriken an?",
      antworten: ["Die Dampfmaschine", "Der Elektromotor", "Das Windrad", "Der Benzinmotor"],
      richtig: 0,
      erklaerung: "Die von James Watt verbesserte Dampfmaschine trieb die Maschinen in den Fabriken an."
    },
    {
      id: "ind-ue-003",
      frage: "Womit wurden Dampfmaschinen meistens beheizt?",
      antworten: ["Mit Kohle", "Mit Erdgas", "Mit Strom", "Mit Benzin"],
      richtig: 0,
      erklaerung: "Kohle wurde verbrannt, um Wasser zu erhitzen. Der Dampf trieb dann die Maschine an."
    },
    {
      id: "ind-ue-004",
      frage: "Welche Strecke fuhr 1835 die erste deutsche Eisenbahn?",
      antworten: ["Nürnberg – Fürth", "Berlin – Potsdam", "Leipzig – Dresden", "Köln – Bonn"],
      richtig: 0,
      erklaerung: "Der „Adler“ fuhr 1835 von Nürnberg nach Fürth. Berlin – Potsdam und Leipzig – Dresden kamen kurz danach."
    },
    {
      id: "ind-ue-005",
      frage: "Was bedeutet Landflucht?",
      antworten: [
        "Menschen ziehen vom Land in die Stadt",
        "Menschen fliehen vor einem Krieg",
        "Bauern kaufen mehr Land",
        "Städter ziehen aufs Land"
      ],
      richtig: 0,
      erklaerung: "Viele Menschen zogen in die Städte, weil sie dort Arbeit in den Fabriken fanden."
    },
    {
      id: "ind-ue-006",
      frage: "Wie lange arbeiteten Fabrikarbeiter oft am Tag?",
      antworten: ["14 bis 16 Stunden", "6 Stunden", "8 Stunden", "4 Stunden"],
      richtig: 0,
      erklaerung: "Arbeitstage von 14 bis 16 Stunden waren normal, oft sechs Tage in der Woche."
    },
    {
      id: "ind-ue-007",
      frage: "Was ist eine Gewerkschaft?",
      antworten: [
        "Ein Zusammenschluss von Arbeitern, die gemeinsam für bessere Arbeitsbedingungen eintreten",
        "Ein Verband von Fabrikbesitzern, die gemeinsam die Löhne ihrer Arbeiter festlegen",
        "Eine Behörde des Kaisers, die in den Fabriken die Arbeitszeiten kontrolliert",
        "Eine Schule, in der Kinder und Jugendliche ein Handwerk lernen"
      ],
      richtig: 0,
      erklaerung: "Allein konnte ein Arbeiter wenig erreichen. Gemeinsam waren die Arbeiter stärker, z. B. bei Streiks für mehr Lohn."
    },
    {
      id: "ind-ue-008",
      frage: "Welche Folge hatte die Industrialisierung für die Umwelt?",
      antworten: [
        "Rauch und Ruß verschmutzten die Luft",
        "Die Luft wurde sauberer",
        "In den Städten wurde es ruhiger",
        "Die Flüsse wurden sauberer"
      ],
      richtig: 0,
      erklaerung: "Durch das Verbrennen von Kohle waren Industriestädte oft voller Rauch und Ruß."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "ind-t-001",
      frage: "Was versteht man unter Industrialisierung?",
      antworten: [
        "Den Übergang von Handarbeit zur Herstellung mit Maschinen in Fabriken",
        "Den Bau von Burgen und Schlössern",
        "Die Entdeckung Amerikas",
        "Die Abschaffung des Königs"
      ],
      richtig: 0,
      erklaerung: "Maschinen und Fabriken ersetzten nach und nach die Handarbeit in Werkstätten."
    },
    {
      id: "ind-t-002",
      frage: "Warum konnten Fabriken dank der Dampfmaschine fast überall gebaut werden?",
      antworten: [
        "Sie brauchten kein Wasserrad an einem Fluss mehr",
        "Dampfmaschinen waren sehr klein",
        "Dampfmaschinen liefen ohne Brennstoff",
        "Der Staat verschenkte Dampfmaschinen"
      ],
      richtig: 0,
      erklaerung: "Vorher trieb oft ein Wasserrad die Maschinen an. Die Dampfmaschine brauchte nur Kohle und Wasser."
    },
    {
      id: "ind-t-003",
      frage: "Was bedeutet Arbeitsteilung in der Fabrik?",
      antworten: [
        "Jeder Arbeiter macht nur einen kleinen Arbeitsschritt",
        "Alle teilen sich den Lohn",
        "Jeder arbeitet nur einen halben Tag",
        "Die Arbeiter teilen sich eine Wohnung"
      ],
      richtig: 0,
      erklaerung: "Wenn jeder immer denselben Schritt macht, geht es schneller. Die Arbeit wird aber auch eintönig."
    },
    {
      id: "ind-t-004",
      frage: "Warum nennt man die Eisenbahn den Motor der Industrialisierung in Deutschland?",
      antworten: [
        "Sie brauchte viel Kohle, Eisen und Stahl und transportierte Waren schnell",
        "Sie fuhr schon mit Strom",
        "Sie ersetzte alle Fabriken",
        "Nur der Kaiser durfte mit ihr fahren"
      ],
      richtig: 0,
      erklaerung: "Der Bau der Bahn kurbelte Bergbau und Stahlindustrie an, und die Bahn brachte Waren schnell überall hin."
    },
    {
      id: "ind-t-005",
      frage: "Wie hieß die erste deutsche Dampflok?",
      antworten: ["Adler", "Falke", "Rakete", "Blitz"],
      richtig: 0,
      erklaerung: "Der „Adler“ fuhr 1835 von Nürnberg nach Fürth. Gebaut wurde er in England."
    },
    {
      id: "ind-t-006",
      frage: "Warum wuchsen die Städte im 19. Jahrhundert so schnell?",
      antworten: [
        "Viele Menschen zogen für Fabrikarbeit in die Städte",
        "Auf dem Land war das Wohnen verboten",
        "Die Städte bauten neue Burgmauern",
        "Es gab keine Bauern mehr"
      ],
      richtig: 0,
      erklaerung: "Durch die Landflucht wuchsen Städte wie Berlin oder die Orte im Ruhrgebiet rasant."
    },
    {
      id: "ind-t-007",
      frage: "Welche Aussage über Kinderarbeit in der Industrialisierung stimmt?",
      antworten: [
        "Schon kleine Kinder arbeiteten in Fabriken und Bergwerken",
        "Kinder durften nie arbeiten",
        "Kinder arbeiteten nur in den Ferien",
        "Kinder bekamen mehr Lohn als Erwachsene"
      ],
      richtig: 0,
      erklaerung: "Kinder waren billige Arbeitskräfte. Erst nach und nach wurde Kinderarbeit eingeschränkt, in Preußen ab 1839."
    },
    {
      id: "ind-t-008",
      frage: "Wie wollte der Staat unter Bismarck die Lage der Arbeiter verbessern?",
      antworten: [
        "Mit Sozialversicherungen, z. B. der Krankenversicherung",
        "Mit kostenlosen Eisenbahnfahrten",
        "Mit der Schließung aller Fabriken",
        "Mit höheren Steuern für Arbeiter"
      ],
      richtig: 0,
      erklaerung: "Bismarck führte Kranken-, Unfall- und Rentenversicherung ein. Darauf baut unser Sozialstaat bis heute auf."
    },
    {
      id: "ind-t-009",
      frage: "Wofür kämpften die Gewerkschaften?",
      antworten: [
        "Für höhere Löhne und kürzere Arbeitszeiten",
        "Für längere Arbeitszeiten",
        "Für mehr Kinderarbeit",
        "Für niedrigere Löhne"
      ],
      richtig: 0,
      erklaerung: "Gewerkschaften setzten sich gemeinsam für bessere Arbeitsbedingungen ein, z. B. auch mit Streiks."
    },
    {
      id: "ind-t-010",
      frage: "Wie halfen die Kirchen bei der Sozialen Frage?",
      antworten: [
        "Mit Vereinen und Hilfe für Arme, z. B. durch Kolping und Wichern",
        "Sie schafften den freien Sonntag ab",
        "Sie verboten die Eisenbahn",
        "Sie führten die Rentenversicherung ein"
      ],
      richtig: 0,
      erklaerung: "Kolping gründete Vereine für junge Handwerker, Wichern half armen und verwahrlosten Kindern."
    },
    {
      id: "ind-t-011",
      frage: "Was tat zum Beispiel der Unternehmer Alfred Krupp für seine Arbeiter?",
      antworten: [
        "Er baute Werkswohnungen",
        "Er schaffte die Löhne ab",
        "Er führte die Kinderarbeit wieder ein",
        "Er verbot Krankenkassen"
      ],
      richtig: 0,
      erklaerung: "Krupp baute Wohnungen, Schulen und eine Krankenkasse. So wollte er gute Arbeiter an seine Firma binden."
    },
    {
      id: "ind-t-012",
      frage: "Welche Umweltfolge gab es in vielen Industriestädten?",
      antworten: [
        "Fabriken leiteten Abwasser ungefiltert in die Flüsse",
        "Es wurden große Naturschutzgebiete angelegt",
        "Kohle wurde durch Solarstrom ersetzt",
        "Die Luft war besonders sauber"
      ],
      richtig: 0,
      erklaerung: "Abwasser aus Fabriken verschmutzte die Flüsse stark. Umweltschutz gab es damals kaum."
    }
  ]
});
