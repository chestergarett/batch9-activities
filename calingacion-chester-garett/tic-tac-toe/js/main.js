// ************************************************************************************ //
// *************** Intro Page Event Listeners & Triggers ****************************** //
// ************************************************************************************ //

import {selectBtnX,selectBtnO} from './components/constantsIntro.js'
import {triggerOnLoad,domBtnX,domBtnO} from './components/mainIntro.js'
import {allBox} from './components/constantsGame.js'
import {triggerBoard} from './components/mainGame.js'


selectBtnX.addEventListener('click',domBtnX)
selectBtnO.addEventListener('click',domBtnO)

// ************************************************************************************ //
// *************** Fight Arena Event Listeners & Triggers ***************************** //
// ************************************************************************************ //

//importing fight arena constants
import {optionDefault,optionCity,optionRoad,optionContra
    ,optionForest,optionUnderwater,optionSunset,optionBridge} from './components/constantsFA.js'
    
//importing fight arena components
import {defaultButtonColor
    ,optionDefaultDOM,optionCityDOM,optionRoadDOM,optionContraDOM
    ,optionForestDOM,optionUnderwaterDOM,optionSunsetDOM,optionBridgeDOM } from './components/mainFA.js';

//reset to default color after multiple clickss
defaultButtonColor()

//event listeners for individual arenas
optionDefault.addEventListener('click', optionDefaultDOM)

optionCity.addEventListener('click', optionCityDOM)

optionContra.addEventListener('click', optionContraDOM)

optionRoad.addEventListener('click', optionRoadDOM)

optionForest.addEventListener('click', optionForestDOM)

optionUnderwater.addEventListener('click', optionUnderwaterDOM)

optionSunset.addEventListener('click', optionSunsetDOM)

optionBridge.addEventListener('click', optionBridgeDOM)

// ************************************************************************************ //
// *************** Main Tic Tac Toe                       ***************************** //
// ************************************************************************************ //


prevBtn.addEventListener('click', prevMove, false)
nextBtn.addEventListener('click',nextMove, false)
replayBtn.addEventListener('click', resetGame, false)
blinkArea.addEventListener('click',enablePlayer2, {once: true})

