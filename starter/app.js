/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

// Removed code to write 'Init' function

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// dice = Math.floor(Math.random() * 6 ) + 1;



// manipulated DOM using "document" ".querySelector(SELECT ID)" -->Change content with ".textContent" set it equal to variable dice

// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Create a anonymous function inside the event listener.  Do not give function a name.
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random Number
  dice = Math.floor(Math.random() * 6 ) + 1;
  
  // Display Result
  var diceDOM = document.querySelector('.dice')
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // Update the round score only IF the rolled number was not a 1.
  if (dice !== 1) {
    // Add Score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // next player
    nextPlayer();
  }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
  // add current score to global score
  scores[activePlayer] += roundScore;
  // update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if player one the game
  if (scores[activePlayer] >= 10) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    // next plaer
    nextPlayer();
  }



  
})

function nextPlayer () {
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  // This is how to toggel between users by toggling css.  ** The next two lines only switch once.  Left for reference.active

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  // Must use TOGGLE to make it work.

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
  

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // when you start a new game you need the active class to go to player one
    document.querySelector('.player-0-panel').classList.add('active');
  }
  
