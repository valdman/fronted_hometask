import React, { Component } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import Cart from "../../components/Cart/Cart";

import fetchItems from "../../fetchUtils/fetchItems";
import buyItem from "../../fetchUtils/buyItem";

import "./ItemContainer.css";

class ItemContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handlePurchase = this.handlePurchase.bind(this);
    }

    componentDidMount() {
        fetchItems()
            .then((res) => {
                console.log(res);
                this.setState({ items: res });
            });
    }


    handlePurchase(id) {
        buyItem(id);
    };

    render() {
        return (
            <div className="ItemContainer">
                <Cart items={this.state.items}></Cart>
                {this.state.items.map(item => <ItemCard
                    id={item.id}
                    desc={item.desc}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                    onclick={this.handlePurchase.bind(this, item.id)}
                ></ItemCard>)}
            </div>

        );
    }
}

export default ItemContainer;
