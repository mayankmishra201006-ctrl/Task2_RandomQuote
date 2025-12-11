
const flashcards = [
  { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language." },
  { question: "What is CSS?", answer: "CSS is used for styling web pages." },
  { question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." },
  { question: "What is a variable?", answer: "A variable stores data values." },
  { question: "What is a function?", answer: "A function is a block of reusable code." }
];

// index of current card
let currentIndex = 0;

// whether answer is currently visible (this variable keeps its value when we move to next/prev)
let isAnswerVisible = false;

// DOM elements
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// render the card (question + answer visibility)
function renderCard() {
  const card = flashcards[currentIndex];
  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;

  // show or hide answer based on isAnswerVisible
  answerEl.style.display = isAnswerVisible ? "block" : "none";

  // update Show/Hide button label
  showBtn.textContent = isAnswerVisible ? "Hide Answer" : "Show Answer";

  // Optional: visually show disabled state if you had that; here circular so always enabled
  // prevBtn.disabled = false;
  // nextBtn.disabled = false;
}

// Toggle show/hide when user clicks showBtn
showBtn.addEventListener("click", () => {
  isAnswerVisible = !isAnswerVisible;
  answerEl.style.display = isAnswerVisible ? "block" : "none";
  showBtn.textContent = isAnswerVisible ? "Hide Answer" : "Show Answer";
});

// Next button (circular)
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length; // wrap to 0 after last
  renderCard();
});

// Previous button (circular)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; // wrap to last from 0
  renderCard();
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
});


