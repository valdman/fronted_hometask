import React, { Component } from 'react';
import {connect} from 'react-redux';

import {logUser} from '../../controller';

import './Login.css';
import { loginAction } from '../../actions';

const mapStateToProps = state =>({
    session: state.session
})

const mapDispatchToProps = dispatch =>({
    login: (input) => dispatch(loginAction(input))
})

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            placeholder: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState( () => ({
            inputText: value
        }));
    }

    handleClick = () => {
        const value = this.state.inputText;

        value === '' ? alert('Enter your login first') : 
            logUser(value)
                .then(res => alert(`You've been ${res.status}`))
                .then(this.props.login(value));

        this.props.onSomethingChanged();
    }

    

    render() {
        return (
            <div className="Login">
                <input type="text" className="Input" placeholder="Login here.." onChange={this.handleChange} />
                <button className="Button" onClick={this.handleClick}>Login/Sign up</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);