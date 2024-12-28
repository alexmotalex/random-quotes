'use strict';

import {handleQuote} from './src/handlers/quote.js';

const generateBtn = document.getElementById('geterate-btn');
generateBtn.addEventListener('click', handleQuote);
