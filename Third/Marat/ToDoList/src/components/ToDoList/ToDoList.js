import React from 'react';

import Task from '../Task/Task';

import './ToDoList.css'
const ToDoList=({tasks}) => <div className="ToDoList">

    {tasks.map(task => <Task 
    key={task.slice(0,5)}
    text={task}/>
    )}
    
</div>

export default ToDoList;