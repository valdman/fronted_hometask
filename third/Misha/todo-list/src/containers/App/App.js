import React from 'react';

import ToDoList from '../../components/ToDoList/TodoList';

import './App.css';

const tasks = [
   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quae.",
   "Lorem ipsum dolor sit amet.",
   "Lorem ipsum dolor sit amet consectetur."
]

const App = () =>
   <div className="App">
      <ToDoList tasks={tasks}/>
   </div>

export default App;