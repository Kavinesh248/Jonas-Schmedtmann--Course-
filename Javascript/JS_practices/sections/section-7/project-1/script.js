'use strict';

const numberGenerated = document.querySelector('.number');
const inputArea = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const resultArea = document.querySelector('.message');
const body = document.querySelector('body');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let finalScore = 20; //state variable
let highscore = 0; //state variable

function displayMessage(message) {
  resultArea.textContent = message;
}

btnCheck.addEventListener('click', function () {
  const guess = Number(inputArea.value);

  if (!guess) {
    displayMessage('⚠️ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer');
    body.style.backgroundColor = '#60b347';
    numberGenerated.style.width = '30rem';
    numberGenerated.textContent = secretNumber;

    if (finalScore > highscore) {
      highscore = finalScore;
      highScore.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (finalScore > 1) {
      displayMessage(guess > secretNumber ? '⤴️ Too high' : '⤵️ Too Low');
      finalScore--;
      score.textContent = finalScore;
      body.style.backgroundColor = '#222';
    } else {
      displayMessage('You lost the game');
      score.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  finalScore = 20;
  displayMessage('Start guessing...');
  inputArea.value = '';
  numberGenerated.textContent = '?';
  numberGenerated.style.width = '15rem';
  score.textContent = '20';
  body.style.backgroundColor = '#222';
});
