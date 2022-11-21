function randomSelection() {
    return Math.trunc(Math.random() * 3);
}

let playerScore = 0, computerScore = 0;

function myFunc() {
    document.getElementById('rock').style.border = 'none';
    document.getElementById('paper').style.border = 'none';
    document.getElementById('scissors').style.border = 'none';
}

function decideWinner(e) {
    const playMessage = document.getElementById('play-message');
    playMessage.style.display = 'none';
    const computerSelection = randomSelection();
    const playerChoice = e.target.id;
    const winnerMessage = document.getElementById('winner-message');
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        e.target.style.border = "2px rgb(127,255,0) solid";
    }
    /*
    0->Rock
    1->Paper
    2->Scissors
 */
    if (playerChoice === 'rock') {
        if (computerSelection === 0) {
            winnerMessage.textContent = `Draw, both chose Rock`;
        } else if (computerSelection === 1) {
            computerScore++;
            document.getElementById('ai-score').textContent=`${computerScore}`;
            winnerMessage.textContent = `You Lost`;
        } else {
            winnerMessage.textContent = `You Won`;
            playerScore++;
            document.getElementById('your-score').textContent = `${playerScore}`;
        }
    } else if (playerChoice === 'paper') {
        if (computerSelection === 1) {
            winnerMessage.textContent = `Draw, both chose Paper`;
        } else if (computerSelection === 2) {
            computerScore++;
            document.getElementById('ai-score').textContent=`${computerScore}`;
            winnerMessage.textContent = `You Lost`;
        } else {
            winnerMessage.textContent = `You Won`;
            playerScore++;
            document.getElementById('total-score').textContent = `${playerScore}`;
        }
    } else {
        if (computerSelection === 2) {
            winnerMessage.textContent = `Draw, both chose Scissors`;
        } else if (computerSelection === 0) {
            computerScore++;
            document.getElementById('ai-score').textContent=`${computerScore}`;
            winnerMessage.textContent = `You Lost`;
        } else {
            winnerMessage.textContent = `You Won`;
            playerScore++;
            document.getElementById('total-score').textContent = `${playerScore}`;
        }
    }
    setTimeout(myFunc, 1250);
}

window.addEventListener('click', decideWinner);