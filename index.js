import quotes from './src/data/quotes.js';
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js';
import {toggleFavorite, hideFavoriteBtn} from './src/handlers/favorites.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorageSetItem('currentQuote', quote);
}

function init() {
  const currentQuoteFromStorage = localStorageGetItem('currentQuote');

  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);

    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }
}

window.addEventListener('load', init);

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const generateBtn = document.getElementById('geterate-btn');

hideFavoriteBtn();

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, favoritesContainer)
);

export {quoteFavoriteBtn};
