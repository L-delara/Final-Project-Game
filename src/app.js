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

// have players choose an avatar (wizard, cat, archer) and display next to player and bottom at start line
function selectPlayer(choice) {
  //get image element
  let wizard = document.getElementById("wizard-avatar");
  let cat = document.getElementById("cat-avatar");
  let archer = document.getElementById("archer-avatar");

  //copy image
  let avatarPick = wizard;
  if (choice === "cat-avatar") {
    avatarPick = cat;
  }
  if (choice === "archer-avatar") {
    avatarPick = archer;
  }

  //move to starting line
  let startLine = document.querySelector(".startLine");
  startLine.appendChild(avatarPick);
}
