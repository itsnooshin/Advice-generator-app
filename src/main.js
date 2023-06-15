'use strict';

const btnmain = document.querySelector('.main__icon-button');
const numberRandom = document.querySelector('.main__advice-number');
const quoteRandom = document.querySelector('.main__lead-quote');

btnmain.addEventListener('click', function () {
  async function advicerandom() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      const number = data.slip.id;
      numberRandom.textContent = number;
      const text = data.slip.advice;
      quoteRandom.textContent = text;
    } catch (error) {
      console.error('ERROR', error);
    }
  }

  advicerandom();
});
