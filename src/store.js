import { createStore, combineReducers } from "redux";

/* Counter reducer */
const initialCounter = 1;
const INCREMENT = "my-module/INCREMENT";

export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    };
}

function counter(state = initialCounter, action) {
    switch (action.type) {
    case INCREMENT:
        return state + action.amount;
    default:
        return state;
    }
}

/* Store */
const rootReducer = combineReducers({
    counter: counter
});

export default createStore(rootReducer);
