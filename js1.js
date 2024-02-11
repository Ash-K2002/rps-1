let chances=0;
let maxchances=5;
//randomly generates computer choice
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

function playRound(playerSelection='')
{   chances+=1;
    let player=document.querySelector('#plr-scr');
    let computer=document.querySelector('#comp-scr');
    computerSelection=getComputerChoice();
playerSelection=playerSelection.toLowerCase();

if(computerSelection==playerSelection)
{ 
    console.log('draw');
}
if((computerSelection=='scissors' && playerSelection=='paper' )|| (computerSelection=='paper' && playerSelection=='rock')|| computerSelection=='rock' && playerSelection=='scissors')
{
console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
computer.textContent=(+computer.textContent)+1;

}
else{
     console.log(`You win! ${playerSelection} beats ${computerSelection}`);
     player.textContent=(+player.textContent)+1;
}

check();

}



// event listeners for each button

const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const btn3=document.querySelector('#btn3');
const btnAll=document.querySelectorAll('.play-btn');

btn1.addEventListener('click',()=>{playRound('Rock')});
btn2.addEventListener('click',()=>{playRound('Paper')});
btn3.addEventListener('click',()=>{playRound('Scissors')});


// resets scores and chances and displays buttons again
document.querySelector('#reset').addEventListener('click',()=>{chances=0;
    let player=document.querySelector('#plr-scr');
    let computer=document.querySelector('#comp-scr');
             computer.textContent=0;
             player.textContent=0;
              btnAll.forEach(btn => {
                btn.style.display="inline";
              });  
              document.querySelector('#result').textContent='';
            });

//this function will check if 5 chances are played
function check(){
if(chances>=maxchances)
{
    let player=document.querySelector('#plr-scr');
    let computer=document.querySelector('#comp-scr');
    //displays result
    if(+player.textContent > +computer.textContent)
    {
        document.querySelector('#result').textContent='player wins';
    }
    else if(+player.textContent < +computer.textContent)
    {
        document.querySelector('#result').textContent='computer wins';
    }
    else{
        document.querySelector('#result').textContent='draw';
    }
    //hides player buttons
btnAll.forEach((btn)=>{
    btn.style.display="none";
}
);
    
}
}