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

function playerPlay() {
  response = prompt('Enter Rock, Paper, Scissors:')
  return response.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection.toLowerCase() == computerSelection) {
    return 'Tie, play again.';
  }
  switch(playerSelection.toLowerCase()) {
    case 'rock':
      if(computerSelection == 'scissors') {
        score++;
        return 'You Win! Rock beats Scissors';
      } else if (computerSelection == 'paper') {
        score--;
        return 'You Lose! Paper beats Rock';
      }
      break;
    case 'paper':
      if(computerSelection == 'rock') {
        score++;
        return 'You Win! Paper beats Rock';
      } else if(computerSelection == 'scissors') {
        score--;
        return 'You Lose! Scissors beats Paper';
      }
      break;
    case 'scissors':
      if(computerSelection == 'paper') {
        score++;
        return 'You Win! Scissors beats Paper';
      } else if(computerSelection == 'rock') {
        score--;
        return 'You Lose! Rock beats Scissors';
      }
      break;
  }
}

function game() {
  for(var i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

let score = 0;
game();
if(score > 0) {
  console.log('You Won! -- Score:', score);
} else if(score < 0) {
  console.log('You Lost! -- Score:', score);
} else {
  console.log('Tie game, try again.');
}
