const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

function moveRobot() {
    //add code here
    var val = (parseInt(robot.style.left,10) || 0) +100;
    robot.style.left = val +'px';     

    //robot.style.left += '50px'
}



robot.addEventListener('click', moveRobot)
