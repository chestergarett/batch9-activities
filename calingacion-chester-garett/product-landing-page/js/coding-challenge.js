var codingChallege = document.getElementById('coding-challenge') //user story 1
var sections = document.getElementsByTagName('section'); //user story 2

codingChallege.textContent = 'modifying text'; //user story 3
codingChallege.style.color = 'red'; //user story 4

var button = document.createElement('button');  //user story 5
var div = document.createElement('div') 
var footer = document.getElementsByTagName('footer')[0];
button.addEventListener('click', sayHi); 

var counter = 0 //user story 6
function sayHi(){
    counter += 1;
    alert(counter);
}

div.appendChild(button);
footer.appendChild(div);



//styling the button for clarity
button.style.padding = '1rem';
button.textContent = 'coding challenge click me';
button.style.margin = '10px';

console.log(codingChallege)
console.log(sections)
