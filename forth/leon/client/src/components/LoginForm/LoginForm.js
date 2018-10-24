import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction, registerAction } from "../../actions/actions";

import "./LoginForm.css";

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (input) => dispatch(loginAction(input)),
  register: (input) => dispatch(registerAction(input)),
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const buttonText = this.props.session === "unauthorized" ? "Register" : "Login of change user";
    const buttonClick = this.props.session === "unauthorized" ? this.props.register.bind(this, this.state.value) : this.props.login.bind(this, this.state.value);
    return (
      <div>
        <label> Login:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} required></input>
        </label >
        <button type="button" onClick={buttonClick}>{buttonText}</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

