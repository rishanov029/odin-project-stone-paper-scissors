const choices = ["rock","paper","scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");

let playerScore = 0;
let computerScore = 0;

const winScore = 5; 

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){

            case "rock":
            result = (computerChoice === "scissors") ?
            "YEHAA BUDDY, YOU WIN!" : "OHOO NO!!, YOU LOSE!";
            break;

            case "paper":
            result = (computerChoice === "rock") ?
            "YEHAA BUDDY, YOU WIN!" : "OHOO NO!!, YOU LOSE!";
            break;

            case "scissors":
            result = (computerChoice === "paper") ?
            "YEHAA BUDDY, YOU WIN!" : "OHOO NO!!, YOU LOSE!";
            break;
        }
    }
    

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    if(result === "YEHAA BUDDY, YOU WIN!"){
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerscoreDisplay.textContent = playerScore;
    }

    else if(result === "OHOO NO!!, YOU LOSE!"){
        resultDisplay.classList.add("redText");
        computerScore++;
        computerscoreDisplay.textContent = computerScore;
    }

    
 if(playerScore ===winScore){
    alert("🥂🎊 CONGRATULATIONS! YOU WON THE GAME!");
    resetGame();
 }
 
    if(computerScore ===winScore){
        alert("😞💻 COMPUTER WINS! BETTER LUCK NEXT TIME!");
        resetGame();
    }
}


 function resetGame(){
    playerScore=0;
    computerScore=0;

    playerscoreDisplay.textContent = playerScore;
    computerscoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
 }