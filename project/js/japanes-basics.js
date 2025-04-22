const vocabQuestions = [
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

const textQuestions = [
  { question: "Ich trinke gerne ___ (Wasser).", answer: "mizu" },
  { question: "Der ___ (Baum) ist groß.", answer: "ki" },
  { question: "Das ___ (Feuer) ist heiß.", answer: "hi" },
  { question: "Der ___ (Berg) ist hoch.", answer: "yama" },
];

const audioQuestions = [
  {
    question: "Was heißt ... auf Japanisch?",
    audio: "../audio/house.mp3",
    answer: "ie",
  },
  {
    question: "Was heißt ... auf Japanisch?",
    audio: "audio/dog.mp3",
    answer: "inu",
  },
  {
    question: "Was heißt ... auf Japanisch?",
    audio: "../audio/cat.mp3",
    answer: "neko",
  },
  {
    question: "Was heißt ... auf Japanisch?",
    audio: "../audio/car.mp3",
    answer: "kuruma",
  },
];

let quizType = "";
let currentQuiz = [];
let wrongAnswers = [];
let currentIndexQuiz = 0;

function startQuiz(type) {
  let modes = document.getElementById("quiz-mode-selector-hidden");
  modes.style.display = "none";
  quizType = type;
  currentIndexQuiz = 0;
  wrongAnswers = [];
  if (type === "vocab") {
    currentQuiz = [...vocabQuestions];
  } else if (type === "text") {
    currentQuiz = [...textQuestions];
  } else if (type === "audio") {
    currentQuiz = [...audioQuestions];
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
      "<p>Quiz abgeschlossen!</p>";
    setTimeout(() => {
      end();
    }, 1000);
  }
}
function end() {
  window.location.reload();
}
