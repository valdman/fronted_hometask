export function createElements(items) {
   return items.reduce((result, {pic, name, desc, price, id}) => {
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
            <button class="buy" data-id="${id}">buy</button>
         </div>
      `)

      return result;
   }, []);
}

export function appendElements(elems) {
   let wrapper = document.getElementById('item-wrapper');

   elems.map((elem) => {
      wrapper.innerHTML += elem;
   })

   return document.getElementsByClassName('buy');
}

export function addButtonHandlers(buttons) {
   Array.from(buttons).map((button) => {
      button.addEventListener('click', () => {
         fetch('http://localhost:3001/buy', {
            method: 'POST',
            credentials: "include",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({
               itemId: button.getAttribute('data-id')
            })
         })
         .then((res) => console.log(res.status))
      })
   })
}