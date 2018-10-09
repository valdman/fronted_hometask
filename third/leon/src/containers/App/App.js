import React,{Fragment} from "react";
import ToDoList from "../ToDoList/ToDoList";
import CountrySuggest from "../../components/CountrySuggest/CountrySuggest"

const tasks = [
    "aaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "ccccccccccccccc"
]

const App = () => <Fragment>
    <ToDoList tasks={tasks}></ToDoList>
    <CountrySuggest></CountrySuggest>
    </Fragment>;

export default App;