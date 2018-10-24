import React, { Component, Fragment } from 'react';

import './RightPlace.css';

import Header from '../Header/Header'
import Goods from '../Goods/Goods'

class RightPlace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      products: [],
      HomwOrCart: true
    }
  }

  CartClicked = () => {
    this.getCart();
    this.setState(prevState => {
      this.state.HomwOrCart = !prevState.HomwOrCart;
      return prevState;
    })

  }

  componentDidMount() {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(res => {
        this.setState(() => ({
          products: res
        }))
      });
  }

  getCart = () => {
    return fetch("http://localhost:3001/cart", {
      method: "GET",
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    })
      .then(res => res.json())
      .then(res => alert(`Your cart is ${res}`))
  }

  showCart = () => {

  }

  render() {
    return (

      <Fragment>

        <Header
          CartClicked={this.CartClicked}
          HomeOrCart={this.state.HomeOrCart} />
        <Goods products={this.state.products} />

      </Fragment>
    );
  }
}

export default RightPlace;
