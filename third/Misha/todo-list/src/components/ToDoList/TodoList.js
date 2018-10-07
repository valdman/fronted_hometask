import React from 'react';

import Task from '../Task/Task';

import './ToDoList.css';

const ToDoList = ({tasks}) => 
   <div className="ToDoList">
   {tasks.map(taskText => 
         <Task text={taskText}
               key={taskText.slice(10)}
         />)}
   </div>

export default ToDoList;