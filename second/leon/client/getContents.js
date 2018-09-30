const fetchItems = () => {
    const myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        //credentials: "omit",
    };

    return fetchServer("/items", myInit)
        .catch(() => console.log("fetch error"))
        .then(res => res.json())
        .catch(() => console.log("cannot Json()"));
};

const addCards = (cards, container) => {
    cards.map((card) => {
        container.innerHTML += getCardHtml(card);
    });
}

const getCardHtml = (obj) => {
    return `
    <div class="card" onclick="buyItem(${obj.id})" style="background-image: url(${obj.pic}">
        <div class="cardBlock">
            <div class="itemName"><b>${obj.name}</b> <ins>${obj.price}$</ins></div>
            <div class="itemDesc">${obj.desc}</div>
        </div>
    </div>
    `
};