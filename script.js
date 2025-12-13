let quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];

let isAnimating = false;

function generateQuote() {
  if (isAnimating) return;
  isAnimating = true;

  let quoteEl = document.getElementById("quote");
  let authorEl = document.getElementById("author");

  let randomNumber = Math.floor(Math.random() * quotes.length);

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.innerText = quotes[randomNumber].text;
    authorEl.innerText = "- " + quotes[randomNumber].author;

    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;

    isAnimating = false;
  }, 400);
}

window.onload = () => {
  let first = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[first].text;
  document.getElementById("author").innerText = "- " + quotes[first].author;
};
