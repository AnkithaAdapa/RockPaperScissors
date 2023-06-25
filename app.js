const ComputerChoiceDisplay = document.getElementById('computer-choice')
const UserChoiceDisplay = document.getElementById('user-choice')
const ResultDisplay = document.getElementById('result')
const PossibleOutcomes = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

PossibleOutcomes.forEach(PossibleOutcome => PossibleOutcome.addEventListener('click', (e) => {
    userChoice = e.target.id 
    UserChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    ComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a Tie"
    }
    if(computerChoice === "rock" && userChoice === "paper") {
        result = "You won!!!!"
    }
    if(computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!!!!"
    }
    if(computerChoice === "scissors" && userChoice === "rock") {
        result = "You won!!!!"
    }
    if(computerChoice === "paper" && userChoice === "rock") {
        result = "You lost!!!!"
    }
    if(computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!!!!"
    }
    if(computerChoice === "paper" && userChoice === "scissors") {
        result = "You won!!!!"
    }
    ResultDisplay.innerHTML = result
}