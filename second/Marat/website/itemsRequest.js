const itemsRequest = () => {
    fetch("http://localhost:3001/items")
        .then(res => res.json())
        .then(res => ParseItems(res))
        .then(res => appendItems(res));
};

const ParseItems = (res) => {
    let itemsArray = [];
    res.map(({ pic, id, name, price, desc }) => {
        itemsArray.push(
            `<div id="${id}" class="itemBox">
            <h3 class="item_title">${name}</h3>
            <img src="${pic}" width="150" height="161">
            <p>Цена: <span class="item_price">${price}</span>$</p>
            <p class="description">${desc}</p>
            <button class="add_item" data-id="7" onclick="BuyItem(1)">Добавить в корзину</button>
        </div>`
        )
    });
    return itemsArray;
}