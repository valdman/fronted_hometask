import React, { Component } from "react";

import "./CountrySuggestHint.css";


class CountrySuggestHint extends Component {
    render() {
        return <div className={`CountrySuggestHint ${this.props.selected ? "selected" : ""}`} onClick={this.props.onClick}>
            <img alt="" src={this.props.src}></img>
            <div>{`${this.props.country}`}</div>
        </div>
    }
}

export default CountrySuggestHint;