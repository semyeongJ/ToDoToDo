const quotes = [
  {
    quotes: "Every moment is a fresh beginning.",
    author: "<T.S Eliot>",
  },
  {
    quotes: "Everything you can imagine is real.",
    author: "<Pablo Picasso>",
  },
  {
    quotes: "Simplicity is the ultimate sophistication.",
    author: "<Leonardo da Vinci>",
  },
  {
    quotes: "What we think, we become.",
    author: "<Buddha>",
  },
  {
    quotes: "Yesterday you said tomorrow. Just do it.",
    author: "<Nike>",
  },
  {
    quotes: "I don't need it to be easy, I need it to be worth it.",
    author: "<Lil Wayne>",
  },
  {
    quotes: "Never let your emotions overpower your intelligence.",
    author: "<Drake>",
  },
  {
    quotes: "Nothing lasts forever but at least we got these memories.",
    author: "<J.Cloe>",
  },
  {
    quotes: "Try to be a rainbow in someone's cloud.",
    author: "<Maya Angelou>",
  },
  {
    quotes: "Don't wish it easier. Wish you were better.",
    author: "<Jim Rohn>",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quotes;
author.innerText = TodaysQuote.author;

