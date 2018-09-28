const itemContainer = document.getElementById("itemContainer");
const serverLink = "http://localhost:3001";

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

getItems()
    .then(res => {
        res.map((obj) => addCard(obj));
    });

const addCard = (obj) => {
    const markup = `
    <div class="card">
        <div class="cardName">${obj.name}</div>
    </div>
    `;

    itemContainer.innerHTML += markup;
};

