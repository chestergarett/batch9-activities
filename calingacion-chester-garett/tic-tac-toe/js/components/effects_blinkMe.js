import {playerYname,playerXname} from './constantsFA.js'
import {blinkArea} from './constantsIntro.js'
import {playerDefault} from './mainIntro.js'
import {colorButton} from './mainFA.js'

let playerXNameScreen, playerYNameScreen

// ******************** MAIN FUNCTIONS ************************************* //

function changeBlinkMe(){
    playerYNameScreen = (playerYname.value == '') ? 'Player Y': playerYname.value;
    playerXNameScreen = (playerXname.value == '') ? 'Player X': playerXname.value;
    domBlinkMe();
    textBlinkMe();
}

// ******************** SUB FUNCTIONS **************************************//
function domBlinkMe(){
    blinkArea.style.background = colorButton;
    blinkArea.style.padding = '5px';
    blinkArea.style.borderRadius = '10px';
}

function textBlinkMe(){
    if(playerDefault === 'X'){
        blinkArea.innerHTML = `${playerYNameScreen} has challenged ${playerXNameScreen}!`
    }else{
        blinkArea.innerHTML = `${playerXNameScreen} has challenged ${playerYNameScreen}!`
    }
}



export {changeBlinkMe}