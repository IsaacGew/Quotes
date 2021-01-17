const quotes = [
    {
        name:'Steve Jobs',
        quote:'Your time is limited, so don’t waste it living someone else’s life'
    },
    {
        name:'Albert Einstien',
        quote:'Try not to become a man of success, but rather try to become a man of value'
    },
    {
        name:'Malcolm Forbes',
        quote:'Failure is success if we learn from it'
    },
    {
        name:'Nelson Mandela',
        quote:'The greatest glory in living lies not in never falling, but in rising every time we fall'
    },
    {
        name:'Wayne Gretzky',
        quote:'You miss 100% of the shots you do not take.'
    },
    {
        name:'Henry Ford',
        quote:'Whether you think you can or you think you cannot, you are right.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn')
const quoteAuthor = document.querySelector('#quoteAuthor')
const quote = document.querySelector('#quote')

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;





}