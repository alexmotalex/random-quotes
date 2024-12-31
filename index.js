import quotes from './src/data/quotes.js';
import {handleQuote} from './src/handlers/quote.js';
import {toggleFavorite, hideFavoriteBtn} from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const generateBtn = document.getElementById('geterate-btn');
hideFavoriteBtn();

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoritesContainer)
);

export {quoteFavoriteBtn};
