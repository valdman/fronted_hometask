//impport {createElements()} from "./another";
function someFunc(){
    if (document.getElementById("txt").value) {
        alert("Hello, " + document.getElementById("txt").value);
    }
}
const itemsRequest = () =>{
    fetch ("http://localhost:3001/items")
    .then(res => res.json())
    .then(res => console.log(createElements(res)))
    .then(res => console.log(appendElements(res)))
}

itemsRequest();

/*const ParseItems = (res) => {
   
    let itemsArray = [];
    res.map(({id, name, price, desc}) =>{
        itemsArray.push(
        `<div id="${id}" class="item_box">
            <h3 class="item_title">${name}</h3>
            <img src="inb6ja.jpg" width="150" height="161">
            <p>Цена: <span class="item_price">${price}</span>$</p>
            <p class="description">${desc}</p>
            <button class="add_item" data-id="7">Добавить в корзину</button>
        </div>`
        )
    });
    console.log(itemsArray);
    return itemsArray;
}

function appendItems(itemsArray){
    itemsArray.map(item => {
        document.getElementById("goods").innerHTML += item;
    })
}*/

function createElements(items) {
    let elems = items.reduce((result, {pic, name, desc, price}) => { //Try to .map that shit
       result.push(`
          <div class="item">
             <div class="img-wrapper">
                <img src="${pic}" alt="" class="item-img">
             </div>
             <div class="text-wrapper">
                <h3 class="name">${name}</h3>
                <p class="description">${desc}</p>
                <span class="price">Price: ${price}$</span>
             </div>
             <button class="buy">buy</button>
          </div>
       `)
 
       return result;
    }, []);
 
    return elems;
 }
 
function appendElements(elems) {
    let wrapper = document.getElementById('item-wrapper');
 
    elems.map((elem) => {
       wrapper.innerHTML += elem;
    })
 }