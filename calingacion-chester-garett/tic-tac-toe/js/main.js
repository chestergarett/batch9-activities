import {colorButton} from './fightArena.js';
//require = require('colorButton')(module)
//module.exports = require('./fightArena.js')

//selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
cells = document.querySelectorAll('.cell'),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll(".cell"),
//allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
prevBtn = document.getElementById("prevBtn"),
nextBtn = document.getElementById("nextBtn"),
replayBtn = document.getElementById("restartBtn"),
selectPane = document.querySelector(".select-pane"),
playerXname = document.getElementById("player-x-name"),
playerYname = document.getElementById("player-y-name"),
playerXblock = document.querySelector('.x-name-block'),
playerYblock = document.querySelector('.y-name-block')

let maxMovements

window.onload = ()=>{ //once window loaded
    for (let i = 0; i < allBox.length; i++) { //add onclick attribute in all available span
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    const timeLeftDisplay = document.querySelector('#time-left')
    let timeLeft = 2

    function countDown(){
        setInterval(function(){
            if(timeLeft <=0){
                clearInterval(timeLeft = 0)
                playBoard.classList.add("show"); //show the playboard section
                selectPane.style.display = 'none';
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        },1000)
    }
    
    selectBtnX.addEventListener('click', countDown)
    selectBtnO.addEventListener('click', countDown)
})

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide"); //hide select box
    selectPane.style.display = 'flex'; //show fight arena
    //playerYblock.style.opacity = '0'; //disable player Y form if you chose to be player X
    playerYname.disabled = true; //disable player Y form if you chose to be player X
    //playBoard.classList.add("show"); //show the playboard section
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide"); //hide select box
    selectPane.style.display = 'flex';
    //playBoard.classList.add("show"); //show the playboard section
    players.setAttribute("class", "players active player"); //set class attribute in players with players active player values
    //playerXblock.style.opacity = '0'; //disable player X form if you chose to be player X
    playerXname.disabled = true; //disable player X form if you chose to be player X
}


let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon
let playerSign = "X"; //this is a global variable beacuse we've used this variable inside multiple functions
let runBot = true; //this also a global variable with boolen value..we used this variable to stop the bot once match won by someone or drawn
let move = 0 
let moveHistory = [
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''}
];

// user click function
function clickedBox(element){
    move+=1;
    if(players.classList.contains("player")){
        playerSign = "O"; //if player choose (O) then change playerSign to O
        element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked element/box
        players.classList.add("active"); ///add active class in players
        element.setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
        element.classList.add("move"+move); ///add move
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element/box
        players.classList.add("active"); //add active class in players
        element.setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
        element.classList.add("move"+move); ///add move
    }
    element.style.pointerEvents = "none"; //once user select any box then that box can'be clicked again
    playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard so user can't immediately click on any other box until bot select
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed(); //generating random number so bot will randomly delay to select unselected box
    setTimeout(()=>{
        bot(); //calling bot function
    }, randomTimeDelay); //passing random delay value
    
    //log movements to element
    let assignedClass = element.className
    let assignedIndex = assignedClass.slice(assignedClass.length - 7).split('')[0]-1
    moveHistory[assignedIndex].move = move
    moveHistory[assignedIndex].sign = playerSign
    maxMove() //count the maximum move
    selectWinner(); //calilng selectWinner function
}

