const choices = ["rock", "paper", "scissors"];

const game = function (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(`You Win! ${playerSelection.toLocaleUpperCase()} beats ${computerSelection.toLocaleUpperCase()}`);
            return 1;
        }
        else if (computerSelection === "paper") {
            console.log(`You Lose! ${computerSelection.toLocaleUpperCase()} beats ${playerSelection.toLocaleUpperCase()}`);
            return 0;
        }
        else {
            console.log(`It's a Draw! Both chose ${playerSelection.toLocaleUpperCase()}`);
            return 2;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(`You Win! ${playerSelection.toLocaleUpperCase()} beats ${computerSelection.toLocaleUpperCase()}`);
            return 1;
        }
        else if (computerSelection === "scissors") {
            console.log(`You Lose! ${computerSelection.toLocaleUpperCase()} beats ${playerSelection.toLocaleUpperCase()}`);
            return 0;
        }
        else {
            console.log(`It's a Draw! Both chose ${playerSelection.toLocaleUpperCase()}`);
            return 2;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log(`You Win! ${playerSelection.toLocaleUpperCase()} beats ${computerSelection.toLocaleUpperCase()}`);
            return 1;
        }
        else if (computerSelection === "rock") {
            console.log(`You Lose! ${computerSelection.toLocaleUpperCase()} beats ${playerSelection.toLocaleUpperCase()}`);
            return 0;
        }
        else {
            console.log(`It's a Draw! Both chose ${playerSelection.toLocaleUpperCase()}`);
            return 2;
        }
    } else {
        console.log("Invalid choice");
        alert("Enter a valid name as shown");
        return false;
    }
}


const playGround = function () {
    const countOfPlayerWins = 0;
    for (let i = 0; i < 5; i++) {
        const randomChoice = Math.floor(Math.random() * 3);
        const computerSelection = choices[randomChoice];
        const playerSelection = prompt("Type your choice").toString().toLowerCase();
        const valid = game(playerSelection, computerSelection);
        if (valid === false) i--;
        if (valid === 1) countOfPlayerWins++;
        else continue;
    }
    return countOfPlayerWins;
}

alert(`You wins ${playGround()} matches out of 5`);