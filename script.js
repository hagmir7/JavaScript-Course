// your first game Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame){
    // play
    let playerChoice = prompt("Plase enter rock, paper, or scissors.");
    if (playerChoice.length){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? 'paper' 
            : computerChoice === 3 ? 'scissors': "No Value"
        }else{
            alert("You didn't enter roock, paper, or scissors.")
        }
    }else{
        alert("I guess you changed your mind. Maybe nex time.")
    }
}else{
    alert("Ok, maybe next time." )
}




