function randomQuotes() {
  var quote = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”.",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  ];
  var quoteAuthor = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
  ];
  var randomNumber = Math.floor(Math.random() * quote.length);
  //   var y = Math.floor(randomNumber);
  //   console.log(quote[y], quoteAuthor[y]);
  console.log(randomNumber);

  document.getElementById("quoteText").innerHTML = quote[randomNumber];
  document.getElementById("quoteAuthor").innerHTML = quoteAuthor[randomNumber];
}
