import React, {Component} from "react";

import "./CountrySuggest.css"

class CountrySuggest extends Component{
    constructor(props){
        super(props)
        this.state = {country : ""}
    }

    render(){
        console.log(this.props);
        return  <ul>
                    <li>1{this.props.value}</li>
                    <li>2 </li>
                    <li>3 </li>
                    <li>4 </li>
                </ul>
    }
}

export default CountrySuggest;