itemsRequest();

function appendItems(itemsArray) {
    itemsArray.map(item => {
        document.getElementById("goods").innerHTML += item;
    })
}

function logUser() {
    const login = document.getElementById("loginInput").value;
    fetch("http://localhost:3001/login", {
        method: "POST",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            "login": login
        }),
    })
}