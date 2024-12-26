const quotes = [
  'The best way to predict the future is to create it. - Peter Drucker',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('geterate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);
