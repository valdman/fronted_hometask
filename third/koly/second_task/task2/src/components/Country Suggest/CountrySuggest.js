import React, {Component} from "react";

import "./CountrySuggest.css"
import data from "../../source/data";

class CountrySuggest extends Component{
    constructor(props){
        super(props)
        this.state = {country : ""}
        
    }
    onClick(e){
        let country = e.target.innerText; 
        this.setState(prevState => ({country: country}));
        this.props.func(country);
    }

    render(){
        
        return  <ul>{this.findSuggest(this.props.value).map(
            el => <li key={el.name.slice(0,10)} onClick={(e) => this.onClick(e)}>
            <img src={el.src} alt={el.name}/>{el.name}
            </li>)}
            </ul>;
    }

    findSuggest = (value) => {
        if (value === undefined) return [];
        let response = [];
        data.forEach(el => {
            let index = el.name.toLowerCase().indexOf(value.toLowerCase(),0);
            if (index === 0) response.push(el);
        })
        return response;
    }
}

export default CountrySuggest;