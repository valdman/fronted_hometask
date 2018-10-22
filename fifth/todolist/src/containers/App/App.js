import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {loadTasks} from '../../js/actions/loadTasks'

import ToDoList from '../../components/ToDoList/ToDoList';

const tasks = [
  "lorem ipsum dolor",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur"
]

const mapDispatchToProps = dispatch => {
  return {
    loadTasks: tasks => dispatch(loadTasks(tasks))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.loadTasks(tasks);
  }

  render() {
    return (
      <div className="app">
        <ToDoList />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
