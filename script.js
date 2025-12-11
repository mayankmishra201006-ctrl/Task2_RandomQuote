const flashcards = [
  { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language." },
  { question: "What is CSS?", answer: "CSS is used for styling web pages." },
  { question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." },
  { question: "What is a variable?", answer: "A variable stores data values." },
  { question: "What is a function?", answer: "A function is a block of reusable code." }
];

let currentIndex = 0;
let isAnswerVisible = false;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function loadCard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;

  if (isAnswerVisible) {
    answerEl.style.display = "block";
    showBtn.textContent = "Hide Answer";
  } else {
    answerEl.style.display = "none";
    showBtn.textContent = "Show Answer";
  }
}

// ✅ Show / Hide Answer
showBtn.addEventListener("click", () => {
  isAnswerVisible = !isAnswerVisible;
  loadCard();
});

// ✅ Next (Always Works)
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadCard();
});

// ✅ Previous (Always Works)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  loadCard();
});

// ✅ First Load
loadCard();
