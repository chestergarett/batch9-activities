var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

list = document.getElementById('league')

for (var i = 0; i<justiceLeague.length; i++){
    listElement = document.createElement('li')
    listElement.textContent = justiceLeague[i].name + ' has ' + justiceLeague[i].superpower
    list.appendChild(listElement) 
}

list.style.listStyleType = 'none'; 
list.style.display = 'flex';
list.style.justifyContent = 'center';
list.style.alignContent = 'center';
list.style.alignItems = 'center';
list.style.flexDirection = 'column';

console.log(list)
console.log(listElement)