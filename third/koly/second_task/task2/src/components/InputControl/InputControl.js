import React, {Component} from "react";


import Input from "../Input/Input"
import CountrySuggest from "../Country Suggest/CountrySuggest";
import "./InputControl.css";

class ImputControl extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
    }
    ChangeHundler = (value)=>{
        this.setState(prevState => ({value: value}))
    }
    ClickHandler(country){
        //this.setState(prevState => ({value: country}))   
    }

    render(){
        return <div className = "main"><Input value={this.state.value} func={this.ChangeHundler}/>
        <CountrySuggest value={this.state.value} func={() => this.ClickHandler()}/></div>
    }
}

export default ImputControl;