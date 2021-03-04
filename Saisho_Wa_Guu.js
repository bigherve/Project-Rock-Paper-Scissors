/* Rock Paper Scissors 
make a function witch will randomly output Rock Paper Scissors this will be the pc
make another function that will play one round of RPS between the player and the pc
make a function that will play RPS 5 timees and declare a winner
Use prompt() to get input from the user.*/

function computerPlay1() {
    let pcPlay = ['rock', 'paper', 'Scissors'];
    let randomPlay = pcPlay[Math.floor(Math.random() * pcPlay.length)];
    return randomPlay;
}

let playerScore = 0;
let pcScore = 0;

function playRound0() {
    let computerSelection = computerPlay1()
    let playerSelection = prompt('Choose rock, paper or scissors', '').toLowerCase();
    let log = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        log = ('You win! computers are so dumb')
    } else if (playerSelection == computerSelection) {
        log = ('It\'s a tie. fuck draws lets go again')
    } else {
        pcScore++;
        log = ('You lose! dickhead')
    }
    return log;
}