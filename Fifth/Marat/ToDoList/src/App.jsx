import React, {Component} from 'react';

import AddTask from './containers/AddTask'
import ToDoList from './components/ToDoList/ToDoList'

class App extends Component{
    render(){
        return(
        <div>
            <AddTask />
            <ToDoList />
        </div>
        )
    }
}

export default App;

