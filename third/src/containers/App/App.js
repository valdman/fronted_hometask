import React,{Fragment} from "react";
import ToDoList from "../ToDoList/ToDoList";
import CountrySuggest from "../../components/CountrySuggest/CountrySuggest"

const tasks = [
    "Call your mom",
    "Go for a walk with your mom",
    "Have dinner with your mom"
]

const App = () => <Fragment>
    <ToDoList tasks={tasks}></ToDoList>
    <CountrySuggest></CountrySuggest>
    </Fragment>;

export default App;