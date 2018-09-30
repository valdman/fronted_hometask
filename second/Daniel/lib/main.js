// var objPeople = ["Daniel", "Juan", "Alberto"]
// var login = false; 
// function input_Sender(){
//     var Username = document.getElementById("input_catcher").value; 
//     for(i=0; i<objPeople.length; i++){
//         if(objPeople[i] == `${Username}`){
//         login = true; 
//           return  alert(`you succesfully logged in ${Username}`); 
            
//         } 
//     }
//     login = true; 
//     objPeople.push(Username);
//     return alert(`You succesfully signed up ${Username}`);
// }; 

function click_buy(){
    if(login){
        alert("Saved on your shopping cart");
    }
}

const itemsRequest = () => {
    fetch("http://localhost:3001/items")
    .then(res => res.json())
    .then(res => ParseItems(res))
    .then(res => console.log(res))
} 
