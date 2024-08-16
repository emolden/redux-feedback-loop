import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// reducers go here //
const feeling = (state = '', action) => {
    if (action.type === 'FEELING') {
        return action.payload;
    }
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const support = (state = '', action) => {
    if (action.type === 'SUPPORT') {
        return action.payload;
    }
    return state;
}

const comment = (state = '', action) => {
    if (action.type === 'COMMENT') {
        return action.payload;
    }
    return state;
}






const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment
        
    }),
    applyMiddleware(logger),
);

export default store;