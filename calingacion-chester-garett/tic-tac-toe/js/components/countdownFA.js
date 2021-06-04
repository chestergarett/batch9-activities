import {timeLeftDisplay,selectPane} from './constantsFA.js'
import {playBoard,opponentBot} from './constantsGame.js'
import {backgroundMusic,gameStartAudio} from './effects_audio.js'
import {changeBlinkMe} from './effects_blinkMe.js'

let timeLeft = 15

// ****************************** MAIN FUNCTION ************************************* //
//countdown function in fight arena page
function countDown(){
    setInterval(function(){
        if(timeLeft <=0){
            if(timeLeft == 0){audioCountDown()}    
            if(!opponentBot){changeBlinkMe()} //to change blinking text
            clearInterval(timeLeft = 0)
            domCountDown()
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    },1000);
}

//resetting countdown when resetting game
function resetCountDown(){
    timeLeft = 15;
    backgroundMusic.play();
}
//setting timer

//*************************** SUB FUNCTIONS ************************************** //
//audio effects in countdown
function audioCountDown(){
    gameStartAudio.play();
    backgroundMusic.pause();
}

//dom manipulation when countdown ends
function domCountDown(){
    playBoard.classList.add("show"); //show the playboard section
    selectPane.style.display = 'none';
}


export {countDown, resetCountDown};