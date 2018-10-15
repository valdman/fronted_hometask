import React, {Component} from "react";

import "./NavButton.css";

class NavButton extends Component {
    render() {
      return (
        <div className="NavButton">{this.props.children}</div>
      );
    }
  }
  
  export default NavButton;