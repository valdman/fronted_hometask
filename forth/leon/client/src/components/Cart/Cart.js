import React, { Component, Fragment } from "react";
import parseCart from "../../fetchUtils/parseCart";
import { connect } from "react-redux";

import "./Cart.css";

const mapStateToProps = state => ({
  items: state.items,
  itemsInCart: state.itemsInCart,
});

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      shown: !this.state.shown,
    })
  }

  render() {
    const allItems = this.props.items;
    const parsedItemsInCart = parseCart(this.props.itemsInCart);
    const propriateItems = allItems.filter(item => item.id in parsedItemsInCart);
    const smallItems = propriateItems.map(item => ({ name: item.name, price: item.price, amount: parsedItemsInCart[item.id] }));

    return (
      <Fragment>
        <div
          onClick={this.handleClick}
          className="Cart">Cart</div>
        <div className="CartWrapper" hidden={!this.state.shown}>
          {smallItems.map(item => <div key={"item" + item.id}>{item.name} x{item.amount} {item.price} </div>)}
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, null)(Cart);
