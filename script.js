
// script.js - Circular navigation + preserve answer visibility

const flashcards = [
  { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language." },
  { question: "What is CSS?", answer: "CSS is used for styling web pages." },
  { question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." },
  { question: "What is a variable?", answer: "A variable stores data values." },
  { question: "What is a function?", answer: "A function is a block of reusable code." }
];

let currentIndex = 0;
// keep answer visibility across navigation
let isAnswerVisible = false;

// element refs
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// render/update function
function renderCard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;

  // show or hide answer based on global state
  answerEl.style.display = isAnswerVisible ? "block" : "none";
  showBtn.textContent = isAnswerVisible ? "Hide Answer" : "Show Answer";

  // Since navigation is circular, we do NOT disable prev/next
  // but you can style disabled look if you want; here buttons remain clickable.
}

// toggle answer
showBtn.addEventListener("click", () => {
  isAnswerVisible = !isAnswerVisible;
  answerEl.style.display = isAnswerVisible ? "block" : "none";
  showBtn.textContent = isAnswerVisible ? "Hide Answer" : "Show Answer";
});

// next (circular)
nextBtn.addEventListener("click", () => {
  // move to next; if at last, wrap to 0
  currentIndex = (currentIndex + 1) % flashcards.length;
  // preserve isAnswerVisible (no reset)
  renderCard();
});

// previous (circular)
prevBtn.addEventListener("click", () => {
  // move to previous; if at 0, wrap to last
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  renderCard();
});

// initial render
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
});
