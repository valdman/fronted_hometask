import React, { Component } from 'react';
import {connect} from "react-redux";

import {AddItems} from "../../controller/actions";
import {GetItems,BuyItem_,GetUsers,login} from "../../scripts/main";
import Home from "../../containers/Home/Home"
import Cart from "../../containers/Cart/Cart"

const mapDispatchToProps = (dispath) => ({
  AddItems : (...args) => dispath(AddItems(...args))
})

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      window: "Home",
      items: [],
      IsLogined: false,
      itemsInCart: []
    } 
  };

  componentDidMount(){
    GetItems()
    .then(items => {
      this.props.AddItems(items);
    })
  };

  logIn = (value) => {
    login(value)
    .then(x => this.setState(prevState => ({
      ...prevState, IsLogined : x
    })));
  }

  ChangeWindow = (window) =>{
    this.setState(prevState => ({
      window: window
    }))
};

  BuyItem = (id) => {
    if (this.state.IsLogined){
      let index = this.state.itemsInCart.findIndex(item => item.id == id)
      if (index !== -1) this.setState(prevState => {

        prevState.itemsInCart[index].count++;
        return prevState;

      }); else {
        let item = this.state.items.find(item => item.id == id);
  
        this.setState(prevState => {

          prevState.itemsInCart.push({
          id : id,
          name: item.name,
          desc: item.desc,
          count: 1,
          price: item.price})
  
          return prevState; 
        })

      }
    }
  };

  BuyAllItemsInCart = (id) =>{
    BuyItem_(id)
    //куда-то вывести результат вполнения
  }

  render(){
    return this.state.window === "Home" ? 
    <Home 
      ChangeWindow = {this.ChangeWindow}
     />
      :
    <Cart
        ChangeWindow = {this.ChangeWindow}
        BuyAllItemsInCart={this.BuyAllItemsInCart}
       />
  }
}

export default connect(null, mapDispatchToProps)(App);
