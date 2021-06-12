var store = {
    name: 'VARIETY STORE',
    inventory: [],
    earnings: 0
}

var Book = function(title, quantity, value){
    this.title = title
    this.quantity = quantity
    this.value = value
}

//addbook
function addBook(title,quantity,value){
    book = new Book(title,quantity,value)
    store.inventory.push(book)
}

//restockBook
function restockBook(title,quantity){
    store.inventory.forEach( item => {
        if(title==item.title){
            quantity+=book.quantity;
            console.log(`restocked ${title} by ${quantity}. Now we have a total of ${book.quantity}`)
        }else{
            console.log('could not find book!')
        }
    })    
}

//sellBook
function sellBook(title,quantity){
    store.inventory.forEach( item => {
        if(item.title==title){
            if(item.quantity>=quantity){
                item.quantity-=quantity;
                store.earnings += item.value;
                let message = `Sold! ${title} at ${item.value} petot`
                console.log(message)
            }else{
               let message = `Only ${item.quantity} stocks left.`
               console.log(message)
           }
       }else{
           let message = `${title} out of stock`
           console.log(message)
       }
    })
}


//total earnings
function totalEarnings(){
    console.log(`${store.name} has ${store.earnings} profit!`)
}

//list inventory
function listInventory(){
    console.log(store.inventory)
}

 addBook('hp',1000, 300)
 restockBook('hp',2)
 sellBook('hp',800) 
 sellBook('hp',300)
 totalEarnings()
 listInventory()

//addBook('GOT',4000,400)
//restockBook('GOT', 300)
//sellBook('GOT', 200)
//totalEarnings()
//listInventory()
//console.log(store.inventory[0])
    