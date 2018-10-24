const loginPath = "http://localhost:3001/login";
const itemsPath = "http://localhost:3001/items?login=boris&password=12345";
const usersPath = "http://localhost:3001/users";
const buyPath = "http://localhost:3001/buy";


export function GetItems(){
    return fetch(itemsPath)
    .then(x => x.json())
}
export function login(value){
    return fetch(loginPath,{
        method: "POST",
        credentials: 'include',
        body: {
            login: value
        }
    })
    .then(x => {if((x.status == "200") && (x.ok == true)) return true;});
}



export function BuyItem_(id){
    return fetch(buyPath,{
        method: "POST",
        credentials: 'include',
        body: {
            itemId: id 
        }
    })
    
};