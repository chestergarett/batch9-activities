//selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
cells = document.querySelectorAll('.cell'),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
playArea = document.querySelector("play-area"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll(".cell"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
prevBtn = document.getElementById("prevBtn"),
nextBtn = document.getElementById("nextBtn"),
replayBtn = document.getElementById("restartBtn"),
selectPane = document.querySelector(".select-pane"),
playerXname = document.getElementById("player-x-name"),
playerYname = document.getElementById("player-y-name"),
playerXblock = document.querySelector('.x-name-block'),
playerYblock = document.querySelector('.y-name-block'),
xSlider = document.querySelector('.Xturn'),
oSlider = document.querySelector('.Oturn'),
tallyBox = document.querySelector('.tally-box'),
tallyText = document.querySelector('.tally-text'),
blinkArea = document.querySelector('.blink_me'),
quickModal = document.querySelector('.quick-modal'),
quickModalbg = document.querySelector('.quick-modal-bg')
//fight arena
const optionDefault = document.querySelector('.option-default'),
optionCity = document.querySelector('.option-city'),
optionRoad = document.querySelector('.option-road'),
optionContra = document.querySelector('.option-contra'),
optionForest = document.querySelector('.option-forest'),
optionUnderwater = document.querySelector('.option-underwater'),
optionSunset = document.querySelector('.option-sunset'),
optionBridge = document.querySelector('.option-bridge'),
body = document.getElementsByTagName('body')[0],
arenaName = document.getElementById('arena-name'),
slider = document.querySelector(".players .slider"),
buttons = document.querySelectorAll(".btn button"),
disabledColor = 'darkgrey'

//assigning null default values
let colorButton, maxMovements, playerName, loserName, playerXNameScreen, playerYNameScreen, playerDefault, playerTurn, lastSign
//tictactoe logic main variables
let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon
let playerSign = "X"; //this is a global variable beacuse we've used this variable inside multiple functions
let opponentBot = true; //to determine whether opponent is bot or person
let runBot = true; //this also a global variable with boolen value..we used this variable to stop the bot once match won by someone or drawn
let move = 0 
let moveHistory = [
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''}
];

////////////////////////set theme color /////////////////////////////////////////////////////
//in case player did not choose theme
buttons.forEach((button)=>{
    if(!button.disabled){
        button.style.background = '#333';
        colorButton = '#333';
    }
})

//applying theme colors
optionDefault.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/pixel-bg2.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'SKY CASTLE';
    arenaName.style.color = 'yellow';
    slider.style.background = '#56baed';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#56baed';
            colorButton = '#56baed';
        }
    })
})

optionCity.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/city.gif)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'METRO MANILA';
    arenaName.style.color = 'yellow';
    slider.style.background = '#00178b';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#00178b';
            colorButton = '#00178b';
        }
    })
})

optionContra.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/contra.gif)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'CONTRA 4';
    arenaName.style.color = 'yellow';
    slider.style.background = '#00b300';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#00b300';
            colorButton = '#00b300';
        }
    })
})

optionRoad.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/cityroad.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'CITY DRIVE';
    arenaName.style.color = 'yellow';
    slider.style.background = '#333';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#333';
            colorButton = '#333';
        }
    })
})

optionForest.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/forest.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'LAND OF DAWN';
    arenaName.style.color = 'yellow';
    slider.style.background = '#00b300';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#00b300';
            colorButton = '#00b300';
        }
    })
})

optionUnderwater.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/underwater.png)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'FEEDING FRENZY';
    arenaName.style.color = 'yellow';
    slider.style.background = '#2162e3';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#2162e3';
            colorButton = '#2162e3';
        }
    })
})

optionSunset.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/sunset.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'MALIBU SUNSET';
    arenaName.style.color = 'yellow';
    slider.style.background = '#FF6666';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#FF6666';
            colorButton = '#FF6666';
        }
    })
})

optionBridge.addEventListener('click', function(){
    charSelectedAudio.play();
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/bridge.png)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'ILOG PASIG';
    arenaName.style.color = 'yellow';
    slider.style.background = '#a65ba6';
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = '#a65ba6';
            colorButton = '#a65ba6';
        }
    })
})


