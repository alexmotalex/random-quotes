const quotes = [
  {
    quote: 'The best way to predict the future is to create it',
    author: 'Peter Drucker',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that count',
    author: 'Winston Churchill',
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going",
    author: 'Sam Levenson',
  },
  {
    quote:
      'Keep your face always toward the sunshine—and shadows will fall behind you',
    author: 'Walt Whitman',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('geterate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const {quote, author} = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
