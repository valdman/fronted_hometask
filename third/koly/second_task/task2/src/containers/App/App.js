import React from "react";

import "./App.css";
import Input from "../../components/Input/Input"
import CountrySuggest from "../../components/Country Suggest/CountrySuggest";

const App = (props) => <div className = "main"><Input func={ChangeHundler}/><CountrySuggest value={ChangeHundler()}/></div>

const ChangeHundler = (value)=>{
    console.log(value);
    return value;
}


export default App;