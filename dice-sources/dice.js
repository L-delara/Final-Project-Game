// have players choose an avatar (wizard, cat, archer) and display under player#
function selectPlayer(choice) {
  //limit to two players
  if (pickedAvatar >= 2) {
    return;
  }
  //get image element
  let wizard = document.getElementById("wizard-avatar");
  let cat = document.getElementById("cat-avatar");
  let archer = document.getElementById("archer-avatar");

  let nameId = "name1";
  let avatarName = "Wizard!";
  //copy image
  let avatarPick = wizard;
  if (choice === "cat-avatar") {
    avatarPick = cat;
    avatarName = "Black Cat!";
  }
  if (choice === "archer-avatar") {
    avatarPick = archer;
    avatarName = "Archer!";
  }

  //decides if we have enough players (even though game can play without avatars being chosen to run)
  pickedAvatar += 1;

  let avatarId = "";
  if (pickedAvatar === 1) {
    avatarId = "#avatar1";
    nameId = "name1";
  }
  if (pickedAvatar === 2) {
    avatarId = "#avatar2";
    nameId = "name2";
  }
  //move to the board and give it a name - cat/wizard/archer
  let chosen = document.querySelector(avatarId);
  chosen.appendChild(avatarPick);

  document.getElementById(nameId).innerHTML = avatarName;
}
//------------------------------
// create a dice roller/randomizer - 6 sides
const rollDice = () => 1 + Math.floor(Math.random() * 6);

//------------------------
// create starting variables- says when player has done roll and the result
let roll1HasHappened = false;
let roll2HasHappened = false;
let die1value = 0;
let die2value = 0;

//starting status for the game- no one has won/lost/drawn (tracker)
let p1Wins = 0;
let p1Losses = 0;
let p1Draws = 0;

let p2Wins = 0;
let p2Losses = 0;
let p2Draws = 0;

//need a way to count the number of rounds in a game...
let gameTurn = 0;
let gameMaxTurns = 5; //a way to limit number of rounds. Could be 10?

//create a reset for the game
function restartVariables() {
  roll1HasHappened = false;
  roll2HasHappened = false;
  die1value = 0;
  die2value = 0;
  p1Wins = 0;
  p1Losses = 0;
  p1Wins = 0;
  p2Wins = 0;
  p2Losses = 0;
  p2Wins = 0;

  // beginning a new game...
  gameTurn = 0;

  roll1HasHappened = false;
  roll2HasHappened = false;

  // and hide that popup/extra div
  document.getElementById("newGame").style.visibility = "hidden";
}

function clearAndRestartBoard() {
  // clear+reset players stats
  document.getElementById("win1res").innerHTML = 0;
  document.getElementById("win2res").innerHTML = 0;
  document.getElementById("tie1res").innerHTML = 0;
  document.getElementById("tie2res").innerHTML = 0;
  document.getElementById("lose1res").innerHTML = 0;
  document.getElementById("lose2res").innerHTML = 0;
  // clear the dice and winner board
  document.getElementById("finalScoring").innerHTML = "";

  document.getElementById("dice1").innerHTML = "⚫";
  document.getElementById("dice2").innerHTML = "⚫";
}

//responses to resetting the board
function userRepondsYes() {
  restartVariables();
  clearAndRestartBoard();
}
function userRespondsNo() {
  document.getElementById("finalScoring").innerHTML = "Bye! 👋";
}

//show your rolled number per die
function showRoll1(number) {
  let rolledNumber1 = document.getElementById("dice1");
  rolledNumber1.innerHTML = number;
  roll1HasHappened = true;
  die1value = number;
}
function showRoll2(number) {
  let rolledNumber2 = document.getElementById("dice2");
  rolledNumber2.innerHTML = number;
  roll2HasHappened = true;
  die2value = number;
}

function computeAndShowFinalWinner() {
  if (p1Wins > p2Wins) {
    document.getElementById(
      "finalScoring"
    ).innerHTML = `Player 1 Wins! 🎉`;
  } else if (p2Wins > p1Wins) {
    document.getElementById(
      "finalScoring"
    ).innerHTML = `Player 2 Wins! 🎉`;
  } else if (p1Draws == p2Draws) {
    document.getElementById("finalScoring").innerHTML = "It's a draw! 🙁";
  }
}
function tallyThisRound() {
  if (die1value > die2value) {
    p1Wins++; // a win for player 1
    p2Losses++; // also means a loss for player 2
    // Update player win/lose stats
    document.getElementById("win1res").innerHTML = p1Wins;
    document.getElementById("lose2res").innerHTML = p2Losses;
  } else if (die2value > die1value) {
    p2Wins++; // the opposite status updates
    p1Losses++;
    document.getElementById("win2res").innerHTML = p2Wins;
    document.getElementById("lose1res").innerHTML = p1Losses;
  } else {
    // on draws we update both players draw counter
    p1Draws++;
    p2Draws++;
    document.getElementById("tie1res").innerHTML = p1Draws;
    document.getElementById("tie2res").innerHTML = p2Draws;
  }
}

// show the option to play again
function displayOptionForAnotherGame() {
  document.getElementById("newGame").style.visibility = "visible";
}

setInterval(function () {
  // we need both players to have rolled their die - any order
  if (roll1HasHappened && roll2HasHappened) {
    tallyThisRound();

    // restart the variables for the next round and update the counter
    roll1HasHappened = false;
    roll2HasHappened = false;

    gameTurn++;

    // after each round, update, and check for end of game
    if (gameTurn >= gameMaxTurns) {
      // if that was the last turn, show winner and option to rematch
      computeAndShowFinalWinner();

      displayOptionForAnotherGame();

      // not quite ready - TODO: prevent user from rolling after end of game
      // disableDiceButtons()
    }
  }
}, 1000);

// listeners for roller buttons and reset buttons
document.getElementById("roll1").onclick = function () {
  showRoll1(rollDice());
};
document.getElementById("roll2").onclick = function () {
  showRoll2(rollDice());
};

document.getElementById("yesButton").onclick = function () {
  userRepondsYes();
};
document.getElementById("noButton").onclick = function () {
  userRespondsNo();
};
