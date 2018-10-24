import React,{Component,Fragment} from "react";
import {connect} from "react-redux";

import {LogIn} from "../../controller/actions";
import "./Login.css";
import {login} from "../../scripts/main";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {value : ""}
    };
        onClick = (event) => {
            login(this.state.value)
            .then(x => this.props.LogIn())
        }
        onChange = (event) => {
            let value = event.target.value;
            this.setState(prevState => ({value: value}))
        };
    
    render(){
       return this.props.IsLogined ? 
       <div id="loginMessage">{"Logined in"}</div> 
       : 
       <Fragment>
           <input onChange={this.onChange}/>
           <div id="SignUpIn" onClick={this.onClick}>Sign Up/In</div>
        </Fragment>
    }
};

const mapStateToProps = (store) => ({
    IsLogined : store.info.isLogined
});

const mapDispatchToProps = (dispatch) => ({
    LogIn : (...args) => dispatch(LogIn(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);