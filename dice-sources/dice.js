// have players choose an avatar (wizard, cat, archer) and display next to player and bottom at start line
function selectPlayer(choice) {
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
  //move to starting line
  let chosen = document.querySelector(avatarId);
  chosen.appendChild(avatarPick);

  document.getElementById(nameId).innerHTML = avatarName;
}
//------------------------------
// create a dice roller - 6 sides, random number
const rollDice = () => 1 + Math.floor(Math.random() * 6);

let roll1HasHappened = false;
let roll2HasHappened = false;

//show your roll
function showRoll1(number) {
  let rolledNumber1 = document.getElementById("dice1");
  rolledNumber1.innerHTML = number;
  roll1HasHappened = true;
}
function showRoll2(number) {
  let rolledNumber2 = document.getElementById("dice2");
  rolledNumber2.innerHTML = number;
  roll2HasHappened = true;
}
// let rollMe =
document.getElementById("roll1").onclick = function () {
  showRoll1(rollDice());
};
document.getElementById("roll2").onclick = function () {
  showRoll2(rollDice());
};

while (true) {
  if (roll1HasHappened && roll2HasHappened) {
    //find the winner-------
    if (showRoll1 > showRoll2) {
      console.log("player 1 wins");
    } else if (showRoll1 < showRoll2) {
      console.log("player 2 wins");
    } else {
      console.log("draw!");
    }

    // restart the variables
    roll1HasHappened = false;
    roll2HasHappened = false;
  }
  // go back wait for both rolls
}
