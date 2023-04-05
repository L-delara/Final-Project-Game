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

//add snakes and character avatars
