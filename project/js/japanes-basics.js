let vocabQuestionsK1 = [
  {
    question: "Was heißt 'Wasser' auf Japanisch?",
    options: ["hi", "mizu", "ki", "kin"],
    answer: "mizu",
  },
  {
    question: "Was heißt 'Baum' auf Japanisch?",
    options: ["yama", "ki", "sora", "kawa"],
    answer: "ki",
  },
  {
    question: "Was heißt 'Feuer' auf Japanisch?",
    options: ["mizu", "ki", "hi", "tsuki"],
    answer: "hi",
  },
  {
    question: "Was heißt 'Berg' auf Japanisch?",
    options: ["yama", "kawa", "mori", "sakura"],
    answer: "yama",
  },
];
let vocabQuestionsK2 = [
  {
    question: "Was heißt 'Haus' auf Japanisch?",
    options: ["ie", "apāto", "yane", "kin"],
    answer: "ie",
  },
  {
    question: "Was heißt 'Katze' auf Japanisch?",
    options: ["ahiru", "inu", "neko", "raion"],
    answer: "neko",
  },
  {
    question: "Was heißt 'Hund' auf Japanisch?",
    options: ["zebura", "pantsu", "mori", "inu"],
    answer: "inu",
  },
  {
    question: "Was heißt 'Auto' auf Japanisch?",
    options: ["yane", "kuruma", "raion", "sakura"],
    answer: "kuruma",
  },
];
let vocabQuestionsK3 = [
  {
    question: "Was heißt 'Hallo' auf Japanisch?",
    options: ["moshi-moshi", "irasshaimase", "konnichiwa", "yahhoo"],
    answer: "konnichiwa",
  },
  {
    question: "Was heißt 'Auf Wiedersehen' auf Japanisch?",
    options: ["mata ashita", "ja nee", "mata ne", "sayounara"],
    answer: "sayounara",
  },
  {
    question: "Was heißt 'Danke' auf Japanisch?",
    options: ["arigato", "pantsu", "fune", "dōmo"],
    answer: "arigato",
  },
  {
    question: "Was heißt 'Mein Name' auf Japanisch?",
    options: ["watashi no namae", "anata wa desu", "namae", "sakura"],
    answer: "watashi no namae",
  },
];

let textQuestions1 = [
  { question: "Ich trinke gerne ___ (Wasser).", answer: "mizu" },
  { question: "Der ___ (Baum) ist groß.", answer: "ki" },
  { question: "Das ___ (Feuer) ist heiß.", answer: "hi" },
  { question: "Der ___ (Berg) ist hoch.", answer: "yama" },
];
let textQuestion2 = [
  { question: "Das ist mein ___ (Haus).", answer: "ie" },
  { question: "Die ___ (Katze) ist noch jung.", answer: "neko" },
  { question: "Der ___ (Hund) hat ist weiblich.", answer: "inu" },
  { question: "Das ___ (Auto) ist teuer.", answer: "kuruma" },
];
let textQuestion3 = [
  { question: "___ (Hallo) wie geht es dir.", answer: "konnichiwa" },
  { question: "___ (Auf Wiedersehen), wir sehen uns wieder.", answer: "sayounara" },
  { question: "___ (Danke) für das Geschenk.", answer: "arigato" },
  { question: "___ (Mein Name) ist Tobias.", answer: "watashi no namae" },
];


let audioQuestions1 = [
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/water.mp3",
    answer: "Wasser",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/tree.mp3",
    answer: "Baum",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/fire.mp3",
    answer: "Feuer",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/berg.mp3",
    answer: "Berg",
  },
];
let audioQuestions2 = [
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/house.mp3",
    answer: "Haus",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/dog.mp3",
    answer: "Hund",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/cat.mp3",
    answer: "Katze",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/car.mp3",
    answer: "Auto",
  },
];
let audioQuestions3 = [
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/hallo.mp3",
    answer: "hallo",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/auf-wiedersehen.mp3",
    answer: "auf wiedersehen",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/danke.mp3",
    answer: "danke",
  },
  {
    question: "Was heißt ... auf Deutsch?",
    audio: "../audio/mein-name.mp3",
    answer: "mein name",
  },
];

let quizType = "";
let currentQuiz = [];
let wrongAnswers = [];
let currentIndexQuiz = 0;
let selectedCategory = 1;

function chooseCategory(type) {

  let categoryBox = document.getElementById("quiz-category-selector");

  if (quizType === type && categoryBox.style.display === "flex") {
    categoryBox.style.display = "none";
    quizType = "";
    return;
  }
  quizType = type;
  categoryBox.style.display = "flex";
}

