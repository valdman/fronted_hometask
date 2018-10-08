import React, { Component } from 'react';

import './Text.css'

class Text extends Component {
    render() {
        const {text} = this.props;
        const {done} = this.props;

        return <div className="Text">
            <span style={{textDecoration: done ? 'line-through' : ''}}>{text}</span>
        </div>
    }
}

export default Text; 