function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;
  switch(num) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection.toLowerCase() == computerSelection) {
    return 'Tie, play again.';
  }
  switch(playerSelection.toLowerCase()) {
    case 'rock':
      if(computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
      } else if (computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
      }
      break;
    case 'paper':
      if(computerSelection == 'rock') {
        return 'You Win! Paper beats Rock';
      } else if(computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
      }
      break;
    case 'scissors':
      if(computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper';
      } else if(computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
      }
      break;
  }
}

const playerSelection = 'ROCK';
const computerSelection = computerPlay();
console.log(playerSelection.toLowerCase());
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));