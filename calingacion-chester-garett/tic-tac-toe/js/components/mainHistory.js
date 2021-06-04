import { moveHistory,maxMovements,previousMove,prevBtn,nextBtn,
        playBoard,cells, playerXIcon, playerOIcon} from "./constantsGame.js ";
import {attackAudio} from "./effects_audio.js";

// ************************************* MAIN FUNCTIONS ***************************************************//
//get maximum moves of game
function maxMove(){
    let maxMoves  = [];
    moveHistory.forEach( (cell) => {
        maxMoves.push(cell.move)
    })
    maxMovements = Math.max(...maxMoves)
    previousMove = maxMovements
}

//previous move
function prevMove(){    
    attackAudio.play()
    cells.forEach((cell)=>{
        if(cell.className.includes('move')){
            let cellMove = cell.className.slice(cell.className.length-1)
            if(cellMove == previousMove){
                cell.innerHTML = '';
            }
        }
    })
    previousMove-=1;
    domPrevious();    
    playBoard.style.pointerEvents = "none"; 
}

//function nextMove
function nextMove(){
    attackAudio.play()
     previousMove+=1
     cells.forEach((cell)=>{
        if(cell.className.includes('move')){
            let cellMove = cell.className.slice(cell.className.length-1)
            if(cellMove == previousMove){
                if (cell.id=='X'){
                    cell.innerHTML = `<i class="${playerXIcon}"></i>`;
                }
                else{
                    cell.innerHTML = `<i class="${playerOIcon}"></i>`;
                }
            }
        }
    })
    domNext();
    playBoard.style.pointerEvents = "none"; 
}


// *************************** SUB FUNCTIONS ************************************************* //

function domPrevious(){
    if (previousMove<=0){
        prevBtn.disabled =true;
        prevBtn.style.background = disabledColor;
        prevBtn.style.cursor = 'not-allowed';
        nextBtn.disabled = false;
        nextBtn.style.background = colorButton;
        nextBtn.style.cursor = 'pointer';
    }
    else{
        nextBtn.disabled = false;
        nextBtn.style.background = colorButton;
        nextBtn.style.cursor = 'pointer';
        prevBtn.disabled = false;
        prevBtn.style.background = colorButton;
        prevBtn.style.cursor = 'pointer';
    }
}

function domNext(){
    if(previousMove == maxMovements){
        nextBtn.disabled = true;
        nextBtn.style.background = disabledColor;
        nextBtn.style.cursor = 'not-allowed';
        prevBtn.disabled = false;
        prevBtn.style.background = colorButton;
        prevBtn.style.cursor = 'pointer';
    }
    else{
        nextBtn.disabled = false;
        nextBtn.style.background = colorButton;
        nextBtn.style.cursor = 'pointer';
        prevBtn.disabled = false;
        prevBtn.style.background = colorButton;
        prevBtn.style.cursor = 'pointer';
    }
}


export {maxMove, prevMove, nextMove}