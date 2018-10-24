import React, {Component} from 'react'
import { connect } from 'react-redux'

import './AddTask.css'

import { addTask } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addTask: (text) => dispatch(addTask(text))
});

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const value = event.target.value;

        this.setState( () => ({
            value: value
        }));
    }

    render() {
        const {value} = this.state;

        return (
            <div className="AddTodo">
                <input type="text" className="Input" placeholder="Enter Todo.." onChange={this.handleChange}/>
                <button className="Button" onClick={() => {value !== '' ? this.props.addTask(value) : null}}>Add Todo</button>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
