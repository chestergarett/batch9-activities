//import DOM elements of FIGHT ARENA DIV
import {body,arenaName,slider,buttons,charSelectedAudio} from './constantsFA.js';

//import constant LABELS,COLORS & IMAGES of FIGHT ARENAS
import {optionDefaultColor,optionCityColor,optionRoadColor,optionContraColor
    ,optionForestColor,optionUnderwaterColor,optionSunsetColor,optionBridgeColor,defaultColor
    ,optionDefaultLabel,optionCityLabel,optionRoadLabel,optionContraLabel,optionForestLabel
    ,optionUnderwaterLabel,optionSunsetLabel,optionBridgeLabel
    ,optionDefaultImg,optionCityImg,optionRoadImg,optionContraImg
    ,optionForestImg,optionUnderwaterImg,optionSunsetImg,optionBridgeImg
} from './effects_colorsLabels.js'

//refactored
let colorButton;

//setting up button color 
function defaultButtonColor(){
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = defaultColor;
            colorButton = defaultColor;
        }
    })
}

//deploying in function uniform dom manipulation for fight arena
function domEffects(){
    charSelectedAudio.play();
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.style.color = 'yellow';
}

//fight arena divs
function optionDefaultDOM(){
    body.style.background = optionDefaultImg;
    arenaName.innerHTML = optionDefaultLabel;
    slider.style.background = optionDefaultColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionDefaultColor;
            colorButton = optionDefaultColor;
        }
    })
    domEffects();
}

function optionCityDOM(){
    body.style.background = optionCityImg;
    arenaName.innerHTML = optionCityLabel;
    slider.style.background = optionCityColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionCityColor;
            colorButton = optionCityColor;
        }
    })
    domEffects()
}

function optionRoadDOM(){
    body.style.background = optionRoadImg;
    arenaName.innerHTML = optionRoadLabel;
    slider.style.background = optionRoadColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionRoadColor;
            colorButton = optionRoadColor
        }
    })
    domEffects();
}

function optionContraDOM(){
    body.style.background = optionContraImg;
    arenaName.innerHTML = optionContraLabel;
    slider.style.background = optionContraColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionContraColor;
            colorButton = optionContraColor;
        }
    })
    domEffects();
}

function optionForestDOM(){
    body.style.background = optionForestImg;
    arenaName.innerHTML = optionForestLabel;
    slider.style.background = optionForestColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionForestColor;
            colorButton = optionForestColor;
        }
    })
    domEffects();
}

function optionUnderwaterDOM(){
    body.style.background = optionUnderwaterImg;
    arenaName.innerHTML = optionUnderwaterLabel;
    slider.style.background = optionUnderwaterColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionUnderwaterColor;
            colorButton = optionUnderwaterColor;
        }
    })
    domEffects();
}

function optionSunsetDOM(){
    body.style.background = optionSunsetImg;
    arenaName.innerHTML = optionSunsetLabel;
    slider.style.background = optionSunsetColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionSunsetColor;
            colorButton = optionSunsetColor;
        }
    })
    domEffects();
}

function optionBridgeDOM(){
    body.style.background = optionBridgeImg;
    arenaName.innerHTML = optionBridgeLabel;
    slider.style.background = optionBridgeColor;
    buttons.forEach((button)=>{
        if(!button.disabled){
            button.style.background = optionBridgeColor;
            colorButton = optionBridgeColor;
        }
    })
    domEffects();
}

export {defaultButtonColor
    ,optionDefaultDOM,optionCityDOM,optionRoadDOM,optionContraDOM
    ,optionForestDOM,optionUnderwaterDOM,optionSunsetDOM,optionBridgeDOM
    ,colorButton};