import React, { Component, Fragment } from "react";
import getCart from "../../fetchUtils/getCart";
import parseCart from "../../fetchUtils/parseCart";

import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
      inCart: {}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    getCart().then((res) => {
      this.setState({ inCart: parseCart(res) })
    })
  }

  render() {
    const allItems = this.props.items;
    const propriateItems = allItems.filter(item => item.id in this.state.inCart);
    const smallItems = propriateItems.map(item => ({ name: item.name, price: item.price, amount: this.state.inCart[item.id] }));

    return (
      <Fragment>
        <div onClick={this.handleClick} className="Cart">Cart</div>
        <div className="CartWrapper" >
          {smallItems.map(item => <div key={"item" + item.id}>{item.name} x{item.amount} {item.price} </div>)}
        </div>
      </Fragment>
    );
  }
}

export default Cart;
