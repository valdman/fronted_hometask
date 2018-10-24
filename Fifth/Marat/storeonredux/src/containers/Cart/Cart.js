import React from 'react';

const Cart = ({ products }) =>
    products.map(product =>{
        const { id, desc, name, pic, price} = product;

        return (
            <div id="id" className="Product">
                <h3 className="itemTitle">{name}</h3>
                <img src={pic} width="150" height="161" alt={id}/>
                <p>Цена: <span className="itemPrice">{price}</span>$</p>
                <p className="description">{desc}</p>
            </div>
        )
        });

export default Cart;
