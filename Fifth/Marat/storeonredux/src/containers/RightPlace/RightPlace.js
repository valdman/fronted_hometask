import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from '../Header/Header'
import Goods from '../Goods/Goods'
import Cart from '../Cart/Cart'

import { getCart, getItems } from "../../controller"

import './RightPlace.css';
import { importGoods, importCart } from '../../actions';

const mapStateToProps = (state) => ({
  goods: state.goods,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  loadGoods: (items) => dispatch(importGoods(items)),
  loadCart: (cartItems) => dispatch(importCart(cartItems))
})

class RightPlace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPageHome: true
    }
  }

  cartClicked = () => {
    this.setState(prevState => ({
      isPageHome: !prevState.isPageHome
    }))
  }

  refreshCart = () => {
    getCart()
      .then(res => {
        this.props.loadCart(res)
      });
  }

  componentDidMount() {
    this.refreshCart();
    getItems()
      .then(res => {
        this.props.loadGoods(res)
      });
  }
  
  render() {
    const { cart, goods } = this.props;
    const { isPageHome } = this.state;

    const getProducts = () => {
      return cart.reduce((acc, id) => {
        return [...acc, goods.find(item => item.id === id)];
     }, []);
    }
   
    return <>
      <Header
        onCartClicked={this.cartClicked}
        onSomethingChanged={this.refreshCart}
      />
      {isPageHome
        ? <Goods products={goods} onBuySomething={this.refreshCart} />
        : <Cart products={getProducts()} />}
    </>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPlace);
