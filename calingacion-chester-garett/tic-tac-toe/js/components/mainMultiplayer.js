import {players,quickModalbg,quickModal,nextBtn,prevBtn} from './constantsGame.js'
import {playerYname, playerXname} from './constantsFA.js'
import {playerDefault,playerSign,playerTurn,opponentBot,player2} from './mainGame.js'
import {backgroundMusic,challengerAudio} from './effects_audio.js'


//************************** MAIN FUNCTIONS ******************************************//
//function multiplayer
function enablePlayer2(){
    resetGame();
    changeBlinkMe();
    challengerAnimation();
    opponentBot = false;
    textPlayer2()
    player2 = true;
    stylesPlayer2();
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


// *************************** SUB FUNCTIONS ************************************//
function challengeAudio(){
    backgroundMusic.pause()
    challengerAudio.play()
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
    challengeAudio();
}

function textPlayer2(){
    if(playerDefault==='X')
    {playerYname.disabled = false;}
    else
    {playerXname.disabled = false;}
}

function stylesPlayer2(){
    nextBtn.disabled = true;
    nextBtn.style.background = disabledColor;
    nextBtn.style.cursor = 'not-allowed';
    prevBtn.disabled = false;
    prevBtn.style.background = colorButton;
    prevBtn.style.cursor = 'pointer';
}


export {swapTurns,enablePlayer2}