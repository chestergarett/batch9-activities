import {backgroundMusic,modeHoverAudio} from './effects_audio.js';
import {selectBox,blinkArea} from './constantsIntro.js';
import {selectPane,playerXname,playerYname} from './constantsFA.js';
import {allBox,players} from './constantsGame.js';
import {countDown} from './countdownFA.js';

let playerDefault

// *************** MAIN FUNCTIONS **************************************** //

function domBtnX(){
    commonIntro();
    playerYname.disabled = true; 
    playerDefault = 'X'; 
}

function domBtnO(){ 
    commonIntro();
    players.setAttribute("class", "players active player"); //set class attribute in players with players active player values
    playerXname.disabled = true; 
    playerDefault = 'O'; 
}

function triggerOnLoad(){
    backgroundMusic.play()
    backgroundMusic.loop= true;
}

// *************** SUB FUNCTIONS ***************************************** //

function commonIntro(){
    modeHoverAudio();
    countDown();
    blinkArea.innerHTML = '<span>Insert coin & challenge opponent now!</span>'
    selectBox.classList.add("hide"); //hide select box
    selectPane.style.display = 'flex'; //show fight arena
}

export {triggerOnLoad,domBtnX,domBtnO,playerDefault};