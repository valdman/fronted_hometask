import React, { Component } from 'react';
import './App.css'

import MenuBar from '../MenuBar/MenuBar';
import Item from '../Item/Item';
import ItemWrapper from '../ItemWrapper/ItemWrapper';

import { loadItems } from '../../redux/actions/loadItems';
import { connect } from 'react-redux';

import { makeItemsRequest } from '../../requests';
import generateGuid from '../../guid';

const mapDispatchToProps = dispatch => {
   return {
      loadItems: (items) => dispatch(loadItems(items)),
   }
}

const mapStateToProps = (state) => {
   return {
      loginned: state.loginned,
      page: state.page,
      items: state.items,
      cart: state.cart
   }
}

class App extends Component {
   componentDidMount() {
      makeItemsRequest()
         .then(res => res.json())
         .then(data => {
            this.props.loadItems(data)
         })
         .catch(err => null);
   }

   render() {
      const getProducts = (page) => {
         switch (page) {
            case "cart":
               return cart.reduce((acc, id) => {
                  return [...acc, items.find(item => item.id === id)];
               }, []);
            default:
               return items;
         }
      }

      const { items, cart, loginned, page } = this.props;
      const products = getProducts(page);

      return (
         <div className="App">
            <MenuBar
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
                        showButton={loginned && page !== "cart"}
                     />
                  }
                  )}
               </ItemWrapper>
            </div>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);