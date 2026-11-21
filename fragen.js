// Fragenkatalog der Lern-App
// Jede Frage hat eine feste ID, die sich nie ändern darf.

const FRAGEN = [
  {
    id: "phy-001",
    epoche: "Physik",
    frage: "Was beschreibt der Auftrieb im Wasser?",
    antworten: [
      "Die Kraft, die einen Körper nach oben drückt",
      "Die Kraft, die einen Körper nach unten zieht",
      "Die Geschwindigkeit eines Körpers im Wasser",
      "Die Temperatur des Wassers"
    ],
    richtig: 0,
    erklaerung: "Wasser drückt von unten stärker als von oben, daher entsteht eine Kraft nach oben."
  },
  {
    id: "ges-001",
    epoche: "Geschichte",
    frage: "Wer verbesserte im 18. Jahrhundert die Dampfmaschine entscheidend?",
    antworten: [
      "Isaac Newton",
      "James Watt",
      "Thomas Edison",
      "Carl Benz"
    ],
    richtig: 1,
    erklaerung: "James Watts Verbesserungen machten die Dampfmaschine zum Motor der Industrialisierung."
  },
  {
    id: "men-001",
    epoche: "Menschenkunde",
    frage: "Wie heißt der längste Knochen des menschlichen Körpers?",
    antworten: [
      "Schienbein",
      "Oberarmknochen",
      "Oberschenkelknochen",
      "Wirbelsäule"
    ],
    richtig: 2,
    erklaerung: "Der Oberschenkelknochen ist der längste und stärkste Knochen im Körper."
  }
];