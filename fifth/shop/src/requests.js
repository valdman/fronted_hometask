function makeLoginRequest(value) {
   return fetch('http://localhost:3001/login', {
      method: 'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json"
      },
      body: JSON.stringify({
         login: value
      })
   });
}

function makeBuyRequest(id) {
   return fetch("http://localhost:3001/buy", {
      method: 'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json"
      },
      body: JSON.stringify({
         itemId: id
      })
   });
}

function makeItemsRequest() {
   return fetch('http://localhost:3001/items');
}

function makeCartRequest() {
   return fetch("http://localhost:3001/cart", {
      method: 'GET',
      credentials: "include",
      headers: {
         "content-type": "application/json"
      }
   });
}

export { makeBuyRequest, makeItemsRequest, makeCartRequest, makeLoginRequest }