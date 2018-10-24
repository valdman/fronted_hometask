import React, { Component } from 'react';

import './Text.css'

class Text extends Component {
    render() {
        const {text, done} = this.props;

        return <span className="Text" style={{textDecoration: !done ? '' : 'line-through'}}>{text}</span>
    }
}

export default Text; 