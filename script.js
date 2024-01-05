console.log("Hello")

function getComputerChoice() {
    const ramdonNumber = Math.floor(Math.random() * 3);
    let choice;
    console.log(ramdonNumber);
    switch (ramdonNumber) {
        case 0:
            choice = "Rock"
            break;
        case 1:
            choice = "Paper"
            break;
        case 2:
            choice = "Scissors"
            break;
    
    }
    console.log("this is the choice: "+choice)
    return choice;
    
};
 

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                console.log("You Lost!!")
                return "You Lose! Paper beats Rock";
            } else if(computerSelection == "scissors"){
                console.log("You Won!!")
                return "You Won! Rock beats scissors";
            } else{
                console.log("It was a Draw")
                return "It was a Draw";
            }
            break;
        case "paper":
            if (computerSelection == "scissors") {
                console.log("You Lost")
                return "You Lose! scissors beats paper";
                
            } else if(computerSelection == "rock"){
                console.log("You Won!!")
                return "You Won! paper beats rock";
            } else{
                console.log("It was a Draw")
                return "It was a Draw";
            }
            break;
        case "scissors":
            if (computerSelection == "rock") {
                console.log("You Lost")
                return "You Lose! rock beats scissors";
            } else if(computerSelection == "paper"){
                console.log("You Won!!")
                return "You Won! scissors beats paper";
            } else{
                console.log("It was a Draw")
                return "It was a Draw";
            }
            break;
        
    }
    
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    
    while (playerWins < 3 && computerWins < 3) {
        console.log("Player wins :"+playerWins);
        console.log("Player loses"+computerWins);
        const playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
        const computerSelection = getComputerChoice().toLocaleLowerCase();
        let resoult = playRound(playerSelection, computerSelection);

        if (resoult.includes("You Lose!")) {
            computerWins++
        }else if(resoult.includes("You Won!")){
            playerWins++
        }
        
       
    }

    if (playerWins == 3 ) {
        console.log("You won the game ")
    } else{console.log("You lost the game")}

}

game()