function startQuizWithCategory(category) {
  selectedCategory = category;
  document.getElementById("quiz-category-selector").style.display = "none";

  currentIndexQuiz = 0;
  wrongAnswers = [];

  if (quizType === "vocab") {
    document.getElementById("1").style.borderLeft = "8px solid rgb(249, 47, 168)";
    document.getElementById("2").style.borderLeft = "none";
    document.getElementById("3").style.borderLeft = "none";
    switch (category) {
      case 1:
        document.getElementById("K1").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = vocabQuestionsK1;
        break;
      case 2:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = vocabQuestionsK2;
        break;
      case 3:
      default:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "rgb(235, 171, 249)";
        currentQuiz = vocabQuestionsK3;
        break;
    }

  } else if (quizType === "text") {
    document.getElementById("1").style.borderLeft = "none";
    document.getElementById("2").style.borderLeft = "8px solid rgb(249, 47, 168)";
    document.getElementById("3").style.borderLeft = "none";
    switch (category) {
      case 1:
        document.getElementById("K1").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = textQuestions1;
        break;
      case 2:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = textQuestion2;
        break;
      case 3:
      default:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "rgb(235, 171, 249)";
        currentQuiz = textQuestion3;
        break;
    }
  } else if (quizType === "audio") {
    document.getElementById("1").style.borderLeft = "none";
    document.getElementById("2").style.borderLeft = "none";
    document.getElementById("3").style.borderLeft = "8px solid rgb(249, 47, 168)";
    switch (category) {
      case 1:
        document.getElementById("K1").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = audioQuestions1;
        break;
      case 2:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "rgb(235, 171, 249)";
        document.getElementById("K3").style.backgroundColor = "#fdf6ff";
        currentQuiz = audioQuestions2;
        break;
      case 3:
      default:
        document.getElementById("K1").style.backgroundColor = "#fdf6ff";
        document.getElementById("K2").style.backgroundColor = "#fdf6ff";
        document.getElementById("K3").style.backgroundColor = "rgb(235, 171, 249)";
        currentQuiz = audioQuestions3;
        break;
    }
  }

  document.getElementById("quiz-box").style.display = "block";
  showQuestion();
}



function showQuestion() {
  let q = currentQuiz[currentIndexQuiz];
  let questionDiv = document.getElementById("quiz-question");
  let optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = "";

  if (quizType === "vocab") {
    questionDiv.textContent = q.question;
    q.options.forEach((option) => {
      let box = document.createElement("div");
      box.className = "quiz-option-box";
      box.textContent = option;
      box.onclick = () =>
        handleAnswer(box, option.toLowerCase(), q.answer.toLowerCase());
      optionsDiv.appendChild(box);
    });
  } else if (quizType === "text") {
    questionDiv.innerHTML = q.question.replace(
      "___",
      "<input id='text-input' type='text' style='font-size: 1em;'>"
    );
    let checkBox = document.createElement("div");
    checkBox.className = "quiz-option-box";
    checkBox.textContent = "Antwort prüfen";
    checkBox.onclick = () => {
      let input = document
        .getElementById("text-input")
        .value.trim()
        .toLowerCase();
      handleAnswer(checkBox, input, q.answer.toLowerCase());
    };
    optionsDiv.appendChild(checkBox);
  } else if (quizType === "audio") {
    questionDiv.textContent = q.question;
    let audioElement = document.createElement("audio");
    audioElement.controls = true;
    audioElement.src = q.audio;
    optionsDiv.appendChild(audioElement);

    let input = document.createElement("input");
    input.type = "text";
    input.id = "audio-input";
    input.placeholder = "Was hast du gehört?";
    input.className = "audio-input";
    optionsDiv.appendChild(input);

    let checkBox = document.createElement("div");
    checkBox.className = "quiz-option-box";
    checkBox.textContent = "Antwort prüfen";
    checkBox.onclick = () => {
      let userInput = document
        .getElementById("audio-input")
        .value.trim()
        .toLowerCase();
      handleAnswer(checkBox, userInput, q.answer.toLowerCase());
    };
    optionsDiv.appendChild(checkBox);
  }
}

function handleAnswer(box, input, correct) {
  let isCorrect = input === correct;
  box.style.backgroundColor = isCorrect ? "#8be78b" : "#ff8a8a";
  if (!isCorrect) {
    wrongAnswers.push(currentQuiz[currentIndexQuiz]);
  }

  let boxes = document.getElementsByClassName("quiz-option-box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = null;
  }

  setTimeout(() => nextQuestion(), 1000);
}

function nextQuestion() {
  currentIndexQuiz++;
  if (currentIndexQuiz < currentQuiz.length) {
    showQuestion();
  } else if (wrongAnswers.length > 0) {
    currentQuiz = [...wrongAnswers];
    wrongAnswers = [];
    currentIndexQuiz = 0;
    showQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      "<p id='endScreen'>Quiz abgeschlossen!</p>";
    setTimeout(() => {
      end();
    }, 2000);
  }
}
function end() {
  window.location.reload();
}
