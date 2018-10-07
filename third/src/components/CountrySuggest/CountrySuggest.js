import React, { Component } from "react";

import CountrySuggestHint from "../CountrySuggestHint/CountrySuggestHint";

import "./CountrySuggest.css";

import Codes from "./CountryCodes";

//console.log(Countries);

class CountrySuggest extends Component {
    constructor(props) {
        super(props);
        this.matched = [];
        this.apiLink = "https://www.countryflags.io/";

        this.style = "flat";
        this.size = "32";
    }

    state = {
        country: null,
    }

    onKeyDown(event) {
        var currentVal = event.target.value;

        if(currentVal === "") {this.matched = []; this.forceUpdate() ;return;}

        var regexp = new RegExp(`${currentVal}`, "i");
        this.matched = Codes.filter((country) => regexp.test(country[1]));

        console.log(currentVal);
        this.forceUpdate();
    }

    getSrc(countryCode) {
        return this.apiLink + "/" + countryCode + "/" + this.style + "/" + this.size + ".png";
    }

    onCountryClick(country) {
        this.setState({country: country})
    }

    render() {
        return <div className="CountrySuggest">
            <input type="text" onChange={this.onKeyDown.bind(this)} className="CountySuggestInput"></input>
            <div className="SuggestionsCountainer">
                {this.matched.map(country => <CountrySuggestHint
                    country={country[1]}
                    key={country[0]}
                    src={this.getSrc(country[0])}
                    onClick={this.onCountryClick.bind(this, country[1])}
                />)}
            </div>
        </div>
    }
}

export default CountrySuggest;