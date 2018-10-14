import React, { Component } from 'react';

import './BuyBtn.css';

class BuyBtn extends Component {
   render() {
      const {id} = this.props;

      return (
         <button className="buy-btn" onClick={() => {alert(`item ${id} purchased`)}}>Buy</button>
      )
   }
}

export default BuyBtn;