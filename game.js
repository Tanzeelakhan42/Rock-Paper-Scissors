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
const computerScoreElement = document.querySelector(".computer-score-value");
const yourScoreElement = document.querySelector(".your-score-value");
const textBox1 = document.querySelector(".text-box1");
const textBox2 = document.querySelector(".text-box2");
const youPickedButton = document.querySelector(".you-picked-button");
const pcPickedButton = document.querySelector(".pc-picked-button");
const mainContainer2 = document.querySelector(".main-container-2");
const mainContainer = document.querySelector(".main-container");
const nextButton = document.querySelector(".next-button");
const playAgainButton2 = document.querySelector(".play-again-button2");

let computerScore;
let yourScore;
let computerScoreValue = 0;
let yourScoreValue = 0;

rulesButton.addEventListener("click", function () {
  gameRuleBox.style.display = "block";
});
crossButton.addEventListener("click", function () {
  gameRuleBox.style.display = "none";
});

nextButton.addEventListener("click", function () {
  mainContainer2.style.display = "block";
  mainContainer.style.display = "none";
});
playAgainButton2.addEventListener("click", function () {
  mainContainer2.style.display = "none";
  mainContainer.style.display = "flex";
  buttonsBox.style.display = "block";
  gameResultBox.style.display = "none";
  localStorage.removeItem("computerScore");
  localStorage.removeItem("yourScore");
  computerScoreValue = 0;
  yourScoreValue = 0;
  computerScoreElement.textContent = 0;
  yourScoreElement.textContent = 0;
  nextButton.style.display = "none";
});

button1.addEventListener("click", function () {
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  rockImage.style.display = "block";
  paperImage.style.display = "none";
  scissorImage.style.display = "none";
  let ComputerScore = getComputerOption();
  yourScore = "Rock";

  let Winner = determineWinner(yourScore, ComputerScore);

  calculateScore(Winner);
});
button2.addEventListener("click", function () {
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  paperImage.style.display = "block";
  scissorImage.style.display = "none";
  rockImage.style.display = "none";
  let ComputerScore = getComputerOption();
  yourScore = "Paper";

  let Winner = determineWinner(yourScore, ComputerScore);

  calculateScore(Winner);
});
button3.addEventListener("click", function () {
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  scissorImage.style.display = "block";
  rockImage.style.display = "none";
  paperImage.style.display = "none";
  let ComputerScore = getComputerOption();
  yourScore = "Scissor";

  let Winner = determineWinner(yourScore, ComputerScore);

  calculateScore(Winner);
});
playAgainButton.addEventListener("click", function () {
  buttonsBox.style.display = "block";
  gameResultBox.style.display = "none";
});

function getComputerOption() {
  let currentOption = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (currentOption == 1) {
    pcRockImage.style.display = "block";
    pcPaperImage.style.display = "none";
    pcScissorImage.style.display = "none";
    computerScore = "Rock";
  } else if (currentOption == 2) {
    pcRockImage.style.display = "none";
    pcPaperImage.style.display = "block";
    pcScissorImage.style.display = "none";
    computerScore = "Paper";
  } else {
    pcRockImage.style.display = "none";
    pcPaperImage.style.display = "none";
    pcScissorImage.style.display = "block";
    computerScore = "Scissor";
  }
  return computerScore;
}
function determineWinner(yourScore, computerScore) {
  if (yourScore == computerScore) {
    textBox2.textContent = "";
    textBox1.textContent = "TIE UP";
    youPickedButton.style.border = "10px solid #0074B6";
    youPickedButton.classList.remove("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #0074B6";
    return "Tie";
  } else if (yourScore == "Rock" && computerScore == "Scissor") {
    textBox1.textContent = "You Won";
    textBox2.textContent = "Against PC";
    youPickedButton.classList.add("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";
    return "Player Won";
  } else if (yourScore == "Scissor" && computerScore == "Paper") {
    textBox1.textContent = "You Won";
    textBox2.textContent = "Against PC";
    youPickedButton.classList.add("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";
    return "Player Won";
  } else if (yourScore == "Paper" && computerScore == "Rock") {
    textBox1.textContent = "You Won";
    textBox2.textContent = "Against PC";
    youPickedButton.classList.add("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";
    return "Player Won";
  } else {
    textBox1.textContent = "You Lost";
    textBox2.textContent = "Against PC";
    pcPickedButton.classList.add("winner-button-border");
    youPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";

    return "Computer Won";
  }
}
function calculateScore(currentScore) {
  if (currentScore === "Player Won") {
    yourScoreValue += 1;
  } else if (currentScore === "Computer Won") {
    computerScoreValue += 1;
  }

  computerScoreElement.textContent = computerScoreValue;
  yourScoreElement.textContent = yourScoreValue;

  localStorage.setItem("computerScore", computerScoreValue);
  localStorage.setItem("yourScore", yourScoreValue);

  if (computerScoreValue < yourScoreValue) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let storedComputerScore = localStorage.getItem("computerScore");
  let storedYourScore = localStorage.getItem("yourScore");

  computerScoreValue = storedComputerScore ? parseInt(storedComputerScore) : 0;
  yourScoreValue = storedYourScore ? parseInt(storedYourScore) : 0;

  computerScoreElement.textContent = computerScoreValue;
  yourScoreElement.textContent = yourScoreValue;
});
