import { combineReducers } from "redux";

/* Counter reducer */
const initialCounter = 1;
const INCREMENT = "INCREMENT";

export function increment(by) {
    return {
        type: INCREMENT,
        by
    };
}

function counter(state = initialCounter, action) {
    switch (action.type) {
    case INCREMENT:
        return state + action.by;
    default:
        return state;
    }
}

/* Root reducer */
export default combineReducers({
    counter
});