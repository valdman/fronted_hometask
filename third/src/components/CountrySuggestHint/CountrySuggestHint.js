import React, { Component } from "react";

import "./CountrySuggestHint.css";


class CountrySuggestHint extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.country = props.country;
        this.countryCode = props.countryCode;
    }

    render() {
        //console.log("I am rendering " + this.props.country);
        return <div className="CountrySuggestHint" onClick={this.props.onClick}>
            <img alt="" src={this.src}></img>
            <div>{`${this.country}`} </div>
        </div>
    }
}

export default CountrySuggestHint;