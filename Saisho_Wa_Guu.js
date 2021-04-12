let playerScore = 0
let pcScore = 0
const btn = document.querySelectorAll('input')


function computerPlay() {
    let pcPlay = ['rock', 'paper', 'scissors'];
    return pcPlay[Math.floor(Math.random() * pcPlay.length)];
}

function disableButtons() {
    btn.forEach(off => {
        off.disabled = true
    });
}

function playAgain() {
    window.location.reload();
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {

        playerScore++;
        result = `Yay you win! ${playerSelection} beats ${computerSelection} 
        Player score: ${playerScore} Computer score: ${pcScore}`;

        if (playerScore === 5) {
            result += ' You win the game! computers are so dumb HAHAHA';
            disableButtons();
        }

    } else if (playerSelection === computerSelection) {
        result = `Its a draw you both draw ${playerSelection}
        Player score: ${playerScore} Computer score: ${pcScore}`;
    } else {
        pcScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}
        Player score: ${playerScore} Computer score: ${pcScore}`;

        if (pcScore === 5) {
            result += ' The computer wins! PC gang gang';
            disableButtons();
        }
    }
    document.querySelector('.results').textContent = result;
    return;
}
btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});