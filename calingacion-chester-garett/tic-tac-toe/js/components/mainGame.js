import {playBoard,move,players,opponentBot,playerTurn,playerSign,playerOIcon,playerXIcon} from './constantsGame.js'
import {bot} from './mainBot.js'
import {maxMove, selectWinner} from './mainWinner.js'
import {hitAudio,backgroundMusic} from './effects_audio.js'


// ********************** MAIN FUNCTION ****************************************** //
function clickedBox(element){
    move+=1;
    if((players.classList.contains("player") && opponentBot) || playerTurn=="O"){
        playerSign = "O"; 
        element.innerHTML = `<i class="${playerOIcon}"></i>`; 
        editClassListO();
    }else{
        playerSign ="X"; 
        element.innerHTML = `<i class="${playerXIcon}"></i>`; 
        editClassListX();
    }
    editClassListCommon();
    effectsOnClick();
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed(); //generating random number so bot will randomly delay to select unselected box
    if (opponentBot){
        setTimeout(()=>{
            bot();
        }, randomTimeDelay); 
    }else{
        swapTurns();
    }
    logHistory();
    maxMove() //count the maximum move
    selectWinner(); //calling selectWinner function
}

// ****************** SUBFUNCTIONS *****************************************//
function editClassListO(){
    if (opponentBot)
    {players.classList.remove("active");}
    else
    {players.classList.remove("active");} 
}

function editClassListX(){
    if (opponentBot)
    {players.classList.add("active");}
    else
    {players.classList.remove("active");}
}

function editClassListCommon(){
    element.setAttribute("id", playerSign); 
    element.classList.add("move"+move); 
}

function effectsOnClick(){
    hitAudio.play()
    backgroundMusic.play()
    element.style.pointerEvents = "none"; 
    playBoard.style.pointerEvents = "none"; 
}

function logHistory(){
    //log movements to element
    let assignedClass = element.className
    let assignedIndex = assignedClass.slice(assignedClass.length - 7).split('')[0]-1
    moveHistory[assignedIndex].move = move
    moveHistory[assignedIndex].sign = playerSign
}
// ****************************************************************************//

export{clickedBox}