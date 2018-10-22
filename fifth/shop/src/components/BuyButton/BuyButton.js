import React, { Component } from 'react';

import './BuyButton.css';

class BuyBtn extends Component {
   render() {
      const {id, buy} = this.props;

      return (
         <button className="buy-btn" onClick={() => {buy(id)}}>Buy</button>
      )
   }
}

export default BuyBtn;