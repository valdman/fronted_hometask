export function createElements(items) {
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
 
 export function appendElements(elems) {
    let wrapper = document.getElementById('item-wrapper');
 
    elems.map((elem) => {
       wrapper.innerHTML += elem;
    })
 }