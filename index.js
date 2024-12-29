import quotes from './src/data/quotes.js';
import {handleQuote} from './src/handlers/quote.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const generateBtn = document.getElementById('geterate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export {currentQuote};
