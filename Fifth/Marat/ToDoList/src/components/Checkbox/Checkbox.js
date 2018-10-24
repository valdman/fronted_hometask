import React, { Component } from 'react';

import './Checkbox.css'

class Checkbox extends Component {
    render() {
        const { onChange } = this.props;

        return (
            <div>
                <input onChange={onChange} type="checkbox" className="Checkbox" />
            </div>
        )
    }
}
export default Checkbox;