import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import reducer from './redusers/reducer';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  
?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
:  compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;