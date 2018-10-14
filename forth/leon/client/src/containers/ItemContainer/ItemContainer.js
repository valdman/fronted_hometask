import React, { Component } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

import "./ItemContainer.css";

class ItemContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        fetchItems()
            .then((res) => {
                console.log(res);
                this.setState({ items: res });
            });
    }

    render() {
        return (
            <div className="ItemContainer">
                {this.state.items.map(item => <ItemCard
                    id={item.id}
                    desc={item.desc}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                    onclick={buyItem.bind(this, item.id)}
                ></ItemCard>)}
            </div>

        );
    }
}

export default ItemContainer;

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

    fetchServer("/buy", myInit)
        .catch(() => console.log("gotcha"))
        .then(res => res)
        .then(res => {
            //showHint(res.ok ? "Покуплено" : "Логин?");
            console.log(res.body);
        })
        .catch((err) => console.log("err"));
};

const fetchServer = (path, params) => {
    return fetch("http://localhost:3001" + path, params);
}