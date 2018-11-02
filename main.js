/*
  Rock, Paper, Scissors - copyright 2018 by Barry White
  Last revision - Nov 2, 2018
  Javascript gui for Rock, Paper, Scissors - Odin Project
*/

let computerScore = 0;
let playerScore = 0;
let res = document.querySelector('#result');
let computer = document.querySelector('#computerScore');
let player = document.querySelector('#playerScore');


function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie, play again.';
  }
  switch (playerSelection) {
    case 'rock':
      if (computerSelection == 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
      } else if (computerSelection == 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
      } else if (computerSelection == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
      }
      break;
    case 'scissors':
      if (computerSelection == 'paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper';
      } else if (computerSelection == 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
      }
      break;
  }
}

function game() {

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const computerSelection = computerPlay();
      res.textContent = playRound(button.id, computerSelection);
      player.textContent = "Player Score: " + playerScore;
      computer.textContent = "Computer Score: " + computerScore;
      if (playerScore == 5) {
        res.textContent = "Player Wins!";
        computerScore = 0;
        playerScore = 0;
      }
      if (computerScore == 5) {
        res.textContent = "Computer Wins";
        computerScore = 0;
        playerScore = 0;
      }
    })
  })
}

game();