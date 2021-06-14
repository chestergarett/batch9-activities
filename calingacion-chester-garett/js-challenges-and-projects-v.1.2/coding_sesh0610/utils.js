import {messages} from './messages.js'


class Item {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
}

const itemFunctions = {
    findItem(name) {
        return this.list.find(item => item.name === name);
      },
    
    addItem(item) {
        this.list.push(item);
        this.parentStore.list.push(item.name)
        messages.addMessage(item.name, item.quantity)
    },

    restockItem(name, quantity) {
        const item = this.findItem(name);
        if (item) {
          item.quantity += quantity;
        } else {
          messages.restockMessage(name)
        }
    },

    sellItem(name, quantity) {
        const item = this.findItem(name);
        if (item) {
          if (item.quantity < quantity) {
            messages.sellMessage_1(name,item.quantity)
          } else if (item.quantity <= 0) {
            messages.sellMessage_2(name)
          } else {
            item.quantity -= quantity;
            this.earnings += (quantity * item.price);
            this.parentStore.earnings += (item.price * quantity)
            messages.sellMessage_4(name,quantity)
          }
        } else {
            messages.sellMessage_3(name)
        }
    }
}

class Store {
    constructor(name) {
      this.name = name;
      this.list = [];
      this.earnings = 0;
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

Object.assign(Store.prototype, itemFunctions)

export {Item,Store} 