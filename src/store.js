import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// reducers go here //





const store = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
);

export default store;