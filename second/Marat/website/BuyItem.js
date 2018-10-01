function BuyItem(idOfItem) {
    fetch("http://localhost:3001/login", {
        method: "POST",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            itemId: idOfItem
        }),
    });
}

function getCart(){
    return fetch("http://localhost:3001/cart", {
        method: "GET",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
    })
}