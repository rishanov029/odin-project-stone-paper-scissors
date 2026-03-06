const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const computerscoreDisplay=document.getElementById("computerscoreDisplay");
let playerScore=0;
let computerScore=0;



function playGame(playerChoice){

    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if (playerChoice===computerChoice){
        result="ohohh,IT'S A TIE!!!!";
    }
    else{
        switch(playerChoice){
            case"rock":
            result=(computerChoice==="scissors") ? "yehhh buddy, YOU WIN!!!" : "ohoo no!!!, YOU LOSE!!!";
            break;
            case"paper":
            result=(computerChoice==="rock") ? "yehhh buddy, YOU WIN!!!" : "ohoo no!!!, YOU LOSE!!!";
            break;
            case"scissors":
            result=(computerChoice==="paper") ? "yehhh buddy, YOU WIN!!!" : "ohoo no!!!, YOU LOSE!!!";
            break;

    }
    }

    playerDisplay.textContent =`PLAYER: ${playerChoice}`;
    computerDisplay.textContent =`computer: ${computerChoice}`;
    resultDisplay.textContent =result;

    resultDisplay.classList.remove("greenText","redText");
    
    switch(result){
        case "yehhh buddy, YOU WIN!!!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerscoreDisplay.textContent=playerScore;
        break;  
        case "ohoo no!!!, YOU LOSE!!!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerscoreDisplay.textContent=computerScore;
        break;
    }

}