/* main-no-ui.js Rock-Paper-Scissors Game
   Barry White
   3/11/21 */

/* Begin with a function called computerPlay that will randomly
   return either 'Rock', 'Paper' or 'Scissors'. We'll use this
   function in the game to make the computer's play. */

function computerPlay() {
  let play = Math.floor((Math.random() * 3) + 1);
  switch(play) {
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