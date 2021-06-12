let userData = {firstName: 'test1', age: 4, email: 'abc@test1.com'}


const findUserData = (userData) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(userData){
                resolve(userData)
            } else {
                reject('Sorry, bukas nalang please')
            }
        }, 1000)

    })
}

//console.log(typeof userData)
findUserData(userData).then((success) => console.log(success)).catch((error) => console.log(error))
findUserData(null).then((success) => console.log(success)).catch((error) => console.log(error))
