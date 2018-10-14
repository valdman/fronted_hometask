import React, {Component} from "react";

class ItemCard extends Component {
    render() {
      return (
        <div>Card{this.props.children}</div>
      );
    }
  }
  
  export default ItemCard;