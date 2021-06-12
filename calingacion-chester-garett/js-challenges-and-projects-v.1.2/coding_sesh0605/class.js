class Item {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
}
  
class Store {
    constructor(name) {
      this.name = name;
      this.list = [];
      this.earnings = 0;
    }
  
    findItem(name) {
      return this.list.find(item => item.name === name);
    }
  
    addItem(item) {
      this.list.push(item);
    }
  
    restockItem(name, quantity) {
      const item = this.findItem(name);
      if (item) {
        item.quantity += quantity;
      } else {
        console.log(`Item not found`);
      }
    }
  
    sellItem(name, quantity) {
      const item = this.findItem(name);
      if (item) {
        if (item.quantity < quantity) {
          console.log(`Insufficient stock`);
        } else if (item.quantity <= 0) {
          console.log(`${item.name} out of stock`);
        } else {
          item.quantity -= quantity;
          this.earnings += quantity * item.price;
        }
      } else {
        return console.log(`Go to another store`);
      }
    }
  
    totalEarnings() {
      console.log(`${this.name} has total earnings of $ ${this.earnings}`);
    }
  
    listInventory() {
      if (this.list.length <= 0) {
        console.log("No items");
      } else {
        this.list.forEach(item => {
          console.log(`${item.title}, ${item.quantity}, ${item.price}`);
        });
      }
    }
}

parentCo = new Store('Parent Company')

class Laptop extends Item {}
class Book extends Item {}
  
class BookStore extends Store {
    addBook(title, quantity, price) {
        parentCo.addItem(title,quantity,price);
        super.addItem(new Book(title, quantity, price));
    }

    sellBook(title, quantity) {
        parentCo.sellItem(title,quantity);
        super.sellItem(title, quantity);
    }
    
    restockBook(title, quantity) {
        parentCo.restockItem(title,quantity);
        super.restockItem(title, quantity);
    }
}

class LaptopStore extends Store {
    addLaptop(model, quantity, price) {
        parentCo.addItem(model,quantity,price);
        super.addItem(new Laptop(model, quantity, price));
    }
    sellLaptop(model, quantity) {
        parentCo.addItem(model,quantity);
        super.sellItem(model, quantity);
    }
    restockLaptop(model, quantity) {
        parentCo.restockItem(model,quantity);
        super.restockItem(model, quantity);
    }
}

nbs = new BookStore('Fully Booked')
hp = nbs.addBook('HP', 50, 1000)
fiftyShades = nbs.addBook('50 shades', 50, 2000)

hpSold = nbs.sellBook('HP', 20)
//homeBuddiesSold = nbs.sellBook('HomeBuddies', 100)
console.log(parentCo)