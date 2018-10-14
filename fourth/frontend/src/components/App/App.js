import React, { Component } from 'react';
import './App.css'

import MenuBar from '../MenuBar/MenuBar';
import Item from '../Item/Item';
import ItemWrapper from '../ItemWrapper/ItemWrapper';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         items: [],
         inCart: [],
         showCart: false,
         loginned: false
      }
   }

   componentDidMount() {
      fetch('http://localhost:3001/items')
         .then(res => res.json())
         .then(data => {
            this.setState((prevState) => ({
               ...prevState,
               items: data
            }))
         })
   }

   addInCart = (id) => {
      const item = this.state.items.find(item => item.id === id);

      this.setState((prevState) => {
         return {
            ...prevState,
            inCart: [...prevState.inCart, item]
         }
      })
   }

   showCart = () => {
      this.setState((prevState) => ({
         ...prevState,
         showCart: true
      }))
   }

   showHome = () => {
      this.setState((prevState) => ({
         ...prevState,
         showCart: false
      }))
   }

   login = () => {
      this.setState((prevState) => ({
         ...prevState,
         loginned: true
      }))
   }

   render() {
      const { showCart, items, inCart, loginned } = this.state;
      const products = showCart ? inCart : items;

      return (
         <div className="App">
            <MenuBar showCart={this.showCart}
               showHome={this.showHome}
               cart={inCart.length}
               login={this.login}
               loginned={loginned}
            />
            <div className="container">
               <ItemWrapper>
                  {products.map(product => {
                     const { id, pic, name, desc, price } = product;

                     return <Item id={id}
                        loginned={loginned}
                        pic={pic}
                        name={name}
                        description={desc}
                        price={price}
                        key={id}
                        addInCart={this.addInCart}
                     />
                  }
                  )}
               </ItemWrapper>
            </div>
         </div>
      )
   }
}

export default App;