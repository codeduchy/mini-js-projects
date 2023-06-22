
const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const userEl = document.querySelector("#user-score");
const computerEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(b => {
  b.addEventListener("click", (e) => {
    const result = playround(b.id, computerPlay());
    resultEl.textContent = result;
    userEl.textContent = playerScore;
    computerEl.textContent = computerScore;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playround(player, computer) {
  if(player === computer) {
    return "It`s a tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "You win! " + player + " beats " + computer;
  } else {
    computerScore++;
    return "You lose! " + computer + " beats " + player;
  }
}