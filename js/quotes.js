const quotes = [
  {
    quotes: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스틴",
  },
  {
    quotes: "만족할 줄 아는 사람은 진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다.",
    author: "솔론",
  },
  {
    quotes: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quotes: "상상할 수 없는 꿈을 꾸고 있다면, 상상할 수 없는 노력을 해라.",
    author: "무명",
  },
  {
    quotes: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다. ",
    author: "빌 게이츠",
  },
  {
    quotes: "기다림만으로 사는 사람은 굶어서 죽는다.",
    author: "이탈리아 속담",
  },
  {
    quotes: "거짓말을 한 순간부터 뛰어난 기억력이 필요하다.",
    author: "코르네이유",
  },
  {
    quotes: "한 번 실수하는 것보다 두 번 묻는 것이 낫다.",
    author: "독일 속담",
  },
  {
    quotes: "인간이란 미소와 눈물 사이를 왕래하는 시계추와 같은 것이다.",
    author: "바이런",
  },
  {
    quotes: "무소유란 아무 것도 갖지 않은 것이 아니라. 불필요한 것을 갖지 않는다는 뜻이다.",
    author: "법정",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quotes;
author.innerText = TodaysQuote.author;

