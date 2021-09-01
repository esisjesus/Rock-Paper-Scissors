let userScore = 0
let computerScore = 0 
// THE COMPUTER CHOOSES ITS WEAPON
function computerPlay(){
    let weapon = ['rock','paper','scissors']
    let selection = Math.floor(Math.random() * (3 - 0) + 0)

    return weapon[selection]
}

// CHECK WHO WON THE ROUND
function playRound(){
    let computerSelection = computerPlay()
    let userSelection = prompt("Choose your weapon for this round (Type rock, paper or scisssors)").toLowerCase()
    if(computerSelection == userSelection ){
        "Tie!"
    }else{
        checkWinner(computerSelection, userSelection)
    }
}
function checkWinner(a, b){
    if(a == "paper" && b == "rock"){
        computerScore++
        return "You lost! Paper beat Rock"
    }else if(a == "rock" && b == "paper"){
        userScore++
        a == "rock" && b == "paper"
    }else if(a == "scissors" && b == "paper"){
        computerScore++
        return "You lost! Scissors beat Paper"
    }else if(a == "paper" && b == "scissors"){
        userScore++
        return "You won! Scissors beat Paper"
    }else if(a == "rock" && b == "scissors"){
        computerScore++
        return "You lost! Rock beat Scissors"
    }else if(a == "scissors" && b == "rock"){
        userScore++
        return "You won! Rock beat Scissors"
    }else{
        return "Oh sorry, it seems like " + b + " isn't a legal weapon for this game, pick again!"
    }
}
function winnerAlready(){
    if(userScore >= 5){
        userScore = 0
        computerScore = 0
        return "Congratulations you won the game!"
    }
    if(computerScore >= 5){
        userScore = 0
        computerScore = 0
        return "Sorry, you lost the game :("
    }
    if(computerScore < 5 && userScore < 5){
        return false
    }
}

// FINAL GAME 
function game(){
    let winner;
    do {
        playRound()
        winner = winnerAlready()
    } while (winner === false );
}

