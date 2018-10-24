import React from 'react';

import './Product.css'

const Product = ({ id, desc, name, pic, price }) => {

    const BuyItem = (id) => {
        fetch("http://localhost:3001/buy", {
            method: "POST",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({
                itemId: id
            }),
        });
    }

    return (
        <div className="Product">
            <h3 className="itemTitle">{name}</h3>
            <img src={pic} width="150" height="161" alt={id}/>
            <p>Цена: <span className="itemPrice">{price}</span>$</p>
            <p className="description">{desc}</p>
            <button className="addItem" data-id="7" onClick={() => {BuyItem(id)}}>Add in cart</button>
        </div>
    )
}

export default Product;
