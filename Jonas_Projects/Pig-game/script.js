'user strict';

const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const imageDice = document.querySelector('.dice');
const player1CS = document.querySelector('#current--0');
const player2CS = document.querySelector('#current--1');
const player1Section = document.querySelector('.player--0');
const player2Section = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
imageDice.classList.add('hidden');
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;

  imageDice.classList.add('hidden');
  player1Section.classList.remove('player--winner');
  player2Section.classList.remove('player--winner');
  player1Section.classList.add('player--active');
  player2Section.classList.remove('player--active');
}

init();

const imgSrc = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');

//Function for switching the player
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1Section.classList.toggle('player--active');
  player2Section.classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random number for dice rolling
    const dice = Math.floor(Math.random() * 6) + 1;
    //This is actually selecting random image in the file
    imgSrc.src = `images/dice-${dice}.png`;
    //This is used to remove the hidden class for showing the dice image in the screen..
    imageDice.classList.remove('hidden');
    //2. This logic is used to add the random number and save it in the current score.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Else switch player if it's 0;
      switchPlayer();
    }
  }
});

const btnHold = document.querySelector('.btn--hold');
//This button is used to save the currentscore to the total score and switch the player
btnHold.addEventListener('click', function () {
  if (playing) {
    // Adding the current score to the active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //If it's greater than 50 winner class should be added to the current player section
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
