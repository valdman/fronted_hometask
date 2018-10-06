import React from "react";
import ToDoList from "../ToDoList/ToDoList";

const tasks = [
    "Call your mom",
    "Go for a walk with your mom",
    "Have dinner with your mom"
]

const App = () => <ToDoList tasks={tasks}></ToDoList>
export default App;