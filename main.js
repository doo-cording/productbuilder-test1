const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
