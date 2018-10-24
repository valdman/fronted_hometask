import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

import {TaskReducer} from  "./reducers/testReducer";


const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  
?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
:  compose;

const store = createStore(
    combineReducers({
        tasks : TaskReducer}),
    composeEnhancers(applyMiddleware(thunk))
);


export default store;