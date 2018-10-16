import React, { Component } from 'react';
import './App.css'

import MenuBar from '../MenuBar/MenuBar';
import Item from '../Item/Item';
import ItemWrapper from '../ItemWrapper/ItemWrapper';

import { makeBuyRequest, makeItemsRequest, makeCartRequest } from '../../requests';
import generateGuid from '../../guid';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         items: [],
         cart: [],
         page: "home",
         loginned: false
      }
   }

   componentDidMount() {
      this.getAllItems();
   }

   buy = (id) => {
      makeBuyRequest(id)
         .then(res => res.status)
         .then(status => {
            if (status === 200)
               alert(`item ${id} purchased`)
         })
   }

   getAllItems = () => {
      makeItemsRequest()
         .then(res => res.json())
         .then(data => {
            this.setState((prevState) => ({
               items: data
            }))
         })
   }

   getCart = () => {
      makeCartRequest()
         .then(res => res.json())
         .then(data =>
            data.reduce((acc, id) => {
               return [...acc, this.state.items.find(item => item.id === id)];
            }, [])
         )
         .then(items => {
            this.setState(() => ({
               cart: items
            }))
         })
   }

   changePage = (page) => {
      switch (page) {
         case "cart":
            this.getCart();
            break;
         default:
            this.getAllItems();
            break;
      }

      this.setState(() => ({
         page: page
      }))
   }

   login = () => {
      this.setState(() => ({
         loginned: true
      }))
   }

   render() {
      const getProducts = (page) => {
         switch (page) {
            case "cart":
               return cart;
            default:
               return items;
         }
      }

      const { page, items, cart, loginned } = this.state;
      const products = getProducts(page);

      return (
         <div className="App">
            <MenuBar
               login={this.login}
               changePage={this.changePage}
               showCart={loginned}
            />
            <div className="container">
               <ItemWrapper>
                  {products.map(product => {
                     const { id, pic, name, desc, price } = product;

                     return <Item
                        key={generateGuid()}
                        id={id}
                        pic={pic}
                        name={name}
                        description={desc}
                        price={price}
                        showButton={loginned}
                        buy={this.buy}
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