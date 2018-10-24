import React, { Component } from 'react';

import countries from '../../Countries'

class CountryComplete extends Component
{
    constructor(props) {
        super(props);
  
        this.state = {
           suggest: [],
        }
     }

    inputChange = (event)=>{
        const newValue = event.target.value;
        let currentValue = document.getElementById('CountryInput').value.trim();
        

    }

    render(){
        const {text} = this.props;
        value = this.state.value
        
        return <div className="country-input">
           
            <input id="CountryInput" 
            type="text" 
            placeholder="start entering.."
            onChange="this.inputChange"
            />
        </div>
    }
}

export default CountryComplete;