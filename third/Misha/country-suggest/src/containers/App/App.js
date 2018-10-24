import React, { Component } from 'react';
import CountrySuggest from '../../components/CountrySuggest/CoutrySuggest';

import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <CountrySuggest/>
         </div>
      );
   }
}

export default App;
