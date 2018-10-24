import React from 'react';
import {connect} from 'react-redux';
import Task from '../Task/Task';

import './ToDoList.css'

const mapStateToProps = state => ({
    tasks: state.tasks
  });

const ToDoList = ({ tasks }) => {
    return (
        <div className="ToDoList">
            {tasks.map(task => <Task key={Math.random(1000) + task.text.slice(Math.random(3))} text={task.text} done={task.state} id={task.id} />)}
        </div>
    )
}

export default connect(mapStateToProps)(ToDoList);