"use strict";

const player0El = document.querySelector(".player_0");
const player1El = document.querySelector(".player_1");

const score0El = document.getElementById("score_0");
const score1El = document.getElementById("score_1");
const diceEl = document.querySelector(".dice");

const current0El = document.getElementById("current_0");
const current1El = document.getElementById("current_1");

// btns
const btnRoll = document.querySelector(".btn_roll");
const btnHold = document.querySelector(".btn_hold");
const btnNew = document.querySelector(".btn_new");

let scores, currentScore, activePlayer, playGame;

// initialize fun
const inti = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playGame = true;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player_winner");
  player1El.classList.remove("player_winner");
  player0El.classList.add("player_active");
  player1El.classList.remove("player_active");
};

inti();

// switch the player
const switchPlayer = function () {
  document.getElementById(`current_${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player_active");
  player1El.classList.toggle("player_active");
};

btnRoll.addEventListener("click", function () {
  if (playGame) {
    diceEl.classList.remove("hidden");

    //1. generate the random number
    const dice = Math.floor(Math.random() * 6) + 1;

    //2. display random image
    diceEl.src = `./img/dice-${dice}.png`;

    //3. check for rolled 1
    if (dice !== 1) {
      // display the score
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current_${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch the player
      switchPlayer();
    }
  }
});

// btn hold even
btnHold.addEventListener("click", function () {
  if (playGame) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score_${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playGame = false;
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("player_winner");
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("player_active");
      diceEl.classList.add("hidden");
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", inti);
