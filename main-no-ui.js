/* main-no-ui.js Rock-Paper-Scissors Game
   Barry White
   3/11/21 */

/* Begin with a function called computerPlay that will randomly
   return either 'Rock', 'Paper' or 'Scissors'. We'll use this
   function in the game to make the computer's play. */

function computerPlay() {
  let play = Math.floor((Math.random() * 3) + 1);
  switch (play) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}

/* Write a function that plays a single round of Rock Paper Scissors.
   The function should take two parameters - the playerSelection
   and computerSelection - and then return a string that declares
   the winner of the round like so: "You Lose! Paper beats Rock"
   1. Make you function case insensitive (so users can input rock,
    ROCK, Rock or any other variation).

    Important note: you want to return the results of this function
    call, not console.log() them. To test this function console.log
    the results:

    function playRound(playerSelection, computerSelection) {
      // your code here!
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection)); */

function playRound(playerSelection, computerSelection) {

}