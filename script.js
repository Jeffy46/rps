let humanScore=0;
let computerScore=0;
let humanChoice;
let computerChoice;

//random int from 1 to 3 decides computer choice
let getComputerChoice=()=>{
    let rand=Math.floor((Math.random()*3)+1);
    if(rand==1){
        return "rock";
    }else if(rand==2){
        return "paper";
    }else{
        return "scissor";
    }
}

//gets human choice
let getHumanChoice=()=>{
    return (prompt("Human Choice: ").toLowerCase());
}

//plays a round and increments score
let playRound=(humanChoice,computerChoice)=>{

    let tieMessage=`It's a tie! ${humanChoice} does nothing to ${computerChoice}`;
    let winMessage=`Since ${humanChoice} beats ${computerChoice}, human gets a point!`;
    let loseMessage=`Since ${humanChoice} loses to ${computerChoice}, computer gets a point!`;

    if(humanChoice ===  ("rock") && computerChoice === ("rock") 
        || humanChoice === ("paper") && computerChoice === ("paper") 
        || humanChoice === ("scissor") && computerChoice === ("scissor")){
        console.log(tieMessage);
    }else if(humanChoice === ("rock") && computerChoice === ("scissor") 
        || humanChoice === ("scissor") && computerChoice === ("paper") 
        || humanChoice === ("paper") && computerChoice ===  ("rock") ){
            humanScore++;
            console.log(winMessage);
    }else{
        computerScore++;
        console.log(loseMessage);
    }
    console.log(`Score is ${humanScore} - ${computerScore}`)
}

//plays a game with five rounds
let playGame=()=>{
    for(let i =0;i<5;i++){
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    if(humanScore<computerScore){
        console.log(`Computer wins with a score of ${computerScore} to the your score of ${humanScore}.`)
    }else if(humanScore>computerScore){
        console.log(`You win with a score of ${humanScore} to the computers score of ${humanScore}.`)
    }else{
        console.log(`Its a tie with a score of ${humanScore} to ${computerScore}`)
    }
}
playGame();