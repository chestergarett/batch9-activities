//constant variables
const allBox = document.querySelectorAll(".cell"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
cells = document.querySelectorAll('.cell'),
prevBtn = document.getElementById("prevBtn"),
nextBtn = document.getElementById("nextBtn"),
replayBtn = document.getElementById("restartBtn"),
playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
tallyBox = document.querySelector('.tally-box'),
tallyText = document.querySelector('.tally-text'),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
quickModal = document.querySelector('.quick-modal'),
quickModalbg = document.querySelector('.quick-modal-bg');

//tictactoe logic main variables
 
let playerSign = "X"; 
let opponentBot = true; 
let runBot = true; 
let move = 0 
let moveHistory = [
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''},
    {move:'',sign:''}, {move:'',sign:''}, {move:'',sign:''}
];

export {allBox,playBoard,cells,players
        ,opponentBot,runBot,botSign
        ,move,moveHistory
        ,playerTurn,playerSign,playerXIcon,playerOIcon,maxMovements, playerName, loserName,lastSign, previousMove,player2
        ,prevBtn, nextBtn,replayBtn,resultBox,tallyBox,wonText,tallyText
        ,quickModal, quickModalbg}