//main game code//
window.onload = ()=>{ //once window loaded
    for (let i = 0; i < allBox.length; i++) { //add onclick attribute in all available span
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
    backgroundMusic.play()
    backgroundMusic.loop= true;
}

//setting timer
const timeLeftDisplay = document.querySelector('#time-left')
let timeLeft = 15

function countDown(){
    setInterval(function(){
        if(timeLeft <=0){
            if(timeLeft == 0){
                gameStartAudio.play();
                backgroundMusic.pause();
            }
            clearInterval(timeLeft = 0)
            playBoard.classList.add("show"); //show the playboard section
            selectPane.style.display = 'none';
            //to change blinking text
            if(!opponentBot){
                changeBlinkMe()
            } 
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    },1000);
}

function resetCountDown(){
    timeLeft = 15;
    backgroundMusic.play();
}

selectBtnX.onclick = ()=>{
    modeHoverAudio();
    countDown();
    selectBox.classList.add("hide"); //hide select box
    selectPane.style.display = 'flex'; //show fight arena
    playerYname.disabled = true; //disable player Y form if you chose to be player X
    blinkArea.innerHTML = '<span>Insert coin & challenge opponent now!</span>'
    playerDefault = 'X'; //assign variable to determine what the player has chosen: to use to access when a challenger enters battle
}

selectBtnO.onclick = ()=>{ 
    modeHoverAudio();
    countDown();
    selectBox.classList.add("hide"); //hide select box
    selectPane.style.display = 'flex';
    players.setAttribute("class", "players active player"); //set class attribute in players with players active player values
    playerXname.disabled = true; //disable player X form if you chose to be player X
    blinkArea.innerHTML = '<span>Insert coin & challenge opponent now!</span>'
    playerDefault = 'O'; //assign variable to determine what the player has chosen: to use to access when a challenger enters battle
}


// user click function
function clickedBox(element){
    move+=1;
    hitAudio.play()
    backgroundMusic.play()
    if((players.classList.contains("player") && opponentBot) || playerTurn=="O"){
        playerSign = "O"; //if player choose (O) then change playerSign to O
        element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked element/box
        if (opponentBot){
            players.classList.remove("active"); ///add active class in players
        }
        else{
            players.classList.remove("active"); ///add active class in players
        } 
        element.setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
        element.classList.add("move"+move); ///add move
    }else{
        playerSign ="X"; //if player choose (X) then change playerSign to X
        element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element/box
        if (opponentBot){
            players.classList.add("active"); //add active class in players
        }
        else{
            players.classList.remove("active"); ///add active class in players
        }
        element.setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
        element.classList.add("move"+move); ///add move
    }
    element.style.pointerEvents = "none"; //once user select any box then that box can'be clicked again
    playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard so user can't immediately click on any other box until bot select
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed(); //generating random number so bot will randomly delay to select unselected box
    if (opponentBot){
        setTimeout(()=>{
            bot(); //calling bot function
        }, randomTimeDelay); //passing random delay value
    }else{
        swapTurns();
    }
    //log movements to element
    let assignedClass = element.className
    let assignedIndex = assignedClass.slice(assignedClass.length - 7).split('')[0]-1
    moveHistory[assignedIndex].move = move
    moveHistory[assignedIndex].sign = playerSign
    
    maxMove() //count the maximum move
    selectWinner(); //calling selectWinner function
}

//function swapClass
function swapTurns(){
    if(playerSign == 'X'){
        playerTurn = 'O';
        players.classList.add('active');
    }
    else{
        playerTurn = 'X'
        players.classList.remove('active');
    }
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
                players.classList.add("active"); //remove active class in players
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



function checkIdSign(val1, val2, val3, sign){ //checking all id value is equal to sign (X or O) or not if yes then return true
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}

function selectWinner(){ //if the one of following winning combination match then select the winner
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false; //passing the false boolen value to runBot so bot won't run again
        bot(); //calling bot function
        lastSign = playerSign //determine the lastSign of the winner
        setTimeout(()=>{ //after match won by someone then hide the playboard and show the result box after 700ms
            resultBox.classList.add("show");
            prevBtn.classList.add("show");
            nextBtn.classList.add("show");
            tallyBox.classList.add("show");
        }, 700); //1s = 1000ms
        if(playerSign=='X'){
            if (playerXname.value === ''){
                playerName = opponentBot ? 'Player Bot' : 'Player X';  //assigning default name to winning player
            }
            else{
                playerName = playerXname.value; //get winning player name
            }
            if (playerYname.value === ''){
                loserName =  opponentBot ? 'Player Bot' : 'Player O';  //assigning default name to losing player
            }
            else{
                loserName = playerYname.value; //get losing player name
            }
        }
        else{
            if (playerYname.value === ''){
                playerName =  opponentBot ? 'Player Bot' : 'Player O';  
            }
            else{
                playerName = playerYname.value;
            }
            if (playerXname.value === ''){
                loserName = opponentBot ? 'Player Bot' : 'Player X';  //assigning default name to losing player
            }
            else{
                loserName = playerXname.value; //get losing player name
            }
        }
        if(playerDefault===lastSign){
            backgroundMusic.pause();
            youWin.play();
        }else{
            backgroundMusic.pause();
            youLose.play();
        }
        wonText.innerHTML = `<span style="color:yellow; padding-right: 15px">${playerName}</span>won the game!`; //displaying winning text with passing playerSign (X or O)
        tallyText.innerHTML = `<span style="color:yellow; padding-right: 15px">${loserName}</span>was beaten in ${maxMovements} moves!`
        playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard 
        cells.forEach((cell)=>{
            cell.style.pointerEvents = 'none';
        })
    }else{ //if all boxes/element have id value and still no one win then draw the match
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false; //passing the false boolen value to runBot so bot won't run again
            bot(); //calling bot function
            setTimeout(()=>{ //after match drawn then hide the playboard and show the result box after 700ms
                resultBox.classList.add("show");
                prevBtn.classList.add("show");
                nextBtn.classList.add("show");
                tallyBox.classList.add("show");
                backgroundMusic.pause();
            }, 700); //1s = 1000ms
            wonText.textContent = "Match has been drawn!"; //displaying draw match text
            tallyText.textContent = "Play again to determine the real champion!" //displaying draw match text
            playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard 
            cells.forEach((cell)=>{
                cell.style.pointerEvents = 'none';
            })
        }
    }
}

//clear table div
function clearBoard(){
    cells.forEach((cell) =>{
        cell.innerHTML =''; //reset innerHTML elements
        cell.style.pointerEvents = "auto"; //once user select any box then that box can'be clicked again
        cell.removeAttribute('id'); //remove Id attributes
        let cellClassList = cell.classList //remove move class attributes
        cellClassList.forEach((assignedClass)=>{
            if(assignedClass.startsWith('move')){
                cell.classList.remove(assignedClass)
            }
        })
    })
    playBoard.style.pointerEvents = "auto"; //add pointerEvents none to playboard so user can't immediately click on any other box until bot select
    moveHistory = [
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
        {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''}
    ]; //reset move history
    move = 0 //reset move count
    previousMove = 0; //reset previous move count;
    runBot = true; //reset bot
    players.classList.remove("active"); ///reset active class in players
}


function resetGame(){
    //window.location.reload();
    resetCountDown();
    selectPane.style.display = 'flex'; //show fight arena
    selectBox.classList.add("hide"); //hide select box
    playBoard.classList.remove("show"); //show the playboard section
    resultBox.classList.remove("show");
    prevBtn.classList.remove("show");
    nextBtn.classList.remove("show");
    tallyBox.classList.remove("show");
    if(playerDefault=='X'){
        playerXname.disabled = true;
        playerXname.style.background = disabledColor;
        playerXname.style.cursor = 'not-allowed'
    }else{
        playerYname.disabled = true;
        playerYname.style.background = disabledColor;
        playerYname.style.cursor = 'not-allowed'
    }
    clearBoard();
    opponentBot = true;
    if(player2){
        playerSign = playerDefault;
    }
    player2 = false;
}

////////  PHASE 2 //////////


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
    playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard so user can't immediately click on any other box until bot select
}

