const INCREMENT = "INCREMENT";

const initialState = {
    counter: 1
};

export function increment(by) {
    return {
        type: INCREMENT,
        by
    };
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
    case INCREMENT:
        return Object.assign({}, state, {
            counter: state.counter + action.by
        });
    default:
        return state;
    }
}
