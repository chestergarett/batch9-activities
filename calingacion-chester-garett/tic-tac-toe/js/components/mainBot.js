import {move,runBot,playBoard,playerSign,allBox,botSign,players} from './constantsGame.js'

// ************************************* MAIN FUNCTIONS **************************************** //
function bot(){
    let array = [];
    move++;
    if(runBot){ //if runBot is true
        playerSign = "O";
        blankElements();
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){ //if array length is greater than 0
            if(players.classList.contains("player")){ 
                playerSign = "X";
                botSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`; 
                players.classList.add("active"); 
                editAttributesCommon();
            }else{
                botSign = "O";
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; 
                players.classList.remove("active"); 
                editAttributesCommon();
            }
            selectWinner(); //calling selectWinner function
        }
        disableBot();
        botHistory();
    }
    maxMove(); //count the maximum move    
}


// ************************************* SUB FUNCTIONS ***************************************** //
//bot auto select function
function blankElements(){
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0){ 
            array.push(i); 
        }
    }
}

function editAttributesCommon(){
    allBox[randomBox].setAttribute("id", playerSign); 
    allBox[randomBox].classList.add("move"+move); 
}

function disableBot(){
    allBox[randomBox].style.pointerEvents = "none"; 
        playBoard.style.pointerEvents = "auto"; 
        playerSign = "X"; 
}

function botHistory(){
    //log movements to element
    moveHistory[randomBox].move = move
    moveHistory[randomBox].sign = botSign
}

export {bot}