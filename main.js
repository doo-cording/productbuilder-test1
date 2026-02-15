const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computer-choice');
const themeSwitch = document.getElementById('checkbox');

const choices = {
    rock: '&#x1f44a;',
    paper: '&#x1f590;&#xfe0f;',
    scissors: '&#x270c;&#xfe0f;'
};

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

function playGame(playerChoice) {
    const computerChoice = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];
    const result = getResult(playerChoice, computerChoice);
    resultDiv.innerHTML = `<p>당신은 ${choices[playerChoice]}, 컴퓨터는 ${choices[computerChoice]}</p><p>${result}</p>`;
    computerChoiceDiv.innerHTML = choices[computerChoice];
}

function getResult(player, computer) {
    if (player === computer) {
        return "비겼습니다!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return '이겼습니다!';
    } else {
        return '졌습니다!';
    }
}
