//setting up audio effects
const gameStartAudio = new Audio("https://streetfighter2ttt.com/resources/audio/bgm/vs-screen-bgm-low.mp3")
,backgroundMusic = new Audio("https://vgmsite.com/soundtracks/street-fighter-2-turbo/ioknnojn/05.%20Ken%20Stage.mp3")
,youWin = new Audio("https://streetfighter2ttt.com/resources/audio/round/you-win.mp3")
,youLose = new Audio("https://streetfighter2ttt.com/resources/audio/round/you-lose.mp3")
,attackAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/character/attack-audio.mp3")
,hitAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/character/hit-audio.mp3")
,challengerAudio = new Audio("https://vgmsite.com/soundtracks/street-fighter-2-turbo/iicfyvjk/04.%20Vs.mp3")

function modeHoverAudio() {
    let sound = new Audio("https://www.streetfighter2ttt.com/resources/audio/sfx/system/mode-hover.mp3");
    sound.play();  
}

export {gameStartAudio,backgroundMusic,youWin,youLose,attackAudio,hitAudio,challengerAudio,modeHoverAudio}