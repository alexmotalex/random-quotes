import quotes from './src/data/quotes.js';
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js';
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from './src/handlers/favorites.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';
const favoriteQuotes = [];
let currentQuote = null;

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({...quote});
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      );

      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }

    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  currentQuote = quote;

  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const generateBtn = document.getElementById('geterate-btn');
hideFavoriteBtn();

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote)
);

quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, favoritesContainer)
);

function init() {
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);

  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);

    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }

  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);

  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
      favoriteQuotes.push(quote);
    });
  }
}

window.addEventListener('load', init);

export {quoteFavoriteBtn};
