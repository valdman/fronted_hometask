import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';

import './Task.css';

class Task extends Component {
   constructor(props) {
      super(props);

      this.state = {
         done: false
      }
   }

   changeState = () => {
      this.setState((prevState) => ({
         done: !prevState.done
      }))
   }

   render() {
      const { text } = this.props;
      const { done } = this.state;

      return (
         <div className="Task">
            <Checkbox changeState={this.changeState} />
            <Text text={text} done={done} />
         </div>
      )
   }
}

export default Task;