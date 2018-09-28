const itemContainer = document.getElementById("itemContainer");
const serverLink = "http://localhost:3001";
const loginInput = document.getElementById("loginInput");
var token = "";

const getItems = () => {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        //credentials: "omit",
        //mode: "cors",
    };

    return fetch(serverLink + "/items", myInit)
        .catch(() => console.log("fetch error"))
        .then(res => res.json())
        .catch(() => console.log("cannot Json()"));
    //.then(res => console.log(res));
};
const addCard = (obj) => {
    const markup = `
    <div class="card">
        <div class="cardName" onclick="buyItem(${obj.id})">${obj.name}</div>
    </div>
    `;
    itemContainer.innerHTML += markup;
};

getItems()
    .then(res => {
        res.map((obj) => addCard(obj));
    });

const logUser = () => {
    console.log(loginInput.value);

    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        //credentials: "omit",
        //mode: "cors",
        body: {
            login: loginInput.value,
        },
    };

    fetch(serverLink + "/login", myInit)
        .then(res => res.json())
        .then(res => {
            console.log(res.status);
            //token = res.token;
            document.cookie = `token=${res.token};expires=${60*10}`;
        })
        .catch((err) => conole.log(err));
};

const buyItem = (id) => {
    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        body: {
            itemId: id,
        },
    };

    fetch(serverLink + "/buy", myInit)
        .then(res => res)
        .then(res => console.log(res))
        .catch((err) => console.log(err));
};