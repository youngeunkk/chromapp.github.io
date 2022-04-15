const quotes = [
    {
      quote: "가지마 가지마",
      author: "브라운 아이드 소울",
    },
    {
      quote: "가끔 내가",
      author: "김나영",
    },
    {
      quote:
        "정말로 사랑한다면",
      author: "버스커 버스커",
    },
    {
      quote: "마지막처럼",
      author: "블랙핑크",
    },
    {
      quote: "와리가리",
      author: "혁오",
    },
    {
      quote: "감사",
      author: "김동률",
    },
    {
      quote: "언제나",
      author: "허각",
    },
    {
      quote: "밤편지",
      author: "아이유",
    },
    {
      quote: "Dolphin",
      author: "오마이걸",
    },
    {
      quote: "잠 못 드는 밤에",
      author: "문명진",
    },
  ];

  const quote = document.querySelector("#quote span:last-child");
  const author = document.querySelector("#quote span:first-child");


  const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]); //quotes.length의 소수 없애기 위해 Math.floor로 감싸기

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
