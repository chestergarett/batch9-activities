import {resultBox,prevBtn,nextBtn,tallyBox,playerSign,playerName,loserName,lastSign} from './constantsGame.js'
import {playerXname,playerYname} from './constantsFA.js'
import {backgroundMusic} from './effects_audio.js'


// ***************************************** MAIN FUNCTIONS *************************************************************** //

function selectWinner(){ //if the one of following winning combination match then select the winner
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false; 
        bot(); 
        lastSign = playerSign 
        setTimeout(()=>{ 
            domWinner()            
        }, 700); 
        textWinnerX();
        textWinnerO();
        audioWinner();
        wonText.innerHTML = `<span style="color:yellow; padding-right: 15px">${playerName}</span>won the game!`; 
        tallyText.innerHTML = `<span style="color:yellow; padding-right: 15px">${loserName}</span>was beaten in ${maxMovements} moves!`
        resetWinner();
    }else{ //if all boxes/element have id value and still no one win then draw the match
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false; 
            bot(); 
            setTimeout(()=>{ 
                domWinner()
            }, 700); 
            wonText.textContent = "Match has been drawn!"; 
            tallyText.textContent = "Play again to determine the real champion!" 
            resetWinner();
        }
    }
}

// ************************************ SUB FUNCTIONS ******************************************************************* //
function getIdVal(classname){
    return document.querySelector(".box" + classname).id; //return id value
}

function checkIdSign(val1, val2, val3, sign){ //checking all id value is equal to sign (X or O) or not if yes then return true
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}

function domWinner(){
    resultBox.classList.add("show");
    prevBtn.classList.add("show");
    nextBtn.classList.add("show");
    tallyBox.classList.add("show");
    backgroundMusic.pause();
}

function textWinnerX(){
    if(playerSign=='X'){
        if (playerXname.value === '')
        {playerName = opponentBot ? 'Player Bot' : 'Player X';}
        else{playerName = playerXname.value;}
        if (playerYname.value === '')
        {loserName =  opponentBot ? 'Player Bot' : 'Player O';}
        else{loserName = playerYname.value;}
    }
}

function textWinnerO(){
    if(playerSign=='O'){
        if (playerYname.value === '')
        {playerName =  opponentBot ? 'Player Bot' : 'Player O';}
        else{playerName = playerYname.value;}
        if (playerXname.value === '')
        {loserName = opponentBot ? 'Player Bot' : 'Player X';}
        else{loserName = playerXname.value;}
    }
}

function audioWinner(){
    if(playerDefault===lastSign){
        backgroundMusic.pause();
        youWin.play();
    }else{
        backgroundMusic.pause();
        youLose.play();
    }
}

function resetWinner(){
    nextBtn.disabled = true;
    nextBtn.style.background = disabledColor;
    nextBtn.style.cursor = 'not-allowed';
    prevBtn.disabled = false;
    prevBtn.style.background = colorButton;
    prevBtn.style.cursor = 'pointer';
    playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard 
    cells.forEach((cell)=>{
        cell.style.pointerEvents = 'none';
    })
}



export {selectWinner}