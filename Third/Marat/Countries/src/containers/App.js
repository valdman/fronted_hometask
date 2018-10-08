import React, { Component } from 'react';

import CountryComplete from '../components/CountryComplete/CountryComplete'


import './App.css';

class App extends Component {

  render(){
    return <div className="App"> 
      <span>You can Enter country here!</span>
      <CountryComplete/>
    </div>
  }
}

export default App;
