import React, { Component } from 'react';

import BuyBtn from '../BuyButton/BuyButton';

import './Item.css'

class Item extends Component {
   constructor(props) {
      super(props);

      this.state = {
         inCart: false
      }
   }

   render() {
      const { id, pic, name, description, price, buy, showButton } = this.props;

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

            <div style={{display: showButton ? "block" : "none"}} className="btn-wrapper">
               <BuyBtn text="Buy" id={id} buy={buy}/>
            </div>
         </div>
      )
   }
}

export default Item;