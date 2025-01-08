function displayCurrentQuote(quote) {
  const {id, text, author} = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('quote-author');
  //Current quote will have data-current-quote-id HTML attribute
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
}

export {displayCurrentQuote};
