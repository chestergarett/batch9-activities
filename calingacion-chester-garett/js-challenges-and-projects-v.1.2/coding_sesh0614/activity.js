//Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
// it should always log those two in order regardless of their timing
//Refactor inOrder to use promises.

async function inOrder(one, two) {
    await one();
    await two();
}

function logOne(){
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(console.log("one!"));
        }, 
        Math.random() * 1000);    
    });
}

function logTwo(){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(console.log("two!"));
        }, 
        Math.random() * 1000);    
    });
}


inOrder(logOne, logTwo);

  