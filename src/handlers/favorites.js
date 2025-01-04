import {quoteFavoriteBtn} from '../../index.js';

function toggleFavorite(quote, setCurrentQuote, container) {
  const shouldToggleIsFavorite = true;

  setCurrentQuote(quote, shouldToggleIsFavorite);
  toggleFavoriteBtnIcon(quote.isFavorite);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn();
  toggleFavoriteBtnIcon(isFavorite);
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = false;
  removeFavoriteCard(quote.id);
  const currentQuote = document.querySelector('[data-current-quote-id]');
  const currentQuoteId = currentQuote.dataset.currentQuoteId;

  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
}

function showFavoriteCard(quote, container) {
  const {id, text, author} = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  //Each favotite quote will have data-favorite-quote-id HTML attribute
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
    <div class="favorite-card-content">
      <p>${text}</p>
      <p class="favorite-card-author">${author}</p>
    </div>
    <button class="btn btn-danger">Remove from favorites <i class="far fa-trash-alt"></i></button>`;
  container.appendChild(favoriteCard);

  const removeBtn = favoriteCard.querySelector('.btn-danger');
  removeBtn.addEventListener('click', () => removeFavoriteQuote(quote));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export {handleFavorite, toggleFavorite, hideFavoriteBtn};
