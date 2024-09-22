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

let computerScore;
let yourScore;
let computerScoreValue = 0;
let yourScoreValue = 0;

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
  let ComputerScore = getComputerOption();
  yourScore = "Rock";
  console.log("This is Computer Score", ComputerScore);
  let Winner = determineWinner(yourScore, computerScore);
  console.log("Winner is ", Winner);
  calculateScore(Winner);
});
button2.addEventListener("click", function () {
  console.log("button2");
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  paperImage.style.display = "block";
  scissorImage.style.display = "none";
  rockImage.style.display = "none";
  let ComputerScore = getComputerOption();
  yourScore = "Paper";
  console.log("This is Computer Score", ComputerScore);
  let Winner = determineWinner(yourScore, computerScore);
  console.log("Winner is ", Winner);
  calculateScore(Winner);
});
button3.addEventListener("click", function () {
  console.log("button3");
  gameResultBox.style.display = "flex";
  buttonsBox.style.display = "none";
  scissorImage.style.display = "block";
  rockImage.style.display = "none";
  paperImage.style.display = "none";
  let ComputerScore = getComputerOption();
  yourScore = "Scissor";
  console.log("This is Computer Score", ComputerScore);
  let Winner = determineWinner(yourScore, computerScore);
  console.log("Winner is ", Winner);
  calculateScore(Winner);
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
    console.log("It is a tie");
    textBox2.textContent = "";
    textBox1.textContent = "TIE UP";
    youPickedButton.style.border = "10px solid #0074B6";
    youPickedButton.classList.remove("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #0074B6";
    return "Tie";
  } else if (yourScore == "Rock" && computerScore == "Scissor") {
    console.log("You Won");
    textBox1.textContent = "You Won";
    textBox2.textContent = "Against PC";
    youPickedButton.classList.add("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";
    return "Player Won";
  } else if (yourScore == "Scissor" && computerScore == "Paper") {
    console.log("You Won");
    textBox1.textContent = "You Won";
    textBox2.textContent = "Against PC";
    youPickedButton.classList.add("winner-button-border");
    pcPickedButton.classList.remove("winner-button-border");
    pcPickedButton.style.border = "10px solid #ffa943";
    youPickedButton.style.border = "10px solid #BD00FF";
    return "Player Won";
  } else if (yourScore == "Paper" && computerScore == "Rock") {
    console.log("You Won");
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
    console.log("Computer Won");
    return "Computer Won";
  }
}
function calculateScore(currentScore) {
  if (currentScore == "Player Won") {
    yourScoreValue = yourScoreValue + 1;
  } else if (currentScore == "Computer Won") {
    computerScoreValue = computerScoreValue + 1;
  }
  console.log("Your Score", yourScoreValue);
  console.log("Computer Score", computerScoreValue);
  computerScoreElement.textContent = computerScoreValue;
  yourScoreElement.textContent = yourScoreValue;
}
