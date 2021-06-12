const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
let buyListDisplay = document.querySelector('#first-list')
let fridgeListDisplay = document.querySelector('#second-list')

let buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
let fridge = []



//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push('smirnoff', 'the bar', 'san mig apple', 'heineken', 'soju')

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
buyList.shift();
fridge.push('chicharon');

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge
//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    buyList.push(fridge.shift())
    if (fridge.length==0){
        upButton.disabled = true;
        downButton.disabled = false;
    }
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

upButton.addEventListener('click', moveUp)


//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    fridge.push(buyList.shift())
    console.log(buyList.length)
    if (buyList.length==0){
        downButton.disabled = true;
        upButton.disabled = false;
    }
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

downButton.addEventListener('click', moveDown)

document.addEventListener('keydown', function(e){
    switch (e.which){
        case 38:
            moveUp();
        case 40:
            moveDown();
    }
    console.log(e.which);
})





