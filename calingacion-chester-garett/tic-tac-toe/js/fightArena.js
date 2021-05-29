optionDefault = document.querySelector('.option-default')
optionCity = document.querySelector('.option-city')
optionRoad = document.querySelector('.option-road')
optionContra = document.querySelector('.option-contra')
optionForest = document.querySelector('.option-forest')
optionUnderwater = document.querySelector('.option-underwater')
optionSunset = document.querySelector('.option-sunset')
optionBridge = document.querySelector('.option-bridge')
body = document.getElementsByTagName('body')[0]
//prevBtn = document.getElementById("prevBtn"),
//nextBtn = document.getElementById("nextBtn"),
//replayBtn = document.getElementById("restartBtn")
arenaName = document.getElementById('arena-name')
slider = document.querySelector(".players .slider")
buttons = document.querySelectorAll(".btn button")
let colorButton

optionDefault.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/pixel-bg2.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'SKY CASTLE';
    arenaName.style.color = 'yellow';
})

optionCity.addEventListener('click', function(){
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
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/contra.gif)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'CONTRA 4';
    arenaName.style.color = 'yellow';
    slider.style.background = '#00b300';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#00b300';
            colorButton = '#00b300';
        }
    })
})

optionRoad.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/cityroad.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'CITY DRIVE';
    arenaName.style.color = 'yellow';
    slider.style.background = '#999999';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#999999';
            colorButton = '#999999';
        }
    })
})

optionForest.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/forest.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'LAND OF DAWN';
    arenaName.style.color = 'yellow';
    slider.style.background = '#00b300';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#00b300';
            colorButton = '#00b300';
        }
    })
})

optionUnderwater.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/underwater.png)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'FEEDING FRENZY';
    arenaName.style.color = 'yellow';
    slider.style.background = '#2162e3';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#2162e3';
            colorButton = '#2162e3';
        }
    })
})

optionSunset.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/sunset.jpg)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'MALIBU SUNSET';
    arenaName.style.color = 'yellow';
    slider.style.background = '#FF6666';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#FF6666';
            colorButton = '#FF6666';
        }
    })
})

optionBridge.addEventListener('click', function(){
    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.501), rgba(0,0,0,0.501)), url(images/bridge.png)";
    body.style.backgroundPosition =  'center';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    arenaName.innerHTML = 'ILOG PASIG';
    arenaName.style.color = 'yellow';
    slider.style.background = '#a65ba6';
    buttons.forEach((button)=>{
        console.log(!button.disabled)
        if(!button.disabled){
            button.style.background = '#a65ba6';
            colorButton = '#a65ba6';
        }
    })
})

export {colorButton}
