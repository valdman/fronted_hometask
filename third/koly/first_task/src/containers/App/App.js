import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList"

import "./App.css";

const tasks = [
    "first",
    "second",
    "third"
]

const App = () => <ToDoList tasks = {tasks}/>;
 

export default App;