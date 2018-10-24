import React, { Component } from 'react';

import { connect } from 'react-redux'

import Text from '../Text/Text'
import Checkbox from '../Checkbox/Checkbox'

import './Task.css'
import { deleteTask } from '../../actions';

const mapDispatchToProps = dispatch => ({
    makeTaskDone: (id) => dispatch(deleteTask(id))
});

class Task extends Component {
    constructor(props) {
        super(props)
        this.downClick = this.downClick.bind(this);
    }

    downClick() {
        this.props.makeTaskDone(this.props.id)
    }

    render() {
        const {text, done, id } = this.props;

        return (
            <div className="Task">
                <Checkbox onChange={this.downClick} id={id}/>
                <Text text={text} done={done}/>
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(Task);