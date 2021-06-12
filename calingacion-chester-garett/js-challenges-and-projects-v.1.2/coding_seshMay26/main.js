//const fetch = require("node-fetch");
//fetch("https://jsonplaceholder.typicode.com/users")
//.then((res) => res.json())
//.then((data) => data.forEach((object) =>
//    console.log(`${object.name} email at ${object.email}`))
//)
const fetch = require("node-fetch");
async function getJoke(){
    let jokeStatus = new Promise((resolve, reject) =>{
            fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data =>console.log(data.value));
            
    })
    let result = await jokeStatus;
    console.log(result);
}

getJoke();
