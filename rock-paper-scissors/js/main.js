console.log("hiwegweg");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[getRandomInt(3)];
  }


function getPlayerChoice(round){
    let input = prompt(`Round ${round} What weapon do you pick?`);
    input = input.toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors" ){
        return input;
    }
    console.log("wtf did you pick?");
    
}

function selectWinner(playerPick, computerPick){
    //0 = draw, 1 = win, 2 = lose
    if (playerPick === "rock"){
        if (computerPick === "rock"){
            return 0;
        }
        else if (computerPick === "scissors"){
            return 1;
        }
        else if (computerPick === "paper"){
            return 2
        }

    }
    else if (playerPick === "scissors"){
        if (computerPick === "rock"){
            return 2;
        }
        else if (computerPick === "scissors"){
            return 0;
        }
        else if (computerPick === "paper"){
            return 1;
        }

    }
    else if (playerPick === "paper"){
        if (computerPick === "rock"){
            return 1;
        }
        else if (computerPick === "scissors"){
            return 2;
        }
        else if (computerPick === "paper"){
            return 0;
        }

    }
}

function printWinner(score){
    if(score === 0){
        console.log("TIE");
    }else if(score === 1){
        console.log("You win!");
    }
    else if(score === 2){
        console.log("You lose");
    }
}


function play(round){
    let winCount = 0;
    let tieCount = 0;
    let loseCount = 0;

    for (let roundCount = 1; roundCount <= round; roundCount++) {
        console.log(`ROUND ${roundCount}. FIGHT!`);
        let computerPick = getComputerChoice();
        let playerPick = getPlayerChoice(roundCount);
        console.log(`Opponent has picked ${computerPick}`);
        console.log(`You have picked ${playerPick}`);
        let  x = selectWinner(playerPick, computerPick);
        printWinner(x);
        if(x === 0){
            tieCount +=1;
        }else if(x === 1){
            winCount +=1;
        }
        else if(x === 2){
            loseCount +=1;
        }
    }
    console.log(`Final score is ${winCount}W - ${loseCount}L - ${tieCount}D`);


}

play(5);