//function nextMove()
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
    })
    playBoard.style.pointerEvents = "none"; //add pointerEvents none to playboard so user can't immediately click on any other box until bot select
}

prevBtn.addEventListener('click', prevMove, false)
nextBtn.addEventListener('click',nextMove, false)
replayBtn.addEventListener('click', resetGame, false)

/// FOR MULTIPLAYER - PLAY WITH NO BOT BUT WITH A FRIEND ///

function changeBlinkMe(){
    playerYNameScreen = (playerYname.value == '') ? 'Player Y': playerYname.value
    playerXNameScreen = (playerXname.value == '') ? 'Player X': playerXname.value
    blinkArea.style.background = colorButton;
    blinkArea.style.padding = '5px';
    blinkArea.style.borderRadius = '10px';
    if(playerDefault === 'X'){
        blinkArea.innerHTML = `${playerYNameScreen} has challenged ${playerXNameScreen}!`
    }else{
        blinkArea.innerHTML = `${playerXNameScreen} has challenged ${playerYNameScreen}!`
    }
}

function challengerAnimation(){
    quickModalbg.style.display = 'block';
    quickModal.style.display = 'block';
    quickModal.classList.add('zoomer');
    quickModal.style.background = colorButton;
    setTimeout(function(){
        $('.quick-modal').fadeOut('fast');
        $('.quick-modal-bg').fadeOut('fast');
    },2000)
    backgroundMusic.pause()
    challengerAudio.play()
}
let player2;
function enablePlayer2(){
    resetGame();
    changeBlinkMe();
    challengerAnimation();
    opponentBot = false;
    if(playerDefault==='X'){
        playerYname.disabled = false;
    }
    else{
        playerXname.disabled = false;
    }
    player2 = true;
}

blinkArea.addEventListener('click',enablePlayer2, {once: true})


//APPLYING SPECIAL EFFECTS

const charSelectedAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/system/char-selected.mp3");
const gameStartAudio = new Audio("https://streetfighter2ttt.com/resources/audio/bgm/vs-screen-bgm-low.mp3");
const backgroundMusic = new Audio("https://vgmsite.com/soundtracks/street-fighter-2-turbo/ioknnojn/05.%20Ken%20Stage.mp3")
const youWin = new Audio("https://streetfighter2ttt.com/resources/audio/round/you-win.mp3");
const youLose = new Audio("https://streetfighter2ttt.com/resources/audio/round/you-lose.mp3");
const attackAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/character/attack-audio.mp3");
const hitAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/character/hit-audio.mp3");
const challengerAudio = new Audio("https://vgmsite.com/soundtracks/street-fighter-2-turbo/iicfyvjk/04.%20Vs.mp3")

function modeHoverAudio() {
    let sound = new Audio("https://www.streetfighter2ttt.com/resources/audio/sfx/system/mode-hover.mp3");
    sound.play();  
}