const selection = ['rock', 'paper', 'scissors'];

let totalScore = 0;

const x = document.getElementById('total-score');
const winnerMessage = document.getElementById('winner-message');
function myFunc1() {
    document.getElementById('rock').style.border = "none";
}
function myFunc2() {
    document.getElementById('paper').style.border = "none";
}
function myFunc3() {
    document.getElementById('scissors').style.border = "none";
}
function option1() {
    document.getElementById("rock").style.border = "2px solid";
    document.getElementById("rock").style.borderRadius = "15px";
    document.getElementById("rock").style.borderColor = "rgb(127,255,0)";
    const randomSelection = Math.trunc(Math.random() * 3);
    if (randomSelection === 1) {
        winnerMessage.textContent = `You Lose!`;
    } else if (randomSelection === 2) {
        totalScore += 1
        x.textContent = `${totalScore}`;
        winnerMessage.textContent = "You Win!";
    } else {
        winnerMessage.textContent = "Oops, it's a Draw"
    }
    setTimeout(myFunc1, 1200);
}
function option2() {
    document.getElementById("paper").style.border = "2px solid";
    document.getElementById("paper").style.borderColor = "rgb(127,255,0)";
    const randomSelection = Math.trunc(Math.random() * 3);
    if (randomSelection === 2) {
        winnerMessage.textContent = `You Lose!`;
    } else if (randomSelection === 0) {
        totalScore += 1
        x.textContent = `${totalScore}`;
        winnerMessage.textContent = "You Win!";
    } else {
        winnerMessage.textContent = "Oops, it's a Draw"
    }
    setTimeout(myFunc2, 1200);
}
function option3() {
    document.getElementById("scissors").style.border = "2px solid";
    document.getElementById("scissors").style.borderRadius = "15px";
    document.getElementById("scissors").style.borderColor = "rgb(127,255,0)";
    const randomSelection = Math.trunc(Math.random() * 3);
    if (randomSelection === 0) {
        winnerMessage.textContent = `You Lose!`;
    } else if (randomSelection === 1) {
        totalScore += 1
        x.textContent = `${totalScore}`;
        winnerMessage.textContent = "You Win!";
    } else {
        winnerMessage.textContent = "Draw"
    }
    setTimeout(myFunc3, 1200);
}