class Player{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
    
    greeting(){
        console.log(`${this.name} was born in ${this.country}.`)
    }
}

class BasketballPlayer extends Player{
    constructor(name, age){
        super(name);
        this.age = age;
    }

    greeting(){
        console.log(`${this.name} is ${this.age} years old and is a flopper.`)
    }
}

let player = new Player('Conor', 'Ireland')
let bball = new BasketballPlayer('Lebron James', 34)
player.greeting()
bball.greeting()

