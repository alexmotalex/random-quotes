'use strict';

import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('geterate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
let currentQuoteIndex;

function toggleFavoriteIcon(isFavorite) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const {quote, author} = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavorite);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQuote();
