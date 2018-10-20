import React, { Component } from "react";
import loginUser from "../../fetchUtils/loginUser";
import { connect } from "react-redux";

import { login, register } from "../../actions/actions";

import "./LoginForm.css";

const mapDispatchToProps = dispatch => ({
  login: (e) => {
    console.log(this);
    e.preventDefault();
    dispatch(login(this.state.value))
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    loginUser(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form
        //onSubmit={this.handleSubmit}
        onSubmit={this.props.login}
        action="" >
        <label>Login:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);

