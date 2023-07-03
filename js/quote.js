const quotes = [
    {
        quote: "A",
        author : "A",
    },
    {
        quote: "B",
        author : "B",
    },
    {
        quote: "C",
        author : "C",
    },
    {
        quote: "D",
        author : "D",
    },
    {
        quote: "E",
        author : "E",
    },
    {
        quote: "F",
        author : "F",
    },
    {
        quote: "G",
        author : "G",
    },
    {
        quote: "H",
        author : "H",
    },
    {
        quote: "I",
        author : "I",
    },
    {
        quote: "J",
        author : "J",
    },
];

const QUOTE_NUM = quotes.length;

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rand = parseInt(Math.random() * QUOTE_NUM);
quote.textContent = quotes[rand].quote;
author.textContent = quotes[rand].author;