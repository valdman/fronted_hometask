import React, {Component} from "react";

import { connect } from "react-redux";

import {  linkAction } from "../../actions/actions";

import "./NavButton.css";

const mapDispatchToProps = dispatch => ({
  followLink: link => dispatch(linkAction(link))
});

class NavButton extends Component {
    render() {
      return (
        <div className="NavButton" onClick={this.props.followLink.bind(this.props.link)}>{this.props.children}</div>
      );
    }
  }
  
  export default connect(null, mapDispatchToProps)(NavButton);