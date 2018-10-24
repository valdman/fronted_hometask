import React, { Component } from "react";

import "./ItemCard.css";

class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard" onClick={this.props.oncklick}>
        <span>{this.props.name}</span>
        <span>{this.props.desc}</span>
        <span>{this.props.price}</span>
      </div>
    );
  }
}


export default ItemCard;