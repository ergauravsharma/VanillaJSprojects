(function(){

const quotes = [
    {q:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"},

    {q:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author:"Albert Einstein"},
    
    {q:"You only live once, but if you do it right, once is enough.",author:"Mae West"},

    {q:"Be the change that you wish to see in the world.",author:"Mahatma Gandhi"},
    
    {q:"In three words I can sum up everything I've learned about life: it goes on.", author:"Robert Frost"},
]

const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[random].q;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
