//setting up variables
const X_CLASS = 'x' 
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let boardArray = []
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const previousButton = document.getElementById('previousButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
console.log(cellElements)
//assign turns
let circleTurn

startGame()

//restart button functionality
restartButton.addEventListener('click', startGame)
//previous button functionality
previousButton.addEventListener('click', undo)

function undo(){
    let previousBoard = boardArray[boardArray.length-2]
    console.log(previousBoard)
    board.parentNode.replaceChild(previousBoard, board)
}

previousButton.addEventListener('click', undo)

//parameters to start the game
function startGame(){
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

//parameters to click the grid
function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
   //placeMark
    placeMark(cell, currentClass)
   //check for Win
   if (checkWin(currentClass)){
    endGame(false)
    //check for Draw
   }else if(isDraw()){
       endGame(true)
    //Switch Turns
   }else{
       swapTurns()
       setBoardHoverClass()
   }
   boardArray.push(board)
   console.log(boardArray)
}

//parameters to define endgame
function endGame(draw){
    if (draw){
        winningMessageTextElement.innerText = 'Draw!'
    }
    else{
        winningMessageTextElement.innerText = `${circleTurn ? "0's": "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

//parameters to determine draw
function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS)
    })
}

//parameters to assign the class in the grid
function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

//parameter to swap turn
function swapTurns(){
    circleTurn = !circleTurn
}

//parameter to determine class during hover
function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}

//parameter to check condition if it has already won
function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}





