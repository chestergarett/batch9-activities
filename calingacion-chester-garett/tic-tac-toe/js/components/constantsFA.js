//fight arena
const optionDefault = document.querySelector('.option-default'),
optionCity = document.querySelector('.option-city'),
optionRoad = document.querySelector('.option-road'),
optionContra = document.querySelector('.option-contra'),
optionForest = document.querySelector('.option-forest'),
optionUnderwater = document.querySelector('.option-underwater'),
optionSunset = document.querySelector('.option-sunset'),
optionBridge = document.querySelector('.option-bridge'),
selectPane = document.querySelector(".select-pane"),
body = document.getElementsByTagName('body')[0],
arenaName = document.getElementById('arena-name'),
slider = document.querySelector(".players .slider"),
buttons = document.querySelectorAll(".btn button"),
disabledColor = 'darkgrey',
charSelectedAudio = new Audio("https://streetfighter2ttt.com/resources/audio/sfx/system/char-selected.mp3");

//input type const
const playerXname = document.getElementById("player-x-name"),
playerYname = document.getElementById("player-y-name")

//countdown const in fightArena
const timeLeftDisplay = document.querySelector('#time-left')

export {optionDefault,optionCity,optionRoad,optionContra,optionForest,optionUnderwater,optionSunset,optionBridge
        ,selectPane,body,arenaName,slider,buttons,disabledColor,charSelectedAudio
        ,timeLeftDisplay
        ,playerXname,playerYname
}