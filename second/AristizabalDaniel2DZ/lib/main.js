
var objPeople = ["Daniel", "Juan", "Alberto"]
var login = false; 
function input_Sender(){
    var Username = document.getElementById("input_catcher").value; 
    for(i=0; i<objPeople.length; i++){
        if(objPeople[i] == `${Username}`){
        login = true; 
          return  alert(`you succesfully logged in ${Username}`); 
            
        } 
    }
    login = true; 
    objPeople.push(Username);
    return alert(`You succesfully signed up ${Username}`);
}; 

function click_buy(){
    if(login){
        alert("Saved on your shopping cart");
    }
}

const serverLink = "http://localhost:3001/items";

fetch(serverLink)
.then(res => res.json())
.then(res => prepare(res))
.then(results => Paste(results))
.catch(() => console.log("Fetch process error"));

    function prepare(pages){
    const Results = []; 
    pages.map(({id, name, price, pic}) => { 
       Results.push({id , name, price, pic});
       
    });
    return Results; 
    }

    function Paste(Results){
    var i = 0; 
    Results.map(({name,price, pic}) => { 
      document.getElementById(`product_title${i}`).innerHTML = name;
      document.getElementById(`product_price${i}`).innerHTML = `Price: ${price} Colombian pesos`;
      document.getElementById(`product_pic${i}`).innerHTML = `<a class="img"><img src="${pic}"></a>`;
      i++;
     });
     
    }

