import {Item,Store} from './utils.js'
  

class Book extends Item {}  
class BookStore extends Store {
    constructor(name,parentStore){
        super(name)
        this.parentStore = parentStore
    }
    
    addBook(title, quantity, price) {
        super.addItem(new Book(title, quantity, price));
    }

    sellBook(title, quantity) {
        super.sellItem(title, quantity);
    }
    
    restockBook(title, quantity) {
        super.restockItem(title, quantity);
    }
}

class Laptop extends Item {}
class LaptopStore extends Store {
    addLaptop(model, quantity, price) {
        super.addItem(new Laptop(model, quantity, price));
    }

    sellLaptop(model, quantity) {
        super.sellItem(model, quantity);
    }

    restockLaptop(model, quantity) {
        super.restockItem(model, quantity);
    }
}

let parentCo = new Store('Parent Company')
let nbs = new BookStore('Fully Booked', parentCo),
hp = nbs.addBook('HP', 50, 1000),
fiftyShades = nbs.addBook('50 shades', 50, 2000),
hpSold = nbs.sellBook('HP', 20),
hpSold2 = nbs.sellBook('HP', 50),
homeBuddiesSold = nbs.sellBook('HomeBuddies', 100)
console.log(nbs)
console.log(parentCo)