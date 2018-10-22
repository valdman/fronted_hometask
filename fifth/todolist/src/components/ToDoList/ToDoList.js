import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/Task';

import './ToDoList.css'

const mapStateToProps = state => {
   return {
      tasks: state.tasks
   }
}

class ToDoList extends Component {
   render() {
      const { tasks } = this.props;
      return (
         <div className="to-do-list">
            {tasks.map(({ id, text, done }) => {
               return <Task id={id} text={text} done={done} key={id} />
            }
            )}
         </div>
      )
   }
}

export default connect(mapStateToProps)(ToDoList);