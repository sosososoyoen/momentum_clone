const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegge",
    },
    {
        quote:"It is kind of fun to do the impossible.",
        author:"Walt Disney",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author:"Usain Bolt",
    },
    {
        quote:"Tough times never last, but tough people do.",
        author:"Robert H. Schuller",
    },
    {
        quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
        author:"Michael Jordan",
    },
    {
        quote:"But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr",
    },
    {
        quote:"Grind Hard, Shine Hard.",
        author:"Dwayne Johnson",
    },
    {
        quote:"I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author:"Estée Lauder",
    },
    {
        quote:"The road to success and the road to failure are almost exactly the same.",
        author:"Colin R. Davis",
    },
    {
        quote:"It is better to fail in originality than to succeed in imitation.",
        author:"Herman Melville",
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;