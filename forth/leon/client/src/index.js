import React from 'react';
import ReactDOM from 'react-dom';
import LeonStore from './LeonStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LeonStore />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
