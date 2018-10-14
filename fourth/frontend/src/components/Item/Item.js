import React, { Component } from 'react';

import ItemBtn from '../AddBtn/AddBtn';
import BuyBtn from '../BuyBtn/BuyBtn';

import './Item.css'

class Item extends Component {
   constructor(props) {
      super(props);

      this.state = {
         inCart: false
      }
   }

   render() {
      const { id, pic, name, description, price, addInCart, loginned } = this.props;

      return (
         <div className="item">
            <div className="img-wrapper">
               <img src={pic} alt={id} />
            </div>
            <div className="text-wrapper">
               <p>{name}</p>
               <p>{description}</p>
               <p>Price: {price}$</p>
            </div>

            <div style={{display: loginned ? "block" : "none"}} className="btn-wrapper">
               <BuyBtn text="Buy" id={id} />
               <ItemBtn onClick={addInCart} id={id} />
            </div>
         </div>
      )
   }
}

export default Item;