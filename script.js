let humanScore=0;
let computerScore=0;
let humanChoice;
let computerChoice;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const scores = document.querySelector("#makeHorizontal");
const displayedHScore = document.querySelector("#humanScore");
const displayedCScore = document.querySelector("#computerScore");
const message = document.querySelector("#winMessage");
//random int from 1 to 3 decides computer c
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
let setHumanChoice=(choice)=>{
    humanChoice=choice;
}
rock.addEventListener("click", () => setHumanChoice("rock"));
paper.addEventListener("click", () => setHumanChoice("paper"));
scissor.addEventListener("click", () => setHumanChoice("scissor"));

//plays a round and increments score
let playRound=()=>{
    console.log(humanChoice);
    computerChoice=getComputerChoice();
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
    displayedHScore.textContent="Your Score:" + humanScore;
    displayedCScore.textContent="Computer Score: " + computerScore;
    scores.append(displayedHScore);
    scores.append(displayedCScore);
    if(humanScore==5 || computerScore==5){
        choices.forEach((choice)=>{
            choice.removeEventListener("click", playRound);
        });

       if(humanScore==5){
        message.textContent="You win!"
        }else{
        message.textContent="You lose!"
        } 
    }
    
}
//clicking choice starts a round
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click", playRound);
});

