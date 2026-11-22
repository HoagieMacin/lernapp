// Fragenkatalog der Lern-App
// Jede Frage hat eine feste ID, die sich nie ändern darf.
// Grundlage: Fachlehrpläne Gymnasium Sachsen-Anhalt, Schuljahrgänge 7/8

const FRAGEN = [
  // ===== Geschichte =====
  {
    id: "ges-001",
    epoche: "Geschichte",
    frage: "Wer verbesserte im 18. Jahrhundert die Dampfmaschine entscheidend?",
    antworten: ["Isaac Newton", "James Watt", "Thomas Edison", "Carl Benz"],
    richtig: 1,
    erklaerung: "James Watts Verbesserungen machten die Dampfmaschine zum Motor der Industrialisierung."
  },
  {
    id: "ges-002",
    epoche: "Geschichte",
    frage: "In welchem Jahr begann die Französische Revolution?",
    antworten: ["1648", "1789", "1815", "1848"],
    richtig: 1,
    erklaerung: "Mit dem Sturm auf die Bastille am 14. Juli 1789 begann die Revolution."
  },
  {
    id: "ges-003",
    epoche: "Geschichte",
    frage: "Wo tagte 1848/49 die erste deutsche Nationalversammlung?",
    antworten: ["Im Reichstag in Berlin", "Auf der Wartburg", "In der Paulskirche in Frankfurt", "Im Schloss Versailles"],
    richtig: 2,
    erklaerung: "Die Abgeordneten trafen sich in der Frankfurter Paulskirche."
  },
  {
    id: "ges-004",
    epoche: "Geschichte",
    frage: "In welchem Jahr wurde das Deutsche Kaiserreich gegründet?",
    antworten: ["1815", "1848", "1871", "1918"],
    richtig: 2,
    erklaerung: "Am 18. Januar 1871 wurde Wilhelm I. in Versailles zum Kaiser ausgerufen."
  },
  {
    id: "ges-005",
    epoche: "Geschichte",
    frage: "Was meint man mit der „Sozialen Frage“ im 19. Jahrhundert?",
    antworten: [
      "Die Not der Arbeiter durch die Industrialisierung",
      "Den Streit um das Frauenwahlrecht",
      "Die Frage, wer deutscher Kaiser wird",
      "Den Streit zwischen den Konfessionen"
    ],
    richtig: 0,
    erklaerung: "Gemeint sind Armut, Wohnungsnot, lange Arbeitszeiten und Kinderarbeit."
  },
  {
    id: "ges-006",
    epoche: "Geschichte",
    frage: "Welche Sozialversicherung wurde unter Bismarck zuerst eingeführt?",
    antworten: ["Rentenversicherung", "Arbeitslosenversicherung", "Pflegeversicherung", "Krankenversicherung"],
    richtig: 3,
    erklaerung: "Die Krankenversicherung kam 1883, danach Unfall- und Rentenversicherung."
  },

  // ===== Biologie =====
  {
    id: "bio-001",
    epoche: "Biologie",
    frage: "Was haben Pflanzenzellen, aber Tierzellen nicht?",
    antworten: ["Zellmembran", "Zellwand", "Zellkern", "Zellplasma"],
    richtig: 1,
    erklaerung: "Die Zellwand gibt Pflanzenzellen Halt. Auch Chloroplasten haben nur Pflanzenzellen."
  },
  {
    id: "bio-002",
    epoche: "Biologie",
    frage: "Was entsteht bei der Fotosynthese neben Traubenzucker (Glucose)?",
    antworten: ["Kohlenstoffdioxid", "Stickstoff", "Sauerstoff", "Wasserstoff"],
    richtig: 2,
    erklaerung: "Pflanzen nehmen CO₂ und Wasser auf und geben Sauerstoff ab."
  },
  {
    id: "bio-003",
    epoche: "Biologie",
    frage: "Was entsteht, wenn Hefe Zucker vergärt?",
    antworten: ["Ethanol und Kohlenstoffdioxid", "Sauerstoff und Wasser", "Stärke und Sauerstoff", "Eiweiß und Wasser"],
    richtig: 0,
    erklaerung: "Bei der alkoholischen Gärung entstehen Alkohol und CO₂, das z. B. Teig aufgehen lässt."
  },
  {
    id: "bio-004",
    epoche: "Biologie",
    frage: "Wo findet in der Lunge der Gasaustausch statt?",
    antworten: ["In der Luftröhre", "In den Bronchien", "Im Kehlkopf", "In den Lungenbläschen"],
    richtig: 3,
    erklaerung: "In den Lungenbläschen gelangt Sauerstoff ins Blut und CO₂ heraus."
  },
  {
    id: "bio-005",
    epoche: "Biologie",
    frage: "Welche Blutgefäße führen das Blut vom Herzen weg?",
    antworten: ["Venen", "Arterien", "Lymphgefäße", "Nerven"],
    richtig: 1,
    erklaerung: "Arterien führen vom Herzen weg, Venen führen zum Herzen hin."
  },
  {
    id: "bio-006",
    epoche: "Biologie",
    frage: "Welche Stadien durchläuft ein Schmetterling bei seiner Entwicklung?",
    antworten: [
      "Ei – Larve – Puppe – Falter",
      "Ei – Puppe – Larve – Falter",
      "Ei – Larve – Falter",
      "Larve – Ei – Puppe – Falter"
    ],
    richtig: 0,
    erklaerung: "Das nennt man vollständige Metamorphose. Die Larve des Schmetterlings ist die Raupe."
  },

  // ===== Physik =====
  {
    id: "phy-002",
    epoche: "Physik",
    frage: "Was besagt das Reflexionsgesetz?",
    antworten: [
      "Einfallswinkel ist gleich Reflexionswinkel",
      "Der Reflexionswinkel ist immer 90°",
      "Licht wird immer zurück zur Lichtquelle geworfen",
      "Der Reflexionswinkel ist doppelt so groß"
    ],
    richtig: 0,
    erklaerung: "Licht wird an einem Spiegel im gleichen Winkel zurückgeworfen, wie es einfällt."
  },
  {
    id: "phy-003",
    epoche: "Physik",
    frage: "In welcher Einheit wird die elektrische Stromstärke gemessen?",
    antworten: ["Volt", "Watt", "Ampere", "Ohm"],
    richtig: 2,
    erklaerung: "Stromstärke in Ampere (A), Spannung in Volt (V), Widerstand in Ohm (Ω)."
  },
  {
    id: "phy-004",
    epoche: "Physik",
    frage: "Zwei Lampen sind in Reihe geschaltet. Eine geht kaputt. Was passiert?",
    antworten: [
      "Die andere leuchtet heller",
      "Die andere leuchtet normal weiter",
      "Beide sind aus",
      "Die andere flackert"
    ],
    richtig: 2,
    erklaerung: "In der Reihenschaltung ist der Stromkreis dann unterbrochen."
  },
  {
    id: "phy-005",
    epoche: "Physik",
    frage: "Ein Radfahrer fährt 30 km in 2 Stunden. Wie schnell ist er im Durchschnitt?",
    antworten: ["60 km/h", "15 km/h", "32 km/h", "28 km/h"],
    richtig: 1,
    erklaerung: "Geschwindigkeit = Weg : Zeit, also 30 km : 2 h = 15 km/h."
  },

  // ===== Mathematik =====
  {
    id: "mat-001",
    epoche: "Mathematik",
    frage: "Welche Steigung hat die Funktion y = 3x − 2?",
    antworten: ["−2", "3", "−3", "2"],
    richtig: 1,
    erklaerung: "Bei y = mx + n ist m die Steigung, hier also 3."
  },
  {
    id: "mat-002",
    epoche: "Mathematik",
    frage: "Wo schneidet y = 2x + 4 die y-Achse?",
    antworten: ["Bei (0 | 2)", "Bei (4 | 0)", "Bei (0 | 4)", "Bei (−2 | 0)"],
    richtig: 2,
    erklaerung: "Für x = 0 ist y = 4. Das n in y = mx + n zeigt den Schnittpunkt mit der y-Achse."
  },
  {
    id: "mat-003",
    epoche: "Mathematik",
    frage: "Löse die Gleichung 3x + 5 = 20.",
    antworten: ["x = 3", "x = 15", "x = 25", "x = 5"],
    richtig: 3,
    erklaerung: "Erst −5 rechnen → 3x = 15. Dann durch 3 teilen → x = 5."
  },
  {
    id: "mat-004",
    epoche: "Mathematik",
    frage: "Was ergibt (a + b)²?",
    antworten: ["a² + b²", "a² + 2ab + b²", "2a + 2b", "a² + ab + b²"],
    richtig: 1,
    erklaerung: "Das ist die erste binomische Formel → (a + b)² = a² + 2ab + b²."
  }
];