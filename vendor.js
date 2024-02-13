const startGameBtn = document.getElementById("start-game-btn");
const text = document.getElementById("text")

// const userInput = prompt("Enter Some", "").toUpperCase();
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WIN";
const RESULT_COMPUTER_WINS = "COMPUTER WIN"

let GameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, "").toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
        alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSOR;
    }
}

const winner = (pChoice, cChoice) => {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSOR ||
        cChoice === SCISSOR && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener("click", () => {
    if (GameIsRunning) {
        return;
    }
    GameIsRunning = true;
    console.log("Game is running");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = winner(playerChoice, computerChoice);
    console.log(winner);
})