// bot auto select function
function bot(){
    let array = []; //creating empty array...we'll store unclicked boxes index
    move++;
    if(runBot){ //if runBot is true
        playerSign = "O"; //change the playerSign to O so if player has chosen X then bot will O
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){ //if the box/span has no children means <i> tag
                array.push(i); //inserting unclicked boxes number/index inside array
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)]; //getting random index from array so bot will select random unselected box
        if(array.length > 0){ //if array length is greater than 0
            if(players.classList.contains("player")){ 
                playerSign = "X"; //if player has chosen O then bot will X
                botSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside bot selected element
                players.classList.remove("active"); //remove active class in players
                allBox[randomBox].setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
                allBox[randomBox].classList.add("move"+move); ///add move
            }else{
                botSign = "O";
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside bot selected element
                players.classList.remove("active"); //remove active class in players
                allBox[randomBox].setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
                allBox[randomBox].classList.add("move"+move); ///add move
            }
            selectWinner(); //calling selectWinner function
        }
        allBox[randomBox].style.pointerEvents = "none"; //once bot select any box then user can't click on that box
        playBoard.style.pointerEvents = "auto"; //add pointerEvents auto in playboard so user can again click on box
        playerSign = "X"; //if player has chosen X then bot will be O right then we change the playerSign again to X so user will X because above we have changed the playerSign to O for bot

        //log movements to element
        moveHistory[randomBox].move = move
        moveHistory[randomBox].sign = botSign
    }
    maxMove(); //count the maximum move    
}

function getIdVal(classname){
    return document.querySelector(".box" + classname).id; //return id value
}

let playerName;

function checkIdSign(val1, val2, val3, sign){ //checking all id value is equal to sign (X or O) or not if yes then return true
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}

function selectWinner(){ //if the one of following winning combination match then select the winner
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false; //passing the false boolen value to runBot so bot won't run again
        bot(); //calling bot function
        setTimeout(()=>{ //after match won by someone then hide the playboard and show the result box after 700ms
            resultBox.classList.add("show");
            prevBtn.classList.add("show");
            nextBtn.classList.add("show");   
        }, 700); //1s = 1000ms
        if(playerSign=='X'){
            if (playerXname.value === ''){
                playerName = 'Player X';    
            }
            else{
                playerName = playerXname.value;
            }
        }
        else{
            if (playerYname.value === ''){
                playerName = 'Player Y';    
            }
            else{
                playerName = playerYname.value;
            }
        }
        wonText.innerHTML = `<span style="color:yellow">${playerName}</span> &nbsp; won the game!`; //displaying winning text with passing playerSign (X or O)
    }else{ //if all boxes/element have id value and still no one win then draw the match
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false; //passing the false boolen value to runBot so bot won't run again
            bot(); //calling bot function
            setTimeout(()=>{ //after match drawn then hide the playboard and show the result box after 700ms
                resultBox.classList.add("show");
                prevBtn.classList.add("show");
                nextBtn.classList.add("show");
            }, 700); //1s = 1000ms
            wonText.textContent = "Match has been drawn!"; //displaying draw match text
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload(); //reload the current page on replay button click
}

////////  PHASE 2 //////////
//clear table div
function clearBoard(){
    cells.forEach((cell) =>{
        cell.innerHTML =''
    })
}

//assign new array in moveHistory
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
    cells.forEach((cell)=>{
        if(cell.className.includes('move')){
            let cellMove = cell.className.slice(cell.className.length-1)
            if(cellMove == previousMove){
                cell.innerHTML = '';
            }
        }
    })
    previousMove-=1;
    if (previousMove<=0){
        prevBtn.disabled =true;
        //prevBtn.style.visibility = 'visible';
        //prevBtn.style.visibility = 'visible';
    }
    else{
        nextBtn.disabled = false;
        nextBtn.style.background = colorButton;
        //nextBtn.style.visibility = 'visible';
    }
}

//function nextMove()
function nextMove(){
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
        if(previousMove == maxMovements){
            nextBtn.disabled = true;
            //style
            //nextBtn.style.visibility = 'hidden';
        }
        else{
            nextBtn.disabled = false;
            prevBtn.disabled = false;
            //nextBtn.style.visibility = 'visible';
            //prevBtn.style.visibility = 'visible';
        }
    })
    console.log(previousMove)
}

prevBtn.addEventListener('click', prevMove, false)
nextBtn.addEventListener('click',nextMove, false)

