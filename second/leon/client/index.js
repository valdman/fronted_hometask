
const itemContainer = document.getElementById("itemContainer");
const serverLink = "http://localhost:3001";
const loginInput = document.getElementById("loginInput");
const popup = document.getElementsByClassName("popup")[0];

fetchItems()
    .then(cards => {
        addCards(cards, itemContainer);
    })

const logUser = () => {

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

    fetchServer("/login", myInit)
        .then(res => res.json())
        .then(res => {
            showHint(res.status)
            document.cookie = `token=${res.token};expires=${60 * 10}`;
        })
        .catch((err) => conole.log(err));
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

    fetchServer("/users", myInit)
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

    fetchServer("/users", myInit)
        .then(res => {
            console.log(res);
            showHint("Удален");
        })
        .catch((err) => {
            console.log(err);
            showHint("Ошибка");
        });
};