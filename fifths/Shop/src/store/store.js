import {createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {ItemsReducer, CartItemsReducer, infoReducer} from ".//reducers/redusers";

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  
?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
:  compose;

const store = createStore(
    combineReducers({
        items : ItemsReducer,
        cartItems : CartItemsReducer,
        info : infoReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;