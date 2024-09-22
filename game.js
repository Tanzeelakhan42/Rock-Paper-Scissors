const rulesButton = document.querySelector(".rules-button");
const gameRuleBox = document.querySelector(".game-rules-box");
const crossButton = document.querySelector(".cross-button ");
const buttonsBox = document.querySelector(".buttons-box");
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const gameResultBox = document.querySelector(".game-result-box");
const playAgainButton = document.querySelector(".play-again-button");
const scissorImage = document.querySelector(".scissor-image");
const rockImage = document.querySelector(".rock-image");
const paperImage = document.querySelector(".paper-image");
const pcScissorImage = document.querySelector(".pc-scissor-image");
const pcRockImage = document.querySelector(".pc-rock-image");
const pcPaperImage = document.querySelector(".pc-paper-image");

console.log(gameRuleBox);
rulesButton.addEventListener("click", function () {
  console.log("buttonClick");
  gameRuleBox.style.display = "block";
});
crossButton.addEventListener("click", function () {
  console.log("crossButton");
  gameRuleBox.style.display = "none";
});
button1.addEventListener("click", function () {
  console.log("button1");
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  rockImage.style.display = "block";
  paperImage.style.display = "none";
  scissorImage.style.display = "none";
  getComputerOption();
});
button2.addEventListener("click", function () {
  console.log("button2");
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  paperImage.style.display = "block";
  scissorImage.style.display = "none";
  rockImage.style.display = "none";
  getComputerOption();
});
button3.addEventListener("click", function () {
  console.log("button3");
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  scissorImage.style.display = "block";
  rockImage.style.display = "none";
  paperImage.style.display = "none";
  getComputerOption();
});
playAgainButton.addEventListener("click", function () {
  console.log("PlayAgainButton");
  buttonsBox.style.display = "block";
  gameResultBox.style.display = "none";
});

function getComputerOption() {
  let currentOption = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  console.log(currentOption);
  if (currentOption == 1) {
    pcRockImage.style.display = "block";
    pcPaperImage.style.display = "none";
    pcScissorImage.style.display = "none";
  } else if (currentOption == 2) {
    pcRockImage.style.display = "none";
    pcPaperImage.style.display = "block";
    pcScissorImage.style.display = "none";
  } else {
    pcRockImage.style.display = "none";
    pcPaperImage.style.display = "none";
    pcScissorImage.style.display = "block";
  }
}
