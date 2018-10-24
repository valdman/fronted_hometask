import React, { Component } from 'react';
import './ItemWrapper.css'

class ItemWrapper extends Component {
   render() {
      return (
         <div className="wrapper">
            {this.props.children}
         </div>
      )
   }
}

export default ItemWrapper;