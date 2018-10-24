import React, { Component } from 'react';

import Text from '../Text/Text'
import Checkbox from '../Checkbox/Checkbox'

import './Task.css'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false
        }
    }

    DownClick = () => {
        this.setState(prevState => ({
            done: !prevState.done
        }))
    }

    render() {
        const {text} = this.props;
        const {done} = this.state;

        return (
            <div className="Task">
                <Checkbox onChange={this.DownClick} />
                <Text text={text} done={done}/>
            </div>
        )
    }
}


export default Task;