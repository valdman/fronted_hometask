import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';

const tasks = [
    "Call mom",
    "Buy water",
    "Come home at 10"
]

const App = () => <ToDoList tasks={tasks}/>
export default App;