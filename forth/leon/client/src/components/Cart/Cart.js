import React, {Component} from "react";

import "./Cart.css";

class Cart extends Component {
    render() {
      return (
        <div>Cart</div>
      );
    }
  }
  
  export default Cart;

  const getCart = () => {
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        // body: JSON.stringify({
        //     itemId: id
        // }),
    };

    fetchServer("/buy", myInit)
        .catch(() => console.log("gotcha"))
        .then(res => res)
        .then(res => {
            //showHint(res.ok ? "Покуплено" : "Логин?");

        })
        .catch((err) => console.log("err"));
};

const fetchServer = (path, params) => {
  return fetch("http://localhost:3001" + path, params);
}