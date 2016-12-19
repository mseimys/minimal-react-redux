import { createStore, combineReducers } from "redux";

const initialCounter = 1;
const INCREMENT = "minimal-react-redux/counter/INCREMENT";

/* increment() is counter reducer's "action creator", it can be dispatched */
export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    };
}

/* Counter reducer - processes actions and modifies state */
function counter(state = initialCounter, action) {
    switch (action.type) {
    case INCREMENT:
        return state + action.amount;
    default:
        return state;
    }
}

/* We combine reducers, so actions would flow through all of them */
const rootReducer = combineReducers({
    counter
});

/* Creation of application state store */
export default createStore(rootReducer);
