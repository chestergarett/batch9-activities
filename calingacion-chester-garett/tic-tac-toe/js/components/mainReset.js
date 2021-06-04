import {moveHistory,previousMove,playBoard
        ,runBot,players,cells,player2
        ,resultBox, tallyBox, prevBtn, nextBtn,opponentBot} from './constantsGame.js'
import {selectPane,playerXname,playerYname} from './constantsFA.js'
import {selectBox} from './constantsIntro.js'
import {playerDefault} from './mainIntro.js'
import {playerSign} from './mainGame.js'

// **************************** MAIN FUNCTIONS ************************************************* //

function resetGame(){
    resetCountDown();
    classListClear();
    buttonResets()
    clearBoard();
    playerReset();
}


// ************************* SUBFUNCTIONS ***************************************************** //
function domCellClear(){
    cell.innerHTML =''; //reset innerHTML elements
    cell.style.pointerEvents = "auto";
    cell.removeAttribute('id'); //remove Id attributes
}

function arrayClear(){
    moveHistory = [
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''}
    ]; //reset move history
    move = 0 //reset move count
    previousMove = 0; //reset previous move count;
}

function domCommonClear(){
    playBoard.style.pointerEvents = "auto"; 
    runBot = true; //reset bot
    players.classList.remove("active"); ///reset active class in players
}
//clear table div
function clearBoard(){
    cells.forEach((cell) =>{
        domCellClear();        
        let cellClassList = cell.classList //remove move class attributes
        cellClassList.forEach((assignedClass)=>{
            if(assignedClass.startsWith('move')){
                cell.classList.remove(assignedClass)
            }
        })
    })
    arrayClear();
    domCommonClear();
}

function classListClear(){
    selectPane.style.display = 'flex'; //show fight arena
    selectBox.classList.add("hide"); //hide select box
    playBoard.classList.remove("show"); //show the playboard section
    resultBox.classList.remove("show");
    prevBtn.classList.remove("show");
    nextBtn.classList.remove("show");
    tallyBox.classList.remove("show");
}

function buttonResets(){
    if(playerDefault=='X'){
        playerXname.disabled = true;
        playerXname.style.background = disabledColor;
        playerXname.style.cursor = 'not-allowed'
    }else{
        playerYname.disabled = true;
        playerYname.style.background = disabledColor;
        playerYname.style.cursor = 'not-allowed'
    }
}

function playerReset(){
    opponentBot = true;
    if(player2){
        playerSign = playerDefault;
    }
    player2 = false;

}



export {resetGame};