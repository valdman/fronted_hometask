const itemContainer = document.getElementById("itemContainer");
const serverLink = "http://localhost:3001";
const loginInput = document.getElementById("loginInput");
const popup = document.getElementsByClassName("popup")[0];

const getItems = () => {

    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
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
    <div class="card" onclick="buyItem(${obj.id})" style="background-image: url(${obj.pic}">
        <div class="cardBlock">
            <div class="itemName"><b>${obj.name}</b> <ins>${obj.price}$</ins></div>
            <div class="itemDesc">${obj.desc}</div>
        </div>
    </div>
    `;
    itemContainer.innerHTML += markup;
};

getItems()
    .then(res => {
        res.map((obj) => addCard(obj));
    });

const logUser = () => {
    //console.log(loginInput.value);

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        //credentials: "omit",
        body: JSON.stringify({ login: loginInput.value }),
    };
    console.log("read value: ", loginInput.value)


    fetch(serverLink + "/login", myInit)
        .then(res => res.json())
        .then(res => {
            showHint(res.status)
            document.cookie = `token=${res.token};expires=${60 * 10}`;
        })
        .catch((err) => conole.log(err));
};

const buyItem = (id) => {
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        body: JSON.stringify({
            itemId: id
        }),
    };

    fetch(serverLink + "/buy", myInit)
        .catch(() => console.log("gotcha"))
        .then(res => res)
        .then(res => {
            showHint(res.ok ? "Покуплено" : "Логин?");
        })
        .catch((err) => console.log("err"));
};

const showHint = (str) => {
    popup.style.display = "block";
    popup.innerHTML = str;
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
};

const getUsers = () => {
    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        credentials: "omit",
    };

    fetch(serverLink + "/users", myInit)
        .then(res => res.json())
        .then(res => {
            showHint("Список в консоли");
            console.log(res);
        });

};


const deleteUsers = () => {
    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'DELETE',
        headers: myHeaders,
        //credentials: "include",
    };

    fetch(serverLink + "/users", myInit)
        //.then(res => res.json())
        .then(res => {
            console.log(res);
            showHint("Удален");
        })
        .catch((err) => {
            console.log(err);
            showHint("Ошибка");
        });

};