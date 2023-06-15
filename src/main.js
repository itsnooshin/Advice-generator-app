'use strict';

const btnmain = document.querySelector('.icon-button');
const numberRandom = document.querySelector('.advice-number');
const quoteRandom = document.querySelector('.lead-quote');

btnmain.addEventListener('click', function () {
  async function adviceGen() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      const number = data.slip.id;
      numberRandom.textContent = number;
      const text = data.slip.advice;
      quoteRandom.textContent = text;
    } catch (err) {
      throw new Error('API request failed');
    }
  }

  adviceGen();
});
