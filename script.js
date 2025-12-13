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

function generateQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomNumber].text;
    document.getElementById("author").innerText = "- " + quotes[randomNumber].author;
}


