//create variables to hold the scores of the human and computer players
let humanScore = 0;
let computerScore = 0;

//create a function and logic that returns a random choice of rock, paper, or scissors
//using Math.random() method returns a random number between 0 and 1, which we can use to select a random choice from an array of choices
function getComputerChoice() {
    //create an array of choices
    const choicesNumber = Math.floor(Math.random() * 3);
    //create variable to hold the computer's choice
    let computerChoices;
    //assign the computer's choice based on the random number generated
    if (choicesNumber === 0) {
        computerChoices = "rock";
    } else if (choicesNumber === 1) {
        computerChoices = "paper";
    } else {
        computerChoices = "scissors";
    }
    //return the computer's choice
    return computerChoices;
}
//test the function by calling it and logging the result to the console
console.log(getComputerChoice());

//create a function that returns one of the valid user's choice of rock, paper, or scissors using prompt () method 
function getHumanChoice() {
    //create a variable to hold the user's choice
    let userChoice = prompt("Please enter your choice: rock, paper, or scissors");
    //convert the user's choice to lowercase to make it case-insensitive
    userChoice = userChoice.toLowerCase();
    //check if the user's choice is valid
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}
//test the function by calling it and logging the result to the console
console.log(getHumanChoice());

//create a function that takes in the human and computer choices as arguments, play a single round, increments the round winner's score and logs a winner announcement
//define two parameters for the function playRound: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    //make the human choice case-insensitive by converting it to lowercase
    humanChoice = humanChoice.toLowerCase();
    
    //create a logic that compares the human and computer choices and determines the winner of the round
    if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
        console.log("Tie!");
        return "Tie";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        return "Computer wins";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        return "Human wins";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return "Human wins";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        return "Computer wins";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return "Human wins";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        return "Computer wins";
    }    
}

//create a logic for play entire game and the game should be played 5 rounds
function playGame() {
    //score variables moved inside playGame
    let humanScore = 0;
    let computerScore = 0;

    //playRound function moved inside playGame
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (
            (humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "scissors")
        ) {
            console.log("Tie!");
        } else if (
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "rock" && computerChoice === "paper")
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++; // Increment the global-to-this-function variable
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++; // Increment the global-to-this-function variable
        }
    }

    //the Loop
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        
        //call these inside the loop so we get NEW choices every round
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    //declare the final winner
    console.log("--- FINAL RESULT ---");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`The computer won the game! Final score: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`The game ended in a tie! Final score: ${humanScore} - ${computerScore}`);
    }
}

// Start the game!
playGame();