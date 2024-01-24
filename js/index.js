const quotes = [{
    quote: "  Innovation distinguishes between a leader and a follower.",
    writer: "Steve"
},
{
    quote: "  Don't be afraid to give up the good to go for the great. ",
    writer: "Steve"
},
{
    quote: " Success is not final, failure is not fatal: It is the courage to continue that counts.",
    writer: "Winston"
},
{
    quote: "  The future belongs to those who believe in the beauty of their dreams.",
    writer: "Eleanor"
},
{
    quote: "  Don't be afraid to give up the good to go for the great. ",
    writer: "Steve"
},
{
    quote: "  Don't be afraid to give up the good to go for the great. ",
    writer: "Steve"
},
{
    quote: "  Don't be afraid to give up the good to go for the great. ",
    writer: "Steve"
},
{
    quote: "  Don't be afraid to give up the good to go for the great. ",
    writer: "Steve"
}
]
let btn1 = document.getElementById("Qbtn");
let quote = document.getElementById("quote");
let writer = document.getElementById("writer");


btn1.addEventListener("click" , function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes [random].writer
})
