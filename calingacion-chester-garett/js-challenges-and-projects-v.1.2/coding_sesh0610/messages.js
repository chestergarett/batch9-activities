const messages = {
    addMessage(name,quantity){
        console.log(`${quantity} pieces of ${name} was added`)
    },
    restockMessage(name){
        console.log(`Can't restock because ${name} item was not found.`)
    },
    sellMessage_1(name,left){
        console.log(`The item ${name} has only ${left} units left`)
    },
    sellMessage_2(name){
        console.log(`The item ${name} has no units left.`)
    },
    sellMessage_3(name){
        console.log(`Please find another store, we are not selling ${name}.`)
    },
    sellMessage_4(name,quantity){
        console.log(`Successfully sold ${quantity} units of ${name}`)
    }
}

export {messages};