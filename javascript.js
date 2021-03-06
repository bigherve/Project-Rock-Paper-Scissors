let playerScore = 0;
let pcScore = 0;
const btns = document.querySelectorAll('.rps');
const restart = document.querySelector('#go-again')

function computerPlay() {
    let pcPlay = ['rock', 'paper', 'scissors'];
    return pcPlay[Math.floor(Math.random() * pcPlay.length)];
}

function disableButtons() {
    btns.forEach(off => {
        off.disabled = true;
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
        Player score: ${playerScore} Computer score: ${pcScore}.`;

        if (playerScore === 5) {
            result = `You win the game! With a score of ${playerScore} to ${pcScore} YAY.`;
            disableButtons();
        }

    } else if (playerSelection === computerSelection) {
        result = `It's a draw you both got ${playerSelection} go again.`;
    } else {
        pcScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}
        Player score: ${playerScore} Computer score: ${pcScore}.`;

        if (pcScore === 5) {
            result = `The computer wins! With a score of ${pcScore} to ${playerScore} BOO.`;
            disableButtons();
        }
    }
    document.querySelector('.results').textContent = result;
    return;
}

restart.addEventListener('click', playAgain);

btns.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});