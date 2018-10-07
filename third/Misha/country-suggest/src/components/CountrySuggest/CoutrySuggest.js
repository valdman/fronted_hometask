import React, { Component } from 'react';
import Country from '../Country/Country';

import './CountrySuggest.css';

import countries from '../../countries';

class CountrySuggest extends Component {
   constructor(props) {
      super(props);

      this.state = {
         suggesting: [],
         selected: "",
      }
   }

   onInputChange = () => {
      let value = document.getElementById('country-input').value.trim();

      let suggesting = value !== '' ? countries.reduce((acc, country) => {
         if (country.name.toLowerCase().indexOf(value.toLowerCase()) + 1)
            acc.push(country)

         return acc;
      }, []) : [];

      this.setState((prevState) => ({
         suggesting: suggesting,
         selected: prevState.selected,
      }))
   }

   onCountryClick = (name) => {
      this.setState((prevState) => ({
         suggesting: prevState.suggesting,
         selected: name,
      }))
   }

   render() {
      const { suggesting } = this.state;

      return (
         <div className="country-suggest">
            <input
               type="text"
               id="country-input"
               placeholder="Input country here..."
               onChange={this.onInputChange}
            />
            {suggesting.length ?
               <ul>
                  {suggesting.map((country) =>
                     <Country
                        key={country.name}
                        img={country.img}
                        text={country.name}
                        onClick = {this.onCountryClick}
                     />
                  )}
               </ul> : null
            }
         </div>
      )
   }
}

export default CountrySuggest;
