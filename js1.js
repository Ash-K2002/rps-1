console.log("welcome player");
function getComputerChoice()
{  let result='';
    switch (Math.floor(Math.random()*3)) {
    case 0:
        result='rock';
        break;
    case 1: 
        result='paper';
        break; 
    default:
        result='scissors';
        break;
}
    return result;
}

function playRound(playerSelection='', computerSelection)
{
playerSelection=playerSelection.toLowerCase();
if(playerSelection=='paper' || playerSelection=='scissors' || playerSelection=='rock'){
if(computerSelection==playerSelection)
{
    return `It is a tie, computer chose ${computerSelection}, you chose ${playerSelection}`;
}
if((computerSelection=='scissors' && playerSelection=='paper' )|| (computerSelection=='paper' && playerSelection=='rock')|| computerSelection=='rock' && playerSelection=='scissors')
{
return `You lose! ${computerSelection} beats ${playerSelection}`;
}
else{
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
}
return 'Invalid entry';
}

function playGame()
{   let playerChoice='', computerChoice='';
    for(let i=0;i<5;i++){
    playerChoice=prompt('please enter your choice');
    computerChoice=getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    }

}