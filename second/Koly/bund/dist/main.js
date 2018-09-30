const loginPath = "http://localhost:3001/login";
const itemsPath = "http://localhost:3001/items?login=boris&password=12345";
const usersPath = "http://localhost:3001/users";
 const buyPath = "http://localhost:3001/buy";
function GetUsers(path){
   return fetch(path)
    .then(x => x.json())
    .then(x => x[0]);
    
};
function GetItems(path){
    return fetch(path)
    .then(x => x.json());
    
}
function CreateItem({id,name,price,desc,pic}){
    return `
        <div id="${id}" class="element">
        <div class="nameOfProduct">${name}</div>
        <img class="product" src="${pic}">
        <div class="price">${price} $</div>
        <div class="description"><p>${desc}</p></div>
        <input type="button" onclick="BuyItem()" value="BUY" class="byProduct">
    
    `;
}
function AppendItems(items){
    let cont = document.getElementById("items");
    items.forEach(element => {
        cont.innerHTML += element;
    });
}
function login(){
    const loginPath = "http://localhost:3001/login";
    const log = document.getElementById("login").value;
    return fetch(loginPath,{
        method: "POST",
        credentials: 'include',
        body: {
            login: log
        }
    })
    .then(x => {if((x.status == "200") && (x.ok == true)) alert("loged");})
}
function BuyItem(){

    return fetch(buyPath,{
        method: "POST",
        credentials: 'include',
        body: {
            itemId: this.id
            
        }
    })
    .then(x => {if((x.status == "200") && (x.ok == true)) alert("Buyed");});
    
}


GetUsers(usersPath);
GetItems(itemsPath)
.then(x => x.map(element => CreateItem(element)))
.then(x => AppendItems(x));

