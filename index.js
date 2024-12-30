import quotes from './src/data/quotes.js';
import {handleQuote} from './src/handlers/quote.js';
import {toggleFavorite, hideFavoriteBtn} from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
const generateBtn = document.getElementById('geterate-btn');

hideFavoriteBtn(favoriteBtn);

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

export {favoriteBtn};
