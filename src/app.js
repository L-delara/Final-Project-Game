// create a dice roller - 6 sides, random number
const rollDice = () => 1 + Math.floor(Math.random() * 6);

//show your roll
function showRoll(number) {
  let rolledNumer = document.getElementById("dice-face");
  rolledNumer.innerHTML = number;
}

// let rollMe =
document.getElementById("roll").onclick = function () {
  showRoll(rollDice());
};
//-----------------------------
// have players choose an avatar (wizard, cat, archer) and display next to player and bottom at start line
function selectPlayer(choice) {
  if (pickedAvatar >= 1) {
    return;
  }
  //get image element
  let wizard = document.getElementById("wizard-avatar");
  let cat = document.getElementById("cat-avatar");
  let archer = document.getElementById("archer-avatar");

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
    avatarId = "avatar1";
  }
  // if (pickedAvatar === 2) {
  //   avatarId = "avatar2";
  // }
  //move to starting line
  let startLine = document.querySelector("#startLine");
  startLine.appendChild(avatarPick);

  document.getElementById(avatarId).innerHTML = avatarName;
}
//-------------------------------
//have picked avatar move divs based on number of rolls from rollDice() result

// have picked avatar move divs based on number of rolls from rollDice() result
let playerPosition = 0;

function movePlayer(diceResult) {
  // if (pickedPlayer === false) return;

  document
    .querySelector(
      ".gameBoard div.boardSpace:nth-child(${playerPosition})"
    )
    .classList.remove("active");

  //find next position after die is cast
  playerPosition += diceResult;

  // check for ladder or snake

  const square = document.querySelector(
    ".gameBoard div.boardSpace:nth-child(${playerPosition})"
  );
  if (boardSpace.classList.contains("ladder")) {
    playerPosition = parseInt(boardSpace.dataset.moveTo);
  } else if (boardSpace.classList.contains("snake")) {
    playerPosition = parseInt(boardSpace.dataset.moveTo);
  }

  //add active
  document
    .querySelector(
      ".gameBoard div.boardSpace:nth-child(${playerPosition})"
    )
    .classList.add("active");
}
