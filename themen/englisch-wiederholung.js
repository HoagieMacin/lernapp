// ===== Thema: Englisch – Gemischte Wiederholung (Grammatik, Klasse 8) =====
// Aufbau wie bei themen/lineare-funktionen.js (dort ist alles genau erklärt).
// ID-Vorsilbe: "en-"  (en-ue-… = Übungen, en-t-… = Abschlusstest)
// Die Fragen sind englische Lückensätze, die Erklärungen auf Deutsch.

THEMEN.push({
  id: "englisch-wiederholung",
  titel: "Gemischte Wiederholung",
  fach: "Englisch",

  // ===== Einführung: eine Grammatik-Regel pro Seite =====
  einfuehrung: [
    // Seite 1
    `<h2>Die Vergangenheit</h2>
     <p><strong>Simple past</strong> → eine abgeschlossene Handlung.<br>
        <em>I <strong>played</strong> football yesterday.</em></p>
     <p><strong>Past progressive</strong> (was/were + -ing) → eine Handlung war gerade
        im Gange.<br>
        <em>I <strong>was reading</strong> when the phone rang.</em></p>
     <p><strong>Past perfect</strong> (had + 3. Form) → passierte noch
        <strong>früher</strong> als etwas anderes in der Vergangenheit.<br>
        <em>When we arrived, the film <strong>had</strong> already
        <strong>started</strong>.</em></p>
     <p class="beispiel"><strong>Merke</strong><br>
        Signalwörter für das simple past sind z. B. yesterday, last week, ago, in 2010.</p>`,

    // Seite 2
    `<h2>Present perfect</h2>
     <p>Form: <strong>have/has + 3. Form</strong>. Es verbindet die Vergangenheit mit
        jetzt. Oft geht es um etwas, das bis heute andauert.</p>
     <p><strong>since</strong> → seit einem <strong>Zeitpunkt</strong><br>
        <em>I have lived here <strong>since</strong> 2015.</em></p>
     <p><strong>for</strong> → seit einem <strong>Zeitraum</strong><br>
        <em>She has known him <strong>for</strong> ten years.</em></p>
     <p class="beispiel"><strong>Merke</strong><br>
        Mit yesterday, last week oder ago steht das simple past, nicht das
        present perfect.</p>`,

    // Seite 3
    `<h2>Das Passiv</h2>
     <p>Im Passiv ist wichtig, <strong>was passiert</strong>, nicht wer es tut.</p>
     <p>Form: <strong>be + 3. Form</strong></p>
     <p>Gegenwart → <em>English <strong>is spoken</strong> in Canada.</em><br>
        Vergangenheit → <em>The bridge <strong>was built</strong> in 1890.</em></p>
     <p>Wer es getan hat, steht hinter <strong>by</strong>.<br>
        <em>The Mona Lisa was painted <strong>by</strong> Leonardo da Vinci.</em></p>`,

    // Seite 4
    `<h2>If-Sätze</h2>
     <p><strong>Typ I</strong> → gut möglich<br>
        If + present, will + Verb<br>
        <em>If it <strong>rains</strong>, we <strong>will stay</strong> at home.</em></p>
     <p><strong>Typ II</strong> → unwahrscheinlich oder nur ausgedacht<br>
        If + simple past, would + Verb<br>
        <em>If I <strong>had</strong> a horse, I <strong>would ride</strong> every day.</em></p>
     <p class="beispiel"><strong>Merke</strong><br>
        Im if-Teil steht nie will oder would.</p>`,

    // Seite 5
    `<h2>Relativsätze</h2>
     <p>Relativsätze erklären genauer, wen oder was man meint.</p>
     <p><strong>who</strong> → für Personen<br>
        <em>The girl <strong>who</strong> lives next door is my friend.</em></p>
     <p><strong>which</strong> → für Dinge und Tiere<br>
        <em>The bike <strong>which</strong> I bought is red.</em></p>
     <p><strong>that</strong> → für Personen und Dinge<br>
        <em>The film <strong>that</strong> we saw was great.</em></p>`,

    // Seite 6
    `<h2>Indirekte Rede</h2>
     <p>Wenn du erzählst, was jemand gesagt hat (he said, she said …), rutscht die
        Zeit meist <strong>eine Stufe zurück</strong>.</p>
     <p>present → past<br>
        <em>“I am tired.” → She said that she <strong>was</strong> tired.</em></p>
     <p>will → would<br>
        <em>“I will help.” → He said that he <strong>would</strong> help.</em></p>
     <p class="beispiel"><strong>Merke</strong><br>
        Auch Wörter wie I, now und here ändern sich, z. B. I → he/she,
        now → then, here → there.</p>`,

    // Seite 7
    `<h2>Question tags</h2>
     <p>Ein question tag ist eine kleine Rückfrage am Satzende, wie
        „…, oder?“ im Deutschen.</p>
     <p>Positiver Satz → negativer Tag<br>
        <em>It's cold, <strong>isn't it</strong>?</em></p>
     <p>Negativer Satz → positiver Tag<br>
        <em>You don't like fish, <strong>do you</strong>?</em></p>
     <p>Ohne Hilfsverb nimmt man do, does oder did.<br>
        <em>She plays tennis, <strong>doesn't she</strong>?</em></p>
     <p>Super, das war alles! Jetzt kannst du üben.</p>`
  ],

  // ===== Übungen (ohne Punkte) =====
  uebungen: [
    {
      id: "en-ue-001",
      frage: "Yesterday I ___ my grandma.",
      antworten: ["visited", "have visited", "visit", "am visiting"],
      richtig: 0,
      erklaerung: "„Yesterday“ ist ein Signalwort für das simple past, also visited."
    },
    {
      id: "en-ue-002",
      frage: "I ___ TV when my mum came home.",
      antworten: ["was watching", "am watching", "have watched", "watches"],
      richtig: 0,
      erklaerung: "Das Fernsehen war gerade im Gange, als Mama kam. Dafür nimmt man das past progressive (was + -ing)."
    },
    {
      id: "en-ue-003",
      frage: "We have lived in Magdeburg ___ 2015.",
      antworten: ["since", "for", "ago", "from"],
      richtig: 0,
      erklaerung: "2015 ist ein Zeitpunkt, deshalb since."
    },
    {
      id: "en-ue-004",
      frage: "My cat has been ill ___ three days.",
      antworten: ["for", "since", "ago", "at"],
      richtig: 0,
      erklaerung: "Drei Tage sind ein Zeitraum, deshalb for."
    },
    {
      id: "en-ue-005",
      frage: "This castle ___ in 1520.",
      antworten: ["was built", "built", "has build", "is building"],
      richtig: 0,
      erklaerung: "Die Burg baut nicht selbst, sie wurde gebaut. Passiv in der Vergangenheit ist was + 3. Form, also was built."
    },
    {
      id: "en-ue-006",
      frage: "If it rains tomorrow, we ___ at home.",
      antworten: ["will stay", "would stay", "stayed", "will stayed"],
      richtig: 0,
      erklaerung: "If-Satz Typ I (gut möglich), also if + present, dann will + Verb."
    },
    {
      id: "en-ue-007",
      frage: "The boy ___ sits next to me is called Tom.",
      antworten: ["who", "which", "what", "where"],
      richtig: 0,
      erklaerung: "Es geht um eine Person, deshalb who. (That wäre hier auch richtig.)"
    },
    {
      id: "en-ue-008",
      frage: "It's a nice day, ___?",
      antworten: ["isn't it", "is it", "doesn't it", "aren't you"],
      richtig: 0,
      erklaerung: "Positiver Satz mit is, also negativer Tag mit demselben Verb, isn't it."
    }
  ],

  // ===== Abschlusstest (zählt für die Punkte) =====
  test: [
    {
      id: "en-t-001",
      frage: "When I got to the station, the train ___ already.",
      antworten: ["had left", "has left", "leaves", "is leaving"],
      richtig: 0,
      erklaerung: "Der Zug fuhr noch früher ab, als ich ankam. Das Frühere steht im past perfect (had + 3. Form)."
    },
    {
      id: "en-t-002",
      frage: "Last summer we ___ to Scotland.",
      antworten: ["went", "have gone", "go", "had go"],
      richtig: 0,
      erklaerung: "„Last summer“ ist ein Signalwort für das simple past. Went ist die Vergangenheit von go."
    },
    {
      id: "en-t-003",
      frage: "While Anna ___ a shower, the lights went out.",
      antworten: ["was having", "is having", "has had", "have"],
      richtig: 0,
      erklaerung: "Das Duschen war gerade im Gange, als das Licht ausging, also past progressive (was + -ing)."
    },
    {
      id: "en-t-004",
      frage: "She ___ her best friend for ten years.",
      antworten: ["has known", "knows", "is knowing", "know"],
      richtig: 0,
      erklaerung: "Die Freundschaft begann früher und dauert bis heute, also present perfect: has known. Im Deutschen sagt man „kennt“, deshalb ist das eine typische Falle."
    },
    {
      id: "en-t-005",
      frage: "Which sentence is correct?",
      antworten: [
        "I saw this film last week.",
        "I have seen this film last week.",
        "I have saw this film last week.",
        "I seeing this film last week."
      ],
      richtig: 0,
      erklaerung: "Mit „last week“ steht das simple past, nicht das present perfect."
    },
    {
      id: "en-t-006",
      frage: "English ___ in many countries all over the world.",
      antworten: ["is spoken", "speaks", "is speaking", "spoken"],
      richtig: 0,
      erklaerung: "Die Sprache spricht nicht selbst, sie wird gesprochen. Passiv in der Gegenwart ist is + 3. Form."
    },
    {
      id: "en-t-007",
      frage: "The Harry Potter books ___ by J. K. Rowling.",
      antworten: ["were written", "wrote", "have write", "are writing"],
      richtig: 0,
      erklaerung: "Die Bücher wurden geschrieben, und zwar von (by) J. K. Rowling. Passiv in der Vergangenheit ist were + 3. Form."
    },
    {
      id: "en-t-008",
      frage: "If I ___ a dog, I would take it for a walk every day.",
      antworten: ["had", "have", "will have", "would have"],
      richtig: 0,
      erklaerung: "If-Satz Typ II (nur ausgedacht), also if + simple past, dann would. Im if-Teil steht kein would."
    },
    {
      id: "en-t-009",
      frage: "If you practise a lot, you ___ the test.",
      antworten: ["will pass", "would pass", "passed", "passing"],
      richtig: 0,
      erklaerung: "If-Satz Typ I (gut möglich), also if + present, dann will + Verb."
    },
    {
      id: "en-t-010",
      frage: "That's the bike ___ I got for my birthday.",
      antworten: ["which", "who", "whose", "where"],
      richtig: 0,
      erklaerung: "Das Fahrrad ist ein Ding, deshalb which. (That wäre hier auch richtig.)"
    },
    {
      id: "en-t-011",
      frage: "Tom said, “I am hungry.” → Tom said that he ___ hungry.",
      antworten: ["was", "is", "has been", "be"],
      richtig: 0,
      erklaerung: "In der indirekten Rede rutscht die Zeit nach „said“ eine Stufe zurück, also am → was."
    },
    {
      id: "en-t-012",
      frage: "You don't like spiders, ___?",
      antworten: ["do you", "don't you", "are you", "aren't you"],
      richtig: 0,
      erklaerung: "Negativer Satz mit don't, also positiver Tag mit do, do you."
    }
  ]
});
