import React, { Component } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["d"]
        };
        //this.items = [];
        fetchItems()
        .then((res) => {
            console.log(res);
            //this.items = res;
            this.setState({items: res});
            });
    }


    render() {
        return (

            // <ItemCard>fffff</ItemCard>
            <div>
            {this.state.items[0]}1
            {this.items.length}2
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

const fetchServer = (path, params) => {
    return fetch("http://localhost:3001" + path, params);
}